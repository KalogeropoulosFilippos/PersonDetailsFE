import { Component, OnInit, ViewChild } from '@angular/core';
import { IPersons } from './person-details-list.interfaces';
import { MatTableDataSource } from '@angular/material/table';
import { PersonDetailsListService } from './person-details-list.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-person-details-list',
  templateUrl: './person-details-list.component.html',
  styleUrls: ['./person-details-list.component.css']
})
export class PersonDetailsListComponent implements OnInit {
  public personList: IPersons[] = []
  spin : boolean = true;
  empty: boolean = false;
  firstName:string="";
  displayedColumns: string[] = ['surname', 'name',  'birthDate', 'emailAddress', 'userTitleDec', 'userTypeDec', 'userTypeCode','Update','Remove'];
  nameForm: FormGroup;
  dataSource: MatTableDataSource<IPersons> = new MatTableDataSource<IPersons>();
  constructor(private personDetailsListService:PersonDetailsListService,private router:Router,private fb: FormBuilder) {
    this.nameForm = this.fb.group({
      Name: [""],
    });
   }



  ngOnInit(): void {
      this.personDetailsListService.getPersons().subscribe(res=>{
        res.forEach(e => {
          e.userTitleDec=e.userTitle.description
          e.userTypeDec=e.userType.description
          e.userTypeCode=e.userType.code
          e.userTitleId=e.userTitle.id
          e.userTypeId=e.userType.id
        });
        this.dataSource = new MatTableDataSource<IPersons>(res);
      })
  }
  Edit(id:number,userTitleId:number,userTypeId:number,name:string,surname:string,emailAddress:string,birthDate:Date,userTitleDec:string,userTypeDec:string,userTypeCode:string): void {
    let status = 'Update';
    this.router.navigate(['../person-details-insert'], 
    { queryParams:
      { status: status,
      id:id,
      userTypeId:userTypeId,
      userTitleId:userTitleId,
      name:name,
      surname:surname,
      emailAddress:emailAddress,
      //isActive:isActive,
      birthDate:birthDate,
      userTitleDec:userTitleDec,
      userTypeDec:userTypeDec,
      userTypeCode:userTypeCode} 
  });
  }
  Delete(id:number){
    this.personDetailsListService.deletePerson(id).subscribe(()=>{
      window.location.reload()
    })
  }
  Search(): void { 
    this.firstName = this.nameForm.value.Name;
    this.personDetailsListService.getPersonsbyName(this.firstName).subscribe(res=>{
      res.forEach(e => {
        e.userTitleDec=e.userTitle.description
        e.userTypeDec=e.userType.description
        e.userTypeCode=e.userType.code
        e.userTitleId=e.userTitle.id
        e.userTypeId=e.userType.id
      });
      this.dataSource = new MatTableDataSource<IPersons>(res);
    })
  }
  Reset():void{
    this.nameForm.reset();
    this.personDetailsListService.getPersons().subscribe(res=>{
      res.forEach(e => {
        e.userTitleDec=e.userTitle.description
        e.userTypeDec=e.userType.description
        e.userTypeCode=e.userType.code
        e.userTitleId=e.userTitle.id
        e.userTypeId=e.userType.id
      });
      this.dataSource = new MatTableDataSource<IPersons>(res);
    })
  }
}
