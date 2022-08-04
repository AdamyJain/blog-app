import TopBar from "./components/topbar/TopBar"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <TopBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/posts" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/write" element={<Write />} />
            <Route path="/post/:id" element={<Single />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
