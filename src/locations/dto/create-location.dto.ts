import { ArrayNotEmpty, IsArray, IsNumber, IsObject, IsOptional, IsString, MaxLength } from "class-validator";
import { Region } from "src/regions/entities/region.entity";

export class CreateLocationDto {
    @IsNumber()
    @MaxLength(35)
    locationId?: number
    @IsString()
    @MaxLength(150)
    locationName?: string
    @IsString()
    locationAddress?: string
    @IsArray()
    @ArrayNotEmpty()
    locationLatLng?: number[]
    @IsObject()
    @IsOptional()
    region?: Region;
}
