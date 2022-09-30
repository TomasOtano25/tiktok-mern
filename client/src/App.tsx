import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UploadVideoPage from "./pages/UploadVideo";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <h1>TIKTOK Clone</h1>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadVideoPage />} />
          <Route path="/*" element={<UploadVideoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
