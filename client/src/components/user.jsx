import { Link, useParams, useSearchParams } from "react-router-dom";
import UserContext from "../context/user";
import { useContext, useEffect } from "react";
import newRequest from "../utils/newRequest"
const User = () => {
    const { id } = useParams()
    const userContext = useContext(UserContext)

    const [searchParams] = useSearchParams();

    // دریافت مقدار کوئری first_name
    const firstName = searchParams.get("first_name");

    console.log(firstName)

    
    useEffect(() => {
        async function fetchData() {
            const response = await newRequest.get(`/users/${id}`)
            console.log(response.data)
            userContext.setUser(response.data.user)
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
                    
                </div>
            </div>
        </>
    );
}

export default User;