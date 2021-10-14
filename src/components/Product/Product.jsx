import { Card, CardActions, CardContent, CardMedia, IconButton, makeStyles, Typography } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons';
import DOMPurify from 'dompurify';
import React from 'react'

const useStyle = makeStyles((theme)=>({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: '100px',
        paddingTop: '56.25%',
       
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between'
    },
}))
const Product = ({product, onAddToCart}) => {

    const safeDescription = DOMPurify.sanitize(product.description);

    const classes = useStyle();

    return (
        <Card className={classes.root}>
            <CardMedia
             className={classes.media}
             image={product.image.url}
             title={product.name}
            ></CardMedia>

            <CardContent>
                <div className={classes.cardContent}>
                    <Typography
                        variant='h5'
                        gutterBottom
                    >{product.name}</Typography>
                    <Typography
                        variant='h5'
                        gutterBottom
                    >{product.price.formatted_with_symbol}</Typography>

                </div>
                    <Typography
                        variant='body2'
                        color='textSecondary'
                        
                        
                            dangerouslySetInnerHTML={{__html: safeDescription}}
                        
                    >

                        
                    </Typography>
            </CardContent>

            <CardActions
                disableSpacing
                className={classes.cardActions}

            >
                <IconButton
                    onClick={()=>onAddToCart(product.id, 1)}
                    aria-label="Add to Cart"
                >
                    <AddShoppingCart />
                </IconButton>

            </CardActions>

        </Card>
    )
}

export default Product
