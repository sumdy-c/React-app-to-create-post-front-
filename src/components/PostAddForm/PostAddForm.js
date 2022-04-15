import React, { useState } from 'react';
import './PostAddForm.css';

const PostAddForm = ({ onAdd }) => {
    const [text, setText] = useState('');

    const onValueChange = (e) => {
        setText(e.target.value);
        console.log(text);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd(text);
        setText('');
    };

    console.log(text);
    return (
        <form className="bottom-panel d-flex" onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="О чем вы думаете ?"
                className="form-control new-post-label"
                onChange={onValueChange}
                value={text}
            />
            <button type="submit" className="btn btn-outline-secondary">
                Добавить
            </button>
        </form>
    );
};

export default PostAddForm;
