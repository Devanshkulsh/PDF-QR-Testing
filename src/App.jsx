import { Routes, Route } from "react-router-dom";
import PdfViewerPage from "./components/PdfViewerPage";
import DigitalHerbalGardenTable from "./pages/DigitalHerbalGardenTable";
import DigitalHerbalGardenFinal from "./Pages/DigitalHerbalGardenFinal";

function App() {
  return (
    <Routes>
      <Route path="/pdf/:name" element={<PdfViewerPage />} />
      <Route path="garden-table" element={<DigitalHerbalGardenTable />} />
      <Route path="/" element={<DigitalHerbalGardenFinal />} />
    </Routes>
  );
}

export default App;
