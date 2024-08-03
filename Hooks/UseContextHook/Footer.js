import React, { useContext } from 'react'
import { AppContext } from './AppContext'

export default function Footer() {

    const {phone,name} = useContext(AppContext)
    return (
        <div>
            <h3> Footer Component</h3>
            <h3 className='text-danger'> Phone Number :{phone}</h3>
            <br />
            <div className='bg-success text-white text-center h3'>
                <p> My Name is {name}</p>
            </div>

        </div>
    )
}
