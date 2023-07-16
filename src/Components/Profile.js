import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"

const  Profile =  () => {
    const navigate = useNavigate()
    const [profile, setProfile] = useState(undefined)


    const { id } = useParams()
    const URL = `${process.env.REACT_APP_BACKEND_URI}/profile/${id}`

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(URL)
            const data = await response.json()
            setProfile(data)           
        }
        fetchData()
    },[id, URL])

    const display = profile && (
        <div style={{margin : "auto"}}>
            <h1>{profile.userName}</h1>
            <image src={profile.profilePicture} />
            <p>{profile.emailAddress}</p>
            <div>
                <h4>{profile.firstName} {profile.lastName}</h4>
            </div>
        </div>
    )
    
    return(
        <div>
            {display}
        </div>
    )
}

export default Profile