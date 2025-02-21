import About_Me from './About_Me';
import Wave from 'react-wavify'

const About_Page = () => {
    return (
        <div className='relative w-full h-screen overflow-hidden bg-blue-300 flex items-center justify-center' id="About">
            <div className="absolute inset-0 z-30">
                <Wave
                    fill='#017B92'
                    paused={false}
                    style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
                    options={{
                        height: 10,
                        amplitude: 10,
                        speed: 0.25,
                        points: 5
                    }}
                />
                <Wave
                    fill='#73BFCE'
                    paused={false}
                    style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
                    options={{
                        height: 30,
                        amplitude: 20,
                        speed: 0.25,
                        points: 4
                    }}
                />
            </div>
            <div className="z-60 flex items-center justify-center w-3/4 h-auto bg-white shadow-lg rounded-lg p-6 opacity-98">
                <About_Me />
            </div>
        </div>
    );
};

export default About_Page;
