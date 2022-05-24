import { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../firebase.init"
const useAdmin = () => {
    const [user] = useAuthState(auth)
    const [admin, setAdmin] = useState(false)
    const [adminloading,setAdminLoadig] = useState(true)
    fetch(`https://assignment12bike.herokuapp.com/admin?email=${user?.email}`, {
        method: 'GET',
        headers: {
                'authorization': `Barer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()).then(data => {
        setAdmin(data.admin)
        setAdminLoadig(false)
    }) 
    return [admin,adminloading]
}
export default useAdmin