import React from 'react';

function Result(props)
{
    return(
        <div className="result">
            <h1>Username : {props.dis.name}</h1>
           <h2>Result</h2>
           <h3>Total number of question's : 10</h3>
           <h3>Number of correct question's : {props.ms}</h3><br/>
           <h3>Marks Obtained : {(props.ms)*2}</h3><br/>
           <h3>Number of incorrect question's : {(10-(props.ms))} </h3>
        </div>
    )
}

export default Result;