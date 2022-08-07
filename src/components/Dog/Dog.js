import React from 'react';

const Dog = ({dog:{id,name}, dispatch}) => {
    return (
        <div>
            {name}
        </div>
    );
};

export {Dog};