import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("rooms")
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  maxParticipationUsers: number;

  @Column()
  currentParticipationUsers: number;

  @Column()
  timeLimitInSeconds: number;

  constructor() {
    this.id = 0;
    this.maxParticipationUsers = 0;
    this.currentParticipationUsers = 0;
    this.timeLimitInSeconds = 0;
  }
}
