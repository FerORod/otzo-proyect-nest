import { IsEmail, IsObject, IsOptional, IsString, IsUUID, MaxLength } from "class-validator";
import { Location } from "../../locations/entities/location.entity";
import { ApiProperty, ApiPropertyOptional } from "node_modules/@nestjs/swagger/dist/decorators/api-property.decorator";

export class locationEmployeeDto extends Location {
    @ApiProperty()
    declare locationId?: number;

    @ApiPropertyOptional()
    declare locationName?: string;

    @ApiPropertyOptional()
    declare locationAddress?: string;

    @ApiPropertyOptional()
    declare locationLatLng?: number[];
}

export class CreateEmployeeDto {
    @ApiProperty()
    @IsUUID()
    @IsString()
    @IsOptional()
    employeeId?: string;

    @ApiProperty()
    @IsString()
    @MaxLength(30)
    employeeName?: string;

    @ApiProperty()
    @IsString()
    @MaxLength(30)
    employeeLastName?: string;
    
    @ApiProperty()
    @IsString()
    @MaxLength(12)
    employeePhoneNumber?: string;
    
    @ApiProperty()
    @IsEmail()
    @IsString()
    employeeEmail?: string
    
    
    @ApiProperty()
    @IsOptional()
    @IsObject()
    location?: locationEmployeeDto;
}