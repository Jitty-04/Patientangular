import { Component } from '@angular/core';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent {
  name=""
  gender=""
  address=""
  mb=""
  date=""
  doctorname=""
  readValues=()=>{
    let data:any={"name":this.name,"gender":this.gender,"address":this.address,"mb":this.mb,"date":this.date,"doctorname":this.doctorname}
    console.log(data)
  }

}
