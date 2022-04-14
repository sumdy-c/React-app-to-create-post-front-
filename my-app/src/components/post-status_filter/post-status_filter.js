import React from 'react';
import App from '../app/app';

const PostStatusFilter = (filters) => {
    const { filter, onFilterSel } = filters;

    let buttons = [
        { name: 'all', label: 'Все' },
        { name: 'like', label: 'Понравилось' },
    ];

    buttons = buttons.map(({ name, label }) => {
        const active = filter === name;
        const newClass = active ? 'btn-info' : 'btn-outline-secondary';
        return (
            <button
                key={name}
                type="button"
                className={`btn ${newClass}`}
                onClick={() => onFilterSel(name)}
            >
                {label}
            </button>
        );
    });
    return <div className="btn-group">{buttons}</div>;
};

export default PostStatusFilter;
