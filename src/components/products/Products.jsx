import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product'
const products = [
    {id: 1, name:'bed', description:'black dog bed', price:'£10' },
    {id: 2, name:'bed', description:'red dog bed', price:'£11.50'},
]

const Products = () => {
    return(
        <main>
            <Grid container justify="center" spacing ={4}>
                {products.map((product)=>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;