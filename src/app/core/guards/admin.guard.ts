import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.services';

export const adminGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)

  return inject(AuthService).authUser$.pipe(
    map(user => {
      const isAdmin = user?.role === 'ADMIN'
      if (!isAdmin) return router.createUrlTree(['/dashboard/home'])
      return isAdmin
    })
  )
};
