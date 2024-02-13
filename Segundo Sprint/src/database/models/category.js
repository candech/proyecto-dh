module.exports = ( sequelize, DataTypes ) => {
  let alias = "Categoria";
  let cols = {
      id:{
          type: DataTypes.INTEGER, 
          primaryKey: true,
          allowNull: false,
        },
        inSale:{
        type: DataTypes.STRING,
        allowNull: false,
        
        },
        visited:{
          type: DataTypes.STRING,
          allowNull: false,
        },
        vegan:{
          type: DataTypes.STRING,
          allowNull: false,
        }
  };
  let config = {
    tableName: "category",
    timestamps: false
};
const Categoria = sequelize.define(alias,cols,config)
Categoria.associate = (models) => {
    Categoria.hasMany(models.Productos, {
        as: "products",
        foreignKey:"categoryId"
    });
}
return Categoria
}