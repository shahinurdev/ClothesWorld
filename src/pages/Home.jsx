
import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Home/Banner';
import Products from '../components/Home/products';
const Home = () => {
    const data = useLoaderData();
   
    return (
        <div>
            <Banner></Banner>
            <Products data={data}></Products>
            
        </div>
    );
};

export default Home;