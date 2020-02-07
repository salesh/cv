import React, { Component } from 'react';
import profilePic from '../img/profile.jpeg';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social';

class Home extends Component {

    render() {
        return (
            <div className="condiv home">
                <img src={profilePic} alt="me" className="profilepic"></img>
                <ReactTypingEffect className="typingeffect "
                    text={['My name is Saša Cvetković', 'I am Full Stack Developer']}
                    speed={100} eraseDelay={1000}
                />
                <Social/>
            </div>
        )
    }
}

export default Home;