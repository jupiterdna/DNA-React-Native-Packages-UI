"use client";
import React, { useEffect, useState } from 'react'

const Test = () => {

const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
   <>
   {domLoaded ? <>
    <div className="h-full" data-snack-id="@jupiter2024/dna-button2" data-snack-platform="web" data-snack-preview="true" data-snack-theme="light"></div> <script  src="https://snack.expo.dev/embed.js" async></script>
   </>: <div className='flex items-center justify-center h-full'><span>Loading please wait...</span></div>}
   </> 

  )
}

export default Test