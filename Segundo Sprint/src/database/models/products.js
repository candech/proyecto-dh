module.exports = ( sequelize, DataTypes ) => {
  let alias = "Productos";
  let cols = {
      id: {
          type: DataTypes.INTEGER, 
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,  
        },
        price: {
          type: DataTypes.INTEGER,
          allowNull: false,  
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
          
        },
        image: {
          type: DataTypes.STRING,
          allowNull: false,
        }
  };
  let config = {
      tableName: "products",
      timestamps: false
  };
  const Productos = sequelize.define(alias,cols,config)
  Productos.associate = (models) => {
    Productos.belongsTo(models.Categorias, {
          foreignKey:"categoryId",
          as: "products",
      });
  }
  return Productos
  
}