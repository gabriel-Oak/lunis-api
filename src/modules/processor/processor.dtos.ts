import { IsNotEmpty, IsString } from 'class-validator';

export class ProcessCommandDto {
  @IsString()
  @IsNotEmpty()
  speech: string;
  user?: any;
}
