import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ReaderPage from "./pages/Reader";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reader" element={<ReaderPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
