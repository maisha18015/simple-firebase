import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="py-5 text-center">
            <Link to ="/">Home</Link>
            <Link to ="/login" className="ml-2">Login</Link>
        </div>
    );
};

export default Header;