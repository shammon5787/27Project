import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='nav'>
                <section className='sectio'>
                <div>
                    <span className='logo'>LOGO REACT</span>
                </div>
                <div className='components'>
                    <Link className='link' to='/' >Home</Link>
                    <Link className='link' to='/cart' >Cart</Link>
                    <span className='options'>Cart: Items 0</span>
                </div>
                </section>
            </div>
        </>
    )
}

export default Navbar
