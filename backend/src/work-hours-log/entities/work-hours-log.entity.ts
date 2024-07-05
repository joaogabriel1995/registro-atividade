import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: "work_hours_logs"})
export class workHoursLogEntity {

    @PrimaryColumn({name: "id", nullable:false})
    public id: number

    @Column({name: "hour_init", nullable: false})
    public hourInit: Date

    @Column({name: "hour_end", nullable: false})
    public hourEnd: Date

    @Column({name: "datetime", nullable: false})
    public datetime: Date

    @Column({name: "created_at", nullable: false})
    public createdAt: Date

    @Column({name: "updated_at", nullable: true})
    public updatedAt: Date
}