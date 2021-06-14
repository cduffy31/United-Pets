import React from'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';

import useStyles from './styles';

const Product = ({product}) => {
    const classes = useStyles();

    return(
            <Card className={classes.root}>
                <cardMedia className={classes.media} image='' title={product.name}/>
                <cardContent>
                    <div className={classes.cardContent}>
                        <Typography varient="h5" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography varient="h5">
                            {product.price}
                        </Typography>
                    </div>
                    <Typography varient="h2" color="textSecondary">
                    {product.description}
                    </Typography>
                </cardContent>
                <CardActions disableSpacing className={classes.CardActions}>
                    <IconButton aria-label="Add to cart">
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
    )
}
export default Product;