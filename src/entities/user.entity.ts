import {
  Column,
  CreateDateColumn,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';
import { Playlist } from './playlist.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  hashedPassword: string;
  @CreateDateColumn()
  createdAt: Date;
  @ManyToMany(() => Playlist, (playlist) => playlist.contributors)
  @JoinTable()
  playlists: Playlist[];
}
