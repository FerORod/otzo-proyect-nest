import { IsEmail, IsNumber, IsObject, IsOptional, IsString, IsUUID, MaxLength } from "class-validator";
import { Location } from "../../locations/entities/location.entity";

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
    @IsObject()
    @IsOptional()
    location?: Location;
}
