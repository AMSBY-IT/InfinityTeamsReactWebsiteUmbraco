import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };
  return (
    <button className="tw-flex tw-gap-1 tw-justify-center tw-items-center tw-text-red tw-text-sm tw-cursor-pointer"
    onClick={handleBack}>
        <MoveLeft color="#9f4444" />
      <span className="tw-text-[#9f4444]">Back to home</span>
    </button>
  );
};

export default BackButton
