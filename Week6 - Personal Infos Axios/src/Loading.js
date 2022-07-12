import React, { Component } from 'react';
import './App.css';


class Loading extends Component {
   
    render() {     
        
        document.onreadystatechange = function() {
            if (document.readyState !== "complete") {
                document.querySelector(
                  "body").style.visibility = "hidden";
                document.querySelector(
                  "#loader").style.visibility = "visible";
            } else {
                document.querySelector(
                  "#loader").style.display = "none";
                document.querySelector(
                  "body").style.visibility = "visible";
            }
        };
        
    return (
        <div id="loader"></div>
    )
  }
}

export default Loading;