import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {

  if(req.url.endsWith('/generateToken')){
    return next(req);
  }else{
    const secretKey = localStorage.getItem('token');
    const cloneReq = req.clone({
      setHeaders:{
        Authorization:`Bearer ${secretKey}`
      }
    });
    return next(cloneReq);
  }
};
