import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AuthDTO } from "./auth-dto";
import { Auths } from "./auth.entity";


@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(Auths)
        private authRepo: Repository<Auths>
    ) { }

    async findUserByUserName(uname: string): Promise<Auths> {
        return this.authRepo.findOneBy({ username: uname })
    }
    async insertUserDetails(uname:string,email:string,password:string):Promise<Auths>{
        return this.authRepo.save({username:uname,password:password,email:email})
    }

}
