import { useState } from "react";
import { auth } from "../../firebase";
import Chart from "./Chart";
import { onAuthStateChanged } from "firebase/auth";
import Sidebar from "./Sidebar";
import PieChart from "./PieChart";
import { DonughtChart } from "./DonughtChart";

function Dashboard() {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return (
    <>
      <div className="flex dark:bg-gray-900">
        <Sidebar />
        <div className="dark:text-white flex flex-col py-10 px-4 md:px-16 h-screen overflow-y-auto w-full">
          <h2>Welcome </h2> {user?.email}
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 py-6">
            <div className="flex flex-col rounded-md border w-full md:w-[400px] h-[150px] p-8 justify-center">
              <h2>ABC</h2>
              <p className="dark:text-white mt-3">Your Data</p>
            </div>
            <div className="flex flex-col rounded-md border w-full md:w-[400px] h-[150px] p-8 justify-center">
              <h2>XYZ</h2>
              <p className="dark:text-white mt-3">Your Info</p>
            </div>
          </div>
          <div className="flex space-x-8 py-6 w-full md:w-4/5">
            <div className="flex flex-col rounded-md border w-full p-8 justify-center">
              Expenses Graph
              <Chart />
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 py-6">
            <div className="flex flex-col rounded-md border w-full md:w-[500px] h-[500px] p-8 justify-center">
              Pie Chart
              <PieChart />
            </div>
            <div className="flex flex-col rounded-md border w-full md:w-[500px] h-[500px] p-8 justify-center">
              Donught Chart
              <DonughtChart />
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 py-6">
            <div className="flex flex-col rounded-md border w-full md:w-[400px] h-[200px] p-8 justify-center">
              <h2>Your Activity</h2>
              <li className="text-gray-500 mt-3">Sent Rs 10000 to friend</li>
            </div>
            <div className="flex flex-col rounded-md border w-full md:w-[400px] h-[200px] p-8 justify-center">
              <h2>Pending Bills</h2>
              <li className="text-gray-500 mt-3">Broadband bill: Rs 1000</li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
