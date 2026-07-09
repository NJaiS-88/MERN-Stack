import {MoveRight} from 'lucide-react';

function Box(props) {
    return (
        <>
            <div className="min-w-80 overflow-hidden rounded-4xl relative h-[90%]">
                <img className="object-cover h-full w-full" src={props.image}></img>
                <div className="bg-white w-10 h-10 top-10 rounded-[50%] left-10 absolute z-30 flex justify-center items-center font-bold">{props.index+1}</div>
                <div className='text-white absolute bottom-30 left-0  ml-4 mr-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam eum iste deleniti, perspiciatis, blanditiis vitae adipisci maxime nobis architecto enim quasi debitis fugiat pariatur! Non quibusdam quasi eius aut accusantium!</div>
                <div className={`absolute bottom-10 left-5 text-white font-semibold ${props.color} pl-5 pr-5 p-2 rounded-3xl`}>{props.tag}</div>
                <i className={`absolute bottom-10 right-5 cursor-pointer ${props.color} pl-5 pr-5 p-2 rounded-3xl`}><MoveRight  /></i>
            </div>
        
        </>
    );
}

export default Box;