const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

/**
 * 检查目录是否有索引文档（与目录名相同的 md/mdx 文件）
 */
function hasIndexDocument(dirPath, dirName) {
  const mdFile = path.join(dirPath, `${dirName}.md`);
  const mdxFile = path.join(dirPath, `${dirName}.mdx`);
  return fs.existsSync(mdFile) || fs.existsSync(mdxFile);
}

/**
 * 获取索引文档的路径
 * @param {string} dirPath - 目录路径
 * @param {string} dirName - 目录名
 * @returns {string|null} 索引文档的完整路径，如果不存在则返回 null
 */
function getIndexDocumentPath(dirPath, dirName) {
  const mdFile = path.join(dirPath, `${dirName}.md`);
  const mdxFile = path.join(dirPath, `${dirName}.mdx`);

  if (fs.existsSync(mdFile)) {
    return mdFile;
  }
  if (fs.existsSync(mdxFile)) {
    return mdxFile;
  }
  return null;
}

/**
 * 从索引文档中提取 title，如果没有则返回默认值
 * @param {string} dirPath - 目录路径
 * @param {string} dirName - 目录名
 * @param {string} defaultValue - 默认值，默认为 "Introduction"
 * @returns {string} 文档的 title 或默认值
 */
function getIndexDocumentTitle(
  dirPath,
  dirName,
  defaultValue = "Introduction"
) {
  const docPath = getIndexDocumentPath(dirPath, dirName);
  if (!docPath) {
    return defaultValue;
  }

  try {
    const fileContent = fs.readFileSync(docPath, "utf8");
    const { data } = matter(fileContent);

    // 如果 frontmatter 中有 title，使用它
    if (data.title && typeof data.title === "string") {
      return data.title;
    }
  } catch (error) {
    // 如果读取或解析失败，返回默认值
    console.warn(
      `Warning: Failed to parse frontmatter from ${docPath}:`,
      error.message
    );
  }

  return defaultValue;
}

/**
 * 获取目录的索引文档 ID
 * 索引文档的 ID 应该是完整路径，包括文件名
 * 例如：devices/general-docs/general-docs
 */
function getIndexDocumentId(relativePath) {
  // 相对路径已经包含了目录名，我们需要添加文件名（与目录名相同）
  const pathParts = relativePath.split(/[/\\]/);
  const dirName = pathParts[pathParts.length - 1];
  // 返回完整路径，包括文件名
  return `${relativePath}/${dirName}`.replace(/\\/g, "/");
}

/**
 * 检查文件是否是索引文档（与目录名相同）
 */
function isIndexDocument(fileName, dirName) {
  const baseName = path.basename(fileName, path.extname(fileName));
  return baseName === dirName;
}

/**
 * 判断是否是一级目录（直接位于根目录下的目录）
 * @param {string} relativePath - 相对于 docs 的路径
 * @param {string} rootDirName - 根目录名（如 'devices' 或 'platform'）
 * @returns {boolean}
 */
function isFirstLevelCategory(relativePath, rootDirName) {
  // 如果 relativePath 是 rootDirName/xxx 格式，说明 xxx 是一级目录
  const pathParts = relativePath.split(/[/\\]/);
  return pathParts.length === 2 && pathParts[0] === rootDirName;
}

/**
 * 目录名称映射配置
 * 键：实际目录名（相对于 docs 的完整路径，如 'devices/general-docs'）
 * 值：在侧边栏中显示的名称
 *
 * 示例：
 * {
 *   'devices/general-docs': '通用文档',
 *   'devices/lorawan-application': 'LoRaWAN 应用',
 *   'platform/snapemu': 'SnapEmu 平台'
 * }
 */
const DIR_NAME_MAP = {};

/**
 * 获取目录的显示名称
 * @param {string} relativePath - 相对于 docs 的路径
 * @param {string} dirName - 实际目录名
 * @returns {string} 显示名称
 */
