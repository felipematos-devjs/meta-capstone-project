import "./CTAButton.css"
import { Link } from "react-router-dom"

const CTAButton = ({children, onClick, disabled = false}) =>{
    return (
            <button className="cta-button" onClick={onClick} disabled={disabled}>{children}</button>
        )
}

export default CTAButton