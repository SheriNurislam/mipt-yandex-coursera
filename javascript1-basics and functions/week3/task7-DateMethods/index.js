/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
	let dateArr = date.match(/\d{1,4}/g, date);
	let tmpdate = new Date(Date.UTC(dateArr[0], dateArr[1] - 1, dateArr[2], dateArr[3], dateArr[4], 0, 0));

	let dateObject = {
		value: String(dateArr[0]) + '-' + String(dateArr[1]) + '-' + String(dateArr[2]) + ' ' + String(dateArr[3]) + ':' + String(dateArr[4]),
		add: function (num, str) {
			let tmparr = this.value.match(/\d{1,4}/g, this.value);
			let tmpd = new Date(Date.UTC(tmparr[0], tmparr[1] - 1, tmparr[2], tmparr[3], tmparr[4], 0, 0));
			if (num < 0) throw new TypeError('Передано неверное значение: ' + num);

			switch (str) {
				case 'hours':
					tmpd.setUTCHours(tmpd.getUTCHours() + num);
					break;

				case 'years':
					tmpd.setUTCFullYear(tmpd.getUTCFullYear() + num);
					break;

				case 'months':
					tmpd.setUTCMonth(tmpd.getUTCMonth() + num);
					break;
				case 'days':
					tmpd.setUTCDate(tmpd.getUTCDate() + num);
					break;
				case 'minutes':
					tmpd.setUTCMinutes(tmpd.getUTCMinutes() + num);
					break;
				default:
					throw new TypeError('Передано неверное значение: ' + str);
			}

			let tmp = tmpd.toLocaleString("ru", {
				timeZone: "UTC"
			});
			tmparr = tmp.match(/\d{1,4}/g, this.value);
			for (let i = 0; i < tmparr.length; ++i)
				if (Number(tmparr[i]) < 10 && tmparr[i].length < 2) tmparr[i] = '0' + tmparr[i];

			this.value = tmparr[0] + '-' + tmparr[1] + '-' + tmparr[2] + ' ' + tmparr[3] + ':' + tmparr[4];
			return this;
		},
		subtract: function (num, str) {
			let tmparr = this.value.match(/\d{1,4}/g, this.value);
			let tmpd = new Date(Date.UTC(tmparr[0], tmparr[1] - 1, tmparr[2], tmparr[3], tmparr[4], 0, 0));
			if (num < 0) throw new TypeError('Передано неверное значение: ' + num);


			switch (str) {
				case 'hours':
					tmpd.setUTCHours(tmpd.getUTCHours() - num);
					break;
				case 'years':
					tmpd.setUTCFullYear(tmpd.getUTCFullYear() - num);
					break;
				case 'months':
					tmpd.setUTCMonth(tmpd.getUTCMonth() - num);
					break;
				case 'days':
					tmpd.setUTCDate(tmpd.getUTCDate() - num);
					break;
				case 'minutes':
					tmpd.setUTCMinutes(tmpd.getUTCMinutes() - num);
					break;
				default:
					throw new TypeError('Передано неверное значение: ' + str);
			}

			let tmp = tmpd.toLocaleString("ru", {
				timeZone: "UTC"
			});
			tmparr = tmp.match(/\d{1,4}/g, this.value);
			for (let i = 0; i < tmparr.length; ++i) if (Number(tmparr[i]) < 10 && tmparr[i].length < 2) tmparr[i] = '0' + tmparr[i];

			this.value = tmparr[0] + '-' + tmparr[1] + '-' + tmparr[2] + ' ' + tmparr[3] + ':' + tmparr[4];
			return this;
		}

	};


	return dateObject;

};