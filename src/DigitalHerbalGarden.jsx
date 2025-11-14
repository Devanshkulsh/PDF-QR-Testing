import { useState } from "react";

const DigitalHerbalGarden = () => {
  const [openPdf, setOpenPdf] = useState(null);

  const plants = [
    {
      title: "Bala (Sida Cordifolia)",
      image: "/assets/bala.webp",
      pdf: "https://res.cloudinary.com/dccfvamjy/image/upload/v1762753313/Bala_Sida_Cordifolia_bsnyxt.pdf",
    },
    {
      title: "Dadim (Pomegranate)",
      image: "/assets/dadim.webp",
      pdf: "https://res.cloudinary.com/dccfvamjy/image/upload/v1762589749/Dadim_prgcc2.pdf",
    },
    {
      title: "Dhanyak (Coriander)",
      image: "/assets/dhanyak.webp",
      pdf: "https://res.cloudinary.com/dccfvamjy/image/upload/v1762589749/dhanyak_asfllh.pdf",
    },
    {
      title: "Emblica (Amla/Gooseberry)",
      image: "/assets/emblica.webp",
      pdf: "https://res.cloudinary.com/dccfvamjy/image/upload/v1762589749/emblica_oifmnm.pdf",
    },
  ];

  const PlantCard = ({ plant }) => (
    <div
      className="
        bg-white rounded-3xl border border-gray-100 shadow-xl 
        hover:shadow-2xl hover:border-green-500 
        hover:scale-[1.02]
        transition-all duration-500 ease-in-out cursor-pointer overflow-hidden
        flex flex-col
      "
    >
      {/* Image with slight crop for modern look */}
      <div className="overflow-hidden h-60">
        <img
          src={plant.image}
          alt={plant.title}
          className="
            w-full h-full 
            object-cover 
            transition-transform duration-500 ease-in-out
            hover:scale-110
          "
        />
      </div>

      {/* Title + Button */}
      <div className="p-6 flex flex-col items-center gap-4 grow justify-center bg-gray-50/50">
        <h2 className="text-2xl font-bold text-green-800 text-center tracking-tight">
          {plant.title}
        </h2>

        {/* View PDF Button */}
        <button
          onClick={() => setOpenPdf(plant.pdf)}
          className="
            flex items-center justify-center gap-2 
            bg-green-600 text-white 
            px-6 py-3 rounded-full 
            shadow-lg hover:bg-green-700 
            transition-all duration-300 font-semibold text-lg
            ring-2 ring-green-500/50 hover:ring-green-700/70
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          View Details
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Title Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-green-900 tracking-tight leading-snug">
          🌿 Digital Herbal Garden
        </h1>
        <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          Explore the medicinal properties and detailed information of various
          traditional herbs.
        </p>
        <div className="w-20 h-1.5 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Cards Grid */}
      <div
        className="
          grid grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4 
          gap-10
        "
      >
        {plants.map((plant, index) => (
          <PlantCard key={index} plant={plant} />
        ))}
      </div>

      {/* PDF Modal (Mobile improvements applied here) */}
      {openPdf && (
        <div
          className="
            fixed inset-0 
            backdrop-blur-md bg-black/60 
            flex items-center justify-center 
            p-1 xs:p-2 sm:p-4 // Reduced padding for better use of mobile screen space
            z-100
          "
          onClick={() => setOpenPdf(null)} // Close on clicking outside
        >
          <div
            className="
              bg-white rounded-xl // Reduced rounding
              w-full 
              h-screen sm:h-[95vh] // Use full viewport height on mobile
              max-w-full 
              sm:max-w-4xl 
              lg:max-w-6xl 
              overflow-hidden 
              shadow-2xl border-2 border-green-700 // Reduced size
              transition-all duration-500 ease-in-out
              transform scale-100 opacity-100
              flex flex-col
            "
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Header - Optimized for mobile */}
            <div
              id="modal-header"
              className="flex justify-between items-center p-3 sm:p-5 border-b bg-green-700 text-white shadow-md shrink-0"
            >
              <h3 className="text-lg sm:text-2xl font-extrabold">
                Plant Details (PDF Viewer)
              </h3>
              <button
                className="text-yellow-300 hover:text-white transition-colors p-1 rounded-full hover:bg-green-800"
                onClick={() => setOpenPdf(null)}
              >
                {/* Modern close icon (X) - Smaller on mobile */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* PDF Viewer - Takes all remaining height */}
            <div
              className="
                bg-gray-100 
                overflow-y-auto 
                h-full
              "
            >
              <iframe
                src={openPdf}
                className="w-full h-full border-none" // h-full ensures iframe takes 100% of the parent div
                title="PDF Viewer"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DigitalHerbalGarden;
