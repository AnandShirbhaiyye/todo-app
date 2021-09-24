import { Link } from "react-router-dom";

function Logout(){
    return(
        <div>
            <h1>You have logged out successfully</h1>
            <Link to="/login">Click here to login</Link>
        </div>
    )
}

export default Logout