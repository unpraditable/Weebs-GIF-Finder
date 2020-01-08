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
        axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}&rating=${rating}
        `)
        .then(res => {
            const gifs = res.data.data;
            this.setState({ gifs });
        })
    }

    render () {
        return (
            <div className="App-body">
            { 
                this.state.gifs.map(gif =>
                
                <img src={gif.images.downsized_large.url} />
                
                )
            }
            </div>
        )
    }
}

export default GifList; 
