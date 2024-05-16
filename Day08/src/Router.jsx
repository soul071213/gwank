import {Link} from "react-router-dom";
import Header from "./components/Header";

export default function Router(){
    return(
        <nav>
            <Header/>
            <div className="topnav">
                <Link to="/">Home</Link>
                <Link to="/card">Card</Link>
                <Link to="/cardlist">CardList</Link>
                <Link to="/about">about</Link>
            </div>
        </nav>
    );
}
