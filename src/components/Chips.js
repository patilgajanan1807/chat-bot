import React from "react"
import { nanoid } from "nanoid"
import "../css/Chips.css"
export default function Chips(props){
    const chipData = props.chips;
    const chips = chipData.map(chip => {
        return (
            <div className="chip">
                <a 
                    target="_blank"
                    key={chip.id} 
                    href={chip.link}
                >
                    {chip.text}
                </a>
            </div>
        )
    })
    return (
        <div>
            {chips}
        </div>
    )
}