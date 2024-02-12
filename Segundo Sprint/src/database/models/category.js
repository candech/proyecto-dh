module.exports = ( sequelize, DataTypes ) => {
    let alias = "Categorias";
    let cols = {
        categoryId:{
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
  const Categorias = sequelize.define(alias,cols,config)
 Categorias.associate = (models) => {
      Categorias.hasMany(models.Productos, {
          as: "products",
          foreignKey:"categoryId"
      });
  }
  return Categorias
}