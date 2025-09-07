import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./components/home";
import Intro from "./components/Intro";
import SidebarNav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./components/Contact"
// Pandals
import PandalDetails from "./components/PandalDetails";
import DistrictList from "./components/DistrictList";

// Food
import FoodDetails from "./components/FoodDetail";
import FoodList from "./components/FoodList";

// Shops
import ShopDetails from "./components/ShopDetail";
import ShopList from "./components/ShopList";

function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <Router>
      {!introDone ? (
        <Intro onFinish={() => setIntroDone(true)} />
      ) : (
        <div className="flex">
          {/* Sidebar */}
          <SidebarNav />

          {/* Main Content */}
          <main className="flex-1 md:ml-64 min-h-screen bg-gray-50">
            <Routes>
              {/* Home */}
              <Route path="/" element={<HomePage />} />

              {/* Pandals */}
              <Route path="/pandals/:district" element={<DistrictList />} />
              <Route path="/pandals/:district/:id" element={<PandalDetails />} />

              {/* Food */}
              <Route path="/food/:district" element={<FoodList />} />
              <Route path="/food/:district/:id" element={<FoodDetails />} />

              {/* Shops */}
              <Route path="/shops/:district" element={<ShopList />} />
              <Route path="/shops/:district/:id" element={<ShopDetails />} />
              <Route path="/contact" element={<Contact/>}/>
            </Routes>

            <Footer />
          </main>
        </div>
      )}
    </Router>
  );
}

export default App;
