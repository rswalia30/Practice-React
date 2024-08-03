/* eslint-disable react/jsx-key */
import Card from "./Card";
// import { restruant } from "../utils/mockData";
import { restruantList } from "../utils/mockData";

const Body = () => {
    return (
        <div className="container">
            <h3 className="my-3"><b>Restaurants with online food delivery in Amritsar</b></h3>
            <div className="row">

                { /*********** Single Restruant (PROPS) ***************/}
                {/* <Card {...restruant} /> */}

                { /*********** List of Restruants (PROPS) ***************/}
                {/* <Card restraunt={restruantList[0]} />
                <Card restraunt={restruantList[1]} />
                <Card restraunt={restruantList[2]} />
                <Card restraunt={restruantList[3]} /> */}

                {/* Component is a function */}
                {/* {Card(restruantList[2])} */}

                {/* <Card {...restruantList[0]} />
                <Card {...restruantList[1]} />
                <Card {...restruantList[2]} />
                <Card {...restruantList[3]} /> */}

                {
                    restruantList.map((obj) => {
                        return <Card {...obj} key={obj.key} />
                    })
                }

            </div>
        </div>
    )
}

export default Body;