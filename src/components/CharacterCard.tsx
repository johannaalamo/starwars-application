import React from 'react';
import {
    Typography,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemText,
    Divider,
    Box,
    Chip,
} from '@mui/material';
import { Character } from '../interfaces/types';

interface CharacterCardProps {
    character?: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
    if (!character) {
        return <Typography>No character data available</Typography>;
    }

    return (
        <Card elevation={3}>
            <CardContent>
                <Typography variant="h4" component="h1" gutterBottom>
                    {character?.name}
                </Typography>

                <Divider style={{ margin: '20px 0' }} />

                <Box display="flex" gap={2} justifyContent="space-between">
                    <Box>
                        <Typography fontWeight="600" variant="subtitle1">Personal Information</Typography>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="Gender"
                                    secondary={character?.gender || 'Unknown'}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Birth Year"
                                    secondary={character?.birth_year || 'Unknown'} />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Height"
                                    secondary={`${character?.height} cm` || 'Unknown'} />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Mass"
                                    secondary={`${character?.mass} kg` || 'Unknown'} />
                            </ListItem>
                        </List>
                    </Box>

                    <Box>
                        <Typography fontWeight="600" variant="subtitle1">Appearance</Typography>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="Hair Color"
                                    secondary={character?.hair_color || 'Unknown'} />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Skin Color"
                                    secondary={character?.skin_color || 'Unknown'} />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Eye Color"
                                    secondary={character?.eye_color || 'Unknown'} />
                            </ListItem>
                        </List>
                    </Box>

                    <Box>
                        <Typography fontWeight="600" variant="subtitle1">Additional Information</Typography>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="Homeworld"
                                    secondary={character?.homeworld || 'Unknown'}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Films"
                                    secondary={
                                        <Box display="flex" flexWrap="wrap" gap={1}>
                                            {character?.films?.map((film, index) => (
                                                <Chip key={index} label={film} size="small" />
                                            ))}
                                        </Box>
                                    }
                                />
                            </ListItem>

                            <ListItem>
                                <ListItemText
                                    primary="Vehicles"
                                    secondary={
                                        <Box display="flex" flexWrap="wrap" gap={1}>
                                            {character?.vehicles?.map((vehicle, index) => (
                                                <Chip key={index} label={vehicle} size="small" />
                                            ))}
                                        </Box>
                                    }
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Starships"
                                    secondary={
                                        <Box display="flex" flexWrap="wrap" gap={1}>
                                            {character?.starships?.map((starship, index) => (
                                                <Chip key={index} label={starship} size="small" />
                                            ))}
                                        </Box>
                                    }
                                />
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default CharacterCard;