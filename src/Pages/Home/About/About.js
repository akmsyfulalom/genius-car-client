import React from 'react';
import imgPerson from '../../../assets/images/about_us/person.jpg';
import imgPerts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero mb-28">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={imgPerson} alt='' className=" w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src={imgPerts} alt='' className=" absolute w-3/5 right-5 top-1/2 border-8 rounded-lg shadow-2xl" />

                </div>
                <div className='w-1/2'>
                    <p className='text-2xl font-bold text-orange-600'>About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="pb-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-primary bg-orange-500 border-orange-600 hover:bg-orange-400 hover:border-orange-400">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;