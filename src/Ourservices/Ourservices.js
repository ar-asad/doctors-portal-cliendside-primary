import React from 'react';
import flouride from '../assets/images/fluoride.png';
import cavity from '../assets/images/cavity.png';
import whitening from '../assets/images/whitening.png';
import Ourservice from '../Ourservice/Ourservice';

const Ourservices = () => {
    const services = [
        {
            _id: 1,
            name: 'Flouride Treatment',
            img: flouride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            img: whitening
        },

    ]
    return (
        <div className='py-28' >
            <div className='text-center' >
                <h3 className='text-primary text-xl font-bold uppercase' > Our Services</h3 >
                <h2 className='text-4xl' > Services We Provide</h2 >
            </div >
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10' >
                {
                    services.map(service => <Ourservice key={service._id} service={service}></Ourservice>)
                }
            </div >
        </div >
    );
};

export default Ourservices;