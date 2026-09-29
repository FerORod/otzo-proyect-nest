import { IsString, MaxLength, IsEmail, IsUUID, IsOptional } from "class-validator";

export class CreateProviderDto {
    @IsUUID()
    @IsString()
    @IsOptional()
    providerId?: string
    @IsString()
    @MaxLength(50)
    providerName?: string
    @IsEmail()
    @MaxLength(100)
    providerEmail?: string
    @IsString()
    @MaxLength(13)
    providerPhoneNumber?: string
}
