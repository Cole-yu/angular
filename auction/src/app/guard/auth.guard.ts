import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {isBoolean} from 'util';

// interface CanActivateChild {
//   canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Boolean
// }
//
// @Injectable()
// class Auths{
//   canActivate(){
//     let loggedIn:Boolean = Math.random() < 0.5;
//
//     if(!loggedIn){
//       console.log("用户未登录");
//     }
//
//     return loggedIn;
//   }
// }
//
// @Injectable()
// export class AuthGuard implements CanActivateChild {
//   constructor(private auth: Auths) {}
//
//   canActivateChild(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Boolean {
//     return this.auth.canActivate();
//   }
// }


interface danActivate{// 重新定义了一个本地的路由守卫接口，实现CanActivate路由守卫
  canActivate(): Boolean
}

export class AuthGuard implements danActivate{
  canActivate() {
    let loggedIn:Boolean = Math.random() < 0.5;

    if(!loggedIn){
      console.log("用户未登录");
    }

    return loggedIn;
  }
}
