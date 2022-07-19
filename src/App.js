import './App.css';
import {Users} from "./Users/Users";
import {Posts} from "./Posts/Posts";
import {Comments} from "./Commets/Comments";

function App() {
    return (
        <div>
            <div className={'header'}>
                <div>
                    <Users/>
                </div>
                <div>
                    <Posts/>
                </div>
            </div>
            <div>
                <Comments/>
            </div>
        </div>
    );
}

export default App;
