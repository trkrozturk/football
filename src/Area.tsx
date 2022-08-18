import {Box} from "@mui/material";
import React from "react";

export default function Area() {
    return <>
        <Box sx={{
            width: "45%",
            height: "90%",
            backgroundColor: "green",
            border: "2px solid white",
            position: "relative",
            display: "flex",
            alignItems: "center"
        }}>
            <Box sx={{
                height: " 540px",
                width: "35%",
                backgroundColor: "transparent",
                border: "2px solid white",
                display: "flex",
                position: "absolute",
                borderLeft: "0px",
                left: 0,
                alignItems: "center"
            }}>
                <Box sx={{
                    width: "100px",
                    height: "100px",
                    right: "-52px",
                    border: "2px solid white",
                    borderRadius: "50%",
                    position: "absolute",
                    borderBottomColor: "transparent",
                    borderLeftColor: "transparent",
                    /* Rotate the circle */
                    transform: " rotate(45deg)",
                }}>

                </Box>
            </Box>
            <Box sx={{
                height: " 270px",
                width: "60px",
                backgroundColor: "transparent",
                border: "2px solid white",
                display: "inline-block",
                position: "absolute",
                borderLeft: "0px",
                left: 0
            }}></Box>
            <Box sx={{
                height: " 5px",
                width: "5px",
                backgroundColor: "white",
                borderRadius: "50%",
                border: "2px solid white",
                display: "inline-block",
                position: "absolute",
                left: "25%"
            }}>
            </Box>
        </Box>
        <Box sx={{
            width: "45%",
            height: "90%",
            backgroundColor: "green",
            border: "2px solid white",
            position: "relative",
            display: "flex",
            alignItems: "center"
        }}>
            <Box sx={{
                height: " 540px",
                width: "35%",
                backgroundColor: "transparent",
                border: "2px solid white",
                display: "flex",
                position: "absolute",
                borderRight: "0px",
                right: 0,
                alignItems: "center"
            }}>
                <Box sx={{
                    width: "100px",
                    height: "100px",
                    left: "-52px",
                    border: "2px solid white",
                    borderRadius: "50%",
                    position: "absolute",
                    borderBottomColor: "transparent",
                    borderLeftColor: "transparent",
                    /* Rotate the circle */
                    transform: " rotate(-135deg)",
                }}>

                </Box>
            </Box>
            <Box sx={{
                height: " 270px",
                width: "60px",
                backgroundColor: "transparent",
                border: "2px solid white",
                display: "inline-block",
                position: "absolute",
                borderRight: "0px",
                right: 0
            }}></Box>
            <Box sx={{
                height: " 5px",
                width: "5px",
                backgroundColor: "white",
                borderRadius: "50%",
                border: "2px solid white",
                display: "inline-block",
                position: "absolute",
                right: "25%"
            }}>
            </Box>
        </Box>

        <Box sx={{
            height: " 5px",
            width: "5px",
            backgroundColor: "white",
            borderRadius: "50%",
            border: "2px solid white",
            display: "inline-block",
            position: "absolute"
        }}></Box>
        <Box sx={{
            height: " 145px",
            width: "145px",
            backgroundColor: "transparent",
            borderRadius: "50%",
            border: "2px solid white",
            display: "inline-block",
            position: "absolute"
        }}></Box>
    </>;
}
