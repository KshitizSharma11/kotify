import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Playlist } from './playlist.entity';

@Entity()
export class Song {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  artists: [string];
  @Column()
  duration: number;
  @Column()
  releaseDate: Date;
  @ManyToMany(() => Playlist, (playlist) => playlist.songs)
  playlists: Playlist[];
}
