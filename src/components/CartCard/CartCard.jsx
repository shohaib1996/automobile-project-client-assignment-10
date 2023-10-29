import { Rating } from '@smastrom/react-rating';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaCar, FaEye } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai'
import { Tooltip } from 'react-tooltip';
import Swal from 'sweetalert2';

const CartCard = ({ cartCard, cards, setCards }) => {
    const { product_name, img, brand_name, price, rating, vehicle_type, _id, currentId } = cartCard
    console.log(cartCard);
    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${_id}`, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = cards.filter(card => card._id !== _id)
                            setCards(remaining)
                        }

                    })

            }
        })
    }
    return (
        <div className="p-2 lg:p-0 relative flex flex-col  w-full max-w-[48rem] lg:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" >
            <div className="relative m-0 lg:w-3/6 w-full shrink-0 overflow-hidden rounded-xl lg:rounded-r-none bg-white bg-clip-border text-gray-700">
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
                        <Link to={`/product/${currentId}`}>
                            <button className="btn bg-green-600 hover:bg-green-400 text-2xl font-bold text-white rounded-lg" data-tooltip-id="my-tooltip" data-tooltip-content="Product Details!"><FaEye></FaEye></button>
                        </Link>

                        <Tooltip id="my-tooltip" />
                        <button onClick={() => handleDelete(_id)} className="btn bg-red-600 hover:bg-red-400 text-2xl font-bold text-white rounded-lg" data-tooltip-id="my-tooltip" data-tooltip-content="Delete Product!"><AiFillDelete></AiFillDelete></button>

                    </div>
                </a>
            </div>
        </div>
    );
};
CartCard.propTypes = {
    cartCard: PropTypes.object,
    cards: PropTypes.array,
    setCards: PropTypes.func,
}

export default CartCard;