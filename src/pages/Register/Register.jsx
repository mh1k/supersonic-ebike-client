import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { getAuth, updateProfile } from "firebase/auth";
import { useState } from "react";

const Register = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const auth = getAuth();
    const { setUser, createUser } = useAuth();

    const [error, setError] = useState("")

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password);

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                    console.log(error);
                });

                const newUser = { user: result?.user, name, email: result?.user?.email }
                fetch('https://supersonic-ebike-server.onrender.com/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then((res) => res.json())
                    .then((data) => console.log(data))



                const info = { ...result.user, displayName: name }
                setUser(info);

                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error)
                if (error.message === "Firebase: Error (auth/invalid-email).") {
                    setError("this email addess invalid");
                    return
                }
                if (error.message === "Firebase: Error (auth/email-already-in-use).") {
                    setError("this email addess already registerd");
                    return
                }
                if (error.message === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
                    setError("password must be at least 6 characters long");
                    return
                }
                else {
                    setError(error.message);
                    return
                }

            })

    }


    return (
        <div className="bg-custom-gradient h-screen flex items-center justify-center">
            <div className="card lg:w-[35%] bg-white py-4 px-2 sm:px-5 sm:py-8 mt-0 sm:mt-5 mx-auto">
                <h2 className="text-3xl font-semibold  text-center">Register</h2>
                <form onSubmit={handleRegister} onBlur={() => setError("")} className="  card-body space-y-1">
                    <div className="form-control pb-0">
                        <label className="label pt-0">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" required name="photo" placeholder="Photo URL" className="input input-bordered" />
                    </div> */}
                    <div className="form-control pb-0">
                        <label className="label pt-0">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control pb-0">
                        <label className="label pt-0">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                    </div>
                    <div className="form-control ">
                        <p className=" mb-2 text-xs sm:text-base text-red-600" style={{ height: "20px" }}>{error}</p>
                        <button className="btn bg-gray-600 hover:bg-gray-700 text-white">Register</button>
                    </div>
                </form>
                <p className="text-center mt-0">Already have an account? <Link onClick={() => setError("")} className="text-blue-600 font-bold" to="/login">Login</Link></p>

            </div>
        </div>
    );
};

export default Register;