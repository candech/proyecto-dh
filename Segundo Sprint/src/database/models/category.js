module.exports = ( sequelize, dataTypes ) => {
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
            references: {
              model: {
                tableName: 'products',
              },
              key: 'id'
            },
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
      tableName: "categorys",
      timestamps: false
  };
  const Categorias = sequelize.define(alias,cols,config)
 Categorias.associate = (models) => {
      Categorias.hasMany(models.Productos, {
          as: "Categorias",
          foreignKey:"productsId"
      });
  }
  return Categorias
   
  
}