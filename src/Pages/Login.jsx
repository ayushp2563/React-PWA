// import { AiOutlineTwitter } from "react-icons/ai";
// import { NavLink, useNavigate } from "react-router-dom";
// import { FaGoogle } from "react-icons/fa6";
// import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
// //import {Formik} from 'formik';
// import toast, { Toaster } from "react-hot-toast";

// const Login = () => {
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");

//   const navigate = useNavigate();

//   const handleClick = () => {
//     setTimeout(() => {
//       navigate("/dashboard");
//     }, 1000);
//   };

//   const notify = () => toast("✅ Logged In Successfully.");

//   const login = async () => {
//     try {
//       const user = await signInWithEmailAndPassword(
//         auth,
//         loginEmail,
//         loginPassword
//       );
//       console.log(user);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <>
//       <section className="bg-gray-900 h-4/5 md:h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-20 items-center my-2 mx-5 md:mx-0 md:my-0">
//         <div className="md:w-15  max-w-sm">
//           <img
//             src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
//             alt="Sample image"
//           />
//         </div>
//         <div className="md:w-15  max-w-sm">
//           <div className="text-center md:text-left">
//             <label className="mr-1  text-gray-900 dark:text-white">
//               Sign in with
//             </label>
//             <button
//               type="button"
//               className="mx-1 h-9 w-9  rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
//               // onClick={signInWithGoogle}
//             >
//               <FaGoogle
//                 size={20}
//                 className="flex justify-center items-center w-full"
//               />
//             </button>
//             <button
//               type="button"
//               className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
//             >
//               <AiOutlineTwitter
//                 size={20}
//                 className="flex justify-center items-center w-full"
//               />
//             </button>
//           </div>
//           <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
//             <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
//               Or
//             </p>
//           </div>
//           <input
//             className="text-sm w-4/5 md:w-full mx-6 sm:mx-0 sm:px-2 py-2 border border-solid border-gray-300 rounded"
//             type="text"
//             placeholder="Email Address"
//             onChange={(event) => setLoginEmail(event.target.value)}
//           />
//           <input
//             className="text-sm w-4/5 md:w-full mx-6 sm:mx-0 py-2 border border-solid border-gray-300 rounded mt-4"
//             type="password"
//             placeholder="Password"
//             onChange={(event) => setLoginPassword(event.target.value)}
//           />

//           <div className="text-center md:text-left">
//             <button
//               className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
//               type="submit"
//               onClick={() => {
//                 login();
//                 notify();
//                 handleClick();
//               }}
//             >
//               Login
//             </button>

//             <Toaster />
//           </div>
//           <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
//             Don&apos;t have an account?{" "}
//             <NavLink
//               to="/signup"
//               className="text-red-600 hover:underline
//                       hover:underline-offset-4"
//             >
//               {" "}
//               Register
//             </NavLink>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Login;

// import { AiOutlineTwitter } from "react-icons/ai";
// import { NavLink, useNavigate } from "react-router-dom";
// import { FaGoogle } from "react-icons/fa6";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
// import { Formik } from "formik";
// import * as Yup from "yup";
// //import toast, { Toaster } from "react-hot-toast";

// const validationSchema = Yup.object().shape({
//   loginEmail: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
//   loginPassword: Yup.string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Password is required"),
// });

// const Login = () => {
//   const navigate = useNavigate();

//   // const notify = () => toast("✅ Logged In Successfully.");

//   const login = async (loginEmail, loginPassword) => {
//     try {
//       await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
//         .then((userCredential) => {
//           const user = userCredential.user;
//           console.log("User signed in", user);
//           //notify(); // Call notify after successful authentication
//           navigate("/dashboard"); // Redirect to dashboard
//         })
//         .catch((error) => {
//           console.log("Error signing in:", error.message);
//           // Handle authentication error
//         });
//     } catch (error) {
//       console.log("Error signing in:", error.message);
//       // Handle authentication error
//     }
//   };

//   const handleSubmit = (values) => {
//     login(values.loginEmail, values.loginPassword);
//   };

