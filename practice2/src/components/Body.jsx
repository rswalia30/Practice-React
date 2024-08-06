/* eslint-disable react/jsx-key */
import Card from "./Card";
import { list } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    /*********************** useState() *******************************/
    // const [listState, setListState] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [listState, setListState] = useState(list);                           // original list
    const [filteredListState, setFilteredListState] = useState(listState);      // copy list

    /*********************** useEffect() *******************************/
    useEffect(() => {
        fetchDataFromAPI();
    }, []);

    const fetchDataFromAPI = async () => {
        const data = await fetch("http://localhost:8080/res");
        const json = await data.json();
        setListState(json);
        setFilteredListState(json);
    }

    // console.log("Body is going to render");

    return (listState.length === 0) ? <Shimmer /> : (
        <div className="container">
            <div className="row mt-3">
                {/* Search Functionallity */}
                <div className="col-md-8">
                    <input type="search"
                        placeholder="Search"
                        className="form-control"
                        // bind input field with State variable
                        value={searchText}
                        onChange={(e) => { setSearchText(e.target.value) }}

                        onKeyUp={() => {
                            const filteredList2 = listState.filter(
                                (res) => res.name.toLowerCase().includes(searchText.toLowerCase())
                            )
                            setFilteredListState(filteredList2);
                        }}
                    />
                </div>

                {/* Top Rated Restruants */}
                <div className="col-md-4">
                    <button className="btn btn-success w-100"
                        onClick={() => {
                            const filteredList = listState.filter(
                                (res) => res.stars > 4
                            )
                            setFilteredListState(filteredList);
                        }}>Top Rated Restruants</button>
                </div>
            </div>

            {/* Display Cards */}
            <div className="row mt-3">
                {
                    (filteredListState.length === 0) ? <Shimmer /> :
                        filteredListState.map(
                            (obj) => { return <Card res={obj} key={obj.id} /> }
                        )
                }
            </div>
        </div>
    )
}

export default Body;