import React, { useState } from 'react';
import style from'./postAddForm.module.css';

const PostAddForm = ({ onAdd }) => {
    const [text, setText] = useState('');

    const onValueChange = (e) => {
        setText(e.target.value);
        
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd(text);
        setText('');
    };

    
    return (
        <form className= {`${style.bottomPanel} d-flex`} onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="О чем вы думаете ?"
                className= {style.newPostLabel}
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
