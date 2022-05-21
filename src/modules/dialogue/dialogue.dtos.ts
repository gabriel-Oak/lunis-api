import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateDialogueDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString({
    each: true,
  })
  @IsNotEmpty()
  triggers: string[];

  @IsString({
    each: true,
  })
  @IsNotEmpty()
  answers: string[];

  @IsOptional()
  @IsString()
  parentIntent?: string;
}
