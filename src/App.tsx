import { Route, Routes } from "react-router-dom";
import "./App.scss";
import mainRoutes from "./routes";

function App() {
  return (
    <>
      <Routes>
        {mainRoutes.map((route: any) => (
          <Route element={route.element} path={route.link} key={route.link} />
        ))}
      </Routes>
    </>
  );
}

export default App;
