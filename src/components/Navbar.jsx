
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuh';

const Navbar = () => {
  const {logout,user}= useAuth();
    return (
        <>
             <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          {!user&&(
                          <>
                          <li>
                          <Link to={"/login"}>Login</Link>
                          </li>
                          <li><Link to={"/registration"}>Registration</Link></li>
                          </>
           )}
      
      {user && (
              <> 
              <li><Link to={"/dashboard"}>Dashboard</Link></li>
              
              </>
            )}
      {user && (
              <> 
              <li><button onClick={()=> logout()} className='btn-red-500 '>
                Logout
                </button></li>
            
              </>
            )}
            <li ><Link to={"/about"}>About</Link></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Clothes World</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {!user&&(
                          <>
                          <li>
                          <Link to={"/login"}>Login</Link>
                          </li>
                          <li><Link to={"/registration"}>Registration</Link></li>
                          </>
           )}

{user && (
              <> 
              <li><Link to={"/dashboard"}>Dashboard</Link></li>
              
              </>
            )}
            {user && (
              <> 
              <li><button onClick={()=> logout()} className='btn-red-500 '>
                Logout
                </button></li>
            
              </>
            )}
            <li ><Link to={"/about"}>About</Link></li>
            <li><a>Contact</a></li>
        </ul>
      </div>
    </div>
        </>
    );
};

export default Navbar;