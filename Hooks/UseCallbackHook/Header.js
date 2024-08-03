
import React from 'react'

 function Header() {
    console.log('Header Component Rendered')
    return <>
        <div>Header Componet</div>
    </>
}

export default React.memo(Header)
