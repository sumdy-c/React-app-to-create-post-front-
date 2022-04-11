import React from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status_filter/post-status_filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add_form/post-add_form";
import './app.css';
//import styled from 'styled-components';



export default class App extends React.Component {
  
    state = {
            data: [
             {label: "Учу React!", important: false, like: false, id : 1},
             {label: "Получается отлично ;)", important: false, like: false, id : 2},
             {label: "Не хочу останавливаться", important: false, like: false, id : 3}
        ],
        term: '',
        filter: 'all'
     };
   
     maxID = 4;
    
       DeleteElementPost = (id)=>{
            this.setState(({data}) => { 
                const index = this.state.data.findIndex(el => el.id === id);
                
                const newArr = [...data.slice(0, index), ...data.slice(index+1)];
               
                return { data : newArr }
            }); 
       };
       
       addItem = (body)=>{
            const newItem = {
                label: body,
                important: false,
                id: this.maxID++
            }   
            this.setState(({data}) => {
                const newArr = [...data, newItem];    
                return { data: newArr }
            });
       };

       onToggleImp = (id) => {
            
            this.setState(({data}) => { 
                const index = data.findIndex(el => el.id === id);
                const oldEl = data[index];
                const newItem = {...oldEl, important: !oldEl.important}
                const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];
                return { data: newArr }
            });
       }

       
       onToggleLike = (id) =>{
            this.setState(({data}) => { 
                const index = data.findIndex(el => el.id === id);
                const oldEl = data[index];
                const newItem = {...oldEl, like: !oldEl.like}
                const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];
                return { data: newArr }
            });
            
       }

       searchPost(items, term){
           if(term.length === 0) return items
            
           return items.filter((item) => {
               return item.label.indexOf(term) > -1;
           });
       }

       onUpdateSearch = (term) => {
        this.setState({term});
       }

       filterPost = (items, filter) =>{
            if(filter === 'like') {
                return items.filter(item => item.like) 
            } else {
                return items;
            }
       }

       onFilterSel = (filter) => {
        this.setState({filter});
       }

         
       render(){
        const {data, term, filter} = this.state;
        const liked = this.state.data.filter(i => i.like).length;
        const allPost = this.state.data.length;
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return(
                <div className="app">
                    <AppHeader
                    liked = {liked}
                    allPost = {allPost}/>
                        <div className="search-panel d-flex">
                            <SearchPanel
                            onUpdateSearch = {this.onUpdateSearch}/>
                            <PostStatusFilter
                                filter = {filter}
                                onFilterSel={this.onFilterSel}/>
                        </div>
                        <PostList
                        posts = {visiblePosts}
                        onDelete = {this.DeleteElementPost}
                        onToggleImp = {this.onToggleImp}
                        onToggleLike = {this.onToggleLike}/>
                        <PostAddForm
                        onAdd={this.addItem}/>
                </div>
            )
    }
}
