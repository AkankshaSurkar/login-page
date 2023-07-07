import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import AuthPage from "./Pages/AuthPage";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import MainNavigation from "./Layout/MainNavigation";
import AuthContext from "./Store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <MainNavigation />

      <Routes>
        <Route path="/" exact element={<HomePage />} />
        {!authCtx.isLoggedIn && ( <Route path="/auth" element={<AuthPage />} />)}


        {authCtx.isLoggedIn && <Route path="/profile" element={<ProfilePage />} />}

      </Routes>
    </>
  );
}

export default App;
