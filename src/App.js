 
import Navibar from "./Components/Navibar";
import { routes } from "./Routes";
import Footer from "./Components/footer";
import { BrowserRouter , Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <Navibar></Navibar>
        <div className=" routes">
          <Routes>
            {routes.map((route, index) => (
              <Route {...route}
              />
            ))}
          </Routes>
        </div>
        <Footer/> 

      </div>
    </BrowserRouter>
  );
}

export default App;
