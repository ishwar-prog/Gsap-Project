import { createContext } from 'react'

// keep plain context definitions in a separate file to avoid fast-refresh warnings
export const NavbarContext = createContext()
export const NavbarColorContext = createContext()

export default {
    NavbarContext,
    NavbarColorContext
}
