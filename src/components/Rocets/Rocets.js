import React, {useEffect, useState} from 'react';
import {Rocet} from "../Rocet/Rocet";

const Rocets = () => {

    let [rocets, setRocets] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                let noYear = value.filter(value => value.launch_year !== '2020');
                setRocets(noYear);
            })
    },[])


    return (
        <div>
            {rocets.map(value => <Rocet key={value.launch_date_unix} mission_name={value.mission_name} launch_year={value.launch_year} mission_patch_small={value.links.mission_patch_small} />)}

        </div>
    );
};

export {Rocets};