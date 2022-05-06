import React from 'react'
import DPad from './DPad'

const Interface = () => {
    return (
        <div className="interface">
            <button className="interface__button"></button>
            <div>
                <button className="interface__start button--flat"></button>
                <button className="interface__select button--flat"></button>
                <div className="interface__pad"></div>
            </div>
            <DPad />
        </div>
    )
}

export default Interface