/* eslint-disable react/prop-types */

import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const SingleProductsCardDashboard = ({ clothe,handleDeleteClothes}) => {
    const { _id, name, category, price } = clothe;

    const handleDelete = async () => {
        try {
            const response = await fetch(`https://serverclothesworld.onrender.com/clothes/${_id}`, {
                method: 'DELETE'
            });
            const data = await response.json();
            console.log(data);
            toast.success("Product Deleted");
            handleDeleteClothes(_id); 
        } catch (error) {
            console.error("Error deleting product:", error);
            toast.error("Failed to delete product");
        }
    }

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Clothes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h3 className="text-xl font-semibold">{category}</h3>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/clothes/${_id}`} className="btn btn-primary">See details</Link>
                        <Link to={`edit/${_id}`} className="btn btn-primary">Edit</Link>
                        <button onClick={handleDelete} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductsCardDashboard;
