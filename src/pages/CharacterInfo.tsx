import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CircularProgress, Typography, Box, IconButton } from '@mui/material';
import CharacterCard from '../components/CharacterCard';
import { fetchCharacters } from '../store/charactersSlice';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CharacterInfo: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { list: characters, loading, error } = useAppSelector((state) => state.characters);
  const [loadingCharacter, setLoadingCharacter] = useState(false);

  const characterFromState = characters?.find(
    (char) => char?.name?.toLowerCase() === name?.replace('-', ' ').toLowerCase()
  );

  useEffect(() => {
    if (!characterFromState) {
      setLoadingCharacter(true);
      dispatch(fetchCharacters({ page: 1 }))
        .finally(() => setLoadingCharacter(false));
    }
  }, [characterFromState, dispatch, name]);

  if (loading || loadingCharacter) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" align="center">
        Error: {error}
      </Typography>
    );
  }

  const character = characterFromState;

  if (!character) {
    return (

      <Box>
        <IconButton onClick={() => navigate('/')}>
          <ArrowBackIcon style={{ fontSize: "40px" }} />
        </IconButton>
        <Typography align="center">
          Character not found
        </Typography>
      </Box>
    );
  }

  return (

    <Box mt={3} p="30px">

      <Box display="flex" alignItems='center' mb="12px" >
        <IconButton onClick={() => navigate('/')}>
          <ArrowBackIcon style={{ fontSize: "40px" }} />
        </IconButton>

        <Typography variant="h4" component="h1" >
          Details
        </Typography>
      </Box>

      <CharacterCard character={character} />
    </Box >
  );
};

export default CharacterInfo;