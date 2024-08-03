/* eslint-disable react/prop-types */

// import { restruant } from "../utils/mockData";

// const Card = () => {
//     /* Single Restruant */
//     return (
//         <>
//             <div className="card col-sm-3 my-3">
//                 <img src={restruant.img} className="rounded" alt="This is restruant image" />
//                 <div className="card-body">
//                     <h5 className="card-title">{restruant.name}</h5>
//                     <h6>
//                         {restruant.stars} stars
//                         <span>
//                             <b> | {restruant.time} mins</b>
//                         </span>
//                     </h6>
//                     <p>{restruant.cuisines.join(", ")}</p>
//                     <p>{restruant.loc}</p>
//                 </div>
//             </div>
//         </>
//     )
// }

// import { restruantList } from "../utils/mockData";

// /* List of Restruants */
// const Card = () => {
//     return (
//         <>
//             <div className="card col-sm-3 my-3">
//                 <img src={restruantList[0].img} className="rounded" alt="This is restruant image" />
//                 <div className="card-body">
//                     <h5 className="card-title">{restruantList[0].name}</h5>
//                     <h6>
//                         {restruantList[0].stars} stars
//                         <span>
//                             <b> | {restruantList[0].time} mins</b>
//                         </span>
//                     </h6>
//                     <p>{restruantList[0].cuisines.join(", ")}</p>
//                     <p>{restruantList[0].loc}</p>
//                 </div>
//             </div>
//         </>
//     )
// }


/************** Single Restruant : PROPS -> Object Destructuring ***************************/
// const Card = (props) => {
//     console.log(props);
//     const { name, img, stars, time, cuisines, loc } = props;
//     return (
//         <>
//             <div className="card col-sm-3 my-3">
//                 <img src={img} className="img-fluid w-100" alt="This is restruant image" />
//                 <div className="card-body">
//                     <h5 className="card-title">{name}</h5>
//                     <h6>
//                         {stars} stars
//                         <span>
//                             <b> | {time} mins</b>
//                         </span>
//                     </h6>
//                     <p>{cuisines.join(", ")}</p>
//                     <p>{loc}</p>
//                 </div>
//             </div>
//         </>
//     )
// }

/*********** List of Restruants (PROPS) ***************/
// const Card = (props) => {
//     console.log(props);
//     const { name, img, stars, time, loc, cuisines } = props.restraunt;
//     return (
//         <>
//             <div className="card col-sm-3 my-3">
//                 <img src={img} className="rounded" alt="This is restruant image" />
//                 <div className="card-body">
//                     <h5 className="card-title">{name}</h5>
//                     <h6>
//                         {stars} stars
//                         <span>
//                             <b> | {time} mins</b>
//                         </span>
//                     </h6>
//                     <p>{cuisines.join(", ")}</p>
//                     <p>{loc}</p>
//                 </div>
//             </div>
//         </>
//     )
// }

// const Card = ({ restraunt }) => {
//     console.log(restraunt);
//     const { name, img, stars, time, loc, cuisines } = restraunt;
//     return (
//         <>
//             <div className="card col-sm-3 my-3">
//                 <img src={img} className="rounded" alt="This is restruant image" />
//                 <div className="card-body">
//                     <h5 className="card-title">{name}</h5>
//                     <h6>
//                         {stars} stars
//                         <span>
//                             <b> | {time} mins</b>
//                         </span>
//                     </h6>
//                     <p>{cuisines.join(", ")}</p>
//                     <p>{loc}</p>
//                 </div>
//             </div>
//         </>
//     )
// }

const Card = ({ name, img, stars, time, loc, cuisines }) => {
    return (
        <>
            <div className="card col-sm-3 my-3">
                <img src={img} className="rounded" alt="This is restruant image" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>
                        {stars} stars
                        <span>
                            <b> | {time} mins</b>
                        </span>
                    </h6>
                    <p>{cuisines.join(", ")}</p>
                    <p>{loc}</p>
                </div>
            </div>
        </>
    )
}

export default Card;