import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };
  return (
    <button className="tw-text-black tw-text-sm tw-cursor-pointer tw-px-3 tw-py-2 tw-bg-[#dddd] tw-rounded-md"
    onClick={handleBack}>
      Back to home
    </button>
  );
};

export default BackButton
