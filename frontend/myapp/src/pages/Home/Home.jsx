import { useEffect, useState } from "react"
import { baseApi } from "../../api/baseApi";

const Home = ({
    // eslint-disable-next-line react/prop-types
    user
}) => {

    const [note, setnote] = useState({
        Note: "",
        // eslint-disable-next-line react/prop-types
        userId: user?._id
    })
    const HandleNote = async (e) => {
        e.preventDefault();
        try {
            const userdetails = await fetch(baseApi.baseApi + "api/notes/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(note),
            })
            const response = await userdetails.json()
            alert(response.message)
        } catch (error) {
            throw new Error(error)
        }



    }


    useEffect(() => {
        const AllNote = async (user) => {
            try {
                const userId = {
                    userId: user
                }
                const userdetails = await fetch(baseApi.baseApi + "api/notes/getnotes", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userId),
                })
                const response = await userdetails.json()
                alert(response.message)
            } catch (error) {
                throw new Error(error)
            }
        }
        // eslint-disable-next-line react/prop-types
        AllNote(user?._id)
    }, [user])



    return (
        <div>

            <div className="flex text-2xl  justify-center font-bold">
                {/* eslint-disable-next-line react/prop-types */}
                welcome {user?.userName}
            </div>

            <p className="flex  justify-center font-bold">craete a new note</p>

            <form onSubmit={HandleNote}>
                <div className="flex flex-col ml-11 justify-center items-start mt-20">
                    <label >craete </label>
                    <div>
                        <textarea value={note.Note} onChange={(e) => { setnote({ ...note, Note: e.target.value }) }} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="userName" type="email" placeholder="userName" />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            create
                        </button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Home