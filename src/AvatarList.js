import React from 'react';

const AvatarList = (props) => {
    return(
        <div className="avatar ma4 bg-light-pink dib tc pa2 grow shadow-4">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="avatar" />
            <h2>{props.name}</h2>
            <p>{props.work}</p>
        </div>
    )
}

export default AvatarList;