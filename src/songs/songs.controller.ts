import { Controller, Get,Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
    constructor(private songsService:SongsService){}
  @Get()
  findAll(){
   return this.songsService.showAllSongs();
  }
  @Put()
  create(){
    this.songsService.createSong();
  }
}
