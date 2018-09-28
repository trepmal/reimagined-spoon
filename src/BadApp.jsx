import React from 'react';

class BadApp extends React.Component {

	render() {

		let urlParams = new URLSearchParams(window.location.search);
		let string = urlParams.get('string');

		return (<div className="ahhhh" dangerouslySetInnerHTML={{ __html: string }} />);
	}

}

export default BadApp;