import React from "react";
import PostListItem from '../post-list_item/post-list_item';
import { ListGroup } from "reactstrap";
import "./post-list.css";




const PostList = ({posts, onDelete, onToggleImp, onToggleLike}) => {
    const elem = posts.map(item => {
        const {id, ...itemProps} = item;
        return (
        <li key = {item.id} className="list-group-item">
            <PostListItem
                {...itemProps}
                   onDelete={()=>{onDelete(id)}}
                   onToggleImp = {()=> {onToggleImp(id)}}
                   onToggleLike = {()=> {onToggleLike(id)}}/>
        </li>
    ) });
    return (
        <ListGroup className="app-list">
            {elem}
        </ListGroup>
    )
}

export default PostList;