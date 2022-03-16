import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../Auth.service";
import { GetServiceService } from "../get-service.service";

@Injectable()

export class AuthGuardService implements CanActivate{

    constructor(private authSer:GetServiceService,private router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
     boolean  | Promise<boolean> | Observable<boolean>  
     {
        let isLoggedin=this.authSer.IsLoggedIn;

        if(isLoggedin){
            return true;            
        }
        else{
            
            this.router.navigate(['/']);
            return false;

        }
        
        
        
    }
}