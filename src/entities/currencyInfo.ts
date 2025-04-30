import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
    tableName: 'CurrencyInfo',
    timestamps: false
})

export default class CurrencyInfo extends Model {
    @Column({
        type: DataType.STRING,
        primaryKey: true,
        allowNull: false,
    })
    public id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    public name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    public symbol: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    public code: string;
}