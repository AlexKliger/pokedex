import './interface.css'
import React from 'react'
import DPad from '../dpad/DPad'

const Interface = () => {
    return (
        <div className="interface flex">
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