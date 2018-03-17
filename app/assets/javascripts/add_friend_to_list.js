// function RemoveFriend(event){
//     // var r=confirm("Are you sure gdn??")
//     alert(event)
//     // console.log(event)
//     // console.log(event.target)
//     // if (r == true ){
//         // $(event.target).remove()
//         // console.log(this)
//         // $.ajax({
//         //     type: "DELETE",
//         //     url: "/friendships/destroy",
//         //     data: { id: 2, authenticity_token:$('meta[name="csrf-token"]').attr("content")},
//         //     dataType: "json",
//         //     success: function (response) {
//         //         alert("done")
//         //     }
//         // });
//     // }
// }


function addFriendToList(){
    var friend = $("#add_friend").val()
    $.ajax({
        type: "POST",
        url: "/friendships/add_friend",
        data: { friend_email:friend, authenticity_token:$('meta[name="csrf-token"]').attr("content")},
        dataType: "json",
        success: function (response) {
           console.log(response)

            $("#frindlist").append('<div class="col-lg-4 col-sm-6 portfolio-item">'
                +'<img src='+response['img'].thumb.url+'/>'
                +' '+response['name']
                +'<a onclick="RemoveFriend(event)">Unfriend</a>'+'<br /><br /><br /></div>')
        }
    });
};

