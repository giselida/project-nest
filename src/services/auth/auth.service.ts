import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';
import { Model } from 'mongoose';
import { UserDTO } from 'src/dto/user.dto';
import { Users } from 'src/schema/users.schema';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(Users.name) private userModel: Model<Users>,
  ) {}

  async createUser(user: UserDTO) {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(user.password, salt);
    user.password = hashPassword;

    const newUser = new this.userModel(user);
    await newUser.save();

    const payload = { username: user.userName, id: user.id };
    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: '5h',
    });

    return { access_token: accessToken };
  }

  async loginUser(id: string, password: string) {
    const user = await this.userModel.findOne({ id });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const payload = { username: user.userName, id: user.id };
        const accessToken = await this.jwtService.signAsync(payload, {
          expiresIn: '5h',
        });
        return { access_token: accessToken };
      }
      throw new UnauthorizedException('Credenciais inválidas');
    }
    throw new UnauthorizedException('Credenciais inválidas');
  }
}
