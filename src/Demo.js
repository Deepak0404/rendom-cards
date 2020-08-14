import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

const Demo = ({name}) =>{
    return <div className="wrapper">
                <h1>Hello {name}</h1>
                <p>Welcome to the React world :)</p>
            </div>
    }

export default Demo;