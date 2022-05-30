import React, {useState} from 'react';

import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import axios from "axios";
import {MembersSelector} from '../users/users-selector'


export const AnwserInput = () => {
    const [value, setValue] = useState({userId: null, anwser: null});
    const [showError, setShowError] = useState(false);

    const onSubmit = () => {
        if (!value.userId || !value.anwser) {
            setShowError(true);
            return;
        } else {
            setShowError(false);
        }

        axios.post(`/api/anwsers/`, value);
    };

    return (
        <div style={{width: '300px'}}>
            {showError && <div style={{color: 'white'}}>Preenche os bagulhos ai</div>}


            <MembersSelector onChange={(value) => setValue(prev => ({...prev, userId: value.value}))}/>
            <Textfield
                value={value.anwser}
                onChange={(e) => setValue(prev => ({...prev, anwser: e.target.value}))}/>
            <Button appearance="primary" onClick={onSubmit}>Submit</Button>
        </div>
    );

};