import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate
{

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   
    if(localStorage.getItem("currentUser"))
    {

      return true;
    }
    this.router.navigate(["/Login"],{queryParams:{returnUrl:state.url}});
    return false;
  }
  constructor(private router : Router) { }
}
