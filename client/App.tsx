import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Categories from "./pages/Categories";
import Topic from "./pages/Topic";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/topic/:id" element={<Topic />} />
        
        {/* Placeholder routes for navigation items */}
        <Route path="/login" element={<Placeholder title="Login" message=" functionality coming soon!" />} />
        <Route path="/profile" element={<Placeholder title="Profile" message=" page is under construction" />} />
        <Route path="/info" element={<Placeholder title="Info" message=" page is being prepared" />} />
        
        {/* 404 and catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
