/* eslint-disable react/prop-types */
import SingleProductsCardDashboard from "../dashboard/SingleProductsCardDashboard";
// import SingleProduct from "./SingleProduct";


const Products = ({data}) => {
  
    return (
      <div className="flex flex-col items-center">
  <h1 className="text-5xl font-bold mb-6 text-center">Our products</h1>
  <div className="flex gap-6 flex-wrap justify-center">
    {
      data.map(clothe =>
        <SingleProductsCardDashboard clothe={clothe} key={clothe.id}></SingleProductsCardDashboard>
      )
    }
  </div>
</div>

    );
};

export default Products;