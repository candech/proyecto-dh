module.exports = ( sequelize, DataTypes ) => {
    let alias = "users";
    let cols = {
        userId: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true,
          },
          typeId: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            references: {
              model: 'types',
              key: 'id', 
            },
            
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
          type: {
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
    const users = sequelize.define(alias,cols,config)
      Usuarios.associate = (models) => {
       Usuarios.hasMany(models.Types, {
          as: "types",
          foreignKey:"typeId"
      });
  }
    return users
}