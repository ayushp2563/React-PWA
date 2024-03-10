// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
// import toast, { Toaster } from "react-hot-toast";

// const Signup = () => {
//   const [registerEmail, setRegisterEmail] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");

//   const register = async () => {
//     try {
//       const user = await createUserWithEmailAndPassword(
//         auth,
//         registerEmail,
//         registerPassword
//       );
//       console.log(user);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const notify = () => toast("✅ Signed up successfully.");
//   return (
//     <>
//       <section className="bg-gray-900 w-full h-full">
//         <div className="flex min-h-screen flex-col items-center  justify-center h-full ">
//           <div className="w-11/12 bg-white rounded-lg shadow dark:border sm:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//             <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//               <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                 Create an account
//               </h1>
//               <div className="space-y-4 md:space-y-6">
//                 <div>
//                   <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                     Your email
//                   </label>
//                   <input
//                     type="email"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="name@company.com"
//                     required=""
//                     onChange={(event) => setRegisterEmail(event.target.value)}
//                   />
//                 </div>
//                 <div>
//                   <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     placeholder="••••••••"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     required=""
//                     onChange={(event) =>
//                       setRegisterPassword(event.target.value)
//                     }
//                   />
//                 </div>
//                 <div>
//                   <button
//                     className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                     onClick={() => {
//                       register();
//                       notify();
//                     }}
//                   >
//                     Create an account
//                   </button>
//                   <Toaster />
//                 </div>
//                 <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                   Already have an account?{" "}
//                   <NavLink
//                     to="/"
//                     className="font-medium text-blue-600 hover:underline dark:text-blue-500"
//                   >
//                     Login here
//                   </NavLink>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Signup;

import { useFormik } from "formik";
import { inputSchemas } from "../schemas";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { registerHandler } from "../firebase";
import Input from "./input";

function Signup() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const { values, handleSubmit, handleBlur, handleChange, errors, touched } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
      },
      validationSchema: inputSchemas,
    });

  const submit = async (e) => {
    e.preventDefault();
    const user = await registerHandler(values.email, values.password);
    if (user) {
      navigate("/", {
        replace: true,
      });
    }
  };

  const inputs = [
    {
      id: 1,
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter your username",
      value: values.username,
      errorMessage: errors.username,
      touched: touched.username,
    },
    {
      id: 2,
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 4,
      name: "confirmpassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Enter your Confirm Password",
      value: values.confirmpassword,
      errorMessage: errors.confirmpassword,
      touched: touched.confirmpassword,
    },
  ];

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-[#050e1d]">
        <div className="w-full h-full lg:w-3/4 lg:h-full flex justify-center items-center bg-white rounded-2xl drop-shadow-2xl ">
          <div className="w-full lg:w-1/2 h-full flex justify-center  items-center ">
            <form
              onSubmit={handleSubmit}
              className="w-full h-full flex flex-col justify-center items-center "
            >
              <h1 className="text-4xl mb-10 font-pacifico text-[#050e1d]">
                Register
              </h1>
              {inputs.map((input) => (
                <Input
                  key={input.id}
                  {...input}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              ))}
              <div className="flex items-start w-1/2 mt-3 mb-5">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  I agree with terms conditions and privacy policy
                </label>
              </div>
              <button
                className="bg-[#082a4e] text-white py-3 px-4 w-1/2 rounded-xl"
                type="submit"
                onClick={submit}
              >
                Create Account
              </button>
              <div className="mt-6 text-gray-600">
                {" "}
                Already have an account ?{" "}
                <Link
                  to="/"
                  className="text-[#050e1d] px-2 font-bold cursor-pointer"
                >
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
