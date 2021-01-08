/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {


	let array1 = hashtags;
	let array2 = [];


	for (let i = 0; i < array1.length; ++i) {
		array1[i] = array1[i].toLowerCase();

		for (let j = i + 1; j < array1.length; ++j) {
			let tmp = array1[j].toLowerCase();
			if (array1[i] === tmp) array1[j] = '#';
			
		}

		if (array1[i] !== '#') array2.push(array1[i]);
	}

	return array2.join(', ');

};



