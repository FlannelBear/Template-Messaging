import React from 'react';

const MessageBox = (props) => {
    console.log("Mounted Message Box: ", props.message);
    return(
        <p>{props.message}</p>
    );
}

export default MessageBox;