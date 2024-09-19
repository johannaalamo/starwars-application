import React from 'react';
import { Typography, TextField, Button, Card, CardContent, Box } from '@mui/material';
import { Grid } from '@mui/joy';
import { useNavigate } from 'react-router-dom';

const CharactersList: React.FC = () => {

    const navigate = useNavigate();

    return (
        <Box padding="20px">

            <Typography variant="h4" component="h1" gutterBottom>
                Star Wars Characters
            </Typography>

            <TextField
                fullWidth
                variant="outlined"
                placeholder="Search characters..."
                style={{ marginBlock: '50px' }}
            />

            <Grid container spacing={2}>
                <Grid xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Luke Skywalker</Typography>
                            <Button variant="contained" color="primary" onClick={() => navigate(`/character`)}>
                                Ver detalles
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>


            <Box display="flex" justifyContent="space-between" marginTop={2}>
                <Button variant="contained" color="secondary" style={{ marginTop: '20px' }}>
                    Anterior
                </Button>
                <Button variant="contained" color="secondary" style={{ marginTop: '20px' }}>
                    Siguiente
                </Button>
            </Box>
        </Box>
    );
};

export default CharactersList;
