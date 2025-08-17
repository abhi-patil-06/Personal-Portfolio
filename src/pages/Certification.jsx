import React, { useState } from "react";
import { Award, X } from "lucide-react";

const certifications = [
  {
    title: "SQL Certification",
    issuer: "Udemy",
    date: "Jul 2024",
    imageUrl: "certificate/sql-certificate.jpg",
  },
  {
    title: "Website Design",
    issuer: "Digital Pushkaraj",
    date: "Nov 2021",
    imageUrl: "certificate/website-design.jpg",
  },
  {
    title: "Industrial Training",
    issuer: "Softron",
    date: "Sep 2021",
    imageUrl: "certificate/industry-training.jpg",
  },
  {
    title: "Airtificial Intelligence",
    issuer: "TCS ion",
    date: "Jan 2024",
    imageUrl: "certificate/ai-tcs.png",
  },
];

const CertificationSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCert(null);
  };

  return (
    <section id="certifications" className="pt-30 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="  p-8 pt-25 shadow-lg flex flex-col items-center text-center group"
            >
              <div className="p-4 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 mb-6 text-white shadow-md">
                <Award size={40} />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {cert.title}
              </h3>
              <p className="text-gray-400 mb-1 italic">{cert.issuer}</p>
              <p className="text-gray-500 text-sm">{cert.date}</p>
              <button
                onClick={() => openModal(cert)}
                className="mt-4 inline-block px-4 py-1 rounded-full bg-blue-500 text-white text-xs font-semibold hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
              >
                View Credential
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {modalOpen && selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-slate-800 rounded-2xl max-w-lg w-full p-6 relative shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close icon top right */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white focus:outline-none transition"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Certificate Image */}
            <img
              src={selectedCert.imageUrl}
              alt={`${selectedCert.title} certificate`}
              className="mx-auto rounded-md shadow-md mb-6 max-h-64 object-contain"
            />

            <h3 className="text-white text-xl font-semibold mb-1">
              {selectedCert.title}
            </h3>
            <p className="text-gray-400 italic mb-1">{selectedCert.issuer}</p>
            <p className="text-gray-500 mb-6">{selectedCert.date}</p>

            <button
              onClick={closeModal}
              className="block w-full py-2 mt-4 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-semibold transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificationSection;
