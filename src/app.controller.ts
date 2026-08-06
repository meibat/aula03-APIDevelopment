import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post
  create(@Body() { nome, email }: { nome: string; email: string }) {
    this.appService.createUser({ nome, email });
  }
}
