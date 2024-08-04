/* eslint-disable react/jsx-key */
import Card from "./Card";
// import { list } from "../utils/mockData";
import { RESTRUANT_IMAGE } from "../utils/constants";
import { useState } from "react";

const Body = () => {

    // Normal JS variable
    let list2 = [
        {
            key: 101,
            img: RESTRUANT_IMAGE + "/67d6c3afbc3ebf32e988deafc9c9ace6",
            name: "Chinese Work List2",
            stars: "4.2",
            time: "20-25",
            cuisines: ["Burger", "Fast Food", "Rolls"],
            loc: "VR Ambarsar Mall"
        },
        {
            key: 102,
            img: RESTRUANT_IMAGE + "/ha7bnvpaxzqldxl2voxa",
            name: "La Pino'z Pizza",
            stars: "3.9",
            time: "25-30",
            cuisines: ["Pizza", "Pasta", "Italian"],
            loc: "Lawrence Road"
        },
        {
            key: 103,
            img: RESTRUANT_IMAGE + "/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_74868.JPG",
            name: "Burger King",
            stars: "4.6",
            time: "25-30",
            cuisines: ["Burger", "American"],
            loc: "East Amritsar"
        },
        {
            key: 104,
            img: RESTRUANT_IMAGE + "/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/d5ec0a30-2ec4-40d1-aad7-eb8d9ae67f97_725237.JPG",
            name: "Subway",
            stars: "3.5",
            time: "15-20",
            cuisines: ["Salads", "Snacks", "Desserts"],
            loc: "Majitha Road"
        }
    ]

    // SuperPowerful JS variable - STATE VARIABLE
    // whenever a state variable is updated, it will re-render the Component
    const [stateList, setStateList] = useState(list2);

    return (
        <div className="container">

            <button className="btn btn-lg btn-warning mt-4" onClick={
                () => {
                    // console.log("Filter Logic");

                    // const filteredList = list2.filter(
                    //     (res) => res.stars > 4
                    // )
                    // console.log(filteredList);

                    const filteredList = stateList.filter(
                        (res) => res.stars > 4
                    )
                    console.log(filteredList);
                    setStateList(filteredList);
                }} >
                Filter Top Rated Restruants
            </button>

            <div className="row">
                {/* <Card obj={list[0]} />
                <Card obj={list[1]} />
                <Card obj={list[2]} />
                <Card obj={list[3]} /> */}

                {
                    stateList.map(
                        (res) => {
                            return <Card obj={res} key={res.key} />
                        }
                    )
                }


                {/* <Card {...list[0]} />
                <Card {...list[1]} />
                <Card {...list[2]} /> */}

                {
                    // list.map(
                    //     (res) => {
                    //         return <Card {...res} />
                    //     }
                    // )
                }

            </div>
        </div>
    )
}

export default Body;