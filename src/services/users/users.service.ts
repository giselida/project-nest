import { Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDTO } from 'src/dto/user.dto';
import { Users } from 'src/schema/users.schema';
@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private userModel: Model<Users>) {}

  @UsePipes(ValidationPipe)
  create(user: UserDTO): Promise<Users> {
    return new this.userModel(user).save();
  }

  findAll(): Promise<Users[]> {
    return this.userModel.find().exec();
  }

  findOne(id: string): Promise<Users> {
    return this.userModel.findById(id).exec();
  }

  update(id: string, user: UserDTO): Promise<Users> {
    return this.userModel
      .findByIdAndUpdate(
        {
          _id: id,
        },
        {
          ...user,
        },
      )
      .exec();
  }

  remove(id: string) {
    return this.userModel.findOneAndDelete({ _id: id }).exec();
  }
}
