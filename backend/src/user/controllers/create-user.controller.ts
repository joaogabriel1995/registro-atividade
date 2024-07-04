import { Body, Controller, Post } from '@nestjs/common';
import { createUserInput } from '../dto/create-user-input.dto';
import { CreateUserUseCase } from '../useCases/create-user.usecase';

@Controller('user')
export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  @Post()
  async create(@Body() userInput: createUserInput) {
    await this.createUserUseCase.handle(userInput);
  }
}
