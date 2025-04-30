import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
    tableName: 'CoinPurchaseStatus',
    timestamps: true
})

export default class CoinPurchaseStatus extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    })
    public id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    public coinId: string

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    public availability: boolean

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    public createdAt: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    public updatedAt: Date;
}