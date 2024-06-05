import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";


const EditProducrs = () => {
    const clothe = useLoaderData();
    const [category,setCategory] = useState(clothe.category);
    const [price,setPrice] = useState(clothe.price);
    const [name,setName] = useState(clothe.name);
    const [ imageUrl,setImageUrl] = useState(clothe. image_url);
    const  handleSubmit = async (e)=>{
        const token = localStorage.getItem('token');
        e.preventDefault();
        const form = e.target;
        const category = form.category.value
        const price = form.price.value;
        const name = form.name.value;
        const id = form.id.value;
        const image_url = form.image_url.value;
       
      const data = { name,category,price, image_url,id};
      console.log(data);
     await fetch(`https://serverclothesworld.onrender.com/clothes${clothe._id}`,
        {
           method: "PATCH" ,
            headers: { 
              "Content-type":"application/json",
              authorization: `Bearer${token}`
             },
            body: JSON.stringify(data)
        }  ).then((res)=>res.json())
        .then(()=> {
          toast.success("Updated successfully");
      });
        
   
    }
    return (
        <div>
        <h1 className="text-5xl font-bold text-center">Edit</h1>
  
        <div className="my-16">
          <form onSubmit={handleSubmit} >
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="category"
                placeholder="category"
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="number"
                name="price"
                placeholder="Price"
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="image_url"
                placeholder="Image URL"
                value={imageUrl}
                onChange={(e)=>setImageUrl(e.target.value)}
              />
            </div>
  
            <div className="mt-2 flex justify-center items-center">
              <input
                className="btn mt-4 w-full bg-red-500 text-white p-4"
                type="submit"
                value="Update product"
              />
            </div>
          </form>
        </div>
      </div>
    );
};

export default EditProducrs;