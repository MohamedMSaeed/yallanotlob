var x;

function addFriendToList(){
    var friend = $("#add_friend").val()
    $.ajax({
        type: "POST",
        url: "/friendships/add_friend",
        data: { friend_email:friend, authenticity_token:$('meta[name="csrf-token"]').attr("content")},
        dataType: "json",
        success: function (response) {
            $("#frindlist").append('<div class="col-lg-4 col-sm-6 portfolio-item">'
                +'<img src=../../'+response['img'].thumb.url+'/>'
                +' '+response['name']
                +'<a href="" id="my-link" onclick="RemoveFriend()" >Unfriend</a>'+'<br /><br /><br /></div>')
        } 
    });

};



function RemoveFriend(){
    // alert(window.x)
        // $(event.target).parent().remove()

    // var r=confirm("Are you sure?")
    // // alert(event)
    // // console.log(event)
    // // console.log(event.target)
    // if (r == true ){
    //     // $(event.target).remove()
    //     // console.log(this)
        $.ajax({
            type: "DELETE",
            url: "/friendships/destroy",
            data: { id: window.x , authenticity_token:$('meta[name="csrf-token"]').attr("content")},
            dataType: "json",
            success: function (response) {
                alert("done")
            }
        });
    // }
}

// $("#my-link").on("click",function() {
//     // body...
//     // alert(e)
//     console.log($('this'))
// })