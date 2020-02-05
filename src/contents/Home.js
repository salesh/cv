import React, { Component } from 'react';
import profilePic from '../img/profile.jpeg';
import ReactTypingEffect from 'react-typing-effect';

class Home extends Component {

    render() {
        return (
            <div className="condiv home">
                <img src={profilePic} className="profilepic"></img>
                <ReactTypingEffect className="typingeffect "
                    text={['My name is Sasa Cvetkovic', 'I am Full Stack Developer']}
                    speed={80} eraseDelay={700}
                />
            </div>
        )
    }
}

export default Home;