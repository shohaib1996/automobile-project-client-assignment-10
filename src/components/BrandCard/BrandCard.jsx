import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {
    const { brandName, photo, _id } = brand
    return (
        <Link to={`/brands/${_id}`}>
            <div className="card card-compact bg-base-100 shadow-xl items-center hover:bg-amber-400 hover:shadow-2xl hover:scale-110 transform transition-transform duration-500">
                <figure><img className='w-[300px] h-[250px] p-3' src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl  px-2 py-1 rounded-lg  font-bold">{brandName}</h2>
                </div>
            </div>
        </Link>
    );
};
BrandCard.propTypes = {
    brand: PropTypes.object,
}

export default BrandCard;