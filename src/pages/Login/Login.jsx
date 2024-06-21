import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc'
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { googleLogin, signIn } = useAuth();

    const [error, setError] = useState("")

    const handleLogin = e => {
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);

                // navigate after login
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.error(error.message);
                if (error.message === "Firebase: Error (auth/user-not-found).") {
                    setError("this email address not registered");
                    return
                }
                if (error.message === "Firebase: Error (auth/wrong-password).") {
                    setError("your email or password Worng");
                    return
                }
                if (error.message === "Firebase: Error (auth/invalid-credential).") {
                    setError("your email or password Worng");
                    return
                }
                else {
                    setError(error.message);
                    return
                }
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                // console.log(result);
                const newUser = { user: result?.user, name: result?.user?.displayName, email: result?.user?.email }
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log("fronted token", data);
                        localStorage.setItem('token', data?.token)
                    })

                console.log(result.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                console.log("error code :", error.code, "error message: ", error.message);
            })
    }

    return (
        <div className="bg-custom-gradient h-screen flex items-center justify-center">
            <div className="card lg:w-[35%] bg-white p-2 sm:px-5 sm:py-8 mt-0 sm:mt-5 mx-auto">
                <h2 className="text-3xl font-semibold  text-center">Login</h2>
                <form onSubmit={handleLogin} className="  card-body">
                    <div className="form-control">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="email" required name="email" className="grow" placeholder="Email" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input type="password" required name="password" className="grow" placeholder="Password" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <p className=" mb-2 text-red-600" style={{ height: "20px" }}>{error}</p>
                        <button className="btn bg-gray-600 hover:bg-gray-700 text-white">Login</button>
                    </div>
                </form>
                <p className="text-center mt-2">Do not have an account?<Link onClick={() => setError("")} className="text-blue-600 font-bold" to="/register"> Register</Link></p>
                <div className="mt-5 mx-auto">
                    <button onClick={handleGoogleLogin} className="btn bg-white hover:bg-gray-100 text-center"><FcGoogle />Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;