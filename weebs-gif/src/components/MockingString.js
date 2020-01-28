import React, {Component} from 'react';
const vowels = ["a", "i", "u", "e", "o"];
const capitalVowels = ["A", "I", "U", "E", "O"];

class MockingString extends Component {
    state = {
        input: "",
    }
    handleChange = this.handleChange.bind(this);
    handleChange(e) {
        this.setState({input: e.target.value});
    }

    mockingString = (string) => {
        let newString = ""
        for (let i = 0; i < string.length; i++) {
            if(!vowels.includes(string[i]) && !capitalVowels.includes(string[i])) {
                newString = newString.concat(string[i]);

            }

            if (vowels.includes(string[i])) {
                newString = newString.concat("i");
            }
            if(capitalVowels.includes(string[i])) {
                newString = newString.concat("I");
            }
        }
        alert(newString);
    }

    handleClick = (e) => {
        this.mockingString(this.state.input);
    }

    render() {
        return(
            <div>
                <div>
                    <input type="textarea" onChange={this.handleChange}></input>
                </div>
                <button type="button" onClick={this.handleClick}>
                    Mock this string
                </button>
            </div>
        
        )
        
    }
}

export default MockingString;