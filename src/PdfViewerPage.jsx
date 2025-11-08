import { useParams } from "react-router-dom";
import { useState } from "react";

const PdfViewerPage = () => {
  const { name } = useParams();
  const cloudName = "dccfvamjy";

  const pdfUrl = `https://res.cloudinary.com/${cloudName}/image/upload/v1762589749/${name}.pdf#toolbar=1&zoom=auto`;

  const [loading, setLoading] = useState(true);

  // Convert filename to readable title
  const formattedName = name
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-4">
      {/* Page Title */}
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
        {formattedName}
      </h1>

      {/* PDF Container */}
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-xl overflow-hidden border">
        {loading && (
          <div className="flex justify-center items-center h-[80vh] text-gray-500 text-lg">
            Loading PDF...
          </div>
        )}

        <iframe
          src={pdfUrl}
          title={name}
          onLoad={() => setLoading(false)}
          className={`w-full h-[85vh] transition-opacity duration-300 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>
    </div>
  );
};

export default PdfViewerPage;
