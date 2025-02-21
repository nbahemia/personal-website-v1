function Project_Display() {

    return (
        <div className = "flex flex-col h-screen w-full md:flex-row p-2 bg-[#143D60] text-white" id = "Projects">    
            <div>        
                <div className="mb-10">
                    <h1 className = "w-16 font-bold text-2xl text-center border-l-4 border-[#DDEB9D] p-4"> Projects </h1>
                </div>

                <div className="grid grid-cols-3 grid-rows-3 justify-center">
                    <div className="rounded-lg p-5">
                        <a href = "#">
                            <img className = "rounded-full shadow-full pb-4" src="" alt="Project 1"/>
                            <h3 className="pt-2">Project 1</h3>
                            <p className="pt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quisquam totam rerum sapiente ex deleniti saepe, iure modi ullam veniam itaque sit doloremque dolorum accusantium tempora quos possimus a id.
                            </p>
                        </a>
                    </div>
                    <div className="rounded-lg p-5">
                        <a href = "#">
                            <img className = "rounded-full shadow-full pb-4" src="" alt="Project 2"/>
                            <h3 className="pt-2">Project 2</h3>
                            <p className="pt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quisquam totam rerum sapiente ex deleniti saepe, iure modi ullam veniam itaque sit doloremque dolorum accusantium tempora quos possimus a id.
                            </p>
                        </a>
                    </div>
                    <div className="rounded-lg p-5">
                        <a href = "#">
                            <img className = "rounded-full shadow-full pb-4" src="" alt="Project 3"/>
                            <h3 className="pt-2">Project 3</h3>
                            <p className="pt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quisquam totam rerum sapiente ex deleniti saepe, iure modi ullam veniam itaque sit doloremque dolorum accusantium tempora quos possimus a id.
                            </p>
                        </a>
                    </div>
                    <div className="rounded-lg p-5">
                        <a href = "#">
                            <img className = "rounded-full shadow-full pb-4" src="" alt="Project 4"/>
                            <h3 className="pt-2">Project 4</h3>
                            <p className="pt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quisquam totam rerum sapiente ex deleniti saepe, iure modi ullam veniam itaque sit doloremque dolorum accusantium tempora quos possimus a id.
                            </p>
                        </a>
                    </div>
                    <div className="rounded-lg p-5">
                        <a href = "#">
                            <img className = "rounded-full shadow-full pb-4" src="" alt="Project 5"/>
                            <h3 className="pt-2">Project 5</h3>
                            <p className="pt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quisquam totam rerum sapiente ex deleniti saepe, iure modi ullam veniam itaque sit doloremque dolorum accusantium tempora quos possimus a id.
                            </p>
                        </a>
                    </div>
                    <div className="rounded-lg p-5">
                        <a href = "#">
                            <img className = "rounded-full shadow-full pb-4" src="" alt="Project 6"/>
                            <h3 className="pt-2">Project 6</h3>
                            <p className="pt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quisquam totam rerum sapiente ex deleniti saepe, iure modi ullam veniam itaque sit doloremque dolorum accusantium tempora quos possimus a id.
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project_Display;