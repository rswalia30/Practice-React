/* eslint-disable react/jsx-key */
import Card from "./Card";
import { list } from "../utils/mockData";

const Body = () => {
    return (
        <div className="container">
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

                    list.map(
                        (obj) => { return <Card res={obj} key={obj.id} /> }
                    )
                }

            </div>
        </div>
    )
}

export default Body;