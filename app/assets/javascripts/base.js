function join() {
    id = $(event.target).attr('id')
    $.ajax({
        type: "POST",
        url: "/invited_to_orders/join",
        data: { invite_id: id, authenticity_token:$('meta[name="csrf-token"]').attr("content")},
        dataType: "json",
        success: function (response) {
            if(response['joined']){
                $("#"+response['iid'][0].id).remove()
            }
        }
    });
}