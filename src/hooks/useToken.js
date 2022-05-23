import axios from "axios"
import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token,setToken]=useState('')
    useEffect(() => {
        const gettoken = async () => {
            const emails =user?.user?.email
            if (emails) {
                const { data } = await axios.post('http://localhost:5000/token', { emails })
            localStorage.setItem('token', data.createToken)
            setToken(data.createToken)
           }
        }
        gettoken()
    }, [user])
    return[token]
}
export default useToken