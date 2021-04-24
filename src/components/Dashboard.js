import React from 'react';
import Sidebar from './Sidebar';

export default function Dashboard({id}) {
    return (
        <div className="d-flex" style={{height: "100px"}}>
            <Sidebar id={id}/>
        </div>
    )
}
