import React from "react"

const Entry = ({index, entry, setSelectedEntry }) => {
    return (
        <li className="entry">
            <button className="entry__button font-size--medium" onClick={() => setSelectedEntry(index)}>{index} {entry.name.toUpperCase()}</button>
        </li>
    )
}

export default Entry