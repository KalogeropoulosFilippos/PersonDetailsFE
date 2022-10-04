export interface IPersons {
      id: number;
      surname?: string;
      name?: string;
      birthDate?: string;
      emailAddress?: string;
      userTitleDec: string;
      userTypeDec: string;
      userTypeCode: string; 
      userTitleId:number;
      userTypeId:number;
      userTitle:{
        description:string
        id:number;
      };
      userType:{
        description:string;
        code:string;
        id:number;
      }
  }

  export interface IResponse<T> {

    
  }