import { motion } from "framer-motion";
import { useContext } from "react";
import TagsSidebar from "../component/TagsSidebar";
import Notes from "../component/Notes";
import { menuContext } from "../context/MenuContext";

const Home = () => {
    const { isOpen } = useContext(menuContext);

    return (
        <div className="flex overflow-hidden">
            {/* Sidebar */}
            <motion.div
                initial={{ x: 0, opacity: 1 }}
                animate={{ x: isOpen ? 0 : -200, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`fixed md:relative top-3 left-0 md:top-0 -z-10 bg-[#FAD0C4] min-h-screen h-full
                    ${isOpen ? "w-9/12 md:w-2/9" : "w-0"}`}
            >
                <TagsSidebar />
            </motion.div>

            {/* Notes Content */}
            <div className={`flex-1 -z-20 transition-all duration-300 ${isOpen ? "ml-[9/12] md:ml-2/9" : "ml-0"}`}>
                <Notes />
            </div>
        </div>
    );
};

export default Home;
