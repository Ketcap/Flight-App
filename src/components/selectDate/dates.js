const Months = [
	'', 'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
]
const Days = [
	'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'
]
const getDays = (month, year) => {
	const date = new Date(year, month, 0);
	const dateCount = date.getDate();
	date.setDate(1);
	const startingDate = date.getDay();
	const calendar = [...new Array(startingDate === 0 ? 6 : startingDate - 1).fill(''), ...new Array(dateCount).fill('').map((e, index) => (
		++index
	))]
	return calendar;
}

export {
	Months, Days, getDays
}