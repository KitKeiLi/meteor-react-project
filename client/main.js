import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { images: [] };
    }


    componentWillMount() {
        axios.get('https://api.imgur.com/3/gallery/hot/viral/0.json')
            .then(response => this.setState({ images: response.data.data }));
    }

    render() {
        console.log(this.state.images)
        return (
            <div>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

Meteor.startup( () => {
    ReactDOM.render(<App />, document.querySelector('.container'));
});
