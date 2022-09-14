import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/Navigation/Navigation";
import Home from "./routes/Home/Home";
import Authentication from "./routes/Authentication/Authentication";
import Shop from "./components/Shop/Shop";

const App = () => {
  return (
    //Routes component allows to register this Route components
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* beside index there mustn't be defined a path in the Route */}
        <Route index element={<Home />} />
        {/* nested Routes need match of parent path + own path */}
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication/>} />
      </Route>
    </Routes>
  );
};

export default App;
