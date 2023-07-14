import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"

const  Profile =  () => {
    const navigate = useNavigate()
    const [profile, setProfile] = useState(undefined)


    const { _id } = useParams()
    const URL = `${process.env.REACT_APP_BACKEND_URI}/profile/${_id}`

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(URL)
            const data = await response.json()
            setProfile(data)           
        }
        fetchData()
    },[_id, URL])

    const display = profile && (
        <div>
            <h1>{profile.userName}</h1>
        </div>
    )
    
    return(
        <div>
            {display}
        </div>
    )
}

export default Profile