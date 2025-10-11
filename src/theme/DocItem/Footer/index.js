import React from "react";
import OriginalFooter from "@theme-original/DocItem/Footer";
import LikeShare from "@site/src/components/LikeShare/LikeShare";

export default function FooterWrapper(props) {
  return (
      <>
        <OriginalFooter {...props} />
        <LikeShare />
      </>
  );
}
