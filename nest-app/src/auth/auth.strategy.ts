import { Injectable } from "@nestjs/common/decorators";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy, "jwt") {
    constructor(){
        super({secretOrKey:"DEVIARCHANAKAR1234",jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()})
    }
    validate(jwtBody: any) {
        return { userId: jwtBody.sub, username: jwtBody.username };
    }

}