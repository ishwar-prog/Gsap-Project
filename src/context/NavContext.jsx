import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { NavbarContext, NavbarColorContext } from './NavbarContexts'

// re-export contexts so existing imports from this module keep working
export { NavbarContext, NavbarColorContext }

const NavContext = ({ children }) => {

    const [navColor, setNavColor] = useState('white')
    const [navOpen, setNavOpen] = useState(false)

    const locate = useLocation().pathname
    useEffect(function(){
        // use strict equality for path checks
        if(locate === '/projects' || locate === '/agence'){
            setNavColor('black')
        }else{
            setNavColor('white')
        }
    },[locate])

    return (
        <NavbarContext.Provider value={[navOpen, setNavOpen]}>
            <NavbarColorContext.Provider value={[navColor,setNavColor]}>
                {children}
            </NavbarColorContext.Provider>
        </NavbarContext.Provider>
    )
}

export default NavContext