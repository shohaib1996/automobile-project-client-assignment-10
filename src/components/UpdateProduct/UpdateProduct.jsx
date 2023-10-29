import Swal from "sweetalert2";
import Navbar from "../../Shared/Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import { useTheme } from "../../ThemeProvider/ThemeProvider";


const UpdateProduct = () => {
    const {isDarkTheme} = useTheme()
    const oldProduct = useLoaderData()
    const { product_name, img, brand_name, short_desc, price, rating, vehicle_type, _id } = oldProduct
    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const product_name = form.name.value;
        const img = form.photo.value;
        const brand_name = form.brand.value;
        const short_desc = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const vehicle_type = form.vehicle_type.value;
        const updateProduct = {
            product_name,
            img,
            brand_name,
            short_desc,
            price,
            rating,
            vehicle_type,
        }
        console.log(updateProduct);
        fetch(`http://localhost:5000/brand/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    }).then(() => {
                        window.history.back();
                    });
                }
            })
    }
    return (
        <div className={`${isDarkTheme ? "bg-[#3f3f3f] text-white" : "bg-white "}`}>
            <div className="bg-bg-image"><Navbar></Navbar></div>
            <form onSubmit={handleUpdateProduct} className='max-w-screen-md mx-auto p-5 mt-20 pb-20'>
                <div className='mb-8 text-5xl  font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-500 text-clip'>Update Your Product Here !!!</div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="text"
                        name="name"
                        id="floating_email"
                        defaultValue={product_name}
                        className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
                        placeholder=" "
                        required=""
                    />
                    <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
                    >
                        Product Name
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="text"
                        name="photo"
                        defaultValue={img}
                        id="floating_password"
                        className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
                        placeholder=" "
                        required=""
                    />
                    <label
                        htmlFor="floating_password"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
                    >
                        Product Image URL
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="text"
                        name="brand"
                        defaultValue={brand_name}
                        id="floating_repeat_password"
                        className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
                        placeholder=" "
                        required=""
                    />
                    <label
                        htmlFor="floating_repeat_password"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
                    >
                        Brand Name
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="text"
                        name="description"
                        defaultValue={short_desc}
                        id="floating_repeat_password"
                        className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
                        placeholder=" "
                        required=""
                    />
                    <label
                        htmlFor="floating_repeat_password"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
                    >
                        Short Description
                    </label>
                </div>
                <div className="grid md:grid-cols-3 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="price"
                            defaultValue={price}
                            id="floating_first_name"
                            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
                            placeholder=" "
                            required=""
                        />
                        <label
                            htmlFor="floating_first_name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
                        >
                            Price
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="rating"
                            defaultValue={rating}
                            id="floating_first_name"
                            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
                            placeholder=" "
                            required=""
                        />
                        <label
                            htmlFor="floating_first_name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
                        >
                            Rating
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <select
                            name="vehicle_type"
                            id="vehicle_type"
                            defaultValue={vehicle_type}
                            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
                            required=""
                        >
                            <option value="" disabled selected hidden>Select a Vehicle Type</option>
                            <option className='text-black' value="suv">SUV</option>
                            <option className='text-black' value="sedan">Sedan</option>
                            <option className='text-black' value="sports">Sports</option>
                            <option className='text-black' value="minivan">Minivan</option>
                            <option className='text-black' value="coupe">Coupe</option>
                        </select>
                        <label
                            htmlFor="vehicle_type"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
                        >

                        </label>
                    </div>

                </div>

                <input className="text-white bg-blue-700 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit" value="Update product" />
            </form>

        </div>
    );
};

export default UpdateProduct;