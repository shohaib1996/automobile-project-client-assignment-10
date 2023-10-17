import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-5 mt-12">
            <h1 className="text-5xl font-bold text-center text-white">Discover Your Dream Ride at <span className="text-yellow-400">AutoCare</span></h1>
            <p className="text-white max-w-screen-lg text-center mx-auto">Explore a vast selection of top-quality automobiles at AutoCare, where your automotive dreams come to life. Whether you&apos;re searching for a sleek sedan, a rugged SUV, or a powerful sports car, our inventory is packed with options to suit every style and budget. With our expert team, comprehensive vehicle information, and hassle-free buying experience, finding your perfect car has never been easier. Start your journey with AutoCare today and drive away in style!</p>
            <button className="btn btn-secondary bg-yellow-400 text-white border-none">Explore <FaArrowRight></FaArrowRight></button>
        </div>
    );
};

export default Banner;