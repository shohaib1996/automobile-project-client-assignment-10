import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import CartCard from "../../components/CartCard/CartCard";


const AddCart = () => {
    const cartCards = useLoaderData()
    console.log(cartCards);
    return (
        <div>
            <div className="bg-bg-image"><Navbar></Navbar></div>
            <h1 className="text-5xl font-bold mt-12 text-center mb-12">Total Car: {cartCards.length}</h1>
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 max-w-screen-xl mx-auto mb-12">
                {
                    cartCards.map(cartCard => <CartCard key={cartCard._id} cartCard={cartCard}></CartCard>)
                }
            </div>
        </div>
    );
};

export default AddCart;