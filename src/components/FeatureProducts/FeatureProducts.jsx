import { useEffect, useState } from "react";
import FeatureProductCard from "../FeaturProductCard/FeatureProductCard";

const FeatureProducts = () => {
    const [gallery, setGallery] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDataFetched, setIsDataFetched] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/brand')
            .then(res => res.json())
            .then(data => {
                setGallery(data);
                setIsDataFetched(true);
            });
    }, []);

    const featureProducts = gallery.slice(0, 12);

    useEffect(() => {
        if (isDataFetched && featureProducts.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % featureProducts.length);
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [featureProducts, isDataFetched]);

    return (
        <div className="rounded-box max-w-6xl mx-auto">
            <div className=" space-x-4 flex items-center justify-center">
                {featureProducts.map((card, index) => (
                    <FeatureProductCard key={card._id} card={card} isActive={index >= currentIndex && index < currentIndex + 3} />
                ))}
            </div>
        </div>
    );
};

export default FeatureProducts;


