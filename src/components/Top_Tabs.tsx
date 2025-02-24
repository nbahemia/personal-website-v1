import { motion } from "framer-motion"

import Resume from "../assets/NaeemBahemia_Resume.pdf"
import Otter from "../assets/Otter_Icon.png"
function Top_Tabs() {

    return (
        <div className="flex items-center justify-between text-md font-medium text-white pt-3">
                <img src={Otter} className="justify-start h-15 w-15 ml-4"/>
                <ul className="flex flex-wrap -mb-px justify-end">
                    <li className="me-2">
                        <motion.a href="#About" className="inline-block p-4 border-b-4 border-transparent rounded-t-1 hover:border-[#A0C878] transition duration-200 ease-in">
                            About
                        </motion.a>
                    </li>
                    <li className="me-2">
                        <motion.a href="#Projects" className="inline-block p-4 border-b-4 border-transparent rounded-t-1g hover:border-[#A0C878] transition duration-200 ease-in">
                            Projects
                        </motion.a>
                    </li>
                    <li className="me-2">
                        <motion.a href={Resume} target="_blank" className="inline-block p-4 border-b-4 border-transparent rounded-t-1g  hover:border-[#A0C878] transition duration-200 ease-in">
                            Resume
                        </motion.a>
                    </li>
                </ul>
            </div>
    );
}

export default Top_Tabs;