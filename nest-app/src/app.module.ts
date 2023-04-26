import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { PassportModule } from '@nestjs/passport';
import { RegisterModule } from './registrastion/register.module';

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    PassportModule,
    AuthModule,
    RegisterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
