import Navibar from "./Components/Navibar";
import { routes } from "./Routes";
import Footer from "./Components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App container">
        <Navibar></Navibar>
        <div className=" routes">
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
      </div>
        <Footer/> 
    </Router>
  );
}

export default App;
