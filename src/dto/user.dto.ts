import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Users } from 'src/schema/users.schema';

export class UserDTO extends Users {
  /**
   * O nome será utilizado para qualquer coisa (Perfil, Home Page, etc) que precise exibir
   * informações da pessoa conectada.
   */
  @IsString()
  @IsOptional()
  _id: string;

  /**
   * O nome será utilizado para qualquer coisa (Perfil, Home Page, etc) que precise exibir
   * informações da pessoa conectada.
   * @example "Gisélida Cristine"
   */
  @IsString()
  @IsNotEmpty()
  name: string;

  /**
   * O e-mail é necessário para o login, mas não necessariamente precisa ser o mesmo e-mail da
   * rede social que estiver conectada. Login sem rede social precisa de uma senha.
   * @example email@email.com
   */
  @IsEmail()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  /**
   * O nome será utilizado para qualquer coisa (Perfil, Home Page, etc) que precise exibir
   * informações da pessoa conectada.
   * @example "Gisélida Cristine"
   */
  @IsString()
  @IsOptional()
  userName: string;

  /**
   * O nome será utilizado para qualquer coisa (Perfil, Home Page, etc) que precise exibir
   * informações da pessoa conectada.
   * @example "G5djk125"
   */
  @IsNotEmpty()
  @IsString()
  password: string;
}
