import { useEffect} from "react"
const useStoreUser = (user) => {
    useEffect(() => {
        const email = user?.user?.email
        const userData = { email:email }
        if (email) {
            fetch(`https://assignment12bike.herokuapp.com/users?email=${email}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Barer ${localStorage.getItem('token')}`
                },
                body:JSON.stringify(userData)
            }).then(res=>res.json()).then(data=>{})
        }
    }, [user])
}
export default useStoreUser