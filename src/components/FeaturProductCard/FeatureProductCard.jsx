import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import PropTypes from 'prop-types';
import { FaCar, FaDollarSign, FaEye } from "react-icons/fa";

const FeatureProductCard = ({ card, isActive }) => {
    const { product_name, img, brand_name, price, rating, vehicle_type, _id } = card
    return (
        <div className="card bg-base-100 shadow-md shadow-black w-[350px] h-[520px]" style={{ display: isActive ? 'block' : 'none' }}
        >
            <figure><img className='h-[279px] w-full' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="h-[100px]">
                    <h2 className="card-title text">
                        <p className="text-black">{product_name}</p>
                        <div className="badge badge-secondary ">{brand_name}</div>
                    </h2>
                    <p className='text-xl text-black font-bold flex items-center gap-4'><span>Category: </span><span>{vehicle_type} </span> <span className='text-yellow-400'><FaCar></FaCar></span></p>
                    <p className='text-xl text-black font-bold flex items-center'><span>Price: </span><span className='text-yellow-400'><FaDollarSign></FaDollarSign></span><span>{price}</span></p>
                </div>
                <div className='flex justify-between gap-3 items-center'>
                    <div className='w-3/4'>
                        <Rating style={{ maxWidth: 100 }} readOnly halfFillMode='svg' value={rating} />
                    </div>
                    <Tooltip id="my-tooltip" />
                    <Link to={`/product/${_id}`}>
                        <button className="btn bg-amber-600 text-white text-2xl font-bold hover:bg-yellow-400" data-tooltip-id="my-tooltip" data-tooltip-content="Details!"><FaEye></FaEye></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
FeatureProductCard.propTypes = {
    card: PropTypes.object,
    isActive: PropTypes.bool,
}

export default FeatureProductCard;