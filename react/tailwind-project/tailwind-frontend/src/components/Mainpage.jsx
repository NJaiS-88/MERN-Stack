import Leftcontent from "./Leftcontent";
import Rightcontent from "./Rightcontent";

function Mainpage() {
    return (
        <>
            <div className="w-full h-[90vh] flex p-8 gap-10">
                <Leftcontent></Leftcontent>
                <Rightcontent></Rightcontent>
            </div>
        </>
    );
}

export default Mainpage;