import './Footer.css'

import {AiFillFacebook, AiFillInstagram, AiFillTwitterSquare} from 'react-icons/ai'
import images from '../../assets/images/images'


const Footer = () =>{
    return (
    <footer>
        <img src={images.logo} alt="" className="logo"/>
        <section className='links'>
            <nav className='nav-section'>
                <h4>Navigation</h4>
                <ul>
                    <li><a href={''}>Home</a></li>
                    <li><a href={''}>About</a></li>
                    <li><a href={''}>Menu</a></li>
                    <li><a href={''}>Reservations</a></li>
                    <li><a href={''}>Order Online</a></li>
                    <li><a href={''}>Login</a></li>
                </ul>
            </nav>
            <section className='contact-section'>
                <h4>Contact</h4>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </section>
            <section className='socials-section'>
                <h4>Social Media</h4>
                <ul>
                    <li><AiFillFacebook size={24}/> Facebook</li>
                    <li><AiFillInstagram size={24}/> Instagram</li>
                    <li><AiFillTwitterSquare size={24}/> Twitter</li>
                </ul>
            </section>  
            
        </section>
    </footer>)
}

export default Footer