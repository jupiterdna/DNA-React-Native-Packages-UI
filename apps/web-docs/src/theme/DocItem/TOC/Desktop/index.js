import React, { useContext } from "react";
import Desktop from "@theme-original/DocItem/TOC/Desktop";
import { useDoc } from "@docusaurus/theme-common/internal";
import { FiCode, FiX  } from "react-icons/fi";
import { componentMapper } from "@site/src/utils";
import {context} from '@site/src/context'

export default function DesktopWrapper(props) {
  const cont = useContext(context);
  const doc = useDoc();

  const {state, send} = cont
  const handleClick = () => {
    send({
      open: !state?.open
    })
  };

  const render = componentMapper(doc.frontMatter.id);
  const styleCls = state?.open ? 'w-full opacity-1' : 'w-0 opacity-0 h-0'

  return (
    <>
      {!state?.open && (
        <>
          <button onClick={handleClick} className="fixed right-4 rounded-full border-none shadhow-md w-[40px] h-[40px]">
          <FiCode className="text-2xl"/>
          </button>
          <Desktop {...props} />
        </>
      ) }
    <div className={`relative bg-gray-200 dark:bg-gray-900 ${styleCls} h-[90vh]`}>
          <button onClick={handleClick} className="border-none -left-6 absolute bg-white rounded-full shadow-lg w-[40px] h-[40px] mt-2">
            <FiX className="text-2xl text-gray-600"/>
          </button>
         <div className="p-4 px-7  h-full">
         {render ? render : (
          <div className="flex items-center justify-center h-full">
            <h2 className="text-lg text-gray-500 dark:text-white">No playground code available!</h2>
          </div>
         )}
         </div>
      </div>
    </>
  );
}


