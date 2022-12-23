import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }
  projectName:string="";
  projectStatus:string[]=[];
  email:string="";
}
