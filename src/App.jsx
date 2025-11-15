import { Routes, Route } from "react-router-dom";
import PdfViewerPage from "./components/PdfViewerPage";
import DigitalHerbalGardenCard from "./Pages/DigitalHerbalGardenCard";
import DigitalHerbalGardenTable from "./Pages/DigitalHerbalGardenTable";
import DigitalHerbalGardenFinal from "./Pages/DigitalHerbalGardenFinal";

function App() {
  return (
    <Routes>
      <Route path="/pdf/:name" element={<PdfViewerPage />} />
      <Route path="garden-card" element={<DigitalHerbalGardenCard />} />
      <Route path="garden-table" element={<DigitalHerbalGardenTable />} />
      <Route path="/" element={<DigitalHerbalGardenFinal />} />
    </Routes>
  );
}

export default App;
