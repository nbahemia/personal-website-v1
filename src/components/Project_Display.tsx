import Train from "../assets/train.png";

function Project_Display() {
    return (
        <div className="flex flex-col h-screen w-full md:flex-row p-2 bg-[#143D60] text-white" id="Projects">
            <div>
                <div className="mb-10">
                    <h1 className="w-16 font-bold text-2xl text-center border-l-4 border-[#DDEB9D] p-4"> Projects </h1>
                </div>
                <div className="grid grid-cols-3 grid-rows-3 gap-6">
                    {/* All-Aboard Project */}
                    <div className="rounded-lg flex flex-col h-auto p-6 transition duration-300 ease-in-out hover:bg-white/20">
                        <div className="flex items-center space-x-4">
                            <img className="rounded-full h-24 w-24 object-cover" src={Train} alt="All-Aboard" />
                            <a href="https://all-aboard-eta.vercel.app/">
                                <h3 className="text-2xl font-bold tracking-tight">All-Aboard</h3>
                            </a>
                        </div>
                        <p className="mt-2 font-normal">
                            Full-steam ahead towards your next community! With the help of All-Aboard, finding clubs as a Boilermaker has never been easier.
                        </p>
                    </div>

                    {/* Generic Project Cards */}
                    {[
                        { name: "Project 2", img: "", link: "#" },
                        { name: "Project 3", img: "", link: "#" },
                        { name: "Project 4", img: "", link: "#" },
                        { name: "Project 5", img: "", link: "#" },
                        { name: "Project 6", img: "", link: "#" }
                    ].map((project, index) => (
                        <div 
                            key={index} 
                            className="rounded-lg flex flex-col h-auto p-6 transition duration-300 ease-in-out hover:bg-white/20"
                        >
                            <div className="flex items-center space-x-4">
                                <img className="rounded-full h-24 w-24 object-cover bg-gray-500" src={project.img} alt={project.name} />
                                <a href={project.link}>
                                    <h3 className="text-2xl font-bold tracking-tight">{project.name}</h3>
                                </a>
                            </div>
                            <p className="mt-2 font-normal">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, quisquam totam rerum sapiente ex deleniti saepe.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Project_Display;