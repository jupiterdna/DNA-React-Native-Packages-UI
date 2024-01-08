"use client";
import  "../styles/global.css";
import Message from './mdx/message.mdx'

import { MDXProvider, useMDXComponents } from '@mdx-js/react'
import { useThemedStylesWithMdx } from '@theme-ui/mdx'
import { ThemeUIProvider, Theme } from 'theme-ui'
import Test from "./component/Test";

const theme =  {
  initialColorModeName: 'light',
  useColorSchemeMediaQuery: true,
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#609',
 
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
  },
  styles: {
    root: {
      fontFamily: 'body',
      color: 'text',
      bg: 'background',
    },
    h1: {
      fontSize: [20],
      color: 'secondary',
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
      ':hover': {
        color: 'secondary',
        textDecoration: 'underline',
      },
    },
  },
}



const  Provider = ({ children, theme, components }: any) => {
  const componentsWithStyles = useThemedStylesWithMdx(
    useMDXComponents(components)
  )

  return (
    <ThemeUIProvider theme={theme}>
      {/* @ts-ignore */}
      <MDXProvider components={componentsWithStyles}>{children}</MDXProvider>
    </ThemeUIProvider>
  )
}

export default function Web() {
  return (
    <Provider theme={theme}>
      <div className="w-full">
      <header className="p-4 bg-blue-400 text-white">
        DNA Mobile Packages
      </header>
      <div className="flex  h-[94vh]">
        <div className="w-[300px] bg-gray-100 flex flex-col gap-y-4 p-4">
          <div>
          <h2 className="text-sm text-gray-500">GETTING STARTED</h2>
          <div className="pl-3 text-sm flex flex-col text-gray-800">
            <a href="" className="py-1 px-2">Overview</a>
            <a href="" className="py-1 px-2">Installation</a>
            <a href="" className="py-1 px-2">Troubleshooting</a>
          </div>
          </div>
          <div>
          <h2 className="text-sm text-gray-500">COMPONENTS</h2>
            <div className="pl-3 text-sm flex flex-col text-gray-800 mt-2">
              <a href="" className="py-1 px-2 bg-blue-100 text-blue-500">Button</a>
              <a href="" className="py-1 px-2">TextInput</a>
              <a href="" className="py-1 px-2">DropDown</a>
            </div>
          </div>
        </div>
        <div className="flex-1 p-4">
          <Message />
        </div>
        <div className="w-full max-w-[40%] h-full border-gray-100 border-l">
          <Test />
        </div>
      </div>

      </div>
    
    </Provider>
    

  );
}
