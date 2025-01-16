import { Link, useParams } from "react-router-dom";
import UserContext from "../context/user";
import { useContext, useEffect } from "react";
import newRequest from "../utils/newRequest"
const User = () => {
    const { id } = useParams()
    const userContext = useContext(UserContext)
    useEffect(() => {
        async function fetchData() {
            const response = await newRequest.get(`/users/${id}`)
            console.log(response.data)
            userContext.setUser(response.data)
        }
        fetchData()
    }, [])
    const user = userContext.user
    return (
        <>
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
        </>
    );
}

export default User;