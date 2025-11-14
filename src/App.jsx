import { Routes, Route } from "react-router-dom";
import PdfViewerPage from "./PdfViewerPage";
import DigitalHerbalGarden from "./DigitalHerbalGarden";
import DigitalHerbalGarden2 from "./DigitalHerbalGarden2";

function App() {
  return (
    <Routes>
      <Route path="/pdf/:name" element={<PdfViewerPage />} />
      <Route path="/" element={<DigitalHerbalGarden />} />
      <Route path="garden" element={<DigitalHerbalGarden2 />} />
    </Routes>
  );
}

export default App;
