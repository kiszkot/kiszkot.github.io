import React from 'react';

class MediaPlayer extends React.Component {
    state = {
        i: 0
    }

    prev = () => {
        console.log(this.state.i);
        if (this.state.i === 0) {
            this.setState({i: this.state.data.length});
        }
    }

    next = () => {
        if (this.state.i === this.state.data.length) {
            this.setState({i: 0, video: this.state.video});
        }
    }

    render() {
        return <media id="player">
        <div>
            <iframe id="link" src={this.props.data[this.state.i]} allowfullscreen title="Parkour"></iframe>
        </div>
        <div class="button" align="center">
            <button align="left" onclick={this.prev}>Previous</button>
            <button align="right" onclick={this.next}>Next</button>
        </div>
        </media>
    }
}

export default MediaPlayer