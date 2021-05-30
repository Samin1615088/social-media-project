import firebase from 'firebase';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './../Home';

if ("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Home></Home>, div)
});
