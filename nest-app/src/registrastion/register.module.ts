import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { RegisterService } from './register.service';
import { UserRepository } from '../auth/user-repo';
import { Auths } from 'src/auth/auth.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Auths]),],
    controllers:[RegisterController],
    providers:[RegisterService,UserRepository],
    exports:[]

})
export class RegisterModule { }