import React, { Component } from 'react'

export default class Searchbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        let filter = {
            ingredients: [],
            number: 1
        }
        filter.ingredients.push(this.state.search);
        this.props.fetchRecipes(filter);
        this.props.history.push(`/searchresults`);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Search by Ingredients" value={this.state.search} onChange={this.update('search')}/>
                <input type="submit" />
            </form>
        )
    }
}
