function Button(props) {
    return (
        <>
            <div onClick={props.onClick} className="bg-amber-500 mt-10 mb-5 rounded-lg p-3 cursor-pointer w-fit hover:bg-amber-600">
                {props.name}
            </div>
        </>
    );
}

export default Button;