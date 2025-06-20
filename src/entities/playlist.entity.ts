import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Song } from './songs.entity';
import { User } from './user.entity';
@Entity()
export class Playlist {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @ManyToMany(() => Song, (song) => song.playlists, { cascade: true })
  @JoinTable()
  songs: Song[];
  @ManyToMany(() => User, (user) => user.playlists)
  contributors: User[];
}
