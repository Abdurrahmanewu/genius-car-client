import React, { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-5'>
                <p className="text-2xl text-orange-700 font-bold">
                    Services
                </p>
                <h1 className='text-5xl font-bold'>
                    Our Service Area
                </h1>
                <br />
                <p className='text-xl'>The majority have suffered alteration in some form, by injected humour, or randomized <br></br> words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    >

                    </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;