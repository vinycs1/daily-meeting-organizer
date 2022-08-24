import React, {useEffect, useState} from 'react';
import Button from '@atlaskit/button/standard-button';
import axios from 'axios'

export const Result =()=>{
    const [result, setResult] = useState([])


    useEffect(()=>{
        const intervalId = setInterval(()=>{
            axios.get(`/api/anwsers/`)
                .then(res => setResult(res.data))
                .catch((e)=> console.error(e))
        },1000)

        return () => clearInterval(intervalId);
    },[setResult])



    return (
        <div style={{marginTop: '20px'}}>
            <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Nome</th>
                    <th>Resposta</th>
                </tr>
            </thead>
                <tbody>
            {result.map((result, index) => (
                <tr key={result.name}>
                    <td style={{color: 'white'}}>{index +1}</td>
                    <td style={{color: 'white'}}>{result.name}</td>
                    <td style={{color: 'white'}}>{result.answer}</td>
                </tr>))}
                </tbody>
            </table>
        </div>
    )
}