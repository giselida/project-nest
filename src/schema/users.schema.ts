import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<Users>;

@Schema()
export class Users {
  @Prop()
  id: string;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  userName: string;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  password: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
