import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
  
  const router = inject(Router);
  if (typeof localStorage !== 'undefined') {
    const token = !!localStorage.getItem('token');
  if(token != null){
    return true;
  }else{
    router.navigateByUrl('/login')
    return false;
  }
}else{
  router.navigateByUrl('/login')
  return false;
}
};
