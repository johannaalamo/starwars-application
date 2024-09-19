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
} from '@mui/material';

interface CharacterInfoProps {
    character: {
        name: string;
        height: string;
        mass: string;
        hair_color: string;
        skin_color: string;
        eye_color: string;
        birth_year: string;
        gender: string;
        homeworld: string;
        films: string[];
        species: string[];
        vehicles: string[];
        starships: string[];
    };
}

const CharacterInfo: React.FC<CharacterInfoProps> = ({ character }) => {
    return (
        <Card elevation={3}>
            <CardContent >
                <Typography variant="h4" component="h1" gutterBottom>
                    Character Name
                </Typography>
                <Divider style={{ margin: '20px 0' }} />

                <Box display="flex" flexDirection="column" gap={2}>
                    <Box display="flex" alignItems="center" gap={1}>

                        <Typography variant="subtitle1">Personal Information</Typography>
                    </Box>
                    <List>
                        <ListItem>
                            <ListItemText primary="Gender" secondary={character.gender} />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Birth Year"

                            />

                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Height"
                            />

                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Mass"
                            />

                        </ListItem>
                    </List>

                    <Box display="flex" alignItems="center" gap={1}>

                        <Typography variant="subtitle1">Appearance</Typography>
                    </Box>
                    <List>
                        <ListItem>
                            <ListItemText primary="Hair Color" />

                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Skin Color" />

                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Eye Color" />

                        </ListItem>
                    </List>

                    <Box display="flex" alignItems="center" gap={1}>
                        <Typography variant="subtitle1">Additional Information</Typography>
                    </Box>

                    <List>
                        <ListItem>
                            <ListItemText primary="Homeworld" />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Films"

                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Species"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Vehicles"
                            />
                        </ListItem>
                    </List>
                </Box>
            </CardContent>
        </Card>
    );
};

export default CharacterInfo;