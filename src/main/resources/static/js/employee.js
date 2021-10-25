
$('document').ready(function(){

	$('.table .btn-primary').on('click',function(event){
		event.preventDefault();
		var href=$(this).attr('href');
		$.get(href,function(employee, status){
			$('#txtAddressEdit').val(employee.address);
			$('#txtCityEdit').val(employee.city);
			$('#ddlNationalityEdit').val(employee.countryid);
			var dob=employee.dateOfBirth.substr(0,10);
			$('#txtDateOfBirthEdit').val(dob);
			$('#txtEmailEdit').val(employee.email);
			$('#txtFirstnameEdit').val(employee.firstname);
			$('#ddlGenderEdit').val(employee.gender);
			$('#txtIdEdit').val(employee.id);
			$('#txtInitialsEdit').val(employee.innitials);
			$('#txtLastnameEdit').val(employee.lastname);
			$('#ddlMaritalStatusEdit').val(employee.maritalStatus);
			$('#txtMobileEdit').val(employee.mobile);
			$('#txtOthernameEdit').val(employee.othername);
			$('#txtPhoneEdit').val(employee.phone);
			$('#fupPhotoEdit').val(employee.photo);
			$('#txtSSNEdit').val(employee.socialSecurityNumber);
			$('#ddlStateEdit').val(employee.stateid);
			$('#ddlTitleEdit').val(employee.title);
			$('#ddlEmployeeTypeEdit').val(employee.employeetypeid);
			var hireDate =employee.hireDate.substr(0,10);
			$('#txtHireDateEdit').val(hireDate);
			$('#ddlJobTitleEdit').val(employee.jobtitleid);
			
		});
		$('#editModal').modal();
	});	
	
	$('.table #detailsButton').on('click',function(event){
		event.preventDefault();
		var href=$(this).attr('href');
		$.get(href,function(employee,status){
			$('#idDetails').val(employee.id);//val后面的连接model里的变量。location。java,js主要起到点击了按钮进行数据连接。前面的#符号表示html页面里的标签，以此来进行绑定。
			$('#descriptionDetails').val(employee.description);
			$('#detailsDetails').val(employee.details);
			$('#lastModifiedByDetails').val(employee.lastModifiedBy);
			$('#lastModifiedDateDetails').val(employee.lastModifiedDate.substr(0,19).replace("T"," "));
		
			
		});
		$('#detailsModal').modal();//连接html里的编辑模块，#号的都是连击html的
		
	});
	
	$('.table #deleteButton').on('click',function(event){
		event.preventDefault();
		
		var href=$(this).attr('href');
		
		$('#confirmDeleteButton').attr('href',href);
		
		$('#deleteModal').modal();
		
	});
	$('.table #photoButton').on('click',function(event){
		event.preventDefault();
		var href=$(this).attr('href');
		$('#photoModal #employeePhoto').attr('src',href);
		$('#photoModal').modal();
		
		
	});
	
});

