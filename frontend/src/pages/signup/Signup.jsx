import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const Signup = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 shadow-mdbg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className=" text-3xl font-semibold text-center text-gray-300 ">
          Signup
        </h1>
        <form action="">
          <div>
            <label className="label p-2">
              <span>Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className=" w-full input input-bordered h-10 "
            />
          </div>
          <div>
            <label className="label p-2">
              <span>Username</span>
            </label>
            <input
              type="text"
              placeholder="JohnDoe"
              className=" w-full input input-bordered h-10 "
            />
          </div>
          <div>
            <label className="label p-2">
              <span>Password</span>
            </label>
            <input
              type="password"
              placeholder="*********"
              className=" w-full input input-bordered h-10 "
            />
          </div>
           <div>
            <label className="label p-2">
              <span>Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="*********"
              className=" w-full input input-bordered h-10 "
            />
          </div>
          {/* {Gender textbox goes here} */}
          <GenderCheckbox />

           <a href="#" className="text-white hover:underline hover:text-blue-600 mt-2 inline-block ">
            Already have an account?
            </a>
            <button className="btn btn-primary w-full mt-4">
              Signup    
            </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

// Starter code for the signup component
// import React from "react";
// import GenderCheckbox from "./GenderCheckbox";

// const Signup = () => {
//   return (
//     <div className=" flex flex-col items-center justify-center min-w-96 mx-auto ">
//       <div className="w-full p-6 shadow-mdbg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
//         <h1 className=" text-3xl font-semibold text-center text-gray-300 ">
//           Signup
//         </h1>
//         <form action="">
//           <div>
//             <label className="label p-2">
//               <span>Full Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="John Doe"
//               className=" w-full input input-bordered h-10 "
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span>Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="JohnDoe"
//               className=" w-full input input-bordered h-10 "
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span>Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="*********"
//               className=" w-full input input-bordered h-10 "
//             />
//           </div>
//            <div>
//             <label className="label p-2">
//               <span>Confirm Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="*********"
//               className=" w-full input input-bordered h-10 "
//             />
//           </div>
//           {/* {Gender textbox goes here} */}
//           <GenderCheckbox />

//            <a href="#" className="text-white hover:underline hover:text-blue-600 mt-2 inline-block ">
//             Already have an account?
//             </a>
//             <button className="btn btn-primary w-full mt-4">
//               Signup    
//             </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
