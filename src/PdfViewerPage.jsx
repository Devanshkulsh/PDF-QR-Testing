import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const PdfViewerPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const cloudName = "dccfvamjy";

  const pdfUrl = `https://res.cloudinary.com/${cloudName}/image/upload/v1762589749/${name}.pdf#toolbar=1&zoom=auto`;

  const [loading, setLoading] = useState(true);
  const [zoom, setZoom] = useState(1);

  // Convert filename to readable title
  const formattedName = name
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  const zoomIn = () => setZoom((prev) => Math.min(prev + 0.1, 2));
  const zoomOut = () => setZoom((prev) => Math.max(prev - 0.1, 0.6));

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-0 px-0">
      {/* Top Bar */}
      <div className="w-full bg-white shadow-md flex items-center justify-between px-4 py-3 sticky top-0 z-40">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-600 hover:text-gray-900 text-sm md:text-base"
        >
          ← Back
        </button>

        <h1 className="text-base md:text-xl font-medium text-gray-800 text-center truncate max-w-[60%]">
          {formattedName}
        </h1>

        <a
          href={pdfUrl}
          download
          className="px-3 py-1.5 bg-blue-600 text-white text-sm md:text-base rounded-lg hover:bg-blue-700 transition"
        >
          Download
        </a>
      </div>

      {/* PDF Container */}
      <div className="w-full max-w-5xl mt-4 bg-white shadow-xl rounded-xl overflow-hidden border px-0">
        {loading && (
          <div className="flex justify-center items-center h-[80vh]">
            <div className="h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        <iframe
          src={pdfUrl}
          title={name}
          loading="lazy"
          onLoad={() => setLoading(false)}
          style={{ transform: `scale(${zoom})`, transformOrigin: "top center" }}
          className={`w-full h-[85vh] transition transform duration-200 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>

      {/* Zoom Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <button
          onClick={zoomIn}
          className="bg-white border shadow-md rounded-full w-12 h-12 flex items-center justify-center text-xl hover:bg-gray-100"
        >
          +
        </button>
        <button
          onClick={zoomOut}
          className="bg-white border shadow-md rounded-full w-12 h-12 flex items-center justify-center text-xl hover:bg-gray-100"
        >
          –
        </button>
      </div>
    </div>
  );
};

export default PdfViewerPage;
