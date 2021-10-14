import { Link } from "react-router-dom";

function Login() {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("login");
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit} className="form-login">
                <input className="input-form" type="text" placeholder="email"/>
                <input className="input-form" type="password" placeholder="password"/>
                <Link to="/home"> 
                    <button>Log in</button>
                </Link>
            </form>
        </div>

    );
}

export default Login;