import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ProcessCommandDto {
  @IsString()
  @IsNotEmpty()
  speech: string;

  @IsOptional()
  @IsString()
  path?: string;

  @IsOptional()
  user?: any;
}
