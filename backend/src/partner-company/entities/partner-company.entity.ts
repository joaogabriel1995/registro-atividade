import { companyEntity } from "src/company/entities/company.entity";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity({name: "partner_companies"})
export class PartnerCompanyEntity {

    @PrimaryColumn({name: "id", nullable: false})
    public id: number

    @Column({name: "name"})
    public name: string

    @Column({name: "contact"})
    public contact: string

    @Column({name: "created_at"})
    public createdAt: Date

    @Column({name: "updated_at"})
    public updatedAt: Date

    @ManyToOne(() => companyEntity, company => company.partnerCompanies, {nullable: true})
    public companies: companyEntity[]
}