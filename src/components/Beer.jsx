const Beer = ({info}) => {
    const {title, sub, text} = info
    return (
        <div className="beer">
            {title}<br></br>
            {sub}<br></br>
            {text}
            <button onClick={() => console.log(`Licked`)}>Lick me!</button>
        </div>
    )
};

export default Beer
