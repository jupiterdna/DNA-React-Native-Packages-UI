import React, { useContext } from "react";
import MDXContent from "@theme-original/MDXContent";
import { context } from "@site/src/context";

export default function MDXContentWrapper(props) {
  const con = useContext(context);
  return (
    <div className={`mdx-content-${con?.state?.open ? " max-w-[600px]" : ""}`}>
      <MDXContent {...props} />
    </div>
  );
}
