import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {FormUser } from './model/form-user.service';
import { Observable } from 'rxjs';
import { ProjectService } from './model/project.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(public http:HttpClient) { }
  url:string="http://localhost:8080";
  
  UserformSave(user:FormUser)
  {
      return this.http.post<FormUser>(this.url+"/save",user);
  }
  ProjectformSave(pjct:ProjectService)
  {
      return this.http.post<ProjectService>(this.url+"/saveProject",pjct);
  }
}
