import React, {Component} from 'react';
import axios from 'axios';

let apiKey='vKqSG6OikZdmluPjBXQnHfmOQYJAoaOE';
let limit = '25';
let rating = 'G';

class GifList extends Component {
    state = {
        gifs: []
    }

    componentDidMount() {
        axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}&rating=${rating}&offset=50
        `)
        .then(res => {
            const gifs = res.data.data;
            this.setState({ gifs });
        })
    }

    render () {
        return (
            <div className="App-body gif-container">
            {
                this.state.gifs.map(gif =>
                
                    <img src={gif.images.fixed_height_downsampled.url} className="gif-item" />
                
                )

            }
            </div>
        )
    }
}

export default GifList; 
