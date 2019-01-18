export class Repository {
    public showDetails:boolean;
    constructor(public id:number, public projectName:string, public description:string){
      this.showDetails = false;
    }
}
