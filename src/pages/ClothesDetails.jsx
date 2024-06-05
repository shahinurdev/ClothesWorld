import { useLoaderData } from "react-router-dom";

const ClothesDetails = () => {
    const clothe = useLoaderData();
    const { name, category, price, image } = clothe;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-5xl text-center font-bold mb-6">{name}</h1>
            <div className="flex flex-col items-center mb-6">
                <img className="h-[200px] w-auto rounded-lg" src={image} alt="product image" />
            </div>
            <div className="text-center space-y-4">
                <h3 className="text-3xl font-semibold text-gray-700">${price}</h3>
                <h3 className="text-xl font-semibold text-gray-500">{category}</h3>
            </div>
        </div>
    );
};

export default ClothesDetails;
