import { ArrayNotEmpty, IsArray, IsNumber, IsString, MaxLength } from "class-validator";

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
}
