import React from 'react';

const Cosmetics = () => {
    const first = 55;
    const second = 66;
    const total = add(first,second);
    return (
        <div>
            <h1>This is BK</h1>
            <p>Total: {total}</p>
        </div>
    );
};

export default Cosmetics;