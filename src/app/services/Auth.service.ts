export class AuthService{
    IsLoggedin=false;
    login(){
        this.IsLoggedin=true;
    }
    logout(){
        this.IsLoggedin=false;
    }

    IsAuthenticated(){
        return this.IsLoggedin;
    }
}