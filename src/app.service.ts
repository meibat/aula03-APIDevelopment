import { Injectable } from '@nestjs/common';
import { User } from './app.entitie';
import { aulaUser } from './app.repository';

@Injectable()
export class AppService {
   createUser(User: User) {
     await aulaUser.create(User);
  }
}
