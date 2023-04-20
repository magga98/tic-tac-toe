import { useParams } from "react-router-dom";
import TicToc from "../components/TicToc.js";

function GamePage() {
    const params = useParams();
    var { slug } = params;
    slug = slug.replaceAll("-"," ")
    return (
        <div>
            <h1>{slug}</h1>
            <TicToc />
        </div>
    );
};
export default GamePage;