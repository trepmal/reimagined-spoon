import React from 'react';
const DOMPurify = require('dompurify');


class UseDOMPurify extends React.Component {

	render() {

		let urlParams = new URLSearchParams(window.location.search);
		let string = urlParams.get('string');

		const cleanString = DOMPurify.sanitize( string, { ALLOWED_TAGS: ['strong'] } );

		return (<div className="purify" dangerouslySetInnerHTML={{ __html: cleanString }} />);
	}

}

export default UseDOMPurify;
