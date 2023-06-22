import { Routes, Route } from "react-router-dom";

// import UserProfile from "./Profile/UserProfile";
import AuthPage from "./Pages/AuthPage";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import MainNavigation from "./Layout/MainNavigation";

function App() {
  return (
    <>
      <MainNavigation />

      <Routes>
        <Route path="/" exact element={<HomePage />} />

        <Route path="/auth" element={<AuthPage />} />

        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
