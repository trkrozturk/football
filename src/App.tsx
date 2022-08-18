import React, {useCallback, useState} from 'react';
import './App.css';
import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Paper,
    Select,
    SelectChangeEvent,
    Typography
} from "@mui/material";
import {green} from "@mui/material/colors";
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import Area from './Area';
import {Container} from "./Container";


function App() {
    const [age, setAge] = React.useState("5");

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    return (
        <DndProvider backend={HTML5Backend}>
            <Paper sx={{
                width: "100%", height: "100vh",
                display: "flex", backgroundColor: "green",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Area/>
                <Container hideSourceOnDrag={true} footballerCount={age}/>
                <Box sx={{minWidth: 120, position: "absolute", top: "5px"}}>
                    <FormControl fullWidth>
                        <Typography color={"white"}>OYUNCU SAYISI</Typography>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="playerCount"
                            onChange={handleChange}
                            sx={{backgroundColor: "white"}}
                        >
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={11}>11</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Paper>


        </DndProvider>
    );
}

export default App;
