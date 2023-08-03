import Navibar from "./Components/Navibar";
import { routes } from "./Routes";
import Footer from "./Components/footer"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Navibar></Navibar>       
       <div className="container-fluid align-items-center bg-success d-flex justify-content-center" 
       style={{height:800}} >
       <Routes>
          {routes.map((route, index) => (
            <Route
              exact={route.exact}
              path={route.path}
              key={index}
              element={<route.component />} // element prop'unu ekleyin
            />
          ))}
        </Routes>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
