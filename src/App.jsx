// import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ProductTable from "./components/ProductTable";
import "./App.css";

const App = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow">
        {/* Header */}
        <Header />

        {/* Product Table */}
        <ProductTable />
      </div>
    </div>
  );
};

export default App;
