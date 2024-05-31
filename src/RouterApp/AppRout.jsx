import {  Routes, Route, HashRouter } from "react-router-dom";
import FilterProducts from "../Components/FilterProducts/FilterProducts";
import App from "../App/App";
import SingleProducts from "../Components/FilterProducts/SingleProducts";
import { useSelector } from "react-redux";
import Login from "../Components/Login/Login";
import loginSelector from "../Selectors/Login/loginSelector";
import ProductSection from "../Components/ProductSection/ProductSection";
export default function AppRout(){
const user = useSelector(loginSelector)
const {loginUser} = user
console.log("user",user)
console.log("loginUser",loginUser)

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={loginUser ? <App/>:<Login/>} ></Route>
          {/* <Route path="/login" element={<Login/>}></Route> */}
          <Route path="/filterProducts/:type" element={<FilterProducts />}></Route>
          <Route path="/filterProducts/:type/:id" element={<SingleProducts />}></Route>
          <Route path="/categories" element={<ProductSection/>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}
