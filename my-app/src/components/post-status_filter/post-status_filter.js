import React from "react";


export default class PostStatusFilter extends React.Component {
        constructor(props){
            super(props);
            this.buttons = [
                {name: "all", label: "Все"},
                {name: "like", label: "Понравилось"}
            ]
        }


    render(){
        const buttons = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name;
            const newClass = active ? 'btn-info' : 'btn-outline-secondary';
            return(
               <button
                key = {name} 
                type="button" 
                className={`btn ${newClass}`} 
                onClick = {() => this.props.onFilterSel(name)}>{label}</button>
            )
        });
        return (
            <div className="btn-group">
               {buttons}
            </div>
        )
    }
}
