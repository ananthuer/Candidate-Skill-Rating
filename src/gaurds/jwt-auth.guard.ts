// jwt-auth.guard.ts

import { Injectable, CanActivate, ExecutionContext, HttpStatus } from '@nestjs/common';
import { Reflector } from '@nestjs/core';


import * as jwt from 'jsonwebtoken';


@Injectable()
export class JwtAuthGuards implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();

 
    // Process the request if validation succeeds
    // Your logic to handle the request goes here
    const authorizationHeader = request.headers['x-access-token'];
    // Set the new access token in the response headers
    response.setHeader('Authorization', `${authorizationHeader}`);
   

    if (!authorizationHeader){
      response.status(HttpStatus.UNAUTHORIZED).send('Unauthorized')
      return false
    } ; // Extract access token from the request headers
    const decodedToken = jwt.decode(authorizationHeader, { complete: true });
    request.user = decodedToken;

    let checkPayload = request.user?.payload;

    if (!checkPayload) {

      response.status(HttpStatus.UNAUTHORIZED).send('Unauthorized')
      return false;
    }else return true
  }
}
