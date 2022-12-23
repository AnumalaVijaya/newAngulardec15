import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormUser } from '../model/form-user.service';
import { ServiceService } from '../service.service';
 @Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  constructor(private fb:FormBuilder,private cs:ServiceService) { }
  message:string=""; 
  user!:FormUser[]
  formuser!:FormGroup;
  
  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  passwordpattern!:"^[a-zA-Z0-9!@#$%^&*]{6,16}$";
  subscriptions = [{ name: 'Basic' }, { name: 'Advanced'}, { name: 'Pro' }];
  ngOnInit(): void {

    this.formuser=this.fb.group({
      //subscriptions:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(16),Validators.pattern(this.passwordpattern)]],
      email:['',[Validators.required,Validators.pattern(this.emailpattern)]]
   
    })
  }
  onSubmit()
  {
    if(this.formuser.valid)
    {
    this.cs.UserformSave(this.formuser.value).subscribe();
    window.location.reload();
    }
    else{
   this.message="please enter the data";
    }
 }
}
