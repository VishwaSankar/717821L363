import { Box, Container, Divider, Grid, Paper, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export const Landing = () => {
    const location = useLocation();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/gaming-products/${location.state.name}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        if (location.state && location.state.name) {
            fetchProduct();
        }
    }, [location.state]);

    return (
        <Container maxWidth="md" sx={{ marginTop: '20px' }}>
            {product && (
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h3" sx={{ fontFamily: 'monospace', fontSize: '36px', fontWeight: 'bold', color: 'primary.main' }}>{product.productname}</Typography>
                        <Divider sx={{ my: 2 }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={product.img} alt={product.productname} style={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" sx={{ fontFamily: 'monospace', fontSize: '40px', fontWeight: 'bold', marginBottom: '20px' }}>Price: Rs. {product.price}</Typography>
                        <Box>
                            <Typography variant="body2" sx={{ fontFamily: 'monospace', fontSize: '20px', color: 'text.primary' }}>Rating: {product.rating} / 5</Typography>
                            <Typography variant="body2" sx={{ fontFamily: 'monospace', fontSize: '20px', color: 'text.primary' }}>In Stock: {product.availability ? 'Yes' : 'No'}</Typography>
                            <Typography variant="body2" sx={{ fontFamily: 'monospace', fontSize: '20px', color: 'text.primary' }}>Category: {product.category}</Typography>
                        </Box>
                    </Grid>
                    <Paper>
                        <Typography variant="body2" fontSize="30px" fontFamily="monospace" padding="10px">About the Product<Divider color="gray" /></Typography>
                        <Box padding="20px">
                            <Typography variant="body1" sx={{ fontFamily: 'monospace', fontSize: '18px', marginBottom: '10px', color: 'text.primary' }}>{product.desc}</Typography>
                        </Box>
                    </Paper>
                </Grid>
            )}
        </Container>
    );
};
