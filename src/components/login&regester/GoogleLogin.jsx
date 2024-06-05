import useAuth from "../../hooks/useAuh";


const GoogleLogin = () => {
    const {googleLogin} = useAuth();
    const handleGoogleLogin = ()=>{
        googleLogin().then((data)=>{
          if(data?.user?.email){
            const userInfo ={
              email: data?.user?.email,
              name: data?.user?.displayName
            }
            fetch('https://serverclothesworld.onrender.com/user',
              {
                method: 'POST',
                headers:{
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(userInfo)
              }
            ).then(response=>response.json())
            .then(data=>{
              localStorage.setItem('token', data?.token)
            })
          }
        })
    };
    return (
      <button onClick={handleGoogleLogin} className="brn w=full">
        <div className="flex items-center gap-2">
            <p>Google</p>
        </div>
      </button>
    );
};

export default GoogleLogin;