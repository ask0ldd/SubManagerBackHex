/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import CreateUserDto from 'src/user/application/dto/requests/CreateUser.dto';
import { UserResponseDto } from 'src/user/application/dto/responses/UserResponse.dto';
import UpdateUserDto from 'src/user/application/dto/requests/UpdateUser.dto';
import { CreateUserUseCase } from 'src/user/application/use-cases/CreateUser.uc';
import { FindUserUseCase } from 'src/user/application/use-cases/FindUser.uc';

@Controller('users')
export class UserController {
    constructor(private readonly findUserUseCase: FindUserUseCase, private readonly createUserUseCase : CreateUserUseCase) {}

    @Get()
    async getAllUsers() {
        // Implementation to retrieve all users
    }

    @Get(':id')
    async getUserById(@Param('id') id: string) {
        const user = await this.findUserUseCase.execute(id);
        return UserResponseDto.build(user);
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        return await this.createUserUseCase.execute(createUserDto)
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        // Implementation to update user by id
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        // Implementation to delete user by id
    }
}