import React, { useEffect } from "react"
import Entry from "./Entry"

const Entries = ({ entries, setSelectedEntry }) => {
    // Scroll event listener to cache scroll position in between sessions.
    useEffect(() => {
        const entries = document.getElementsByClassName('entries__list')[0]
        entries.scrollTo(0, sessionStorage.getItem('scroll-position') || 0)
        const onScroll = () => sessionStorage.setItem('scroll-position', entries.scrollTop)
        entries.addEventListener('scroll', onScroll)
        // Clean up.
        return () => entries.removeEventListener('scroll', onScroll)
    }, [])


    return (
        <div className="entries flex">
            <ul className="entries__list">
                {entries.map((entry, index) => (
                    <Entry key={index} index={index+1} entry={entry} setSelectedEntry={setSelectedEntry} />
                ))}
            </ul>
            <div className="entries__side font-size--medium">
                <p>SEEN<br /> &nbsp;&nbsp; 151</p>
                <p>OWN<br /> &nbsp;&nbsp; 151</p>
                <div className="flex flex--column">
                    <a>DATA</a>
                    <a>CRY</a>
                    <a>AREA</a>
                </div>
            </div>
        </div>
    )
}

export default Entries