import React from "react"

const Entry = ({index, entry, entrySelected }) => {
    return (
        <li className="entry">
            <button className="entry__button font-size--medium" onClick={() => entrySelected(index)}>{index} {entry.name.toUpperCase()}</button>
        </li>
    )
}

export default Entry