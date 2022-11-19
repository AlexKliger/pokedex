import React, { useEffect } from "react"
import Entry from "./Entry"

const Entries = ({ entries, entrySelected }) => {
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
        <div className="entries">
            <ul className="entries__list">
                {
                    !entries
                    ?
                    ('Loading...')
                    :
                    (entries.map((entry, index) => (
                        <Entry key={index} index={index+1} entry={entry} entrySelected={entrySelected} />
                    )))
                }

            </ul>
            <div className="entries__side">
                <div className="entries__caught">
                    <p style={{"paddingBottom": "0.5rem"}}>SEEN<br /> &nbsp;&nbsp; 151</p>
                    <p>OWN<br /> &nbsp;&nbsp; 151</p>
                </div>
                <ul className="entries__info">
                    <li>DATA</li>
                    <li>CRY</li>
                    <li>AREA</li>
                    <li>QUIT</li>
                </ul>
            </div>
        </div>
    )
}

export default Entries