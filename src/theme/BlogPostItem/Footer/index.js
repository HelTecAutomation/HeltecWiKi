import React from "react";
import OriginalFooter from "@theme-original/BlogPostItem/Footer";
import LikeShare from "@site/src/components/LikeShare/LikeShare";

export default function BlogPostFooterWrapper(props) {
    return (
        <>
            <OriginalFooter {...props} />
            <LikeShare />
        </>
    );
}
