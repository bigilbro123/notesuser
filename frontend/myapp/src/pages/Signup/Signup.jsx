import { useState } from "react"
import { Link } from "react-router-dom"
import { baseApi } from "../../api/baseApi"

const Signup = () => {

    const [userdata, setuserData] = useState({
        userName: "",
        email: "",
        password: "",
        confrimPassword: ""
    })
    const HandleSubmit = async (e) => {
        e.preventDefault();
        if (!userdata.userName || !userdata.email || !userdata.password || !userdata.confrimPassword) {
            return alert("fill the form")
        }

        if (userdata.password !== userdata.confrimPassword) {
            return alert("password not match")
        }
        try {
            const userdetails = await fetch(baseApi.baseApi + "api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userdata),
            })
            const response = await userdetails.json()

            alert(response.message)
        } catch (error) {
            throw new Error(error)

        }


    }
    return (
        <div className="flex justify-center items-center h-screen">

            <div className="w-full max-w-xs">
                <form onSubmit={HandleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            userName
                        </label>
                        <input value={userdata.userName} onChange={(e) => setuserData({ ...userdata, userName: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="userName" type="text" placeholder="userName" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            email
                        </label>
                        <input value={userdata.email} onChange={(e) => setuserData({ ...userdata, email: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="userName" type="email" placeholder="userName" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Password
                        </label>
                        <input value={userdata.password} onChange={(e) => setuserData({ ...userdata, password: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            confirm Password
                        </label>
                        <input value={userdata.confrimPassword} onChange={(e) => setuserData({ ...userdata, confrimPassword: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign Up
                        </button>
                        <Link to={'/login'} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Login
                        </Link>
                    </div>
                </form>

            </div>

        </div>

    )
}

export default Signup