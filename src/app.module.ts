import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PlaylistModule } from './playlist/playlist.module';
import { SearchModule } from './search/search.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfigDev } from './utils/configs/typeORM.config';

@Module({
  imports: [
    SongsModule,
    AuthModule,
    UserModule,
    PlaylistModule,
    SearchModule,
    TypeOrmModule.forRoot(pgConfigDev),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
