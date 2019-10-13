import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
           
            <div id='search-container'>
                <input value={this.props.search} onChange={this.props.searchFunc}/> 
                <button onChange = {this.props.displaySearch}>Search</button>
                </div>

            
        );
    }
}

export default Search;