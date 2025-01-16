// import axios from "axios";
import UserContext from "../context/user";
import { useContext, useEffect } from "react";
import newRequest from "../utils/newRequest";
import LoadingSkeleton from "./loading/loadingUsers";
import { Link } from "react-router-dom";

const Users = () => {
    const userContext = useContext(UserContext)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await newRequest.get("/users")
                userContext.setUsers(response.data)
                userContext.setisLoading(false)
            } catch (err) {
                console.error(err.message);
            }
        };
        fetchData();
    },);
    return (
        <>
            <button onClick={handleCreate} className="btn btn-lg btn-primary">Create</button>
            <div key={1} className="row">
                {
                    userContext.isLoading ? (<LoadingSkeleton />) : (userContext.users.map(user => {
                        return (
                            <div className="col-4 text-center p-5">
                                <img src={user.avatar} style={{ boredeRadios: "50%", width: "100px" }} />
                                <Link to={`/users/${user._id}`} > <h4>{user.first_name} {user.last_name}</h4> </Link>
                                <h5>{user.email}</h5>
                                <div className="row">
                                    <div className="col-6 m-4">
                                        <button onClick={() => { handleUpdate(user._id) }} className="btn btn-sm btn-info">update</button>
                                        <button onClick={() => { handleDelete(user._id) }} className="btn btn-sm btn-danger m-2">delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }))
                }
            </div >
        </>
    );
    function handleUpdate(id) {
        userContext.onUpdate(id)
    }
    function handleCreate() {
        userContext.oncreate()

    }
    function handleDelete(id) {
        userContext.onDelete(id)

    }
}

export default Users;