import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Home2 } from "./pages";

const Application = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen h-screen w-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ceva" element={<Home2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Application;
