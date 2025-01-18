import Button from "@common/components/Button"
import { constants } from "@common/constants"
import { Navigate } from "react-router"

const Login = () => {
  if(constants.isAuthenticated) return <Navigate to="/" />
  return (
    <div className=" flex flex-col items-center justify-center h-screen gap-10  p-10">
      <h1 className="font-bold text-3xl">Login to your account</h1>
      <form onSubmit={(e)=>{
        e.preventDefault()
        console.log("Submit",e)
      }} className="form grid gap-4 items-baseline w-full">
        <input type="email" maxLength={50} className="bg-primary-700 rounded-lg p-4 pl-16" placeholder="Email" />
        <input type="password" maxLength={50} placeholder="Password" className="bg-primary-700 rounded-lg p-4 pl-16" />
        <Button type="submit" size="large">Login</Button>
      </form>
    </div>
  )
}

export default Login