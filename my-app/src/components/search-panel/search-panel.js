import React from "react";
import "./search-panel.css";

export default class  SearchPanel extends React.Component {
   constructor (props){
    super(props);
    this.state = {
        term: ''
    }

    this.onUpSearch = this.onUpSearch.bind(this);
   }

   onUpSearch(e){
     const term = e.target.value;
     this.setState({term});
     this.props.onUpdateSearch(term);
   }
   
   
    render(){
    return(
        <input
            className="form-control search-input"
            type= "text"
            placeholder="Поиск по записям"
            onChange={this.onUpSearch}
        />
        )
   }
}

