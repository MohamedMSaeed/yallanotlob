

function displayGpMember(event) {
		gId = $(event).attr("gid");
		console.log(gId)
	$.ajax({
		method:'GET',
		// url => groupmember#index
		url:'/group_members',
		
		// w bb3t el security m3 el id
		data: {
           id: gId,
        },

		success: function(res){
			// append 3la div elly bt3rd el greoup member 
			console.log(res)
			for (var i = 0; i < res.length; i++) {
     			$("#group").append
				// ("<td><p>" +res[i].username+  "</p></td> ");
				// console.log(res[i].id)
				('<td><a href= "/users/' +res[i].id+ '">' +res[i].username+  '</a></td>');
       		}	
				

		}
	})
}

