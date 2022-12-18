import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={person} alt='' className="w-3/4 h-full rounded-lg shadow-2xl" />
                    <img src={parts} alt='' className=" absolute right-20 top-1/2 w-1/2 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className="text-xl font-bold text-orange-700">About us</p>
                    <h1 className="text-5xl font-bold">We are qualified
                        <br></br>
                        & of experience <br></br> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum <br></br> available, but the majority have suffered alteration in some <br></br> form, by injected humour, or randomised words which don't <br></br> look even slightly believable. <br></br>
                    </p>
                    <br />
                    <p className='pb-5'>
                        The majority have suffered alteration in some form, by injected <br></br> humour, or randomised words which don't look even slightly <br></br> believable.
                    </p>
                    <button className="btn btn-primary">Get more info</button>
                </div>
            </div>
        </div>
    );
};

export default About;