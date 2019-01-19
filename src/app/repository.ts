export class Repository {
  public showDetails: boolean;
  constructor(public id: number,
    public name: string,
    public email: string,
    public bio: string,
    public blog: string,
    public avatar_url: string,
    public company: string,
    public location: string,
    public hireable: boolean,
    public followers: number,
    public following: number,
    public public gists: number,
    public public repos: number,
    public html_url: string,
  ) {
    this.showDetails = false;
  }
}
