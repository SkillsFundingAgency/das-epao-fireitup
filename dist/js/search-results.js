
$(document).ready(function () {




    $.when(GetJson(), GetHtml()).done(function (json, html) {
         if(json[0].Results.length > 1){
            json[0].Results.slice(0,10).forEach(item => {
                 item.DistanceInMiles = parseFloat(item.DistanceInMiles).toFixed(2);
                 var renderedHtml = Template(html[0], item)
                 $('#vacancy-search-results').append(renderedHtml);
            });

             $('.faa-total').text(json[0].Results.length);
       } else{
            if (window.location.href.includes("2B-no-results") == false) {
               window.location.replace("/campaign/apprentice/2B-no-results");
            }

       }

 }).fail(function(error){
      if (window.location.href.includes("2B-no-results") == false) {
         window.location.replace("/campaign/apprentice/2B-no-results");
      }
})





});

function GetJson() {
    var sector = $.cookie("faa-search-interest");

    return $.getJSON('/campaign/json/b664nd/' + sector, function (result) {
        return result.Results;


    });
}

function GetHtml() {
    return $.ajax('/campaign/faa-search-template', function (result2) {
        return result2;


    });
}

function Template(template, data) {
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            var value = data[key];
            template = template.replace('((' + key + '))', value);
        }
    }
    return template;
}
