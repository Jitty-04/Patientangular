import { Component } from '@angular/core';
import { ApiService } from '../api.service';

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
  constructor(private api:ApiService){}
  readValues=()=>{
    let data:any={"name":this.name,"gender":this.gender,"address":this.address,"mb":this.mb,"date":this.date,"doctorname":this.doctorname}
    console.log(data)
  this.api.addPatient(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.status=="success") {
        alert("patient added successfully")
        this.name=""
        this.gender=""
        this.address=""
        this.mb=""
        this.date=""
        this.doctorname=""
      
        
      } else {
        alert("something went wrong")
      }
    }
  )


}
  }


