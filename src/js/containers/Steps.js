import React from 'react';
import Steps from 'react-steps';

const initSteps = [
    {
        text: 'Bookbinding',
        isActive: true,
        isDone: false,
    },
    {
        text: 'Colors',
        isActive: false,
        isDone: false,
    },
    {
        text: 'Format',
        isActive: false,
        isDone: false,
    },
    {
        text: 'Pages',
        isActive: false,
        isDone: false,
    },
];

export default () => {
    return <div><Steps items={initSteps} type={'point'} /></div>;
};

