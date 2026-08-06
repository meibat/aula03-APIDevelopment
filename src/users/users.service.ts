import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UsersService {
  private listUsers: User[] = [];
  private nextId = 1;

  public createUser(name: string, email: string): User {
    const normalizedName = name?.trim();
    const normalizedEmail = email?.trim().toLowerCase();

    if (this.findUserByEmail(normalizedEmail)) {
      throw new BadRequestException('This email already been taken.');
    }

    const user = new User(
      String(this.nextId++),
      normalizedName,
      normalizedEmail,
    );

    this.listUsers.push(user);
    return user;
  }

  public getUsers(): User[] {
    return this.listUsers;
  }

  public findUserById(id: string): User {
    const user = this.listUsers.find((item) => item.id === id);

    if (!user) {
      throw new NotFoundException(`User not found`);
    }

    return user;
  }

  public removeUser(id: string): void {
    const userIndex = this.listUsers.findIndex((item) => item.id === id);

    if (userIndex === -1) {
      throw new NotFoundException(`User not found`);
    }

    this.listUsers.splice(userIndex, 1);
  }

  private findUserByEmail(email: string): User | undefined {
    return this.listUsers.find((user) => user.email === email);
  }
}
