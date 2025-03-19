import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';

const checkAuthStatus =(): Observable<boolean> =>{
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  return authService.checkAuthentication().pipe(
    tap(isAuthenticated => console.log('Authenticated:', isAuthenticated)),
    tap(isAuthenticated =>{
      if(!isAuthenticated){
        router.navigate(['/home'])
      }
    })
  )
}
export const canActivateGuard: CanActivateFn =(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
)=> {
  console.log('CanActivate');
  console.log({route, state});

  return checkAuthStatus();
}

//CanMatchFn es para que podamos entrar a una ruta que haga cierto match de la URL
export const canMatchGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  console.log('CanMatch');
  console.log({route, segments});

  return checkAuthStatus();
}
