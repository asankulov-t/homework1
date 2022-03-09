import React from 'react'
import e from './Error.module.css'
function Error404() {
    return (
        <div className={e.error}>
            <div className={e.codeError}>404</div>
            <div className={e.notFound}>Page not found!</div>
            <div className={e.simb}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
