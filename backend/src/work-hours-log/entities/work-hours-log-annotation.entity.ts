import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: "work_hours_log_annotations"})
export class workHoursLogAnnotationsEntity {

    @PrimaryColumn({name: "id", nullable:false})
    public id: number

    @Column({name: "hour_init", nullable: false})
    public hourInit: Date

    @Column({name: "hour_end", nullable: false})
    public hourEnd: Date

    @Column({name: "datetime", nullable: false})
    public datetime: Date

    @Column({name: "hours_spent", nullable: false})
    public hoursSpent: number

    @Column({name: "total_value", nullable: false})
    public totalValue: number

    @Column({name: "created_at", nullable: false})
    public createdAt: Date

    @Column({name: "updated_at", nullable: true})
    public updatedAt: Date
}