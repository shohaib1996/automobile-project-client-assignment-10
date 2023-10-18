import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import CartCard from "../../components/CartCard/CartCard";
import { useState } from "react";


const AddCart = () => {
    
    const cartCards = useLoaderData()
    const [cards, setCards] = useState(cartCards)
    const [isShowAll, setIsShowAll] = useState(false)   
     // console.log(cartCards);
     
    return (
        <div>
            <div className="bg-bg-image"><Navbar></Navbar></div>
            <h1 className="text-5xl font-bold mt-12 text-center mb-12">Total Car: {cards.length}</h1>
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 max-w-screen-xl mx-auto mb-12">
                {
                    isShowAll ? cards.map(cartCard => <CartCard key={cartCard._id} cards={cards} setCards={setCards} cartCard={cartCard}></CartCard>) 
                    : cards.slice(0, 4).map(cartCard => <CartCard key={cartCard._id} cards={cards} setCards={setCards} cartCard={cartCard}></CartCard>)
                    
                }
            </div>
            <div className="mt-6 flex items-center justify-center mb-12">
                {cartCards.length > 4 && (
                    <button onClick={() => setIsShowAll(!isShowAll)} className={isShowAll ? 'hidden' : 'btn btn-secondary bg-yellow-400 text-white font-bold border-none'}>Show All</button>
                )}


            </div>
        </div>
    );
};

export default AddCart;