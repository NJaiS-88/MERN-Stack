import {MoveUpRight} from 'lucide-react';

function Leftcontent() {
    return (
        <>
            <div className="w-1/4 ">
                <div className="h-[75%] flex flex-col justify-center">
                    <div className="text-5xl font-bold mb-5">Prospective customer segmentation</div>
                    <div className=" font-bold text-gray-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed est eos? Quisquam perspiciatis doloribus ad! Excepturi consequuntur soluta, laboriosam ipsa sed voluptas deleniti quidem ut reiciendis ullam molestias amet.</div>
                </div>
                <div className="h-[15%] flex flex-col justify-end">
                    <MoveUpRight className="cursor-pointer" size={50} />
                </div>
                
            </div>
        </>
    );
}

export default Leftcontent;