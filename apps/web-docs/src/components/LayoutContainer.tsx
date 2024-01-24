
import React from 'react'
import { Provider } from '../context'

const LayoutContainer = (prop) => {
  return (
    <Provider>
        {prop.children}
      </Provider>
  )
}

export default LayoutContainer