export class User {
  public showDetails:boolean;
  constructor(public id:number, public userName:string, public firstName:string, public lastName:string){
    this.showDetails = false;
  }
}
