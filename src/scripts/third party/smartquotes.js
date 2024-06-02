// By Cyrus Firheir at https://gist.github.com/cyrusfirheir/a856afb6bb1e38eb66288afe8b281feb
// Adapted from `smartquotes.js` at https://github.com/kellym/smartquotes.js
// LICENCE: https://github.com/kellym/smartquotes.js/blob/master/LICENSE
if (!String.prototype.smartQuotes) {
	Object.defineProperty(String.prototype, 'smartQuotes', {
		configurable: true,
		writable: true,
		value: function smartQuotes() {
			return this
				.replace(/'''/g, '\u2034')
				.replace(/(\W|^)"(\S)/g, '$1\u201c$2')
				.replace(/(\u201c[^"]*)"([^"]*$|[^\u201c"]*\u201c)/g, '$1\u201d$2')
				.replace(/([^0-9])"/g, '$1\u201d')
				.replace(/''/g, '\u2033')
				.replace(/(\W|^)'(\S)/g, '$1\u2018$2')
				.replace(/([a-z])'([a-z])/ig, '$1\u2019$2')
				.replace(/((\u2018[^']*)|[a-z])'([^0-9]|$)/ig, '$1\u2019$3')
				.replace(/(\u2018)([0-9]{2}[^\u2019]*)(\u2018([^0-9]|$)|$|\u2019[a-z])/ig, '\u2019$2$3')
				.replace(/(\B|^)\u2018(?=([^\u2019]*\u2019\b)*([^\u2019\u2018]*\W[\u2019\u2018]\b|[^\u2019\u2018]*$))/ig, '$1\u2019')
				.replace(/'/g, '\u2032');
		}
	});
}
