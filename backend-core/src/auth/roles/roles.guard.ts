import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest();
    console.log('RolesGuard: Checking roles for request...');
    const user = request.user; // Assuming user is attached to request by AuthMiddleware
    console.log('User:', user);
    const userRoles = request.headers['x-user-roles'] || ''; // Simulating roles from header
    console.log('User Roles from Header:', userRoles);
    
    return true;
  }
}
