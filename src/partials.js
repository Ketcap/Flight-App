const clickOut = (e, classname, cb) => {
	const parent = e.target.closest(`div.${classname}`);
	if (!parent) {
		return cb(true);
	}
	return cb(false);
}
export {
	clickOut
}