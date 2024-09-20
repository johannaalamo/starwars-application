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
import { AdditionalInfo, Character } from '../interfaces/types';

interface CharacterCardProps {
    character: Character;
    additionalInfo: AdditionalInfo;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, additionalInfo }) => {

    console.log(character)

    return (
        <Card elevation={3}>
            <CardContent>
                <Typography variant="h4" component="h1" gutterBottom>
                    {character.name}
                </Typography>

                <Divider style={{ margin: '20px 0' }} />

                <Box display="flex" gap={2} justifyContent="space-between">
                    <Box>
                        <Typography fontWeight="600" variant="subtitle1">Personal Information</Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon><PersonIcon /></ListItemIcon>
                                <ListItemText primary="Gender" secondary={character?.gender || 'Unknown'} />
                            </ListItem>

                            <ListItem>
                                <ListItemIcon><CalendarTodayIcon /></ListItemIcon>
                                <ListItemText primary="Birth Year" secondary={character?.birth_year || 'Unknown'} />
                            </ListItem>

                            <ListItem>
                                <ListItemIcon><StraightenIcon /></ListItemIcon>
                                <ListItemText primary="Height" secondary={`${character?.height} cm`} />
                            </ListItem>

                            <ListItem>
                                <ListItemIcon><FitnessCenterIcon /></ListItemIcon>
                                <ListItemText primary="Mass" secondary={`${character?.mass} kg`} />
                            </ListItem>
                        </List>
                    </Box>

                    <Box>
                        <Typography fontWeight="600" variant="subtitle1">Appearance</Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon><BrushIcon /></ListItemIcon>
                                <ListItemText primary="Hair Color" secondary={character?.hair_color || 'Unknown'} />
                            </ListItem>

                            <ListItem>
                                <ListItemIcon><PaletteIcon /></ListItemIcon>
                                <ListItemText primary="Skin Color" secondary={character?.skin_color || 'Unknown'} />
                            </ListItem>

                            <ListItem>
                                <ListItemIcon><VisibilityIcon /></ListItemIcon>
                                <ListItemText primary="Eye Color" secondary={character?.eye_color || 'Unknown'} />
                            </ListItem>
                        </List>
                    </Box>

                    <Box>
                        <Typography fontWeight="600" variant="subtitle1">Additional Information</Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon><PublicIcon /></ListItemIcon>
                                <ListItemText primary="Homeworld" secondary={character?.homeworld || 'Unknown'} />
                            </ListItem>

                            <ListItem>
                                <ListItemIcon><MovieIcon /></ListItemIcon>
                                <ListItemText primary="Films" secondary={character?.films?.map(film => additionalInfo?.films[film]).join(', ') || 'Unknown'} />
                            </ListItem>

                            <ListItem>
                                <ListItemIcon><DirectionsCarIcon /></ListItemIcon>
                                <ListItemText primary="Vehicles" secondary={character?.vehicles?.map(vehicle => additionalInfo?.vehicles[vehicle]).join(', ') || 'Unknown'} />
                            </ListItem>

                            <ListItem>
                                <ListItemIcon><RocketIcon /></ListItemIcon>
                                <ListItemText primary="Starships" secondary={character?.starships?.map(starship => additionalInfo?.starships[starship] ).join(', ')|| 'Unknown'} />
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default CharacterCard;