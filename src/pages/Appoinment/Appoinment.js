import React, { useState } from 'react';
import Footer from '../Home/Footer';
import Availableappoinment from './Availableappoinment';
import Mainappoinment from './Mainappoinment';

const Appoinment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <Mainappoinment date={date} setDate={setDate}></Mainappoinment>
            <Availableappoinment date={date} setDate={setDate}></Availableappoinment>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;