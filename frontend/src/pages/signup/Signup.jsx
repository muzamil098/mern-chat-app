import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender : "",
  })
const {loading, signup} = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup data:", inputs);
    // Call the signup function from useSignup hook
    await signup(inputs)
  };
  const handleGenderChange = (gender) => {
    setInputs({ ...inputs, gender});
  };
  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 shadow-mdbg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className=" text-3xl font-semibold text-center text-gray-300 ">
          Signup
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span>Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className=" w-full input input-bordered h-10 "
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
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
              value={inputs.userName}
              onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
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
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
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
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>
          {/* {Gender textbox goes here} */}
          <GenderCheckbox onGenderChangeHandler={handleGenderChange} selectedGender = {inputs.gender} />

           <Link href="/login" className="text-white hover:underline hover:text-blue-600 mt-2 inline-block ">
            Already have an account?
            </Link>
            <button className="btn btn-primary w-full mt-4">
              {loading ? <span className="loading loading-spinner"></span> : "Signup"}
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
