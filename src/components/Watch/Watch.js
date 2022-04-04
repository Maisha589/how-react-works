import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);

const increaseSteps = () =>{
    const newStepsCount = steps +1;
setSteps(newStepsCount);
}

useEffect(()=> {
    console.log(steps);
},[steps])

    return (
        <div style={{border: "2px solid purple", margin: "2px"}}>
            <h2>This is my smart watch!!</h2>
            <h3>My current steps: {steps}</h3>
            <button onClick={increaseSteps}>De dour .............</button>
            <Display name="Garmin" steps={steps}></Display>
        </div>
    );
};

export default Watch;