import React from 'react';

const HomePage = () => {
    return (
        <div>
            <div>I am the VERY BEST home component</div>
            <button onClick={() => console.log('Hello')}>Press me!</button>
        </div>
    );
};

export default {
    component: HomePage
};
