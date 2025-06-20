import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
    private  songList:string[]=[];
    createSong(){
        this.songList.push("Nacho Nacho");
        return this.songList;
    }
    showAllSongs()
    {
        return this.songList;
    }
}
