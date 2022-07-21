import React from 'react';
import '../Rocet/Rocet.css'

const Rocet = (rocet) => {
    const {mission_name, launch_year, mission_patch_small} = rocet;
    return (

        <div className={'wrap'}>
            <div>
                <h2>{mission_name}</h2>
                <p>{launch_year}</p>
            </div>
            <img src={mission_patch_small} alt=""/>
        </div>
    );
};

export {Rocet};