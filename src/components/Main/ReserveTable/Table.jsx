import images from "../../../assets/images/images"

const Table = ({x, y, available, variant, number, scale = 1}) =>{
    
    const availability = variant + `${available?'':'_unavailable'}`


    return (
        <div className="table" style={{left: `${x}%`, top: `${y}%`}}>
           <img src={images[availability]} alt="" className='chair' style={{width: `${50 * scale}px`}}/>
            
            <p className="chair_number">{number}</p>
        </div>
    )
}

export default Table