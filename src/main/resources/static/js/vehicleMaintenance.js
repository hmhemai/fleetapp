
$('document').ready(function(){

	$('.table .btn-primary').on('click',function(event){//#editButton连接html里的id为editButton模块
		event.preventDefault();
		var href=$(this).attr('href');
		$.get(href,function(vehicleMaintenance, status){
			$('#idEdit').val(vehicleMaintenance.id);
			$('#priceEdit').val(vehicleMaintenance.price);
			$('#remarksEdit').val(vehicleMaintenance.remarks);
			$('#ddlSupplierEdit').val(vehicleMaintenance.supplierid);
			$('#ddlVehicleEdit').val(vehicleMaintenance.vehicleid);
			
			var startDate=VehicleMaintenance.startDate.substr(0.10);
			var endDate=vehicleMaintenance.endDate.substr(0.10);
		});
		$('#editModal').modal();
	});	
	
	$('.table #detailsButton').on('click',function(event){
		event.preventDefault();
		var href=$(this).attr('href');
		$.get(href,function(vehicleMaintenance,status){
			$('#idDetails').val(vehicleMaintenance.id);//val后面的连接model里的变量。location。java,js主要起到点击了按钮进行数据连接。前面的#符号表示html页面里的标签，以此来进行绑定。
			$('#priceDetails').val(vehicleMaintenance.price);
			$('#remarksDetails').val(vehicleMaintenance.remarks);
			$('#ddlSupplierDetails').val(vehicleMaintenance.supplierid);
			$('#ddlVehicleDetails').val(vehicleMaintenance.vehicleid);
			
			var startDate=vehicleMaintenance.startDate.substr(0,10);
			var endDate=vehicleMaintenance.endDate.substr(0,10);
			
			$('#startDateDetails').val(startDate);
			$('#endDateDetails').val(endDate);
			$('#lastModifiedByDetails').val(vehicleMaintenance.lastModifiedBy);
			$('#lastModifiedDateDetails').val(vehicleMaintenance.lastModifiedDate.substr(0,19).replace("T",""));
			
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

