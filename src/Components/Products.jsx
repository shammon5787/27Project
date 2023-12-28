import React, { useEffect, useState } from 'react'
import { Card, Grid } from 'antd';
import { Col, Row } from 'antd';
import Column from 'antd/es/table/Column';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            console.log(data)
            setProducts(data)
        }
        fetchProduct();
    }, [])
    return (
        <div >
            {
                products.map(product => (
                    <div key={product.id}>
                        <Row>
                            <Col xs={{ span: 3, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                            <Card style={{ width: 350 }}>
                                    <img src={product.image} alt="" style={{width:'150px'}} />
                                    <h3>{product.title}</h3>
                                    <h3>{product.price}</h3>
                                    <button style={{backgroundColor:'blue', color:'white', padding:'8px', cursor:'pointer'}}>Add Card</button>
                                </Card>
                            </Col>
                        </Row>
                    </div>

                ))
            }
        </div>
    )
}

export default Products
