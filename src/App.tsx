import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import KidsLayout from "./components/Layout/Layout";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Routes>
          <Route path="/*" element={<KidsLayout />} />
        </Routes>
        <ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </React.Fragment>
  );
}

export default App;