//   return (
//     <>
//       <section className="bg-gray-900 h-4/5 md:h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-20 items-center my-2 mx-5 md:mx-0 md:my-0">
//         <div className="md:w-15  max-w-sm">
//           <img
//             src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
//             alt="Sample image"
//           />
//         </div>
//         <div className="md:w-15  max-w-sm">
//           <div className="text-center md:text-left">
//             <label className="mr-1  text-gray-900 dark:text-white">
//               Sign in with
//             </label>
//             <button
//               type="button"
//               className="mx-1 h-9 w-9  rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
//               // onClick={signInWithGoogle}
//             >
//               <FaGoogle
//                 size={20}
//                 className="flex justify-center items-center w-full"
//               />
//             </button>
//             <button
//               type="button"
//               className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
//             >
//               <AiOutlineTwitter
//                 size={20}
//                 className="flex justify-center items-center w-full"
//               />
//             </button>
//           </div>
//           <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
//             <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
//               Or
//             </p>
//           </div>
//           {/* <div
//             onSubmit={(e) => {
//               e.preventDefault();
//               const values = e.target.elements;
//               handleSubmit(values);
//             }}
//           > */}
//           <Formik
//             initialValues={{
//               loginEmail: "",
//               loginPassword: "",
//             }}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//           >
//             {({ handleChange, handleBlur, values, touched, errors }) => (
//               <>
//                 <input
//                   className="text-sm w-4/5 md:w-full mx-6 sm:mx-0 sm:px-2 py-2 border border-solid border-gray-300 rounded"
//                   type="email"
//                   placeholder="Email Address"
//                   name="loginEmail"
//                   value={values.loginEmail}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   autoComplete="username"
//                 />
//                 {touched.loginEmail && errors.loginEmail && (
//                   <div className="text-red-500">{errors.loginEmail}</div>
//                 )}

//                 <input
//                   className="text-sm w-4/5 md:w-full mx-6 sm:mx-0 py-2 border border-solid border-gray-300 rounded mt-4"
//                   type="password"
//                   placeholder="Password"
//                   name="loginPassword"
//                   value={values.loginPassword}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   autoComplete="current-password"
//                 />
//                 {touched.loginPassword && errors.loginPassword && (
//                   <div className="text-red-500">{errors.loginPassword}</div>
//                 )}

//                 <button
//                   className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
//                   onSubmit={(e) => {
//                     e.preventDefault();
//                     const values = e.target.elements;
//                     handleSubmit(values);
//                   }}
//                 >
//                   Login
//                 </button>
//               </>
//             )}
//           </Formik>
//           {/* </div> */}
//           <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
//             Don&apos;t have an account?{" "}
//             <NavLink
//               to="/signup"
//               className="text-red-600 hover:underline
//                       hover:underline-offset-4"
//             >
//               {" "}
//               Register
//             </NavLink>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Login;

import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login as loginReducer } from "../store/authReducer";
import { useNavigate } from "react-router-dom";
import { loginHandler } from "../firebase";
import Input from "./input";

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { values, handleSubmit, handleBlur, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const submit = async (e) => {
    e.preventDefault();
    const user = await loginHandler(values.email, values.password);
    if (user) {
      dispatch(loginReducer(user));
      navigate("/dashboard", {
        replace: true,
      });
    }
  };

  const inputs = [
    {
      id: 1,
      name: "email",
      label: "Emmail",
      type: "text",
      placeholder: "Enter your username",
      value: values.email,
    },
    {
      id: 2,
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      value: values.password,
    },
  ];

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-[#050e1d]">
        <div className="w-full h-full lg:w-3/4 lg:h-3/4 flex justify-center items-center bg-white rounded-2xl drop-shadow-2xl ">
          <div className="w-0 lg:w-1/2 h-full invisible lg:visible justify-center items-center">
            <img
              className="w-full h-full rounded-2xl "
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            />
          </div>
          <div className="w-full lg:w-1/2 h-full flex justify-center  items-center ">
            <form
              onSubmit={handleSubmit}
              className="w-full h-full flex flex-col justify-center items-center "
            >
              <h1 className="text-4xl mb-10 font-pacifico text-[#050e1d]">
                Sign In
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
                  Remember Me
                </label>
              </div>
              <button
                className="bg-[#082a4e] text-white py-3 px-4 w-10/12 sm:w-1/2 rounded-xl"
                onClick={submit}
              >
                Login
              </button>
              <div className="mt-6 text-gray-600">
                {" "}
                New Here ?{" "}
                <Link
                  to="/signup"
                  className="text-[#050e1d] px-2 font-bold cursor-pointer"
                >
                  Create an Account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
