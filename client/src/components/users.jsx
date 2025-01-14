import axios from "axios";
import UserContext from "../context/user";
import { useContext, useEffect } from "react";

const Users = () => {
    const userContext = useContext(UserContext)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/users');
                console.log(response.data);
            } catch (err) {
                console.error(err.message);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <button onClick={handleCreate} className="btn btn-lg btn-primary">Create</button>
            <div className="row">
                {
                    userContext.users.map(user => {
                        return (
                            <div className="col-4 text-center p-5">
                                <img src={user.avatar} style={{ boredeRadios: "50%", width: "100px" }} alt="" />
                                <h4>{user.first_name} {user.last_name}</h4>
                                <h5>{user.email}</h5>
                                <div className="row">
                                    <div className="col-6">
                                        <button onClick={handleUpdate} className="btn btn-sm btn-info">update</button>
                                        <button onClick={handleDelete} className="btn btn-sm btn-danger">delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
    function handleUpdate() { }
    function handleCreate() { }
    function handleDelete() { }
}

export default Users;