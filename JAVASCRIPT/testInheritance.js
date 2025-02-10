function person(nm,add,ph){
	this.name=nm;
	this.address=add;
	this.phone=ph;
}
person.prototype.display = function(){
	alert(this.name+this.address+this.phone);
}
function student(nm,add,ph,desig){
	student.call(this,nm,add,ph);
	this.desig=desig;
	this.displayDesig=function(){
		alert(this.desig);
	}
}
student.prototype = new person();
student.prototype.constructor = student;
var std = new student("jay","pune",23872093,"SR");
sd.display();
sd.displayDesig();
alert(stf.name);