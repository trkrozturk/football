import update from 'immutability-helper'
import type {CSSProperties, FC} from 'react'
import {useCallback, useEffect, useState} from 'react'
import type {XYCoord} from 'react-dnd'
import {useDrop} from 'react-dnd'

import {Box} from './Box'
import type {DragItem} from './interfaces'
import {ItemTypes} from './ItemTypes'

const styles: CSSProperties = {
    width: "100%",
    height: "100%",
    border: '1px solid black',
    position: 'absolute',
}

export interface ContainerProps {
    hideSourceOnDrag: boolean
    footballerCount: string
}

export interface ContainerState {
    boxes: { [key: string]: { top: number; left: number; title: string } }
}

export interface IPlayer {
    [key: string]: { top: number; left: number; title: string, color: string }
}

export const Container: FC<ContainerProps> = ({hideSourceOnDrag, footballerCount}) => {

    var innerWidth: number = window.innerWidth;
    var innerHeight: number = window.innerHeight;
    console.log(innerWidth);
    console.log(innerHeight);
    let footballerMap: IPlayer = {}
    for (let i = 0; i < +footballerCount; i++) {
        if (i === 0) {
            footballerMap["" + i] = {
                top: (innerHeight / 2) - 20,
                left: innerWidth * 0.1,
                title: "KALECI",
                color: "white"
            }
            footballerMap["" + i + i] = {
                top: (innerHeight / 2) - 20,
                left: innerWidth - (innerWidth*0.15),
                title: "KALECI",
                color: "yellow"
            }
        } else {
            footballerMap["" + i] = {top: innerHeight - (74 * (i)), left: 0, title: "Player" + i, color: "white"}
            footballerMap["" + i + i] = {
                top: innerHeight - (74 * (i)),
                left: innerWidth - 65,
                title: "Player" + i + footballerCount,
                color: "yellow"
            }
        }
    }

    const [boxes, setBoxes] = useState<{
        [key: string]: {
            top: number
            left: number
            title: string
            color: string

        }
    }>(footballerMap)
    const moveBox = useCallback(
        (id: string, left: number, top: number) => {
            setBoxes(
                update(boxes, {
                    [id]: {
                        $merge: {left, top},
                    },
                }),
            )
        },
        [boxes, setBoxes],
    )
    useEffect(() => {
        setBoxes(footballerMap)
    }, [footballerCount]);
    const textChange = (id: string, asd: string) => {
        const box = {...boxes[id], title: asd};
        setBoxes({...boxes, [id]: box})
    }
    const [, drop] = useDrop(
        () => ({
            accept: ItemTypes.BOX,
            drop(item: DragItem, monitor) {
                const delta = monitor.getDifferenceFromInitialOffset() as XYCoord
                const left = Math.round(item.left + delta.x)
                const top = Math.round(item.top + delta.y)
                moveBox(item.id, left, top)
                return undefined
            },
        }),
        [moveBox],
    )

    return (
        <div ref={drop} style={styles}>
            {Object.keys(boxes).map((key) => {
                const {left, top, title, color} = boxes[key] as {
                    top: number
                    left: number
                    title: string
                    color: string
                }
                return (
                    <Box
                        key={key}
                        id={key}
                        left={left}
                        color={color}
                        top={top}
                        textChange={textChange}
                        hideSourceOnDrag={hideSourceOnDrag}
                        playerName={title}
                    />
                )
            })}
        </div>
    )
}
