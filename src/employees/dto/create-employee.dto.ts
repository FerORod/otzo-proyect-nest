import { IsEmail, IsString, IsUUID, MaxLength } from "class-validator";

export class CreateEmployeeDto {
    @IsUUID()
    @IsString()
    id?: string;
    @IsString()
    @MaxLength(30)
    name?: string;
    @IsString()
    @MaxLength(30)
    lastName?: string;
    @IsString()
    @MaxLength(12)
    phoneNumber?: string;
    @IsEmail()
    @IsString()
    employeeEmail?: string
}
