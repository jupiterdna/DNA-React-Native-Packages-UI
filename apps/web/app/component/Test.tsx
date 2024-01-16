"use client";
import React, { useEffect, useRef, useState } from "react";
import Script from "next/script";

const files = {
  // Inlined code
  'App.js': {
    type: 'CODE',
    contents: `import React from 'react';
import {Text, View} from 'react-native';
import _ from 'lodash';

const App = () =>{

  const uniondata = _.union([2], [1, 2,6,2,8]);

  return <View style={{padding:50, backgroundColor:'gray', flex:1}}>
  {
    uniondata.map(e => {
      return <Text style={{color:'white', fontSize:30}}>{e}</Text>
    })
  }
  </View>
}

export default App;
    `
  },
  // Externally hosted code (JavaScript, Markdown, JSON)
  'data/data.json': {
    type: 'CODE',
    contents: `{
      "dependencies": {}
    }
    `
  },

  // Externally hosted assets (images, fonts)
  'assets/image.png': {
    type: 'ASSET',
    contents: 'https://snack.expo.dev/dist/assets/bc351fd24f9bd32bc131f122d42c1a77.svg'
  }
};

const url = `https://snack.expo.dev/embedded?description=sample&theme=light&name=DNAMobilePackages&dependencies=expo-image-picker,lodash&iframeId=xbbmnvv8zq&supportedPlatforms=ios,android,web&platform=ios&preview=true&files=${encodeURIComponent(JSON.stringify(files))}`;

const Test = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  useEffect(() => {
    console.log("ref", ref?.current);
  }, [ref]);

  return (
    <>
      {domLoaded ? (
        <>
         <iframe className="w-full h-full" src={url} id="iframe-expo" data-snack-iframe="true" style={{
          display:'block'
         }}></iframe>
        </>
      ) : (
        <div className="flex items-center justify-center h-full">
          <span>Loading please wait...</span>
        </div>
      )}
    </>
  );
};

export default Test;