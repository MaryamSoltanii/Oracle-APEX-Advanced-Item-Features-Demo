var startDate = new Date($v('P3_FROM_DATE'));
var endDate = new Date($v('P3_To_DATE'));

if (endDate < startDate) {
    $('#P3_To_DATE').css('border', '2px solid red');
    apex.message.showErrors([
        {
            type: "error",
            location: "page",
            pageItem: "P3_To_DATE",
            message: "End date must be after start date"
        }
    ]);
} else {
    $('#P3_To_DATE').css('border', '');
    apex.message.clearErrors();
    
}
