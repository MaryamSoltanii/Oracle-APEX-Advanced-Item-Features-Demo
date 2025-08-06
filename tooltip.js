// add in Execute when Page Loads Javascript

$('#P3_NUM').wrap('<div class="custom-tooltip"></div>')
               .after('<span class="tooltip-text">Please enter numbers only (e.g., 12345)</span>');


// Or apply to all items with help text


$('input[data-help-text], textarea[data-help-text], select[data-help-text]').each(function() {
    var helpText = $(this).attr('data-help-text');
    if (helpText) {
        $(this).wrap('<div class="custom-tooltip"></div>')
               .after('<span class="tooltip-text">' + helpText + '</span>');
    }
});


