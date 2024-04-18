import { Body, Controller, Post } from '@nestjs/common';
import { Public } from 'src/decorators/is-public.decorator';
import { UserDTO } from 'src/dto/user.dto';
import { AuthService } from 'src/services/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('sing-in')
  async createUser(@Body() user: UserDTO) {
    return this.authService.createUser(user);
  }
  @Post('sing-up')
  async getMessage(@Body() user: UserDTO) {
    const { email, password } = user;
    return this.authService.loginUser(email, password);
  }
}
