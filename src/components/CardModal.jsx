import yrma from "../yrma.jpg";
import { AiOutlineClose } from "react-icons/ai";

export const CardModal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <AiOutlineClose size={30} color="#fff" cursor={"pointer"} />
      <div className="container">
        <img src={yrma} alt="" />
      </div>
    </div>
  );
};
