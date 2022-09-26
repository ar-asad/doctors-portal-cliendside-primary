
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Mainappoinment = ({ date, setDate }) => {

    return (
        <div className="hero min-h-screen " >
            <div className="hero-content flex-col lg:flex-row-reverse gap-28" >
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate} />
                </div>
            </div >
        </div >
    );
};

export default Mainappoinment;