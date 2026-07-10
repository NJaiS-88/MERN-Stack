import {React, useState} from 'react';
import { X } from 'lucide-react';

function App() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState([]);

  const [show, setShow] = useState(false);

  function newNoteWindow(){
    setShow(!show);
  }

  function stopProp(e){
    e.stopPropagation();
  }

  function formInputTitle(e){
    setTitle(e.target.value);
  }

  function formInputDesc(e){
    setDescription(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    const newContent = [...content];
    newContent.push({title: title, description: description});
    setTitle("");
    setDescription("");
    setContent(newContent);
    newNoteWindow();
  }


  function deleteNote(index){
    const newContent = [...content];
    newContent.splice(index, 1);
    setContent(newContent);
  }



  return (
    <>
      <div className="relative ">
        <div className={`${show ? "block" : "hidden"} absolute w-full h-screen flex justify-center items-center bg-black/40 z-40`} 
        onClick={()=>{
          newNoteWindow();
        }}>
          <div className="bg-white w-fit h-fit p-10 rounded-lg opacity-100 flex flex-col justify-center items-center" onClick={stopProp}>
            <form  onSubmit={(e) => {handleSubmit(e)}} className="flex flex-col justify-center items-center gap-5">
              <input 
                value={title} 
                placeholder="enter title" 
                type="text"
                onChange={(e) => {
                      formInputTitle(e)
                    }}
                className=' border-1 border-gray-400 rounded-lg p-1'>
              </input>
              <input 
                value={description} 
                placeholder="enter decsription" 
                type="text"
                onChange={(e) => {
                      formInputDesc(e)
                    }}
                className='border-1 border-gray-400 rounded-lg p-1'>
              </input>
              <input className=" bg-red-400 cursor-pointer hover:bg-red-500 rounded-lg w-fit h-fit p-2" type="submit"></input>
            </form>
          </div>
        </div>
        <div className="note-container flex flex-wrap lg:gap-5 gap-2 justify-center p-10 w-full min-h-screen ">
          {content.map((ele, index) => {
            return(
              <div key={index} className="group min-w-50 h-50 bg-[url('https://tse2.mm.bing.net/th/id/OIP.m-Bjbsb9Dlrg4IQQaz9n5gHaJl?r=0&w=600&h=776&rs=1&pid=ImgDetMain&o=7&rm=3')] p-5  rounded-xl bg-cover relative">
                <div className="absolute top-10 text-xl font-bold left-10">{ele.title}</div>
                <p className="absolute top-20 left-10">{ele.description}</p>
                <div>
                  <img src="https://th.bing.com/th/id/R.3fd974a0d2f78d620049e741e67be627?rik=5aBwykIl9%2buIXA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f4%2fRed-Pin-PNG-Free-Image.png&ehk=Lbo2hMnN7nZOFyncVyPSY2oOSYCBg3rT3DgrXrpcDjg%3d&risl=&pid=ImgRaw&r=0" className="w-15 left-14 top-0 absolute"></img>
                </div>
                <div onClick={() => {deleteNote(index)}} className="text-red-500 absolute top-0 right-0 hover:cursor-pointer lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500"><X size={40}/></div>
              </div>
          )})}

          <div onClick={newNoteWindow} className=" min-w-50 h-50 hover:text-gray-400 hover:cursor-pointer flex justify-center items-center border-2 rounded-xl border-dotted">
            create new note
          </div>
        </div>
      </div>
    </>
  )
}

export default App
