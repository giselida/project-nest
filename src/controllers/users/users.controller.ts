import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { UserDTO } from 'src/dto/user.dto';
import { UsersService } from '../../services/users/users.service';

@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post('sign-up')
  // createUser(@Body() user: UserDTO) {
  //   return this.usersService.create(user);
  // }
  @Get()
  findAll(): Promise<UserDTO[]> {
    return this.usersService.findAll() as Promise<UserDTO[]>;
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserDTO> {
    return this.usersService.findOne(id) as Promise<UserDTO>;
  }

  @Patch(':id')
  @ApiBody({
    type: UserDTO,
  })
  update(@Param('id') id: string, @Body() updateUserDto: UserDTO) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
