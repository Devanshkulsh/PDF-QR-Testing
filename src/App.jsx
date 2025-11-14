import { Routes, Route } from "react-router-dom";
import PdfViewerPage from "./PdfViewerPage";
import DigitalHerbalGarden from "./DigitalHerbalGarden";
import DigitalHerbalGarden2 from "./DigitalHerbalGarden2";
import DigitalHerbalGarden3 from "./DigitalHerbalGarden3";

function App() {
  return (
    <Routes>
      <Route path="/pdf/:name" element={<PdfViewerPage />} />
      <Route path="/" element={<DigitalHerbalGarden />} />
      <Route path="garden" element={<DigitalHerbalGarden2 />} />
      <Route path="herbal-garden" element={<DigitalHerbalGarden3 />} />
    </Routes>
  );
}

export default App;
