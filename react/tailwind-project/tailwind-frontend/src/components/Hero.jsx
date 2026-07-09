import Navbar from './Navbar'
import Mainpage from './Mainpage'
function Hero() {
    return (
        <>
            <div className="w-full h-screen">
                <Navbar />
                <Mainpage />
            </div>
        </>
    );
}

export default Hero;