
$('document').ready(function(){

	$('.table #editButton').on('click',function(event){//#editButton连接html里的id为editButton模块
		event.preventDefault();
		var href=$(this).attr('href');
		$.get(href,function(vehicle, status){
			
			var acDate=vehicle.acquisitionDate.sibstr(0,10);
			$('#txtAcquisitionDateEdit').val(acDate);
			$('#txtDescriptionEdit').val(vehicle.description);
			$('#ddlEmployeeEdit').val(vehicle.employeeid);
			$('#txtFuelCapacityEdit').val(vehicle.fuelCapacity);
			$('#txtIdEdit').val(vehicle.id);
			$('#ddlLocationEdit').val(vehicle.locationid);
			$('#txtNameEdit').val(vehicle.name);
			$('#txtNetWeightEdit').val(vehicle.netWeight);
			$('#txtPowerEdit').val(vehicle.power);
			
			var regDate=vehicle.registrationDate.substr(0,10);
			$('#txtRegistrationDateEdit').val(regDate);
			$('#txtRemarksEdit').val(vehicle.remarks);
			$('#ddlVehicleModelEdit').val(vehicle.vehiclemodelid);
			$('#ddlVehicleMakeEdit').val(vehicle.vehiclemakeid);
			$('#ddlVehicleNumberEdit').val(vehicle.vehicleNumber);
			$('#ddlVehicleStatusEdit').val(vehicle.vehicleStatusid);
			$('#ddlVehicleTypeEdit').val(vehicle.vehicletypeid);
			
			
			
		});
		$('#editModal').modal();
	});	
	
	$('.table #detailsButton').on('click',function(event){
		event.preventDefault();
		var href=$(this).attr('href');
		$.get(href,function(vehicleType,status){
			$('#idDetails').val(vehicleMaintenance.id);//val后面的连接model里的变量。location。java,js主要起到点击了按钮进行数据连接。前面的#符号表示html页面里的标签，以此来进行绑定。
			$('#descriptionDetails').val(vehicleType.description);
			$('#detailsDetails').val(vehicleType.details);
			$('#lastModifiedByDetails').val(vehicleType.lastModifiedBy);
			$('#lastModifiedDateDetails').val(vehicleType.lastModifiedDate.substr(0,19).replace("T",""));
			
		});
		$('#detailsModal').modal();//连接html里的编辑模块，#号的都是连击html的
		
	});
	
	$('.table #deleteButton').on('click',function(event){
		event.preventDefault();
		
		var href=$(this).attr('href');
		
		$('#confirmDeleteButton').attr('href',href);
		
		$('#deleteModal').modal();//#后面的标签连接HTML里的标签，然后
		
	});
	
	$('.table #photoButton').on('click',function(event){
		
		event.preventDefault();
		var href=$(this).attr('href');
		$('#photoModal #vehiclePhoto').attr('src',href);
		$('#photoModal').modal();		
	});
	
});

