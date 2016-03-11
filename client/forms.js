Template.bsFormInputDate.helpers({
	formatDate: function (value) {
		return value && (value.getFullYear() + '-' + ("0" + (value.getMonth() + 1)).slice(-2) + '-' + ("0" + value.getDate()).slice(-2)) || '';
	}
});