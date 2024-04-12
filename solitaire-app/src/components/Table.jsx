import React, { Component } from 'react';
import cardTable from '../images/table.png';

class Table extends Component {
    render() {
        const tabStyle = {
            zIndex: 0,
            display: 'flex',
            width: '60vw',
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            
        };
        return (
            <img src={cardTable} style={tabStyle}></img>
        )
    }
}


export default Table;