import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Product from '../Product/Product.jsx';


const useStyle = makeStyles((theme)=>({
    toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(4),
  },
  root: {
    flexGrow: 1,
  },
}))
function Products({ products, onAddToCart }) {


    const classes = useStyle();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}></div>

            <Grid container justifyContent='center'
                spacing={4}
            >
                {products.map((p)=>(
                    <Grid item
                        key={p.id}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                    >
                        <Product
                            onAddToCart={onAddToCart}
                         product={p}/>
                    </Grid>
                ))}
            </Grid>
            
        </main>
    );
}

export default Products;