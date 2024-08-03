import React, { useContext } from 'react'
import Footer from './Footer'
import { AppContext } from './AppContext'


export default function Contact() {
    const {phone}=useContext(AppContext)
  return (
    <div>
        <h3> Contact Component</h3>
        <h3 className='text-danger'> Phone Number:{phone}</h3>
        <Footer></Footer>
    </div>
  )
}
