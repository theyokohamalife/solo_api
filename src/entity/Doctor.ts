import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Doctor {

    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;

    @Column()
    public website: string;

    @Column()
    public specialty: string;

}