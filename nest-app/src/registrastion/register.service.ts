import { Injectable } from "@nestjs/common/decorators";
import { AuthDTO } from "../auth/auth-dto";
import { Auths } from "../auth/auth.entity";
import { UserRepository } from "../auth/user-repo";

@Injectable()
export class RegisterService{
    constructor(
        private userRepo: UserRepository
      
    ) { }

async registerUser(authDTO: AuthDTO){
    const user = await this.userRepo.insertUserDetails(authDTO.username,authDTO.email,authDTO.password)
    console.log("inside reg service",user);
}
}