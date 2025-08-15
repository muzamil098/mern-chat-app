import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 shadow-mdbg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-4">
          Login
        </h1>
        <form action="">
          <div>
            <label className="label p-2">
              <span>Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className=" w-full input input-bordered h-10 "
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
            />
          </div>
          <a href="#" className="text-white hover:underline hover:text-blue-600 mt-2 inline-block ">
            {"don't"} have an account?
            </a>
            <div>
                <button className="btn btn-primary w-full mt-4">
                  Login 
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

