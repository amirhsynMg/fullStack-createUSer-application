import Users from "./components/users";
import UserContext from "../src/context/user";
import { useState } from "react";
import newRequest from "./utils/newRequest";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import User from "./components/user";
import Login from "./components/login";
import Dashboard from "./components/dashboard";

const App = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [user, setUser] = useState({})

    return (
        <UserContext.Provider
            value={{
                users,
                setUsers,
                onUpdate,
                onDelete,
                oncreate,
                isLoading,
                setisLoading,
                user,
                setUser

            }}
        >
            <Router>
                <Routes>
                    <Route path="/users" element={<Users />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/Users">
                        <Route path=":id" element={<User />} />
                    </Route>
                    <Route path="/" element={<Users />} />
                    <Route path="*" element={<Users />} />
                </Routes>
            </Router>

        </UserContext.Provider>



    );
    async function oncreate() {
        const newUser = {
            first_name: "rahim",
            last_name: "mg",
            email: "rahim@gmail.com",
            avatar: "https://picsum.photos/id/1/200/300"
        }
        const response = await newRequest.post(`/users`, newUser)
        console.log(response.data)
        setUsers([...users, newUser])
    }

    async function onUpdate(id) {
        try {
            const user = {
                first_name: "updated",
                last_name: "moghanlou",
                email: "amir@gmail.com"
            }
            const response = await newRequest.put(`/users/${id}`, user)
            console.log(response.data)
        } catch (err) {
            console.error(err.message);
        }
    }
    async function onDelete(id) {
        const response = await newRequest.delete(`/users/${id}`)
        console.log(response.data)
    }

}

export default App;