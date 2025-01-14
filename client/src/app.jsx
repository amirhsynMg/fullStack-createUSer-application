import { useContext } from "react";
import Users from "./components/users";
import UserContext from "../src/context/user";
import { useState } from "react";

const App = () => {
    const [users, setUsers] = useState([])

    return (
        <UserContext.Provider
            value={{
                users,
                setUsers,
                onUpdate,
                onDelete,
                oncreate
            }}
        >
            <>
                <Users />
            </>
        </UserContext.Provider>

    );

    function onUpdate() { }
    function onDelete() { }
    function oncreate() { }
}

export default App;