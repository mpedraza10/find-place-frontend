// React imports
import React from "react";

// Pages
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

// Packages
import { Routes, Route } from "react-router-dom";

const App = () => {
	return (
    <main>      
      <MainNavigation />
      <Routes>      
        <Route path="/" element={<Users />} />
        <Route path="/places/new" element={<NewPlace />} />
      </Routes>
    </main>
	);
};

export default App;
