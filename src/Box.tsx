import type {CSSProperties, FC, ReactNode} from 'react'
import {useDrag} from 'react-dnd'

import {ItemTypes} from './ItemTypes'
import {Avatar, Typography} from "@mui/material";
import {useState} from "react";

const style: CSSProperties = {
    position: 'absolute',
    backgroundColor: 'transparent',
    borderRadius: "30px",
    cursor: 'move',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}

export interface BoxProps {
    id: any
    left: number
    top: number
    color: string
    textChange: (id: string, event: any) => void
    hideSourceOnDrag?: boolean
    playerName: string
}

export const Box: FC<BoxProps> = ({
                                      id,
                                      left,
                                      top,
                                      color,
                                      textChange,
                                      hideSourceOnDrag,
                                      playerName,
                                  }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(playerName);
    const toggleIsEditing = () => setIsEditing((b) => !b);
    const [{isDragging}, drag] = useDrag(
        () => ({
            type: ItemTypes.BOX,
            item: {id, left, top},
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }),
        [id, left, top],
    )

    if (isDragging && hideSourceOnDrag) {
        return <div ref={drag}/>
    }
    if (isEditing) {
        return (
            <div
                ref={drag}
                style={{...style, left, top}}
                data-testid="box"
            >
                <input
                    className="MuiTypography-root MuiTypography-h4 MuiTypography-displayInline"
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                        textChange(id, e.target.value)
                    }}
                />
                <Typography style={{display: "none"}}/>
                <Avatar sx={{bgcolor: color, color: "black"}}>T</Avatar>
                <Typography color={"black"} onClick={toggleIsEditing}>{value}
                </Typography>

            </div>
        );
    }

    return (
        <div
            ref={drag}
            style={{...style, left, top}}
            data-testid="box"
        ><Avatar sx={{bgcolor: color, color: "black"}}>T</Avatar>
            <Typography color={"black"} onClick={toggleIsEditing}>{playerName}
            </Typography>

        </div>
    );
}