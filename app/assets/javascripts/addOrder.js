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
	$("#orders").append("<tr><td>"+data.item+"</td><td>"+data.amount+"</td><td>"+data.price+"</td><td>"+data.comment+"</td></tr>");
	}
});

}