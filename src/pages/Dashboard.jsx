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
    <div>
        <div className="flex justify-between mb-7">
        <h1 className="text-3xl">Profile information</h1>
        <Link to={`profile/edit/${userInfo?._id}`}className="text-3xl">
            Edit profile
        </Link>
        </div>
     <div>
     <h2>{userInfo?.name}</h2>
      <h3>{userInfo?.email}</h3>
     </div>

    </div>
  );
};

export default Dashboard;
