import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token,setToken]=useState('')
    useEffect(() => {
        const gettoken = async () => {
            const emails = user?.user?.email
            if (emails) {
                fetch(`https://assignment12bike.herokuapp.com/token?email=${emails}`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json()).then(data => {
                    localStorage.setItem('token', data.createToken)
                    setToken(data.createToken)
             })





        //         const { data } = await axios.post(`https://assignment12bike.herokuapp.com/token?email=${emails}`,{ emails })
            
           }
        }
        gettoken()
    }, [user])
    return[token]
}
export default useToken