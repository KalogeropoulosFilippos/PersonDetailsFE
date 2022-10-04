import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICreatePerson, IUpdatePerson } from './person-details-insert.interface';
import { PersonDetailsInsertService } from './person-details-insert.service';

@Component({
  selector: 'app-person-details-insert',
  templateUrl: './person-details-insert.component.html',
  styleUrls: ['./person-details-insert.component.css']
})
export class PersonDetailsInsertComponent implements OnInit {

  personForm: FormGroup;
  surname: string = '';
  name: string = '';
  emailAddress: string = '';
  isActive: boolean=false ;
  birthDate: string = " ";
  userTitleDec: string = '';
  userTypeDec: string = '';
  userTypeCode: string = '';
  updateFlag:boolean=false;
  userId:number=0;
  userTitleId:number=0;
  userTypeId:number=0;
  editPerson: IUpdatePerson ={ 
    id:0,
    surname: '',
    name: '', 
    emailAddress: '', 
    userTypeId:0,
    userTitleId:0,
    isActive: false, 
    birthDate: new Date('2017-05-03'),
    userTitle:{
      description:'',
      id:0
    }, 
    userType:{
      description:'',
      code:'',
      id:0
    }
  }
  newPerson: ICreatePerson ={ 
    surname: '',
    name: '', 
    emailAddress: '', 
    isActive: false, 
    birthDate: new Date('2017-05-03'),
    userTitle:{
      description:'',
    }, 
    userType:{
      description:'',
      code:'',
    }
  }
  constructor(
    private fb: FormBuilder,private router:Router,
    private personDetailsInsertService:PersonDetailsInsertService,
    private activatedRoute: ActivatedRoute,
  ) { 
    this.personForm = this.fb.group({
      Name: [this.name],
      Surname: [this.surname],
      Email: [this.emailAddress],
      BirthDate: [this.birthDate],
      UserTitleDescription: [this.userTitleDec],
      UserTypeDescription: [this.userTypeDec],
      UserTypeCode: [this.userTypeCode],
    });
  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params=>{
      if(Object.keys(params).length>0){
        this.personForm.setValue({
          Name: params['name'],
          Surname: params['surname'],
          Email: params['emailAddress'],
          //Active: ['isActive'],
          BirthDate: params['birthDate'],
          UserTitleDescription: params['userTitleDec'],
          UserTypeDescription: params['userTypeDec'],
          UserTypeCode:params['userTypeCode']=="  "?"": params['userTypeCode'],
        });
        this.userId=params['id']
        this.updateFlag=true;
        this.userTitleId=params['userTitleId'];
        this.userTypeId=params['userTypeId']
      }
    })
  }
  Cancel(): void {
    this.router.navigate(['/person-details-list']);
  }
  Save(): void { 
    if(!this.updateFlag){
      this.newPerson.name = this.personForm.value.Name;
      this.newPerson.surname = this.personForm.value.Surname;
      this.newPerson.emailAddress = this.personForm.value.Email;
      this.newPerson.isActive = true;
      this.newPerson.birthDate = this.personForm.value.BirthDate
      this.newPerson.userTitle.description = this.personForm.value.UserTitleDescription;
      this.newPerson.userType.description = this.personForm.value.UserTypeDescription;
      this.newPerson.userType.code = this.personForm.value.UserTypeCode;
      this.personDetailsInsertService.createPerson(this.newPerson).subscribe(()=>{
      },error=>{},
      ()=>{this.router.navigate(['/person-details-list']);})
    }
    else{
      this.editPerson.name = this.personForm.value.Name;
      this.editPerson.surname = this.personForm.value.Surname;
      this.editPerson.emailAddress = this.personForm.value.Email;
      this.editPerson.isActive = true;
      this.editPerson.birthDate = this.personForm.value.BirthDate
      this.editPerson.userTitle.description = this.personForm.value.UserTitleDescription;
      this.editPerson.userType.description = this.personForm.value.UserTypeDescription;
      this.editPerson.userType.code= this.personForm.value.UserTypeCode;
      this.editPerson.userType.id = this.editPerson.userTypeId=this.userTypeId;
      this.editPerson.userTitle.id =this.editPerson.userTitleId= this.userTitleId;
      this.editPerson.id=this.userId;
      this.personDetailsInsertService.updatePerson(this.userId,this.editPerson).subscribe(()=>{
        this.router.navigate(['/person-details-list']);
      })
    }
  }
}
