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
    ListItemIcon,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import StraightenIcon from '@mui/icons-material/Straighten';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import BrushIcon from '@mui/icons-material/Brush';
import PaletteIcon from '@mui/icons-material/Palette';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PublicIcon from '@mui/icons-material/Public';
import MovieIcon from '@mui/icons-material/Movie';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import RocketIcon from '@mui/icons-material/Rocket';
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
                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Gender"
                                    secondary={character?.gender || 'Unknown'}
                                />
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <CalendarTodayIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Birth Year"
                                    secondary={character?.birth_year || 'Unknown'} />
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <StraightenIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Height"
                                    secondary={`${character?.height} cm` || 'Unknown'} />
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <FitnessCenterIcon />
                                </ListItemIcon>
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
                                <ListItemIcon>
                                    <BrushIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Hair Color"
                                    secondary={character?.hair_color || 'Unknown'} />
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <PaletteIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Skin Color"
                                    secondary={character?.skin_color || 'Unknown'} />
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <VisibilityIcon />
                                </ListItemIcon>
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
                                <ListItemIcon>
                                    <PublicIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Homeworld"
                                    secondary={character?.homeworld || 'Unknown'}
                                />
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <MovieIcon />
                                </ListItemIcon>

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
                                <ListItemIcon>
                                    <DirectionsCarIcon />
                                </ListItemIcon>

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
                                <ListItemIcon>
                                    <RocketIcon />
                                </ListItemIcon>
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