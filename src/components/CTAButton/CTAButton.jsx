import "./CTAButton.css"
import { Link } from "react-router-dom"

const CTAButton = ({children, onClick}) =>{
    return (
            <button className="cta-button" onClick={onClick}>{children}</button>
        )
}

export default CTAButton