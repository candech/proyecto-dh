module.exports = ( sequelize, DataTypes ) => {
    let alias = "Categorias";
    let cols = {
        categoryId:{
            type: DataTypes.INTEGER, 
            primaryKey: true,
            allowNull: false,
            unique: true,
          },
          productsId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'products',
              key: 'id', 
            },
           
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
      tableName: "categorys",
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