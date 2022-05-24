import { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../firebase.init"

const useAdmin = () => {
    const [user] = useAuthState(auth)
    const [admin, setAdmin] = useState(false)
    const [adminloading,setAdminLoadig] = useState(true)
    fetch(`http://localhost:5000/admin?email=${user?.email}`, {
        method: 'GET',
        headers: {
                'authorization': `Barer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()).then(data => {
        console.log(data)
        setAdmin(data.admin)
        setAdminLoadig(false)
    }) 
    return [admin,adminloading]
}
export default useAdmin