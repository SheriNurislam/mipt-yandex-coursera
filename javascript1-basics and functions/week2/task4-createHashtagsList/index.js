/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
	let arrHash =	[];
	let valHash = false;
	let savePos = 0;
	
	for (let i = 0; i < tweet.length; ++i) {
		if (tweet[i] === '#') {
			valHash = true;
			savePos = i;
		}
		if (tweet[i] === ' ' && valHash) {
			arrHash.push(tweet.slice(savePos + 1,i));
			valHash = false;
		} else if (i === tweet.length - 1 && valHash) {
			arrHash.push(tweet.slice(savePos + 1,i + 1));
			valHash = false;
		}
	}

	return arrHash;
};
