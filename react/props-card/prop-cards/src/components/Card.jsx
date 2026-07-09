import {Bookmark} from 'lucide-react';

function Card(props) {
    return ( 
        <>
            <div className="box">
                <div className="top-box">
                    <div>
                        <img className="logo" src={props.logo} />
                    </div>
                    <button className="save-btn">Save <Bookmark></Bookmark></button>
                </div>
                <div className="mid-box">
                    <div className="mid-top">
                        <h2>{props.name}</h2>
                        <p>{props.date}</p>
                    </div>
                    <h1>{props.post}</h1>
                    <div className="tags">
                        <div className="tag">{props.tag1}</div>
                        <div className="tag">{props.tag2}</div>
                    </div>
                    
                </div>
                <div className="bottom-box">
                    <div className="bottom-left">
                        <h1>$85/hour</h1>
                        <p>{props.location}</p>
                    </div>
                    <button className="apply-btn">Apply Now</button>
                </div>
            </div>
        </>
     );
}

export default Card;