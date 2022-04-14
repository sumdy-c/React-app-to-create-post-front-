import React from 'react';

import './search-panel.css';

const SearchPanel = (props) => {
    const onUpSearch = (e) => {
        let trm = e.target.value;

        props.onUpdateSearch(trm);
    };

    return (
        <input
            className="form-control search-input"
            type="text"
            placeholder="Поиск по записям"
            onChange={onUpSearch}
        />
    );
};
export default SearchPanel;
