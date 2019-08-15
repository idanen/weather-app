import React from 'react';

function Form (props) {
    return (
        <form onSubmit={this.props.loadWeather}>
            <input type="text" name="city " placeholder="City..."></input>
            <input type="text" name="country " placeholder="Country..."></input>
            <button>Get Weather</button>
        </form>
    )
}
export default Form;