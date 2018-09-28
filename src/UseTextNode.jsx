import React from 'react';

class UseTextNode extends React.Component {

	render() {

		let urlParams = new URLSearchParams(window.location.search);
		let string = urlParams.get('string');

		return (<div className="textnode">{string}</div>);
	}

}

export default UseTextNode;