import {
  motion,
  // AnimatePresence
} from "framer-motion"; //check note.txt for notes on framer motion
// import { Loading } from "notiflix/build/notiflix-loading-aio";
import { useContext } from "react";
import UiContext from "../../context/UI/context";
import { FailAlert } from "./fail";
import { SuccessAlert } from "./success";
import { WarningAlert } from "./warning";

export const Alert = () => {
  let { alert } = useContext(UiContext);

  return (
    <>
      {alert.type === "fail" && <FailAlert />}
      {alert.type === "success" && <SuccessAlert />}
      {alert.type === "warning" && <WarningAlert />}

      {/* Loading Alert */}
      {alert.type === "loading" && (
        <div className="bg-black absolute min-h-screen w-screen m-0 flex z-50 bg-opacity-40">
          <motion.div
            animate={{ scale: [1, 0, 1, 0, 1, 0, 1] }}
            initial={{ scale: 0 }}
            transition={{ scale: { yoyo: Infinity, duration: 3 } }}
            className="w-5 h-5 rounded-full bg-white m-auto"
          ></motion.div>
        </div>
      )}
    </>
  );
};
