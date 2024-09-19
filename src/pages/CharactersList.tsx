import React, { useEffect, useState } from 'react';
import { Typography, Button, Card, CardContent, Box, CircularProgress } from '@mui/material';
import { Grid } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import { fetchCharacters } from '../store/charactersSlice';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import SearchBar from '../components/SearchBar';

const CharactersList: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { list: characters, loading, error, nextPage } = useAppSelector(state => state?.characters);

    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        dispatch(fetchCharacters({ page, search: searchTerm }));
    }, [dispatch, page, searchTerm]);

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
    };

    const handleSearchChange = (newSearchTerm: string) => {
        setSearchTerm(newSearchTerm);
    };

    if (loading) return <CircularProgress />;

    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Box padding="20px">
            <Typography variant="h4" component="h1" gutterBottom>
                Star Wars Characters
            </Typography>

            <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />

            <Grid container spacing={2}>
                {characters.map((character, index) => (
                    <Grid xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" marginBottom={"10px"}>{character?.name}</Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => navigate(`/character/${character?.name?.toLowerCase().replace(/\s+/g, '-')}`)}
                                >
                                    Details
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Box display="flex" justifyContent="space-between" marginTop={2}>
                <Button
                    variant="contained"
                    color="secondary"
                    style={{ marginTop: '20px' }}
                    onClick={handlePreviousPage}
                    disabled={page === 1}
                >
                    Previous
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    style={{ marginTop: '20px' }}
                    onClick={handleNextPage}
                    disabled={!nextPage}
                >
                    Next
                </Button>
            </Box>
        </Box>
    );
};

export default CharactersList;