import React from "react"

const Entry = ({index, entry, entrySelected }) => {
    return (
        <li className="entry">
            <span>{index.toString().padStart(3, "0")}</span>
            <span
                className="entry__button font-size--medium"
                onClick={() => entrySelected(index)}
            >
                    {entry.name.toUpperCase()}
            </span>
        </li>
    )
}

export default Entry