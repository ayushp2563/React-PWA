// import {
//   ArrowLeftRightIcon,
//   BarChart3Icon,
//   Clock4Icon,
//   LayoutDashboard,
//   LogOut,
//   Atom,
// } from "lucide-react";

// import { NavLink } from "react-router-dom";
// import { signOut } from "firebase/auth";
// import { auth } from "../../firebase";

// function Sidebar() {
//   const logout = async () => {
//     try {
//       // eslint-disable-next-line no-undef
//       await signOut(auth);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div
//       className={
//         " flex flex-col border border-r-1 bg-[#f3eaea] relative py-1 w-auto text-xs md:py-10 md:px-10 md:w-1/6 "
//       }
//     >
//       <div className=" logo-div flex space-x-4 items-center font-bold text-xl">
//         <Atom />
//         <span className="block">Admin Panel</span>
//       </div>
//       <div className="flex flex-col space-y-8 mt-12">
//         <div className="nav-links w-full">
//           <div className="flex space-x-3 w-full p-2 rounded bg-[#d2c841]  text-white">
//             <LayoutDashboard />
//             <button className={"block"}>Dashboard</button>
//           </div>
//         </div>

//         <div className="nav-links w-full">
//           <div className="flex space-x-3 w-full p-2 rounded  hover:bg-sky-500">
//             <Clock4Icon />
//             <button className={"block"}>Acticity</button>
//           </div>
//         </div>

//         <div className="nav-links w-full">
//           <div className="flex space-x-3 w-full p-2 rounded  hover:bg-sky-500 ">
//             <BarChart3Icon />
//             <button className={!"block"}>Analytics</button>
//           </div>
//         </div>
//         <div className="nav-links w-full">
//           <div className="flex space-x-3 w-full p-2 rounded  hover:bg-sky-500">
//             <ArrowLeftRightIcon />
//             <button className={"block"}>Transactions</button>
//           </div>
//         </div>

//         <div className="nav-links w-full">
//           <NavLink to="/">
//             <button
//               className="flex space-x-3 w-full p-2 rounded  hover:bg-sky-500 width:20%"
//               onClick={logout}
//             >
//               <LogOut />
//               <span className={"block"}>Logout</span>
//             </button>
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;

import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare, FiFolder } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { logOut } from "../../firebase";
import { logout as logoutReducer } from "../../store/authReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const { user } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    await logOut();
    dispatch(logoutReducer());
    navigate("/", {
      replace: true,
    });
  };

  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "User", link: "/", icon: AiOutlineUser },
    { name: "Messages", link: "/", icon: FiMessageSquare },
    { name: "Analytics", link: "/", icon: TbReportAnalytics },
    { name: "File Manager", link: "/", icon: FiFolder },
    { name: "Setting", link: "/", icon: RiSettings4Line },
    {
      name: "Logout",
      onClick: { handleLogout },
      icon: FiLogOut,
      link: "/",
    },
  ];
  const [open, setOpen] = useState(true);

  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#e4dfdf] min-h-screen ${
          open ? "w-52" : "w-16"
        } duration-500 text-gray-800 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-[#e4dfdf] font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
