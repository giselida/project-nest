import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Users } from 'src/schemas/users.schema';

export class UserDTO extends Users {
  @IsString()
  @IsOptional()
  /**
   * O nome será utilizado para qualquer coisa (Perfil, Home Page, etc) que precise exibir
   * informações da pessoa conectada.
   * @example "Gisélida Cristine"
   */
  _id: string;
  @IsString()
  @IsNotEmpty()
  /**
   * O nome será utilizado para qualquer coisa (Perfil, Home Page, etc) que precise exibir
   * informações da pessoa conectada.
   * @example "Gisélida Cristine"
   */
  name: string;

  @IsEmail()
  @IsNotEmpty()
  /**
   * O e-mail é necessário para o login, mas não necessariamente precisa ser o mesmo e-mail da
   * rede social que estiver conectada. Login sem rede social precisa de uma senha.
   * @example email@email.com
   */
  email: string;

  @IsString()
  @IsOptional()
  /**
   * O nome será utilizado para qualquer coisa (Perfil, Home Page, etc) que precise exibir
   * informações da pessoa conectada.
   * @example "Gisélida Cristine"
   */
  userName: string;
  @IsNotEmpty()
  @IsString()

  /**
   * O nome será utilizado para qualquer coisa (Perfil, Home Page, etc) que precise exibir
   * informações da pessoa conectada.
   * @example "Gisélida Cristine"
   */
  password: string;
}
