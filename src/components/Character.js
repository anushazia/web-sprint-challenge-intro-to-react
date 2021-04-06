// Write your Character component here
import React from 'react'
import Axios from "axios"

export default function Character (props) {
    const { data } = props
    
return (
    <div className='Characters container'>
        <p>{Character.name} </p>
    </div>
)}
