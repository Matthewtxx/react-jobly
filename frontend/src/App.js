// App.js
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from "../src/routes-nav/Routes";

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
