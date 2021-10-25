
$('document').ready(function(){

	$('.table #editButton').on('click',function(event){//#editButton连接html里的id为editButton模块
		event.preventDefault();
		var href=$(this).attr('href');
		$.get(href,function(invoiceStatus, status){
			$('#idEdit').val(invoiceStatus.id);
			$('#descriptionEdit').val(invoiceStatus.description);
			$('#detailsEdit').val(invoiceStatus.details);
			
		});
		$('#editModal').modal();
	});	
	
	$('.table #detailsButton').on('click',function(event){
		event.preventDefault();
		var href=$(this).attr('href');
		$.get(href,function(invoiceStatus,status){
			$('#idDetails').val(invoiceStatus.id);//val后面的连接model里的变量。invoiceStatus。java,js主要起到点击了按钮进行数据连接。前面的#符号表示html页面里的标签，以此来进行绑定。
			$('#descriptionDetails').val(invoiceStatus.desicription);
			$('#detailsDetails').val(invoiceStatus.details);
			$('#lastModifiedByDetails').val(invoiceStatus.lastModifiedBy);
			$('#lastModifiedDateDetails').val(invoiceStatus.lastModifiedDate.substr(0,19).replace("T"," "));
			
		});
		$('#detailsModal').modal();//连接html里的编辑模块，#号的都是连击html的
		
	});
	
	$('.table #deleteButton').on('click',function(event){
		event.preventDefault();
		
		var href=$(this).attr('href');
		
		$('#delRef').attr('href',href);
		
		$('#deleteModal').modal();//#后面的标签连接HTML里的标签，然后
		
	});
	
});

