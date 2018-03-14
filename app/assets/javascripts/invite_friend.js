function addToInvite(){
    var friend = $("#order_friends").val()
    $.ajax({
        type: "POST",
        url: "/invited_to_orders/invite",
        data: {friendName:friend, authenticity_token:$('meta[name="csrf-token"]').attr("content")},
        dataType: "json",
        success: function (response) {
            $("#invited_to_order").append('<i>'+response['friend'].username+' : '+response['friend'].email+'</i>'
                +'<button type="button" onclick="removeFromList()">remove</button>'
                +'<br>')
            console.log(response['friend'])
        }
    });
}


// function removeFromList(){
//
// }