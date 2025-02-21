import { motion } from "motion/react"

import GitHub_Logo from "../assets/github.svg"
import Instagram_Logo from "../assets/instagram.svg"
import LinkedIn_Logo from "../assets/linkedin.svg"


function Social_Links() {

    return (

        <div className = "text-md font-medium flex justify-center text-grey-500">
            <ul className = "flex flex-wrap -mb-px">
                <li className="me-2">
                    <motion.a  whileHover={{ scale: 1.4 }} href = "https://github.com/nbahemia" target="_blank" className="inline-block p-4 border-b-2 border-transparent rounded-t-1g">
                        <img src={GitHub_Logo} className="h-10 w-10"></img>
                    </motion.a>
                </li>
                <li className="me-2">
                    <motion.a whileHover={{ scale: 1.4 }} href = "https://www.linkedin.com/in/naeem-bahemia" target="_blank" className="inline-block p-4 border-b-2 border-transparent rounded-t-1g">
                        <img src={LinkedIn_Logo} className="h-10 w-10"></img>
                    </motion.a>
                </li>
                <li className="me-2">
                    <motion.a whileHover={{ scale: 1.4 }} href = "https://www.instagram.com/naeembahemia/" target="_blank" className="inline-block p-4 border-b-2 border-transparent rounded-t-1g">
                        <img src={Instagram_Logo} className="h-10 w-10"></img>
                    </motion.a>
                </li>
            </ul>
        </div>
    );
}

export default Social_Links;