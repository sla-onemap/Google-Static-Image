function loadData() {

    var $body = $('body');
    // load streetview  
    var streetStr = $('#street').val();
    //var cityStr = $('#city').val();
    var address = streetStr + ', ' + 'Singapore';

    // YOUR CODE GOES HERE!
    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '';
    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');

    return false;
}
$('#form-container').submit(loadData);

