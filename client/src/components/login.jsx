import { useState } from "react";
import newRequest from "../utils/newRequest";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Yup from "yup"
const Login = () => {

    // const validationSchema = Yup.object().shape({
    //     first_name: Yup.string().required("firstname is required"),
    //     last_name: Yup.string().required("lastname is required"),
    //     email: Yup.string().email("invalid email format").required("email is required"),
    //     password: Yup.string().min(6).required("email is required"),
    // })

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input onChange={handleEmail} value={email} id="email" className="form-control" type="text" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input onChange={handlePassword} value={password} id="password" className="form-control" type="text" />
                </div>
                <button className="btn btn-primary">Loin</button>
            </form>
        </>);

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await axios.post("https://reqres.in/api/login", {
                "email": "george.bluth@reqres.in",
                "password": "12325"
            })
            console.log(response.data)
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
        } catch (error) {
            console.log(error.message)
        }
    }
    async function handleEmail(e) {
        setEmail(e.currentTarget.value)


    }
    async function handlePassword(e) {
        setPassword(e.target.value)
    }
}

export default Login;