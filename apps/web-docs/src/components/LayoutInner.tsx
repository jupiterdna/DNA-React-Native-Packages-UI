import React, { useContext, useEffect } from "react";
import { Provider, context } from "../context";

const LayoutInner = (prop) => {
  const con = useContext(context);

  useEffect(() => {
    if(prop?.onRender) {
      prop?.onRender(con?.state?.open)
    }
  }, [con?.state?.open])
  

  return <>{prop.children}</>;
};

export default LayoutInner;
