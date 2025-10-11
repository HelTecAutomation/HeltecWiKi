import React from "react";
import OriginalMDXPage from "@theme-original/MDXPage";
import LikeShare from "@site/src/components/LikeShare/LikeShare";

/**
 * 注意：这个包装会让 LikeShare 显示在整个 MDX 页面布局之后。
 * 若你希望它紧贴正文底部，可以改为 swizzle 更细颗粒度的内容容器，或在你的 MDX Layout 中插入。
 */
export default function MDXPageWrapper(props) {
  return (
      <>
        <OriginalMDXPage {...props} />
        <LikeShare />
      </>
  );
}
