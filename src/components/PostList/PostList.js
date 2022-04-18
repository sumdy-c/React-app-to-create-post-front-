import React from 'react';
import PostListItem from '../PostListItem/PostListItem';
import { ListGroup } from 'reactstrap';
import style from'./postList.module.css';

const PostList = ({ posts, onDelete, onToggleImp, onToggleLike }) => {
    const elem = posts.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={item.id} className = "list-group-item">
                <PostListItem
                    {...itemProps}
                    onDelete={() => {
                        onDelete(id);
                    }}
                    onToggleImp={() => {
                        onToggleImp(id);
                    }}
                    onToggleLike={() => {
                        onToggleLike(id);
                    }}
                />
            </li>
        );
    });
    return <ListGroup className= {style.appList}>{elem}</ListGroup>;
};

export default PostList;
