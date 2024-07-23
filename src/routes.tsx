// src/routes.tsx
import { Routes, Route } from "react-router-dom";
import Body from "./pages/Body";
import Login from "./pages/Login";
import NewsDetail from "./pages/components/news/NewsDetail";
import NewsList from "./pages/components/news/NewsList";

const RoutesIndex: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/login" element={<Login />} />
      <Route path="/news" element={<NewsList />} />
      <Route path="/news/:id" element={<NewsDetail />} />
    </Routes>
  );
};

export default RoutesIndex;
