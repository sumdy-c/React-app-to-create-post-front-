import React from "react";
import "./post-list_item.css";


export default class PostListItem extends React.Component{
   
    render(){
        const {label, onDelete, onToggleImp, onToggleLike, important, like} = this.props;
        
        let classNames = 'app-list-item d-flex justify-content-between';

        if(like){
            classNames += " like";
        }

        if(important){
            classNames += " important";
        }

        return(
            <div className={classNames}>
        <span
        onClick = {onToggleLike} 
        className = "app-list-item-label" >
            {label}
        </span>
            <div className = "d-flex justify-content-center align-items-center">
                <button 
                type="button"
                 className="btn-star btn-sm"
                onClick = {onToggleImp}>
                    <i className ="fa fa-star"></i>
                </button>

                <button type="button" className="btn-trash btn-sm"
                onClick = {onDelete}>
                    🗑
                <i className="fa fa-trash-o"></i> 
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
        )
    }
} 