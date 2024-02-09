/*module.exports = ( sequelize, dataTypes ) => {
    let alias = "Usuarios";
    let cols = {
        userId: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true,
          },
          firstName: {
            type: DataTypes.STRING,
            allowNull: false,
    
          },
          lastName: {
            type: DataTypes.STRING, 
            allowNull: false,
    
          },
          email: {
            type: DataTypes.STRING, 
            allowNull: false,
            unique: true,
    
          },
          password: {
            type: DataTypes.STRING, 
            allowNull: false,
          },
          avatar: {
            type: DataTypes.STRING,
            allowNull: false,
          },
             
    };
    let config = {
      tableName: "users",
      timestamps: false
  };
    const Usuarios = sequelize.define(alias,cols,config)
      Usuarios.associate = (models) => {
       Usuarios.hasMany(models.Types, {
          as: "users",
          foreignKey:"typeId"
      });
  }
    return Usuarios
}*/