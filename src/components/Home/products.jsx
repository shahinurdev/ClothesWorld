/* eslint-disable react/prop-types */
import SingleProductsCardDashboard from "../dashboard/SingleProductsCardDashboard";
// import SingleProduct from "./SingleProduct";


const Products = ({data}) => {
  
    return (
        <div>
            <h1>Our products</h1>
            <div className="flex gap-2">
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