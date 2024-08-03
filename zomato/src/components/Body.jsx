/* eslint-disable react/jsx-key */
import Card from "./Card";
// import { restruantList } from "../utils/mockData";
import { actualList } from "../utils/actualData";

const Body = () => {
    return (
        <div className="container">
            <h3 className="my-3">Best Food in Amritsar</h3>
            <div className="row my-3">
                {/* <Card restruant={restruantList[0]} />
                <Card restruant={restruantList[1]} />
                <Card restruant={restruantList[2]} /> */}

                {/* <Card {...restruantList[0]} />
                <Card {...restruantList[1]} />
                <Card {...restruantList[2]} /> */}

                {/* {
                    restruantList.map((obj) => {
                        return <Card {...obj} key={obj.key} />
                    })
                } */}

                {/* <Card restruant={actualList[0]} />
                <Card restruant={actualList[1]} />
                <Card restruant={actualList[2]} />
                <Card restruant={actualList[3]} /> */}

                {
                    actualList.map((obj) => {
                        return <Card restruant={obj} key={obj.info.resId} />
                    })
                }

            </div>
        </div>
    )
}

export default Body;