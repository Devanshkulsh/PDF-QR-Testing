import { Routes, Route } from "react-router-dom";
import PdfViewerPage from "./components/PdfViewerPage";
import DigitalHerbalGardenFinal from "./Pages/DigitalHerbalGardenFinal";

function App() {
  return (
    <Routes>
      <Route path="/pdf/:name" element={<PdfViewerPage />} />
      <Route path="/" element={<DigitalHerbalGardenFinal />} />
    </Routes>
  );
}

export default App;
