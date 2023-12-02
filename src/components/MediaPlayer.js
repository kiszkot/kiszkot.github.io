import React from 'react';

class MediaPlayer extends React.Component {
    state = {
        i: 0
    }

    prev = () => {
        this.setState({i: this.state.i-1});
        if (this.state.i === -1) {
            this.setState({i: this.props.data.length-1});
        }
        console.log(this.state.i);
    }

    next = () => {
        this.setState({i: this.state.i+1});
        if (this.state.i === this.props.data.length) {
            this.setState({i: 0});
        }
        console.log(this.state.i);
    }

    render() {
        return <media id="player">
        <div>
            <iframe id="link" src={this.props.data[this.state.i]} allowfullscreen title="Parkour"></iframe>
        </div>
        <div class="button" align="center">
            <button align="left" onClick={this.prev}>Previous</button>
            <button align="right" onClick={this.next}>Next</button>
        </div>
        </media>
    }
}

export default MediaPlayer