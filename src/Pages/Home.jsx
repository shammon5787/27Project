import React from 'react'
import Products from '../Components/Products'

const Home = () => {

    return (
        <>    
        <div style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'space-between' }}>
            <h1>Welcome to My Webite</h1>
            <section> 
                <h2>Products</h2>
                <Products />
            </section>
        </div>
        </>
    )
}

export default Home
