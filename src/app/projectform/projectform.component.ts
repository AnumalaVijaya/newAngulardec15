import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ProjectService } from '../model/project.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-projectform',
  templateUrl: './projectform.component.html',
  styleUrls: ['./projectform.component.css']
})
export class ProjectformComponent implements OnInit{
  constructor(private fb:FormBuilder,private cs:ServiceService) { }
  message:string=""; 
  pjct!:ProjectService[]
  projectform!:FormGroup;
  
  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  namepattern!:"^[a-zA-Z]{2,20}$";
  projectStatus = [{ name: 'Stable' }, { name: 'Critical'}, { name: 'Finished' }];
  ngOnInit(): void {
  this.projectform=this.fb.group({
    projectName:['',[Validators.required,Validators.minLength(2),Validators.maxLength(20),Validators.pattern(this.namepattern)]],
    email:['',[Validators.required,Validators.pattern(this.emailpattern)]]
 
  })
 }
  onSubmit()
 {
   if(this.projectform.valid)
   {
   this.cs.UserformSave(this.projectform.value).subscribe();
      //this.message=this.projectform.value();

//console.log(this.fb.group({'projectname:'+projectName+ ","+' Project Status: '+this.projectStatus}))
;
   }
   else{
  this.message="invalid data";
   }
}
}