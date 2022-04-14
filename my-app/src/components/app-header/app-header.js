import React from 'react';
import './app-header.css';

const AppHeader = ({ liked, allPost }) => {
    //console.log(typeof liked, typeof allPost);
    return (
        <div className="app-header d-flex">
            <h1>Maxim Kutuzov</h1>
            <h2>
                {allPost} записей, из них понравилось {liked}
            </h2>
        </div>
    );
};

export default AppHeader;
