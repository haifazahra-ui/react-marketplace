import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUser } from "../redux/userSlice"

const User = () => {
    const { user } = useSelector(root => root)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUser());
    }, [])

    return (
        <div className="container p-4">
            <h1>List User</h1>
            {
                user.load && <h1>Loading...</h1>
            }
            <ul>
                {
                    user.data?.length === 0 ? <li>
                        <i className="text-danger">No Data User</i>
                    </li> :
                        user.data?.map((d, idx) => <li key={idx}>{d.name}</li>)

                }
            </ul>
        </div>
    )
}

export default User