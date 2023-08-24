import './main.css'
import images from '../../assets/images/images'

import {AiOutlineStar, AiFillStar} from 'react-icons/ai'
import {MdDeliveryDining} from 'react-icons/md'
const Main = () =>{
    return (<main>
        {/* Hero */}
        <article className='hero-section'>
           <section className='hero-description'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur tortor nec dapibus imperdiet. Fusce vel neque nec magna pharetra ultricies. </p>
                <button>Reserve a table</button> 
           </section>
            <img className='hero-img' src={images.restaurant} alt="Little Lemon Hero Image" />
        </article>

        {/* Specials */}
        <article className='specials-section'>
            <section className='title'>
                <h2>This weeks specials!</h2>
                <button>Order Online</button>
            </section>

            <section className='specials'>
            <article>
                    <img src={images.special1} alt="" />
                    <div className='description'>
                        <div className='description-row-spaced'>
                            <h4>Greek Salad</h4>
                            <span className='secondary'>R$ 20,00</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur tortor nec dapibus imperdiet</p>
                        <div className='description-row'>
                            <h4>Order for delivery</h4>
                            <MdDeliveryDining size={24}/>
                        </div>
                    </div>
                </article>

                <article>
                    <img src={images.special2} alt="" />
                    <div className='description'>
                        <div className='description-row-spaced'>
                            <h4>Greek Salad</h4>
                            <span className='secondary'>R$ 20,00</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur tortor nec dapibus imperdiet</p>
                        <div className='description-row'>
                            <h4>Order for delivery</h4>
                            <MdDeliveryDining size={24}/>
                        </div>
                    </div>
                </article>

                <article>
                    <img src={images.special3} alt="" />
                    <div className='description'>
                        <div className='description-row-spaced'>
                            <h4>Greek Salad</h4>
                            <span className='secondary'>R$ 20,00</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur tortor nec dapibus imperdiet</p>
                        <div className='description-row'>
                            <h4>Order for delivery</h4>
                            <MdDeliveryDining size={24}/>
                        </div>
                    </div>
                </article>
            </section>
        </article>

        {/* testimonials */}
        <section className='testimonials-section'>
            <h2>Testimonials</h2>
            <br />
            <section className='testimonials'>
                <article className='testimonial'>
                    <div className='rating'>
                        <AiFillStar size={24}/><AiFillStar size={24}/><AiFillStar size={24}/><AiFillStar size={24}/><AiFillStar size={24}/>
                        <p>5 out of 5!</p>
                    </div>
                    <img src={images.client1} alt="testimonial-profile" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <p className='profile'>profile</p>
                </article>
                <article className='testimonial'>
                    <div className='rating'>
                        <AiFillStar size={24}/><AiFillStar size={24}/><AiFillStar size={24}/><AiFillStar size={24}/><AiFillStar size={24}/>
                        <p>5 out of 5!</p>
                    </div>
                    <img src={images.client2}  alt="testimonial-profile" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <p className='profile'>profile</p>
                </article>
                <article className='testimonial'>
                    <div className='rating'>
                        <AiFillStar size={24}/><AiFillStar size={24}/><AiFillStar size={24}/><AiFillStar size={24}/><AiFillStar size={24}/>
                        <p>5 out of 5!</p>
                    </div>
                    <img src={images.client3}  alt="testimonial-profile" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <p className='profile'>profile</p>
                </article>
                <article className='testimonial'>
                    <div className='rating'>
                        <AiFillStar size={24}/><AiFillStar size={24}/><AiFillStar size={24}/><AiFillStar size={24}/><AiFillStar size={24}/>
                        <p>5 out of 5!</p>
                    </div>
                    <img src={images.client4} alt="testimonial-profile" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <p className='profile'>profile</p>
                </article>
            
            </section>
        </section>

        {/* about */}
        <section className='about-section'>
           <div className='about-content'>
                <section className='description'>
                    <h3>Little Lemon</h3>
                    <h4>Chicago</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur tortor nec dapibus imperdiet. 
                        Fusce vel neque nec magna pharetra ultricies. </p>
                </section>
                <img src={images.marioadrian} alt="profile-pictures"/>
           </div>
        </section>
    </main>)
}

export default Main