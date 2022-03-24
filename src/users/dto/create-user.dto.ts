import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric } from "class-validator";

export class CreateUserDto {

    @ApiProperty()
    @IsAlphanumeric() //From the ValidationPipe
    name: string
}
