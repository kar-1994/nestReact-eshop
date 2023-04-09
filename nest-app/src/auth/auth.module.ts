import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import {Auths} from './auth.entity'
import { AuthService } from './auth.service';
import { UserRepository } from './user-repo';
import { JwtModule } from '@nestjs/jwt';
import { AuthStrategy } from './auth.strategy';

@Module({
    imports: [TypeOrmModule.forFeature([Auths]),
    JwtModule.register({secret:'DEVIARCHANAKAR1234',signOptions:{expiresIn:900}})
],
    controllers: [AuthController],
    providers: [AuthService,UserRepository,AuthStrategy],
    exports: []
})
export class AuthModule { }
