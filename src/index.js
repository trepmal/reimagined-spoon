import React from 'react';
import ReactDOM from 'react-dom';
import BadApp from './BadApp.jsx';
import UseTextNode from './UseTextNode.jsx';
import UseDOMPurify from './UseDOMPurify.jsx';

// import './style.scss';

// Render main Badapp
ReactDOM.render(<BadApp/>, document.getElementById('bad-example'));
ReactDOM.render(<UseTextNode/>, document.getElementById('use-textnode'));
ReactDOM.render(<UseDOMPurify/>, document.getElementById('use-dompurify'));