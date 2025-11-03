import { useContext } from "react";
import { CandidateContext } from "../../Provider/CandidateContext";
import certIcon from "../../assets/certificate.png";

const CertificateSection = () => {
  const { candidateById } = useContext(CandidateContext);
  const hasCertification =
    candidateById?.certifications && candidateById?.certifications?.length > 0;

  if (!hasCertification) return null;
  return (
    <>
      <div className="tw-mb-8">
        <h2 className="tw-text-xl tw-font-semibold tw-mb-6">Certificates</h2>
        <div className="tw-space-y-6">
          {candidateById?.certifications.map((e) => {
            return (
              <div className="tw-flex tw-gap-4">
                <div className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-bg-gray-100 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-white">
                  <img src={certIcon} alt="" className="tw-w-6 tw-h-6" />
                </div>
                <div className="tw-flex-grow">
                  <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900">
                    {e.certificationName}
                  </h3>
                  <div className="tw-flex tw-justify-between">
                    {/* <p className="tw-text-gray-700">{e.location} • {e.degreeCertification}</p> */}
                    <p className="tw-text-gray-700">
                      {e.certificationDate ?? "-"}
                    </p>
                  </div>
                  {/* <p className="tw-text-gray-500 tw-mt-1">
                        Healthcare Interest — become an expert on emerging healthcare programs and excited to speak with providers
                        about the future of healthcare
                    </p> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CertificateSection;
