import React, {Component} from 'react';
const vowels = ["a", "i", "u", "e", "o"];
const capitalVowels = ["A", "I", "U", "E", "O"];

class MockingString extends Component {
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

    render() {
        return(
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button type="button" onClick={() => this.mockingString("Orang Jahat Adalah Orang Baik yang Disakiti")}>
                    Mock this string
                </button>
            </div>
        
        )
        
    }
}

export default MockingString;