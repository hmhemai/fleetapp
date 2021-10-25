
$('document').ready(function(){

	$('.table .btn-primary').on('click',function(event){//#editButton连接html里的id为editButton模块
		event.preventDefault();
		var href=$(this).attr('href');
		$.get(href,function(supplier, status){
			$('#txtAddressEdit').val(supplier.address);
			$('#txtCityEdit').val(supplier.city);
			$('#ddlCountryEdit').val(supplier.countryid);
			$('#txtDetailsEdit').val(supplier.details);
			$('#txtEmailEdit').val(supplier.email);
			$('#txtIdEdit').val(supplier.id);
			$('#txtMobileEdit').val(supplier.mobile);
			$('#txtNameEdit').val(supplier.name);
			$('#ddlPhoneEdit').val(supplier.phone);
			$('#ddlStateEdit').val(supplier.stateid);
			$('#txtWebsiteEdit').val(supplier.website);
			
		});
		$('#editModal').modal();
	});	
	
	$('.table #detailsButton').on('click',function(event){
		event.preventDefault();
		var href=$(this).attr('href');
		$.get(href,function(location,status){
			$('#idDetails').val(country.address);//val后面的连接model里的变量。location。java,js主要起到点击了按钮进行数据连接。前面的#符号表示html页面里的标签，以此来进行绑定。
			$('#descriptionDetails').val(country.description);
			$('#codeDetails').val(supplier.countryid);
			$('#lastModifiedByDetails').val(country.lastModifiedBy);
			$('#lastModifiedDateDetails').val(country.lastModifiedDate.substr(0,19).replace("T"," "));
			
		});
		$('#detailsModal').modal();//连接html里的编辑模块，#号的都是连击html的
		
	});
	
	$('.table #deleteButton').on('click',function(event){
		event.preventDefault();
		
		var href=$(this).attr('href');
		
		$('#deleteModal #delRef').attr('href',href);
		
		$('#deleteModal').modal();//#后面的标签连接HTML里的标签，然后
		
	});
	
});

