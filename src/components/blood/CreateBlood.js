import React, { Component } from 'react'

class CreateBlood extends Component {
    state={
        category:'',
        quantity:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Ask for Blood</h5>
                    <div className="input-field">
                        <label htmlFor="category">Category</label>
                        <input type="text" id="category" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="quantity">Quantity(in litres)</label>
                        <input type="number" id="quantity" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Place Request</button>
                    </div>
                </form>                
            </div>
        )
    }
}

export default CreateBlood
