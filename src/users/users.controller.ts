import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {
    }

    @ApiOkResponse({ type: User, isArray: true, description: 'send all users' })
    @Get()
    getUsers(): User[] {
        return this.usersService.findAll();
    }

    @ApiOkResponse({ type: User })
    @ApiNotFoundResponse()
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number): User {


        const user = this.usersService.findById(id);
        if (!user) {
            throw new NotFoundException("Incorrect Id");
        }
        return this.usersService.findById(id);

    }

    @ApiCreatedResponse({ type: User })
    @Post()
    createUser(@Body() body: CreateUserDto): User {
        return this.usersService.createUser(body);

    }

}
