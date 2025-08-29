import { useContext, useState } from "react";
import { CandidateContext } from "../../Provider/CandidateContext";

const NameSection = () => {
  const {candidateById} = useContext(CandidateContext);

  const [isDownloading, setIsDownloading] = useState(false);

  const downloadCv = async () => {
    if (!candidateById?.cvUrl) return;
    
    setIsDownloading(true);
    try {
      const url = `http://vaibhavarora2-001-site16.dtempurl.com/${candidateById.cvUrl}`;
      const filename = candidateById.cvUrl.split('/').pop() || 'cv.pdf';
      
      // Fetch the file
      const response = await fetch(url);
      const blob = await response.blob();
      
      // Create a blob URL and trigger download
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the blob URL
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback to the original method if fetch fails
      const fallbackUrl = `http://vaibhavarora2-001-site16.dtempurl.com/${candidateById.cvUrl}`;
      window.open(fallbackUrl, '_blank');
    } finally {
      setIsDownloading(false);
    }
  };
  return (
    <>
      <div className="tw-mx-auto">
        <div className="tw-rounded-xl tw-overflow-hidden tw-border tw-border-gray-100 tw-bg-white">

          {/* Content section */}
          <div className="tw-pt-24 tw-pb-6 tw-px-6">
            <div className="tw-flex tw-justify-between tw-items-center">
              <div>
                <h1 className="tw-text-2xl tw-font-bold tw-text-gray-900">
                  {candidateById.firstName} {candidateById.lastName}
                </h1>
                <p className="tw-text-lg tw-text-gray-800 tw-mt-1">{candidateById.currentCompanyName}</p>
                <div className="tw-flex tw-items-center tw-mt-3 tw-text-gray-500">
                  <span>{candidateById.locationCity}</span>
                  {/* <span className="tw-mx-2">•</span>
                  <span>14 hours ago</span> */}
                </div>
              </div>
              <div>
                  <button 
                  className="tw-text-black tw-text-sm tw-cursor-pointer tw-px-3 tw-py-2 tw-bg-[#dddd] tw-rounded-md"
                  onClick={downloadCv}
                  disabled={isDownloading}
                  >
                    Download Cv
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NameSection;
