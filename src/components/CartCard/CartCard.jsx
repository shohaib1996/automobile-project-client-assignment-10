import { Rating } from '@smastrom/react-rating';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaCar, FaEye } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai'
import { Tooltip } from 'react-tooltip';

const CartCard = ({ cartCard }) => {
    const { product_name, img, brand_name, price, rating, vehicle_type, _id } = cartCard
    return (
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" >
            <div className="relative m-0 w-3/6 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                <img
                    src={img}
                    alt="image"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="p-6" >
                <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal antialiased w-24 text-center rounded-md bg-yellow-400 " >
                    {brand_name}
                </h6>
                <h4 className="mb-2 block font-sans text-2xl leading-snug tracking-normal text-blue-gray-900 antialiased text-black font-bold">
                    {product_name}
                </h4>
                <div className='space-y-3'>
                    <p>${price}</p>
                    <div className="flex items-center ">
                        <Rating style={{ maxWidth: 100 }} readOnly halfFillMode='svg' value={rating < 4.5 ? Math.floor(rating) : rating} />

                    </div>
                    <p className='uppercase flex items-center gap-5'><span className='text-yellow-400'><FaCar></FaCar></span><span className='font-semibold'>{vehicle_type}</span></p>
                </div>

                <a className="inline-block">
                    <div className=" space-x-5 mt-4">
                        <Link to={`/product/${_id}`}>
                            <button className="btn bg-green-600 hover:bg-green-400 text-2xl font-bold text-white rounded-lg" data-tooltip-id="my-tooltip" data-tooltip-content="Product Details!"><FaEye></FaEye></button>
                        </Link>

                        <Tooltip id="my-tooltip" />
                        <button className="btn bg-red-600 hover:bg-red-400 text-2xl font-bold text-white rounded-lg" data-tooltip-id="my-tooltip" data-tooltip-content="Delete Product!"><AiFillDelete></AiFillDelete></button>

                    </div>
                </a>
            </div>
        </div>
    );
};
CartCard.propTypes = {
    cartCard: PropTypes.object,
}

export default CartCard;