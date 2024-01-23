import React, { useContext, useEffect, useRef, useState } from "react";
import Desktop from "@theme-original/DocItem/TOC/Desktop";
import { useDoc } from "@docusaurus/theme-common/internal";
import { context } from "../../../../context/index";

export default function DesktopWrapper(props) {
  const cont = useContext(context);
  const doc = useDoc();


  const {state, send} = cont
  const handleClick = () => {
    send({
      open: !state?.open
    })
  };

  return (
    <>
      {!state?.open ? (
        <>
          <button onClick={handleClick} className="fixed right-0">
            Code
          </button>
          <Desktop {...props} />
        </>
      ) : (
        <div className="dark:bg-gray-900 bg-blue-200 w-full h-full relative">
          <button onClick={handleClick} className="-left-4 absolute">
            Codexx
          </button>
        {
          // SnackPlayer(Tess)
        }
        </div>
      )}
    </>
  );
}
