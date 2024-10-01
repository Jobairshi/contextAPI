import { useContext } from "react"
import UserContext from "../Context/UserContext"


export default function Profile() {
    const{user} = useContext(UserContext)
    console.log(user)
  return (
    <div>Profile : {
        user?.username ? user.username: 'not logged in'
        }</div>
  )
}
