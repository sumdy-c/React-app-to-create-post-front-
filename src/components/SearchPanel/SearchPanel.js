import React from 'react';
import style from './searchPanel.module.css';

const SearchPanel = (props) => {
    const onUpSearch = (e) => {
        let trm = e.target.value;

        props.onUpdateSearch(trm);
    };

    return (
        <input
            className = {`form-control ${style.searchInput}`}
            type="text"
            placeholder="Поиск по записям"
            onChange={onUpSearch}
        />
    );
};
export default SearchPanel;
