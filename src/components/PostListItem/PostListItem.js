import React from 'react';
import style from './postListItem.module.css';

const PostListItem = (data) => {
    const { label, onDelete, onToggleImp, onToggleLike, important, like } =
        data;

    let classNames = `${style.appListItem} d-flex justify-content-between`;

    if (like) {
        classNames += ` ${style.like}`;
    }

    if (important) {
        classNames += ` ${style.important}`;
    }
    
    //console.log(style);

    return (
        <div className={classNames}>
            <span onClick={onToggleLike} className= {style.appListItemLabel}>
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button
                    type="button"
                    className= {`${style.btnStar} btn-sm`}
                    onClick={onToggleImp}
                >
                    <i className='fa fa-star'></i>
                </button>

                <button
                    type="button"
                    onClick={onDelete}
                >
                    🗑
                </button>

                <i className={`fa ${style.faHeart}`}>❤</i>

            </div>
        </div>
    );
};

export default PostListItem;