function getDisplayName(relativePath, dirName) {
  // 优先使用完整路径的映射
  if (DIR_NAME_MAP[relativePath]) {
    return DIR_NAME_MAP[relativePath];
  }
  // 如果没有映射，使用目录名
  return dirName;
}

/**
 * 递归构建侧边栏结构，为每个有索引文档的目录添加 Introduction
 * @param {string} dirPath - 目录的完整路径
 * @param {string} relativePath - 相对于 docs 的路径
 * @param {string} dirName - 目录名
 * @param {string} rootDirName - 根目录名（用于判断是否是一级目录）
 * @returns {Array} 侧边栏配置项
 */
function buildSidebarItems(dirPath, relativePath, dirName, rootDirName) {
  const items = [];

  if (!fs.existsSync(dirPath)) {
    return items;
  }

  const entries = fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter((entry) => {
      // 跳过 img 目录、node_modules 和隐藏文件
      return (
        entry.name !== "img" &&
        entry.name !== "node_modules" &&
        !entry.name.startsWith(".")
      );
    })
    .sort((a, b) => {
      // 目录排在前面
      if (a.isDirectory() !== b.isDirectory()) {
        return a.isDirectory() ? -1 : 1;
      }
      return a.name.localeCompare(b.name);
    });

  // 如果当前目录有索引文档，先添加 Introduction
  if (hasIndexDocument(dirPath, dirName)) {
    const docId = getIndexDocumentId(relativePath);
    // 从索引文档的 frontmatter 中获取 title，如果没有则使用 "Introduction"
    const label = getIndexDocumentTitle(dirPath, dirName, "Introduction");
    items.push({
      type: "doc",
      id: docId,
      label: label,
    });
  }

  // 处理子目录和文件
  const subCategories = [];
  const docFiles = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const fullPath = path.join(dirPath, entry.name);
      const newRelativePath = relativePath
        ? `${relativePath}/${entry.name}`
        : entry.name;

      // 递归处理子目录
      const subItems = buildSidebarItems(
        fullPath,
        newRelativePath,
        entry.name,
        rootDirName
      );

      if (subItems.length > 0) {
        // 使用映射获取显示名称，如果没有映射则使用实际目录名
        const displayName = getDisplayName(newRelativePath, entry.name);

        const category = {
          type: "category",
          label: displayName,
          items: subItems,
        };

        // 如果是一级目录，设置为默认展开
        if (isFirstLevelCategory(newRelativePath, rootDirName)) {
          category.collapsed = false;
        }

        subCategories.push(category);
      }
    } else if (entry.isFile() && /\.(md|mdx)$/i.test(entry.name)) {
      // 跳过索引文档（已经作为 Introduction 添加了）
      if (!isIndexDocument(entry.name, dirName)) {
        const fileBaseName = path.basename(
          entry.name,
          path.extname(entry.name)
        );
        const docId = relativePath
          ? `${relativePath}/${fileBaseName}`.replace(/\\/g, "/")
          : fileBaseName;
        docFiles.push({
          type: "doc",
          id: docId,
        });
      }
    }
  }

  // 先添加文档文件，再添加子目录
  items.push(...docFiles);
  items.push(...subCategories);

  return items;
}

/**
 * 为指定的目录生成侧边栏配置
 * 在每个有索引文档的 category 开头添加 Introduction
 * @param {string} docsDir - docs 目录路径
 * @param {string} dirName - 目录名（如 'devices' 或 'platform'）
 * @returns {Array} 侧边栏配置项
 */
function generateSidebarWithIntroductions(docsDir, dirName) {
  const targetDir = path.join(docsDir, dirName);

  if (!fs.existsSync(targetDir)) {
    return [{ type: "autogenerated", dirName }];
  }

  // 构建侧边栏结构，传递 rootDirName 用于判断一级目录
  const items = buildSidebarItems(targetDir, dirName, dirName, dirName);

  return items;
}

module.exports = { generateSidebarWithIntroductions };
