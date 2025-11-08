import { Routes, Route } from "react-router-dom";
import PdfViewerPage from "./PdfViewerPage";

function App() {
  return (
    <Routes>
      <Route path="/pdf/:name" element={<PdfViewerPage />} />
    </Routes>
  );
}

export default App;
