import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<Users>;

@Schema()
export class Users {
  @Prop()
  id: string;
  @Prop()
  name: string;
  @Prop()
  userName: string;
  @Prop()
  email: string;
  @Prop()
  password: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
