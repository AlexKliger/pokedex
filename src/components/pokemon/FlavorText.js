import { useCallback, useState } from "react"

const FlavorText = ({ text, entrySelected }) => {
    const [textSlides, setTextSlides] = useState(text.split('\u000c'))

    const nextTextSlide = useCallback(() => {
        setTextSlides([...textSlides.slice(1)])
        
        if (textSlides.length <= 1) entrySelected('X')
    }, [textSlides, entrySelected])

    return (
        <div onClick={nextTextSlide} style={{"display": "flex", "alignItems": "end", "lineHeight": "2rem", "fontSize": "1.5rem", "wordSpacing": "1rem"}}>
            <p>
            {textSlides[0]}
            </p>
            <i
                className="fa fa-caret-down"
            ></i>
        </div>
    )
}

export default FlavorText