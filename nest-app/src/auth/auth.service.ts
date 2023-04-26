import { Injectable } from "@nestjs/common/decorators";
import { JwtService } from "@nestjs/jwt/dist";
import { AuthDTO } from "./auth-dto";
import { Auths } from "./auth.entity";
import { UserRepository } from "./user-repo";

@Injectable()
export class AuthService {
    constructor(
        private userRepo: UserRepository,
        private jwtService: JwtService
    ) { }
    async validateUser(authDTO: AuthDTO) {
        const user = await this.userRepo.findUserByUserName(authDTO.username)
        if (!user) {
            throw new Error("User not found.");

        } else if (authDTO.password != user.password) {
            throw new Error("Invalid credential please try again.");
            

        } else {
            const jwtBody = { username: user.username, sub: user.user_id }
            return { access_token: await this.jwtService.sign(jwtBody) }
        }
    }
    async getUserInfo(uname:string):Promise<Auths>{
       return this.userRepo.findUserByUserName(uname);
    }
}