/* eslint-disable react/prop-types */
const Card = (props) => {
    // console.log(props);
    const { img, name, stars, time, cuisines, loc } = props.obj;
    return (
        <>
            <div className="col-md-4 my-3">
                <img src={img} className="card-img-top" style={{ width: "100%", height: "auto", aspectRatio: "3/2" }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>{stars} stars</h6>
                    <h6>{time} mins</h6>
                    <p>{cuisines}</p>
                    <p>{loc}</p>
                    <a href="#" className="btn btn-primary">Buy Now</a>
                </div>
            </div>
        </>
    )
}

// const Card = ({ img, name, stars, time, cuisines, loc }) => {
//     return (
//         <>
//             <div className="col-md-4 my-3">
//                 <img src={img} className="card-img-top" style={{ width: "100%", height: "auto", aspectRatio: "3/2" }} alt="..." />
//                 <div className="card-body">
//                     <h5 className="card-title">{name}</h5>
//                     <h6>{stars} stars</h6>
//                     <h6>{time} mins</h6>
//                     <p>{cuisines}</p>
//                     <p>{loc}</p>
//                     <a href="#" className="btn btn-primary">Buy Now</a>
//                 </div>
//             </div>
//         </>
//     )
// }


export default Card;