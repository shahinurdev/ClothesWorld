import React, { useEffect, useState } from 'react';
import SingleProductsCardDashboard from '../components/dashboard/SingleProductsCardDashboard';

const AllClothes = () => {
    const [clothes, setClothes] = useState([]);

    useEffect(() => {
        const fetchClothes = async () => {
            try {
                const response = await fetch("https://serverclothesworld.onrender.com/clothes");
                const data = await response.json();
                setClothes(data);
            } catch (error) {
                console.error("Error fetching clothes:", error);
            }
        };
        fetchClothes();
    }, []);

    const handleDeleteClothes = (id) => {
        setClothes(clothes.filter((clothe) => clothe._id !== id));
        console.log(clothes);
    };

    return (
        <div>
            <h1 className="text-5xl font-bold text-center">
                All Clothes
            </h1>
            <div className="my-16 ">
                {clothes.map((clothe) => (
                    <SingleProductsCardDashboard
                        clothe={clothe}
                        key={clothe._id}
                        handleDeleteClothes={handleDeleteClothes}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllClothes;
