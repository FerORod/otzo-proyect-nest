import {applyDecorators} from "@nestjs/common";
import { ApiResponse } from "node_modules/@nestjs/swagger/dist/decorators/api-response.decorator";

export const ApiAuth = (() => {
    return applyDecorators(
        ApiResponse({
            status: 401,
            description: "Missing for token or invalid token"
        }),
        ApiResponse({
            status: 403,
            description: "Missing for role or invalid role"
        }),
        ApiResponse({
            status: 500,
            description: "Internal Server Error"
        })
    );
})