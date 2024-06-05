import toast from "react-hot-toast";


const AddClothe = () => {
    const  handleSubmit = async (e)=>{
        e.preventDefault();
        const form = e.target;
        const category = form.category.value
        const price = form.price.value;
        const name = form.name.value;
        const image_url = form.image_url.value;
       
      const data = { name,category,price, image_url};
      console.log(data);
      await fetch ('https://serverclothesworld.onrender.com/clothes',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(()=> {
        toast.success("products added successfully");
      form.reset();
    });
      
    }
    return (
        <div>
        <h1 className="text-5xl font-bold text-center">Add a Product</h1>
  
        <div className="my-16">
          <form onSubmit={handleSubmit} >
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="category"
                placeholder="category"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="number"
                name="price"
                placeholder="Price"
              />
            </div>
           
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="image_url"
                placeholder="Image URL"
              />
            </div>
  
            <div className="mt-2 flex justify-center items-center">
              <input
                className="btn mt-4 w-full bg-red-500 text-white p-4"
                type="submit"
                value="Add product"
              />
            </div>
          </form>
        </div>
      </div>
    );
};

export default AddClothe;