import NB from "../../assets/OTTERS.jpg"
import Social_Links from "../Social_Links";

function About_Me() {

    return (
        <div className="md:items-start flex flex-col md:flex-row items-center text-blue-900 justify-center p-8">
            <div className="md:w-1/3 md:pr-6 w-full flex flex-col justify-center md:justify-start md:items-start items-center">
                <div>
                    <img className="rounded-full shadow-lg w-64 h-64 object-cover" src = {NB} alt="Placeholder"/>
                </div>
                <div className="mt-4">
                    <Social_Links/> 
                </div>
            </div>

            <div className = "md:w-1/2 w-full md:pl-16 text-left justify-end">
                <h2 className = "text-3xl font-bold text-left"> Naeem Bahemia </h2>
                <p className = "text-lg font-semibold text-left text-[#27667B] mt-3">
                    Undergraduate Computer Science Major
                </p>
                <p className = " mt-4">
                    I'm currently navigating my journey in the Computer Science field at Purdue.
                </p>
                <p className = " mt-4">
                    I'm currently apart of projects utilizing React.JS and Tailwind CSS. I've also taken courses focused on C, Java, and Python.
                </p>
                <p className = " mt-4">
                    Outside of academics, I enjoy lifting, being active, and hanging out with friends.
                </p>
            </div>
        </div>
    );
}

export default About_Me;