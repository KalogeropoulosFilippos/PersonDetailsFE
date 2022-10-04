export interface IUpdatePerson {
    id:number;
    surname?: string;
    name?: string;
    birthDate?: Date;
    emailAddress?: string;
    isActive?: boolean;
    userTypeId:number;
    userTitleId:number;
    userTitle:{
      description:string;
      id:number;
    };
    userType:{
      description:string;
      code:string;
      id:number;
    }
  }
  export interface ICreatePerson {
    surname?: string;
    name?: string;
    birthDate?: Date;
    emailAddress?: string;
    isActive?: boolean;
    userTitle:{
      description:string;
    };
    userType:{
      description:string;
      code:string;
    }
  }