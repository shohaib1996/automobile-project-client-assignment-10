import PropTypes from 'prop-types';
import { FaCar, FaDollarSign, FaPen, FaEye } from 'react-icons/fa';
// import { AiFillDelete } from 'react-icons/ai'
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { Link } from 'react-router-dom';

const BrandCarCards = ({ brandCar }) => {
    const { product_name, img, brand_name, price, rating, vehicle_type, _id} = brandCar
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='h-[279px] w-full' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product_name}
                    <div className="badge badge-secondary">{brand_name}</div>
                </h2>
                <p className='text-xl font-extrabold flex items-center gap-4'><span>Category: </span><span>{vehicle_type} </span> <span className='text-yellow-400'><FaCar></FaCar></span></p>
                <p className='text-xl font-bold flex items-center'><span>Price: </span><span className='text-yellow-400'><FaDollarSign></FaDollarSign></span><span>{price}</span></p>
                <div className='flex justify-center gap-3 items-center'>
                    <div className='w-3/4'>
                        <Rating style={{ maxWidth: 150 }} readOnly halfFillMode='svg' value={rating < 4.5 ? Math.floor(rating) : rating} />
                    </div>
                    <p className='bg-yellow-400 font-bold text-center rounded-full text-lg'>{rating}</p>
                </div>

                <div className="card-actions justify-end mt-5">
                    <button className="btn bg-green-400 text-white text-2xl font-bold " data-tooltip-id="my-tooltip" data-tooltip-content="Update Product!"><FaPen></FaPen></button>
                    <Tooltip id="my-tooltip" />
                    <Link to={`/product/${_id}`}>
                        <button className="btn bg-amber-600 text-white text-2xl font-bold" data-tooltip-id="my-tooltip" data-tooltip-content="Details!"><FaEye></FaEye></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
BrandCarCards.propTypes = {
    brandCar: PropTypes.object,
}

export default BrandCarCards;