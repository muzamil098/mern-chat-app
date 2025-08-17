import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";


const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
    await login(userName, password);
    console.log("Login data:", { userName, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 shadow-mdbg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-4">
          Login
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span>Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className=" w-full input input-bordered h-10 "
              value={userName}
              onChange={e => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label className="label p-2">
              <span>Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className=" w-full input input-bordered h-10 "
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <Link to="/signup" className="text-white hover:underline hover:text-blue-600 mt-2 inline-block ">
            {"don't"} have an account?
            </Link>
            <div>
                <button className="btn btn-primary w-full mt-4" disabled={loading}>
                  {loading ? <span className="loading loading-spinner"></span> : "Login"}
                </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// Starter code fot this file
// import React from "react";

// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
//       <div className="w-full p-6 shadow-mdbg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
//         <h1 className="text-3xl font-semibold text-center text-gray-300 mb-4">
//           Login
//         </h1>
//         <form action="">
//           <div>
//             <label className="label p-2">
//               <span>Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Username"
//               className=" w-full input input-bordered h-10 "
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span>Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className=" w-full input input-bordered h-10 "
//             />
//           </div>
//           <a href="#" className="text-white hover:underline hover:text-blue-600 mt-2 inline-block ">
//             {"don't"} have an account?
//             </a>
//             <div>
//                 <button className="btn btn-primary w-full mt-4">
//                   Login 
//                 </button>
//             </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

