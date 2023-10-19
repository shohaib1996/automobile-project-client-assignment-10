import "./productNotFound.css"

const ProductNotFound = () => {
    return (
        <div className="h-[90vh] max-w-screen-lg mt-12 mb-14 mx-auto flex items-center justify-center">
            <img className="hover:spin-and-scale"  src="https://trolleymate.co.uk/assets/img/error_404.jpeg" alt="" />
            
        </div>
    );
};

export default ProductNotFound;