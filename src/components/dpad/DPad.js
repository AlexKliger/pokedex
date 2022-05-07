import './dpad.css'
import React from 'react'

const DPad = () => {
    return (
        <div className="d-pad">
            <button className="d-pad__button d-pad__button--up"></button>
            <button className="d-pad__button d-pad__button--right"></button>
            <button className="d-pad__button d-pad__button--down"></button>
            <button className="d-pad__button d-pad__button--left"></button>
            <div className="d-pad__button d-pad__button--center"></div>
        </div>
    )
}

export default DPad