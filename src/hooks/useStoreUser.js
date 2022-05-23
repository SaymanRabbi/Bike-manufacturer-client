import { useEffect, useState } from "react"
const useStoreUser = (user) => {
    const [userdata, setUserData] = useState('')
    useEffect(() => {
        const email = user?.user?.email
        const userData = { email:email }
        if (email) {
            fetch(`http://localhost:5000/users?email=${email}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Barer ${localStorage.getItem('token')}`
                },
                body:JSON.stringify(userData)
            }).then(res=>res.json()).then(data=>console.log(data))
        }
    }, [user])
    return [userdata]
}
export default useStoreUser