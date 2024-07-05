import { companyEntity } from "src/company/entities/company.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { ProjectActivityEntity } from "./project-activity.entity";

@Entity({ name: "projects" })
export class ProjectEntity {

    @PrimaryColumn({name: "id", nullable: false})
    public id: number

    @Column({ name: "code" , nullable: false})
    public code: string

    @Column({name: "is_active", nullable: true })
    public isActive: string

    @Column({name: "created_at", nullable: false})
    public createdAt: Date

    @Column({name: "updated_at", nullable: false})
    public updatedAt: Date

    @ManyToOne(() => companyEntity,  company => company.projects )
    public company: number

    @OneToMany(() => ProjectActivityEntity,  projectActivity => projectActivity.project, {nullable: true} )
    public projectActivity: ProjectActivityEntity[]
}