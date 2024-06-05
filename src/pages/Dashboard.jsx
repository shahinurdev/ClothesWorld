import  { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuh';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState(); // useState syntax corrected

  useEffect(() => {
    if (user?.email) {
      fetch(`https://serverclothesworld.onrender.com/user/${user.email}`) // corrected URL
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => setUserInfo(data))
        .catch((error) => console.error('Error fetching user data:', error));
    }
  }, [user]);

  console.log(userInfo);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
    <div className="flex justify-between items-center mb-7">
        <h1 className="text-3xl font-semibold text-gray-800">Profile Information</h1>
        <Link to={`profile/edit/${userInfo?._id}`} className="text-lg font-medium text-blue-500 hover:underline">
            Edit Profile
        </Link>
    </div>
    <div className="space-y-4">
        <div className="text-center">
            <h2 className="text-2xl font-medium text-gray-700">Name:{userInfo?.name}</h2>
            <h3 className="text-xl text-gray-500">Email: {userInfo?.email}</h3>
            <h3 className="text-xl text-gray-500">Age: {userInfo?.age}</h3>
            <h3 className="text-xl text-gray-500">Phone: {userInfo?.mobileNumber}</h3>
        </div>
    </div>
</div>
  );
};

export default Dashboard;
