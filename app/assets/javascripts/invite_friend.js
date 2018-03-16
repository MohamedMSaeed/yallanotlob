function ajaxIt(friend) {
    $.ajax({
        type: "POST",
        url: "/invited_to_orders/invite",
        data: {friendName:friend, authenticity_token:$('meta[name="csrf-token"]').attr("content")},
        dataType: "json",
        success: function (response) {
            if(response['friend']){
                $("#invited_to_order").append('<div><i class="invitedName">'+response['friend'].username+'</i>'
                    +'<button type="button" onclick="removeFromList(this)" value="'+response['friend'].username+'">remove</button>'
                    +'<br></div>')
                friendsList.push(response['friend'].id)
                nameList.push(response['friend'].username)
            }else if(response['NotFriend']){
                alert("User is not your friend!!")
            }else{
                alert("User is not found!")
            }
        }
    });

}

var friendsList = []
var nameList = []
function addToInvite(){
    var friend = $("#order_friends").val()
    if(jQuery.inArray(friend,nameList) !== -1){
        alert("already added!!")
    }else{
        $.ajax({
            type: "POST",
            url: "/invited_to_orders/invite",
            data: {friendName:friend, authenticity_token:$('meta[name="csrf-token"]').attr("content")},
            dataType: "json",
            success: function (response) {
                if(response['friend']){
                    $("#invited_to_order").append('<div><i class="invitedName">'+response['friend'].username+'</i>'
                        +'<button type="button" onclick="removeFromList(this)" value="'+response['friend'].username+'">remove</button>'
                        +'<br></div>')
                    friendsList.push(response['friend'].id)
                    nameList.push(response['friend'].username)
                }else if(response['NotFriend']){
                    alert("User is not your friend!!")
                }else{
                    alert("User is not found!")
                }
            }
        });
    }
}

function removeFromList(){
    console.log(event.target)
    friendsList.splice($.inArray(event.target.value, friendsList),1);
    $(event.target).parent().remove()
}


function addGroupToInvite() {
    var group = $("#order_group").val()
    $.ajax({
        type: "POST",
        url: "/invited_to_orders/inviteGroup",
        data: {groupName:group, authenticity_token:$('meta[name="csrf-token"]').attr("content")},
        dataType: "json",
        success: function (response) {
            if(response['group']){
                for (var i in response['group_members']){
                    console.log(response['group_members'][i])
                    ajaxIt(response['group_members'][i])

                }
                // $("#invited_to_order").append('<div><i class="invitedName">'+response['friend'].username+'</i>'
                //     +'<button type="button" onclick="removeFromList(this)" value="'+response['friend'].username+'">remove</button>'
                //     +'<br></div>')
                // friendsList.push(response['friend'].id)
                // nameList.push(response['friend'].username)
                console.log(response['group_members'])
            }else{
                alert("Group is not found!")
            }
        }
    });
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