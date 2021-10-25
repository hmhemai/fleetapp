
$('document').ready(function(){

	$('.table #editButton').on('click',function(event){//#editButton连接html里的id为editButton模块
		event.preventDefault();
		var href=$(this).attr('href');
		$.get(href,function(location, status){
			$('#idEdit').val(location.id);
			$('#cityEdit').val(location.city);
			$('#addressEdit').val(location.address);
			$('#ddlStateEdit').val(location.stateid);
			$('#ddlCountryEdit').val(location.countryid);
			$('#descriptionEdit').val(location.description);
			$('#detailsEdit').val(location.details);
			
		});
		$('#editModal').modal();
	});	
	
	$('.table #detailsButton').on('click',function(event){
		event.preventDefault();
		var href=$(this).attr('href');
		$.get(href,function(location,status){
			$('#idDetails').val(location.id);//val后面的连接model里的变量。location。java,js主要起到点击了按钮进行数据连接。前面的#符号表示html页面里的标签，以此来进行绑定。
			$('#descriptionDetails').val(location.desicription);
			$('#detailsDetails').val(location.details);
			$('#cityDetails').val(location.city);
			$('#addressDetails').val(location.address);
			$('#ddlStateDetails').val(location.stateid);
			$('#ddlCountryDetails').val(location.countryid);
			$('#lastModifiedByDetails').val(location.lastModifiedBy);
			$('#lastModifiedDateDetails').val(location.lastModifiedDate.substr(0,19).replace("T"," "));
			
		});
		$('#detailsModal').modal();//连接html里的编辑模块，#号的都是连击html的
		
	});
	
	$('.table #deleteButton').on('click',function(event){
		event.preventDefault();
		
		var href=$(this).attr('href');
		
		$('#confirmDeleteButton').attr('href',href);
		
		$('#deleteModal').modal();//#后面的标签连接HTML里的标签，然后
		
	});
	
});

