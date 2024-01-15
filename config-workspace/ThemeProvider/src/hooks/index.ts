import {useContext} from 'react'
import { ThemeContext } from '../context'
import { ThemeProviderProps } from '../types'

export const useColor = () => {
    const context = useContext<ThemeProviderProps>(ThemeContext)
    return context.config.colors
}

export const useFonts = () => {
    const context = useContext<ThemeProviderProps>(ThemeContext)
    return context.config.fonts
}

export const useSpacing = () => {
    const context = useContext<ThemeProviderProps>(ThemeContext)
    return context.config.spacing
}
