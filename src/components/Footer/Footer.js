import React, { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/ThemeContext'
function Footer() {


    const { theme }  = useContext(ThemeContext)

    return (
        <div className="footer" style={{backgroundColor: theme.secondary}}>
            <p style={{color: theme.tertiary}}>
            © 2025 Foyshal Ahmed Biswas. All rights reserved.
            </p>
        </div>
    )
}

export default Footer

