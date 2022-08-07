import React from 'react';

const Cat = ({cat:{id,name},dispatch}) => {

    return (
        <div>
            <div>{name}</div>
        </div>
    );
};

export {Cat};