import React, {Component} from 'react';
import axios from 'axios';
import RadioButton from "./RadioButton";


let apiKey='vKqSG6OikZdmluPjBXQnHfmOQYJAoaOE';
let limit = '25';
let rating = 'G';



class GifList extends Component {
    state = {
        gifs: [],
        autoPlay : "0",
        offset : 0
    }

    radioChangeHandler = (event) => {
        this.setState({
            autoPlay: event.target.value
        });
    }

    componentDidMount() {
        this.loadGifs();
    }

    loadGifs = () => {
        axios
        .get(`https://api.giphy.com/v1/gifs/trending`, 
            {
                params: {
                    api_key: 'vKqSG6OikZdmluPjBXQnHfmOQYJAoaOE',
                    limit: '25',
                    rating: 'g',
                    offset: this.state.offset
                }
            }
        )
        .then(res => {
            const gifs = res.data.data;
            this.setState({ gifs });
        })
    }

    loadMore = () => {
        this.setState(
          prevState => ({
            offset: prevState.offset + 25
          }),
          this.loadGifs
        );
        console.log(this.state.offset);
      };

    render () {
        return (
            <div className="">
                <div>
                    <RadioButton 
                        changed={ this.radioChangeHandler } 
                        id="1" 
                        isSelected={ this.state.autoPlay === "1" } 
                        label="On" 
                        value="1" 
                    />

                    <RadioButton 
                        changed={ this.radioChangeHandler } 
                        id="2" 
                        isSelected={ this.state.autoPlay === "0" } 
                        label="Off" 
                        value="0" 
                    />
                </div>
                <div className="App-body gif-container">
                {
                    this.state.gifs.map(gif =>
                        <img src={gif.images.fixed_height_downsampled.url} className="gif-item" />
                    )
                }
                
                
                </div>
                <div>
                    <button type="button" onClick={this.loadMore}>
                        See more
                    </button>
                </div>
            </div>
            
        )
    }
}

export default GifList; 
