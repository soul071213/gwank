import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouterTest from "./RouterTest";
import Home from "../src/pages/Home";
import Blogs from "../src/pages/Blogs";
import Contact from "pages/Contact";
import NoPage from "../src/pages/NoPage";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RouterTest />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NoPage />} />

    </Routes>

  );

}