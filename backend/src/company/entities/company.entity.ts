import { PartnerCompanyEntity } from "src/partner-company/entities/partner-company.entity";
import { ProjectEntity } from "src/project/entities/project.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";



@Entity({ name: 'companies' })
export class companyEntity {

    @PrimaryColumn({ name: 'id' })
    public id: number
  
    @Column({ name: 'name', nullable: false })
    public name: string;

    @Column({name: "cnpj", nullable: false})
    public cnpj: string
    
    @Column({ name: 'created_at', nullable: false })
    public createdAt: Date;
  
    @Column({ name: 'updated_at', nullable: true })
    public updatedAt: Date;

    @ManyToMany(() => PartnerCompanyEntity, partnerCompany => partnerCompany.companies)
    public partnerCompanies: PartnerCompanyEntity[]

    @OneToMany(() => ProjectEntity, project => project.company)
    public projects: ProjectEntity[]

}