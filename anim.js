// Lazy evaluation + Event delegation
$(function() {

	$('#content').on('click', 'button', function(event) {
		event.preventDefault();
		var button = $(this);
		var data =  button.data("count");

		if (!data) {
			data = {};
			data.elem = button.find('.number');
			data.number = Number(data.elem.text());
			button.data('count', data);
		}
		data.number--;
		data.elem.text(data.number);

		if (data.number === 0) {
			button.prop('disabled', true);
			button.removeData("count");
		}
	});
});

/* 

alternative code inside the function:
	$('button').on('click', function(event) {
		event.preventDefault();
		var button = $(this);
		var elem = button.find('.number');
		var number = Number(elem.text()) - 1;
		elem.text(number);
		if (number === 0) {
			button.prop('disabled', true);
			button.off('click');
		}

	});
	

Alternative code with the lazy evaluation method

	$('button').each(function() {
		var button = $(this);
		var elem, number;

		button.on('click', function(event) {
			if (!elem) {
				elem = button.find('.number');
				number = Number(elem.text());
			}

			event.preventDefault();
			number--;
			elem.text(number);
			if (number === 0) {
				button.prop('disabled', true);
			}
		});
	});
Learned that savvy techniques at:
https://bocoup.com/education/online/screencasts/more-efficient-event-handlers/

*/