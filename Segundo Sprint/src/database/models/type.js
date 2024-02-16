module.exports = ( sequelize, DataTypes ) => {
  let alias = "Tipos";
  let cols = {
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    customer: {
      type: DataTypes.STRING, 
      allowNull: true,
    },
    admin: {
      type: DataTypes.STRING, 
      allowNull: true,
     
    },
    code: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    label: {
      type: DataTypes.STRING, 
      allowNull: false,
    }
          
  };
  let config = {
    tableName: "type",
    timestamps: false
};
  const Tipos = sequelize.define(alias,cols,config)
    Tipos.associate = (models) => {
     Tipos.belongsTo(models.Usuarios, {
        as: "users",
        foreignKey:"typeId"
    });
}
  return Tipos
}