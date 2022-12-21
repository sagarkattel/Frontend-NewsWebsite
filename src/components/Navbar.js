
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Nav from "./Nav";
import {New} from "../pages/New";
import {Home} from "../pages/Home";
import {Trending} from "../pages/Trending";
import {Popular} from "../pages/Popular";
import {Categories} from "../pages/Categories";
// import Login from "./Login";
import "../styles/navbar.css";
function Navbar() {
  
  return (
    <>
     
       <BrowserRouter>
        <Nav />
        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/new" element={<New />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default Navbar;