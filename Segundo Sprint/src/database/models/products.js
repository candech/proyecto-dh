module.exports = ( sequelize, dataTypes ) => {
    let alias = "Productos";
    let cols = {
        productsId: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true,
          },

          name: {
            type: DataTypes.STRING,
            allowNull: false,
            
          },
          price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            
          },
          description: {
            type: DataTypes.TEXT,
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
        Productos.hasMany(models.Categorias, {
            as: "Productos",
            foreignKey:"categoryId"
        });
    }
    return Productos
    
}