import React, {useEffect, useState} from "react";
import axios from "axios";

export const SprintThemeImage = () => {
    const [cavaleiro, setCavaleiro] = useState();

    useEffect(() => {
        axios.get(`https://saint-seiya-api.herokuapp.com/api/character/${370}`)
            .then(res => {
                setCavaleiro(res.data);
            });
    }, []);
   //src={`https://diegochagas.com/saint-seiya-api/${cavaleiro?.image}`}
    return (
      
        <img
            src={"https://diegochagas.com/saint-seiya-api/assets/cloth-schemes/athena-saints/gemini-saga.jpg"}
            height="400px"
            width="400px"
            alt={cavaleiro?.name}
        />
    );
};
