import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogaccessGuard implements CanActivate {
  canActivate()
 {
  const UserName = localStorage["UserName"];
  const password = localStorage["password"];
  console.log(UserName + password)
  if(UserName == "New User" && password == "123456"){
    return true;
  }else  return false;

  }
  
}
