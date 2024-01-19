import React, { useState } from "react";

const TestPlayGround = (props: any) => {
  const [open, setOpen] = useState(false);


  const openCls = !open ? 'w-0 opacity-0 z-0  p-0' : 'w-[50%] opacity-1 p-4'

  return (
    <>
      {!open && (
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="fixed top-24 right-4 z-[400] text-lg"
        >
          Code Playgound
        </button>
      )}
        <div className={`bg-gray-200 fixed right-0 top-24 z-[500] h-[89vh]  ${openCls}`}>
          <button
            onClick={() => {
              setOpen(false);
            }}
            className="absolute -left-[5rem] top-2 z-[400] text-lg z-[600]"
          >
         Close
          </button>
          {props.children}
        </div>
    </>
  );
};

export default TestPlayGround;
