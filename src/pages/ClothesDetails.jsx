import { useLoaderData } from "react-router-dom";


const ClothesDetails = () => {
    const clothe = useLoaderData();
    const {name,category,price,image} = clothe;
    console.log(clothe);
    return (
        <div>
        <h1 className="text-5xl text-center font-bold">{name}</h1>
  
        <img className="h-[600px]" src={image} alt="product image" />
  
        <h3 className="text-2xl font-semibold">{price} $$</h3>
        <h3 className="text-xl font-semibold">{category}</h3>
      </div>
    );
};

export default ClothesDetails;