module.exports = ( sequelize, DataTypes ) => {
    let alias = "Types";
    let cols = {
      typeId:
      {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      customer: {
        type: DataTypes.STRING, 
        allowNull: false,
      },
      admin: {
        type: DataTypes.STRING, 
        allowNull: false,
       
      },
             
    };
    let config = {
      tableName: "types",
      timestamps: false
  };
    const Tipos = sequelize.define(alias,cols,config)
      Tipos.associate = (models) => {
       Tipos.belongsTo(models.Usuarios, {
          as: "types",
          foreignKey:"userId"
      });
  }
    return Tipos
}
