import { createContext, useState } from "react";

export const context = createContext(null)

export const Provider = (props) => {

    const [state, send] = useState({
        open: false
    })

    return <context.Provider value={{
        state, send
    }}>
        {props?.children}
    </context.Provider>
}