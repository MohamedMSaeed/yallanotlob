function displayGpMember(event) {
		gId = $(event).attr("gid");
		// console.log(gId)
	$.ajax({
		method:'GET',
		// url => groupmember#index
		url:'/group_members',
		
		// w bb3t el security m3 el id
		data: {
           id: gId, authenticity_token:$('meta[name="csrf-token"]').attr("content")
        },

		success: function(res){
			// append 3la div elly bt3rd el greoup member 
			// console.log(res.group_members)
			// console.log(res.group_id)
			$("#group").empty();
			for (var i = 0; i < res.group_members.length; i++) {
     			$("#group").append
				('<td><a href= "/users/' +res.group_members[i].id+ '">' +res.group_members[i].username+  '</a></td></ br><td><a  onclick=removeMember(this) class="delMember" mid='+res.group_members[i].id+' gid='+res.group_id+' >Remove</a></td>');
       		}	
				

		}
	})
}

function removeMember(event) {
	gId = $(event).attr("gid");
	mId = $(event).attr("mid");
	console.log(gId)
	$.ajax({
		method:'POST',
		url:'/group_members/delete',
		data:{
			id : mId, g : gId, authenticity_token:$('meta[name="csrf-token"]').attr("content")
		},
		success:function (res) {
			
			console.log("deleted")
		}
	})
}

function addMember (event){
	member = $("#membername").val()	
	gId = $("#membername").attr("gid");
	console.log(member)
	console.log(gId)
	$.ajax({
		method:'POST',
		url:'/group_members/add',
		data: {
			memberName : member,group_id : gId, authenticity_token:$('meta[name="csrf-token"]').attr("content")
		},
		success:function (res) {
			console.log(res['friend'])
			$("#group").append
			('<td><a href= "/users/' +res['friend'].id+ '">' +res['friend'].username+ '</a></td></ br><td><a  onclick=removeMember(this) class="delMember" mid='+res['group_member'].user_id+' gid='+res['group_member'].group_id+' >Remove</a></td>');
		}
	})

}