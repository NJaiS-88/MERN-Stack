function Card(props) {
    return (
        <>
            <div onClick={()=>{window.open(props.url, "_blank")}}  className="relative w-100 h-70 group cursor-pointer">
                <img className="w-full h-full object-cover" src={props.download_url}></img>
                <div className="bg-black absolute top-0 left-0 opacity-0 group-hover:opacity-40 duration-300 w-full h-full z-50"></div>
                <h1 className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-5 left-5 w-3/4 wrap-break-word font-bold z-50">{props.author}</h1>
            </div>
        </>
    );
}

export default Card;