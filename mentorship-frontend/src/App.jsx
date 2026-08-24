import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Channels from "./pages/Channels";
import Channel from "./pages/Channel";
import Post from "./pages/Post";
import AskQuestion from "./pages/AskQuestion";

import Mentors from "./pages/Mentors";
import Resources from "./pages/Resources";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Announcements from "./pages/Announcements";
import MentorProfile from "./pages/MentorProfile";
import ResourceDetails from "./pages/ResourceDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Main Pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/channels" element={<Channels />} />

        {/* Channel */}
        <Route
          path="/channel/:channelId"
          element={<Channel />}
        />

        {/* Channel Announcements */}
        <Route
          path="/channel/:channelId/announcements"
          element={<Announcements />}
        />

        {/* Post */}
        <Route
          path="/post/:postId"
          element={<Post />}
        />

        {/* Ask Question */}
        <Route
          path="/ask-question"
          element={<AskQuestion />}
        />

        {/* Mentors */}
        <Route
          path="/mentors"
          element={<Mentors />}
        />

        {/* Resources */}
        <Route
          path="/resources"
          element={<Resources />}
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={<Profile />}
        />

        {/* Notifications */}
        <Route
          path="/notifications"
          element={<Notifications />}
        />

        <Route
  path="/mentor/:mentorId"
  element={<MentorProfile />}
/>

        <Route
  path="/resource/:resourceId"
  element={<ResourceDetails />}
/>

        {/* Default */}
        <Route
          path="*"
          element={<Login />}
        />



      </Routes>
    </BrowserRouter>
  );
}

export default App;