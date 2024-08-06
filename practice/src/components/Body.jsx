/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
import Card from "./Card";
import { list } from "../utils/mockData";
import { useState, useEffect } from "react";


const Body = () => {

    const [listState, setListState] = useState(list);
    const [searchText, setSearchText] = useState("");

    useEffect(() => { fetchDataFromAPI() }, []);

    const fetchDataFromAPI = async () => {
        const data = await fetch("http://localhost:8080/res");  // SpringBoot
        const json = await data.json();
        // console.log(json);
        setListState(json);      // Update State Variable
    }

    // console.log("Body render");

    return (
        <div className="container">

            <div className="row mt-3">

                {/* Search Functionallity */}
                <div className="col-md-8">
                    <input type="text"
                        className="form-control"
                        placeholder="Search"
                        // bind value with state variable
                        value={searchText}
                        onChange={(e) => { setSearchText(e.target.value) }}
                        onKeyUp={() => {
                            let filteredList2 = listState.filter(
                                (res) => res.name.toLowerCase().includes(searchText.toLowerCase())
                            )
                            setListState(filteredList2);
                        }}
                    />
                </div>

                {/* Top Rated Restruants */}
                <div className="col-md-4">
                    <button className="btn btn-success btn-lg w-100"
                        onClick={() => {
                            // console.log(listState);
                            let filteredList = listState.filter(
                                (obj) => obj.stars > 4
                            );
                            setListState(filteredList);
                            // console.log(filteredList);
                        }}>Top Rated Restruants</button>
                </div>
            </div>

            <div className="row">

                {/* <Card res={list[0]} />
                <Card res={list[1]} />
                <Card res={list[2]} />
                <Card res={list[3]} /> */}

                {/* Loop */}
                {
                    // list.map(
                    //     (obj, index) => { return <Card res={obj} key={index} /> }
                    // )

                    // list.map(
                    //     (obj) => { return <Card res={obj} key={obj.id} /> }
                    // )

                    listState.map(
                        (obj) => { return <Card res={obj} key={obj.id} /> }
                    )
                }

            </div>
        </div>
    )
}

export default Body;