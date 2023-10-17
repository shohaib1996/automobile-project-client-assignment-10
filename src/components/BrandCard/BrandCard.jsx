import PropTypes from 'prop-types';

const BrandCard = ({ brand }) => {
    const { brandName, photo } = brand
    return (
        <div className="card card-compact bg-base-100 shadow-xl items-center">
            <figure><img className='w-[300px] h-[250px]' src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl bg-yellow-400 px-2 py-1 rounded-lg text-white font-bold">{brandName}</h2>
            </div>
        </div>
    );
};
BrandCard.propTypes = {
    brand: PropTypes.object,
}

export default BrandCard;