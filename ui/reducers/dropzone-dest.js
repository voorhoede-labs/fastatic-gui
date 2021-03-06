const dropzoneDest = (state = {}, action) => {
	switch (action.type) {

		case 'DROPZONE_DEST_DISABLED':
			return Object.assign(state, {
				disabled: action.value
			});

		case 'DROPZONE_DEST_HOVERING':
			return Object.assign(state, {
				hovering: action.value
		});

		case 'DROPZONE_DEST_PATH':
			return Object.assign(state, {
				path: action.path,
				isFile: action.isFile,
			});

		default:
			return state;

	}
};

module.exports = dropzoneDest;
