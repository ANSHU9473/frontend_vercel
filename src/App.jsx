import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Tasks from "./pages/Tasks";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      setIsLoggedIn(true);
    }
  }, []);

 
  const handleLogout = () => {
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <div className="p-4 min-h-screen bg-gray-100">
       
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded float-right"
          >
            Logouts
          </button>
        )}

        <Routes>
         
          <Route
            path="/"
            element={
              isLoggedIn ? <Navigate to="/tasks" replace /> : <Navigate to="/login" replace />
            }
          />

        
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

         
          <Route path="/signup" element={<Signup />} />

      
          <Route
            path="/tasks"
            element={isLoggedIn ? <Tasks /> : <Navigate to="/login" replace />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
