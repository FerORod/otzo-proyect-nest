import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsIn, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto{
    @ApiProperty({default: 'user@example.com'})
    @IsEmail()
    userEmail!: string;
    @IsString()
    @MinLength(8)
    @ApiProperty({default: 'password123'})
    userPassword!: string;
    @ApiProperty({default: 'Employee'})
    @IsOptional()
    @IsIn(['Admin', 'Employee', 'Manager'])
    userRoles?: string[]
}
