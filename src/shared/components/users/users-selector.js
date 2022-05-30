import React,{useState, useEffect} from 'react';
import Select from '@atlaskit/select';
import axios from "axios"

export const MembersSelector = ({onChange}) =>{
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get(`/api/users/`)
        .then(res => {
            setUsers(res.data)
        })
        .catch(e=> console.log(e));
    }, [])

    return(
        <Select 
            onChange={onChange} 
            options={users.map(member => ({value: member.id, label: member.name}))}
        />
    )
}