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
const DIR_NAME_MAP = {
  
  'devices/general-docs': 'General Docs',
  'devices/lorawan-application': 'LoRaWAN',
  'devices/lorawan-application/lora-gateway': 'LoRaWAN Gateway',
  'devices/lorawan-application/lora-gateway/ht-1303': 'HT-1303',
  'devices/lorawan-application/lora-gateway/ht-m00': 'HT-M00',
  'devices/lorawan-application/lora-gateway/ht-m00s': 'HT-M00S',
  'devices/lorawan-application/lora-gateway/ht-m01': 'HT-M01',
  'devices/lorawan-application/lora-gateway/ht-m01s_v2': 'HT-M01S V2',
  'devices/lorawan-application/lora-gateway/ht-m02': 'HT-M02 V2',
  'devices/lorawan-application/lora-gateway/ht-m2802': 'HT-M2802',
  'devices/lorawan-application/lora-gateway/ht-m7603': 'HT-M7603',
  'devices/lorawan-application/lora-node-devices': 'LoRaWAN Node Device',
  'devices/lorawan-application/lora-node-devices/hri-485x-rs-485': 'HRI-485X Wireless Converter',
  'devices/lorawan-application/lora-node-devices/hri-485x-rs-485/hri-4851': 'HRI-4851',
  'devices/lorawan-application/lora-node-devices/hri-485x-rs-485/hri-4851-lorawan': 'HRI-4851-L',
  'devices/lorawan-application/lora-node-devices/hri-485x-rs-485/hri-4852': 'HRI-4852',
  'devices/lorawan-application/lora-node-devices/hri-485x-rs-485/hri-4853': 'HRI-4853',
  'devices/lorawan-application/lora-node-devices/hri-3621': 'HRI-3621',
  'devices/lorawan-application/lora-node-devices/hri-3622': 'HRI-3622',
  'devices/lorawan-application/lora-node-devices/hri-3631': 'HRI-3631',
  'devices/lorawan-application/lora-node-devices/hri-3632': 'HRI-3632',
  'devices/lorawan-application/lora-node-devices/hri-3633': 'HRI-3633',
  'devices/lorawan-application/lora-node-devices/hri-3601': 'HRI-3601',
  'devices/lorawan-application/lora-node-devices/hru-1000': 'HRU-1000',
  'devices/lorawan-application/lora-node-devices/junction-box': 'Junction Box',
  'devices/open-source-hardware': 'Open-Source Hardware',
  'devices/open-source-hardware/cubecell-series': 'CubeCell ASR650X Series',
  'devices/open-source-hardware/cubecell-series/htcc_ab01': 'HTCC-AB01',
  'devices/open-source-hardware/cubecell-series/htcc_ab02': 'HTCC-AB02',
  'devices/open-source-hardware/cubecell-series/htcc_ab02a': 'HTCC-AB02A',
  'devices/open-source-hardware/cubecell-series/htcc_ab02s': 'HTCC-AB02S',
  'devices/open-source-hardware/cubecell-series/htcc_am01': 'HTCC-AM01',
  'devices/open-source-hardware/cubecell-series/htcc_am2': 'HTCC-AM02',
  'devices/open-source-hardware/esp32-series': 'ESP32 Series',
  'devices/open-source-hardware/esp32-series/lora-32': 'LoRa32 Series',
  'devices/open-source-hardware/esp32-series/lora-32/capsule-sensor-v3': 'Capsule Sensor V3',
  'devices/open-source-hardware/esp32-series/lora-32/wifi-kit-32': 'WiFi Kit 32',
  'devices/open-source-hardware/esp32-series/lora-32/wifi-lora-32-v3': 'WiFi LoRa 32 V3',
  'devices/open-source-hardware/esp32-series/lora-32/wifi-lora-32-v4': 'WiFi LoRa 32 V4',
  'devices/open-source-hardware/esp32-series/lora-32/wireless-bridge': 'Wireless Bridge',
  'devices/open-source-hardware/esp32-series/lora-32/wireless-mini-shell-ht-ct62': 'HT-CT62',
  'devices/open-source-hardware/esp32-series/lora-32/wireless-paper': 'Wireless Paper',
  'devices/open-source-hardware/esp32-series/lora-32/wireless-shell': 'Wireless Shell',
  'devices/open-source-hardware/esp32-series/lora-32/wireless-stick': 'Wireless Stick',
  'devices/open-source-hardware/esp32-series/lora-32/wireless-stick-lite': 'Wireless Stick Lite',
  'devices/open-source-hardware/esp32-series/lora-32/wireless-tracker': 'Wireless Tracker',
  'devices/open-source-hardware/esp32-series/vision-master': 'Vision Master Series',
  'devices/open-source-hardware/esp32-series/vision-master/vison-master-e213': 'Vision Master E213',
  'devices/open-source-hardware/esp32-series/vision-master/vison-master-e290': 'Vision Master E290',
  'devices/open-source-hardware/esp32-series/vision-master/vison-master-T190': 'Vision Master T190',
  'devices/open-source-hardware/esp32-series/three-platform': 'Three-Platform',
  'devices/open-source-hardware/nrf52840-series': 'nRF52840 Series',
  'devices/open-source-hardware/nrf52840-series/mesh-node-t114': 'MeshNode T114',
  'devices/open-source-hardware/nrf52840-series/mesh-node-5262m': 'MeshNode N5262M',
  'devices/open-source-hardware/nrf52840-series/mesh-solar': 'MeshSolar',
  'devices/open-source-hardware/nrf52840-series/mesh-tower': 'MeshTower',
  'devices/open-source-hardware/nrf52840-series/meshpocket': 'MeshPocket',
  'devices/wifi-halow': 'WiFi HaLow',
  'devices/wifi-halow/ht-hd01': 'HD01 WiFi HaLow Dongle',
  'devices/wifi-halow/ht-h7608': 'H7608 WiFi HaLow Router',
  'devices/wifi-halow/ht-hc01': 'HC01 WiFi HaLow Module',
  'devices/wifi-halow/hc01p': 'HC01P WiFi HaLow Module',
  'devices/wifi-halow/ht-hc02': 'HC02 WiFi HaLow AT Module',
  'devices/wifi-halow/ht-hc32': 'HC32 ESP32 HaLow Camera',
  'devices/wifi-halow/ht-hr01': 'HR01 Raspberry Pi CamLow',
};

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

  // 辅助函数：获取文件的 sidebar_position
  function getSidebarPosition(filePath) {
    try {
      const content = fs.readFileSync(filePath, "utf8");
      const { data } = matter(content);
      return data.sidebar_position !== undefined
        ? data.sidebar_position
        : Infinity;
    } catch (error) {
      return Infinity;
    }
  }

  // 辅助函数：获取目录的 sidebar_position（从索引文档中读取）
  function getCategorySidebarPosition(dirPath, dirName) {
    const indexDocPath = getIndexDocumentPath(dirPath, dirName);
    if (!indexDocPath) {
      return Infinity;
    }
    return getSidebarPosition(indexDocPath);
  }

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
          _position: getCategorySidebarPosition(fullPath, entry.name), // 临时存储位置用于排序
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
        const filePath = path.join(dirPath, entry.name);
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
          _position: getSidebarPosition(filePath), // 临时存储位置用于排序
        });
      }
    }
  }

  // 按照 sidebar_position 排序
  docFiles.sort((a, b) => {
    if (a._position !== b._position) {
      return a._position - b._position;
    }
    // 如果位置相同，按文件名排序
    return a.id.localeCompare(b.id);
  });

  subCategories.sort((a, b) => {
    if (a._position !== b._position) {
      return a._position - b._position;
    }
    // 如果位置相同，按标签名排序
    return a.label.localeCompare(b.label);
  });

  // 移除临时位置属性
  docFiles.forEach((item) => delete item._position);
  subCategories.forEach((item) => delete item._position);

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
