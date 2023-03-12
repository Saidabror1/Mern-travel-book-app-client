import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar";
import Main from "./pages/Main"
import AddBooks from "./pages/AddBooks"
import UpdateBook from "./components/UpdateBook"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="container">
      <div className="raw">
        <div className="col-lg-8 offset-lg-2">
          <Routes>
            <Route path={"/"} exect element={<Main/>}></Route>
            <Route path={"/add"} element={<AddBooks/>}></Route>
            <Route path={"/update/:id"} element={<UpdateBook/>}></Route>
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
