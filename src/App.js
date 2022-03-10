import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/composites/Header";
import Footer from "./components/Footer";

import RecipeList from "./pages/RecipeList";
import Home from "./pages/Home";
import Help from "./pages/Help";
import TestingArea from "./pages/TestingArea";
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile";
import SearchMap from "./pages/SearchMap";

import { useAuthContext } from "./hooks/AuthContext";
import { fetchUserData } from "./services/Auth";
import PrivateRoute from "./components/utility/PrivateRoute";
import SplashScreen from "./components/SplashScreen";

export default function App() {
  const { setUserData } = useAuthContext();

  useEffect(() => {
    fetchUserData(setUserData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <div
        style={{
          height: "75vh",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route
            path="/recipes"
            element={
              <PrivateRoute>
                <RecipeList />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="/testing" element={<TestingArea />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/splash" element={<SplashScreen />} />
          <Route path="/map" element={<SearchMap />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
