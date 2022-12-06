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
            src={"https://i.pinimg.com/736x/f8/a2/85/f8a2859a28bd4e4f473907f5ff94b8da.jpg"}
            height="401px"
            width="401px"
            alt={cavaleiro?.name}
        />
    );
};
