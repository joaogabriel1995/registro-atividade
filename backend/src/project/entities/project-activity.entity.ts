import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { ProjectEntity } from "./project.entity";

@Entity({ name: "project_activities" })
export class ProjectActivityEntity {

    @PrimaryColumn({name: "id", nullable: false})
    public id: number

    @Column({ name: "code" , nullable: false})
    public code: string

    @Column({name: "is_active", nullable: true })
    public isActive: string

    @Column({name: "description", nullable: true })
    public description: string

    @Column({name: "created_at", nullable: false})
    public createdAt: Date


    @Column({name: "updated_at", nullable: false})
    public updatedAt: Date

    @ManyToOne(() => ProjectEntity,  project => project.projectActivity )
    public project: number
}