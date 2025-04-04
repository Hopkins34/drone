import ThreeScene from "../ThreeScene";
import { motion } from "framer-motion";

const DesignCard = () => {
  return (
    <>
    <div className="mt-5">
      <ul className="flex justify-around text-2xl font-mono">
        <li>Wingspan: 66ft</li>
        <li>Length: 36ft</li>
      </ul>
    </div>
      <motion.div className="h-full w-full flex items-center justify-center">
          <ThreeScene />
      </motion.div>
    </>
  );
};

export default DesignCard;
