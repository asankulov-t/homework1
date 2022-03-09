import React from 'react'
import Header from './Header'
import Routers from './Routers'

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            {/*<HashRouter>*/}

            <Header/>

            <Routers/>

            {/*</HashRouter>*/}
        </div>
    )
}

export default HW5
