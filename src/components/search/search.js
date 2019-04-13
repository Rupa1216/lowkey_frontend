import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Search extends React.Component {

    state = {
        query: '',
        value: ''
    }

    handleChange = (e) => {
        this.setState({ query: e.target.value })
    }

    handleSubmit = (e) => {
        axios.get('http://localhost:3003/users/')
        // this.setState({ })

        // axios.get username + error message
    } // reset input field afterwards

    updateValue = (e) => {
        this.setState({
            value: e.target.value,
        })
    }

    render() {
        console.log('search state', this.state)
        return (
            <form className="form-inline pb-3" onSubmit={this.handleSubmit}>
                <input className="form-control mr-sm-2" type="search" placeholder="@Username" aria-label="Search" value={this.state.query} onChange={this.handleChange}/>
                <Link to="/search" style={{textDecoration: 'none'}}>
                <button className="btn btn-sm btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                </Link>
            </form>
        )
    }
}