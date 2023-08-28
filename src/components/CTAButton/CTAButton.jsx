import "./CTAButton.css"

const CTAButton = ({children, onClick = (e) =>{e.preventDefault()}}) =>{
    return (
        <button className="cta-button" onClick={onClick}>{children}</button>
    )
}

export default CTAButton