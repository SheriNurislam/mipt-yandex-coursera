// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {

	commandName = command.split(' ')[0];

	switch (commandName) {
		case 'ADD':
			return AddContact(command);
			break;
		case 'REMOVE_PHONE':
			return RemovePhone(command);
			break;
		case "SHOW":
			return Show(command);
			break;
	}

};

function Show(command) {

	let arr = [];

	let keys = Object.keys(phoneBook);
	for (let i = 0; i < keys.length; ++i) {
		let key = keys[i];
		if (phoneBook[key].length > 0) {
			let tmpstr = key + ': ' + phoneBook[key].join(', ');
			arr.push(tmpstr)
		}
	}

	return arr.sort();

}

function RemovePhone(command) {
	let commandArr = command.split(' ');
	let phone = commandArr[1];

	let isExist = false;

	let keys = Object.keys(phoneBook);
	for (let i = 0; i < keys.length; ++i) {
		let key = keys[i];
		for (let j = 0; j < phoneBook[key].length; ++j) {
			if (phone === phoneBook[key][j]) {
				isExist = true;
				phoneBook[key].splice(j, 1);
				break;
			}
		}
	}

	return isExist;
}

function AddContact(command) {
	let commandArr = command.split(' ');
	let name = commandArr[1];
	let phones = commandArr[2].split(',');

	if (!phoneBook.hasOwnProperty(name)) phoneBook[name] = phones;
	 else phoneBook[name] = phoneBook[name].concat(phones);
	

	return phoneBook[name];
}



