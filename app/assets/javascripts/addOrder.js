function add(event){
	item=$("#item").val()
	amount=$("#amount").val()
	price=$("#price").val()
	comment=$("#comment").val()
	uid=$(event).attr("uid")
	oid=$(event).attr("oid")
$.ajax({
	method: "POST",
	url: '/order_details',
	data: {
	order_id: oid, user_id: uid, item: item, amount: amount, price: price, comment: comment,authenticity_token:$('meta[name="csrf-token"]').attr("content")
	},
	success:function(data){
	$("#orders").append("<tr><td>"+data.item+"</td><td>"+data.amount+"</td><td>"+data.price+"</td><td>"+data.comment+"</td><td><a data-confirm='Are you sure?' class='delete_od' data-remote='true' rel='nofollow' data-method='delete' href='/order_details/"+data.id+"'>Destroy</a></td></tr>");
$('.delete_od').bind('ajax:success', function() {  
        $(this).closest('tr').fadeOut();
}); 
	}
});

}
$('.delete_od').bind('ajax:success', function() {  
        $(this).closest('tr').fadeOut();
}); 
