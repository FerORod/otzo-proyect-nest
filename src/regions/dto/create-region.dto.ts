import { ArrayNotEmpty, IsArray, IsNumber, IsString, MaxLength } from "class-validator"

export class CreateRegionDto {
    @IsNumber()
    regionId?: number
    @IsString()
    @MaxLength(100)
    regionName?: string
    @IsArray()
    regionStates?: string[]
}
