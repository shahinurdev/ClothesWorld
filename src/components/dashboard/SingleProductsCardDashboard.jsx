/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const SingleProductsCardDashboard = ({ clothe,handleDeleteClothes}) => {
    const { _id, name, category, price,image_url } = clothe;

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
        // <div>
        //     <div classNameName="card card-compact w-96 bg-base-100 shadow-xl">
        //         <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Clothes" /></figure>
        //         <div classNameName="card-body">
        //             <h2 classNameName="card-title">{name}</h2>
        //             <h3 classNameName="text-xl font-semibold">{category}</h3>
        //             <p>Price: {price}</p>
        //             <div classNameName="card-actions justify-end">
        //                 <Link to={`/clothes/${_id}`} classNameName="btn btn-primary">See details</Link>
        //                 <Link to={`edit/${_id}`} classNameName="btn btn-primary">Edit</Link>
        //                 <button onClick={handleDelete} classNameName="btn btn-primary">Delete</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        

<div className="max-w-sm bg-white border border-gray-200 rounded-lg m-3 shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{category}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><p>Price: {price}</p></p>
        <Link  to={`/clothes/${_id}`}  href="#" className="inline-flex  items-center m-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180  w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
        <Link to={`edit/${_id}`} href="#" className="inline-flex m-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Edit
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
        <button  onClick={handleDelete}  href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Delete
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
    </div>
</div>

    );
};

export default SingleProductsCardDashboard;
