import React from 'react';

const debug = (props) => {
    return (
        <div>
            <p>Debug: (Etape: {props.step})</p>
        </div>
    );
};

debug.propTypes = {
    step: React.PropTypes.number,
};

export default debug;
