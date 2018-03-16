var friendsList = []
function addToInvite(){
    var friend = $("#order_friends").val()
    $.ajax({
        type: "POST",
        url: "/invited_to_orders/invite",
        data: {friendName:friend, authenticity_token:$('meta[name="csrf-token"]').attr("content")},
        dataType: "json",
        success: function (response) {
            if(response['friend']){
                $("#invited_to_order").append('<div><i>'+response['friend'].username+'</i>'
                    +'<button type="button" onclick="removeFromList(this)" value="'+response['friend'].username+'">remove</button>'
                    +'</div><br>')
                friendsList.push(response['friend'].id)
            }else if(response['Alert']){
                alert("Not Found!")
            }
        }
    });
}

// alert("add autocomp here Make it on load")
// ask server for friend list !!

function removeFromList(){
    console.log(event.target)
    friendsList.splice($.inArray(event.target.value, friendsList),1);
    $(event.target).parent().remove()
}

$("#createOrder").click(function(){
    $.ajax({
        type: "POST",
        url: "/orders/putList",
        data: {
            friends: friendsList,
            authenticity_token:$('meta[name="csrf-token"]').attr("content")
        },
        // dataType: "json",
        // success: function (response) {
        //     alert(friendsList)
        // }
    });
})