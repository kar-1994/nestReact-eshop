import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    PassportModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
