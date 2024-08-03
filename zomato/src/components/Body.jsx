import Card from "./Card";
import { restruantList } from "../utils/mockData";

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