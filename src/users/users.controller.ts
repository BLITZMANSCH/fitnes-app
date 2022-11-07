import { Body, Controller, Get, Param, Post, Delete, Put, Redirect, HttpCode, HttpStatus, Header } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    @Get()
    getAll(): string {
        return 'getAll'
    }

    @Get(':id')
    getOne(@Param('id') id: string): string {
        return 'getOne ' + id
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    create(@Body() createUserDto: createUserDto): string {
        return `Name: ${createUserDto.Name} Surname: ${createUserDto.Surname} Patronymic: ${createUserDto.Patronymic} Birthdate: ${createUserDto.BirthDate}`
    }

    @Delete('id')
    remove(@Param('id') id: string) {
        return 'Remove ' + id
    }

    @Put('id') 
    update(@Body() updateUserDto: updateUserDto, @Param('id') id: string) {
        return 'Update ' + id
    }
}
