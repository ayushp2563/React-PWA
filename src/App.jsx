import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
