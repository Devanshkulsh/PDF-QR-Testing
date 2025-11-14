import { Routes, Route } from "react-router-dom";
import PdfViewerPage from "./PdfViewerPage";
import DigitalHerbalGarden from "./DigitalHerbalGarden";

function App() {
  return (
    <Routes>
      <Route path="/pdf/:name" element={<PdfViewerPage />} />
      <Route path="/" element={<DigitalHerbalGarden />} />
    </Routes>
  );
}

export default App;
