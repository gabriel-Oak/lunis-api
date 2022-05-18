import { IsNotEmpty, IsString } from 'class-validator';

export class ProcessCommandDto {
  @IsString()
  @IsNotEmpty()
  command: string;
  user?: any;
}
