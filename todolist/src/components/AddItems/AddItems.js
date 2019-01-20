import React, {Component} from 'react';
import './AddItems.css';


class AddItems extends Component {
    state = {
        name: '',
        age : ''
    }

    handleChange =(e) => {
        this.setState({
            [e.target.id]: e.target.value
        });

    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(e.target.name.value !== ''){
            this.props.add(this.state);
        this.setState({
            name: '',
            age: ''
        })
        }else{
            return false
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter name..." id="name" onChange={this.handleChange} value={this.state.name}/>
                    <input type="number" placeholder="Enter age..." id="age" onChange={this.handleChange } value={this.state.age} />
                    <input type="submit" value="Add" className="action-btn"/>
                </form>
            </div>
        )
    }
}

export default AddItems