/* eslint-disable react/prop-types */

/* MOCK DATA */
const Card = (props) => {
    console.log(props);
    const { name, img, cuizines, stars, price, loc } = props.restruant;
    return (
        <>
            <div className="card col-md-4">
                <img src={img} className="img-fluid" style={{ width: "100%", height: "auto", aspectRatio: "4/3" }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>{stars}</h6>
                    <h6>{cuizines}</h6>
                    <p>{loc}</p>
                    <p> &#8377;{price} for two</p>
                </div>
            </div>
        </>
    )
}

// const Card = ({ restruant }) => {
//     const { name, img, cuizines, stars, price, loc } = restruant;
//     return (
//         <>
//             <div className="card col-md-4">
//                 <img src={img} className="img-fluid" style={{ width: "100%", height: "auto", aspectRatio: "4/3" }} alt="..." />
//                 <div className="card-body">
//                     <h5 className="card-title">{name}</h5>
//                     <h6>{stars}</h6>
//                     <h6>{cuizines}</h6>
//                     <p>{loc}</p>
//                     <p> &#8377;{price} for two</p>
//                 </div>
//             </div>
//         </>
//     )
// }

/* SPREAD OPERATOR */
// const Card = ({ name, img, cuizines, stars, price, loc }) => {
//     return (
//         <>
//             <div className="card col-md-4">
//                 <img src={img} className="img-fluid" style={{ width: "100%", height: "auto", aspectRatio: "4/3" }} alt="..." />
//                 <div className="card-body">
//                     <h5 className="card-title">{name}</h5>
//                     <h6>{stars}</h6>
//                     <h6>{cuizines}</h6>
//                     <p>{loc}</p>
//                     <p> &#8377;{price} for two</p>
//                 </div>
//             </div>
//         </>
//     )
// }

/* ACTUAL DATA */
// const Card = (props) => {
//     console.log(props.restruant.info);
//     const { name, cft, rating, image, locality } = props.restruant.info;
//     return (
//         <>
//             <div className="card col-md-4">
//                 <img src={image.url} className="img-fluid" style={{ width: "100%", height: "auto", aspectRatio: "4/3" }} alt="..." />
//                 <div className="card-body">
//                     <h5 className="card-title">{name}</h5>
//                     <h6>{rating.rating_text}</h6>
//                     <p>{locality.name}</p>
//                     <p>{cft.text}</p>
//                 </div>
//             </div>
//         </>
//     )
// }


export default Card;