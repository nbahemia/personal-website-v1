import { motion } from "motion/react"

import GitHub_Logo from "../assets/github.svg"
import Instagram_Logo from "../assets/instagram.svg"
import LinkedIn_Logo from "../assets/linkedin.svg"
import Mail_Icon from "../assets/email.png"
function Footer() {

    return (
        <footer>
            <div className="text-md font-medium flex flex-col justify-center items-center bg-white pt-3">
                <ul className="flex flex-wrap -mb-px">
                    <li className="me-2">
                        <motion.a whileHover={{ scale: 1.4 }} href="mailto:nbahemia@outlook.com" target="_blank" className="inline-block p-4 border-b-2 border-transparent rounded-t-1g">
                            <img src={Mail_Icon} className="h-10 w-10"></img>
                        </motion.a>
                    </li>
                    <li className="me-2">
                        <motion.a whileHover={{ scale: 1.4 }} href="https://github.com/nbahemia" target="_blank" className="inline-block p-4 border-b-2 border-transparent rounded-t-1g">
                            <img src={GitHub_Logo} className="h-10 w-10"></img>
                        </motion.a>
                    </li>
                    <li className="me-2">
                        <motion.a whileHover={{ scale: 1.4 }} href="https://www.linkedin.com/in/naeem-bahemia" target="_blank" className="inline-block p-4 border-b-2 border-transparent rounded-t-1g">
                            <img src={LinkedIn_Logo} className="h-10 w-10"></img>
                        </motion.a>
                    </li>
                    <li className="me-2">
                        <motion.a whileHover={{ scale: 1.4 }} href="https://www.instagram.com/naeembahemia/" target="_blank" className="inline-block p-4 border-b-2 border-transparent rounded-t-1g">
                            <img src={Instagram_Logo} className="h-10 w-10"></img>
                        </motion.a>
                    </li>
                </ul>

                <p className="text-sm text-gray-500 items-center">
                    Made by Naeem Bahemia
                </p>
            </div>
        </footer>
    );
}

export default Footer;