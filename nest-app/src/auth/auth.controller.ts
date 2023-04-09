import { Body, Controller, Get, Post, Req, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthDTO } from "./auth-dto";
import { Auths } from "./auth.entity";
import { AuthService } from "./auth.service";

@Controller("/auth")
export class AuthController {

    constructor(
        private authService: AuthService
    ) { }
    @Post("/login")
    login(@Body() cred: AuthDTO): Promise<any> {
        return this.authService.validateUser(cred)

    }
    @UseGuards(AuthGuard("jwt"))
    @Get("/user")
    loggedInUserInfo(@Request() req: any):Promise<Auths> {
        const uname = req.user.username;
        return this.authService.getUserInfo(uname);
    }

}