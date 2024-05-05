import { Route, Router, Routes } from "react-router-dom";

import NavbarComponent from "./Components/NavbarComponent";
import FooterComponent from "./Components/FooterComponent";

import Homepage from "./Pages/HomePage";
import KelasPage from "./Pages/KelasPage";
import TestimonialPage from "./Pages/TestimonialPage";
import Syarat from "./Pages/Syarat";
import FaqPage from "./Pages/FaqPage";

function App() {
  return <div>
    <NavbarComponent />

    <Routes>
      <Route path="/" Component={Homepage}/>
      <Route path="/kelas" Component={KelasPage}/>
      <Route path="/testimonial" Component={TestimonialPage}/>
      <Route path="/faq" Component={FaqPage}/>
      <Route path="/syarat" Component={Syarat}/>
    </Routes>

    <FooterComponent />
  </div>;
}

export default App;
