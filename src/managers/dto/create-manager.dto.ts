import { IsEmail, IsNumber, IsString, IsUUID, MaxLength } from "class-validator";

export class CreateManagerDto {
    @IsString()
    @IsUUID()
    managerId?: string;
    @IsString()
    @MaxLength(100)
    managerFullName?: string
    @IsNumber()
    managerSalary?: number;
    @IsString()
    @IsEmail()
    managerEmail?: string
    @IsString()
    @MaxLength(15)
    managerPhone?: string;
}
