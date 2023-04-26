import { Body, Controller, Get, Post, Req, Request, UseGuards } from "@nestjs/common";
// import { AuthGuard } from "@nestjs/passport";
import { AuthDTO } from "../auth/auth-dto";
import { Auths } from "../auth/auth.entity";
import { RegisterService } from "./register.service";

@Controller("/")
export class RegisterController{
    constructor(
private registerService:RegisterService
    ){}
    @Post("/register")
    register(@Body() udetails: AuthDTO): Promise<any> {
        return this.registerService.registerUser(udetails)

    }
}