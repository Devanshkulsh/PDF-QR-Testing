import { useState } from "react";

const DigitalHerbalGarden2 = () => {
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

  return (
    <div className="min-h-screen bg-gray-50 py-8 xs:py-12 px-2 sm:px-4 lg:px-8">
      
      {/* Title Section */}
      <div className="text-center mb-10 xs:mb-12">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-green-900 tracking-tight leading-snug">
          🌿 Digital Herbal Garden
        </h1>
        <p className="text-base xs:text-xl text-gray-600 mt-3 max-w-2xl mx-auto px-4">
          Explore the medicinal properties and detailed information of various traditional herbs.
        </p>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Table Layout */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl border border-gray-200">
        
        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full divide-y divide-gray-200">
            
            {/* Table Header */}
            <thead className="bg-green-100/50">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-bold text-green-700 uppercase tracking-wider w-1/4 sm:w-1/6"
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-bold text-green-700 uppercase tracking-wider min-w-[150px]"
                >
                  Plant Name
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-center text-xs font-bold text-green-700 uppercase tracking-wider w-1/4 sm:w-1/6"
                >
                  Details
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="bg-white divide-y divide-gray-100">
              {plants.map((plant, index) => (
                <tr 
                  key={index} 
                  className="hover:bg-yellow-50 transition duration-150 ease-in-out"
                >
                  {/* Image Cell */}
                  <td className="p-2 sm:p-4 whitespace-nowrap">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-lg overflow-hidden border border-gray-300 mx-auto">
                      <img
                        src={plant.image}
                        alt={plant.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </td>
                  
                  {/* Title Cell */}
                  <td className="px-4 py-3 sm:py-4">
                    <div className="text-sm sm:text-lg font-semibold text-green-800">
                      {plant.title}
                    </div>
                  </td>

                  {/* Button Cell */}
                  <td className="px-4 py-3 sm:py-4 whitespace-nowrap text-center">
                    <button
                      onClick={() => setOpenPdf(plant.pdf)}
                      className="
                        flex items-center justify-center gap-1 
                        bg-green-600 text-white 
                        px-2 py-1.5 rounded-full text-xs sm:text-sm
                        shadow hover:bg-green-700 
                        transition-all font-medium
                      "
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
          onClick={() => setOpenPdf(null)}
        >
          <div
            className="
              bg-white rounded-xl // Slightly smaller rounding on mobile
              w-full 
              h-screen sm:h-[95vh] // Use full viewport height on mobile for maximum space
              max-w-full 
              sm:max-w-4xl 
              lg:max-w-6xl 
              overflow-hidden 
              shadow-2xl border-2 border-green-700 // Reduced size for smaller screens
              transition-all duration-500 ease-in-out
              transform scale-100 opacity-100
              flex flex-col
            "
            onClick={(e) => e.stopPropagation()}
          >
            
            <div 
              id="modal-header"
              // Reduced padding on mobile and made text smaller
              className="flex justify-between items-center p-3 sm:p-5 border-b bg-green-700 text-white shadow-md shrink-0"
            >
              <h3 className="text-lg sm:text-2xl font-extrabold">Plant Details (PDF Viewer)</h3>
              <button
                className="text-yellow-300 hover:text-white transition-colors p-1 rounded-full hover:bg-green-800"
                onClick={() => setOpenPdf(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>

            <div
              className="
                bg-gray-100
                h-full
                overflow-y-auto
                grow
              "
            >
              <iframe
                src={openPdf}
                className="w-full h-full border-none"
                title="PDF Viewer"
              ></iframe>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default DigitalHerbalGarden2;