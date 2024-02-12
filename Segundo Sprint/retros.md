1- agregar datos desde el vs
2- al utilizar el comando de seed tira el error:
$ npx sequelize-cli db:seed:all

Sequelize CLI [Node: 20.11.0, CLI: 6.6.2, ORM: 6.36.0]

Loaded configuration file "src\database\config\config.js".
Using environment "development".
== 20240208160932-users: migrating =======

ERROR: Cannot add or update a child row: a foreign key constraint fails (`pizzeria_db`.`users`, CONSTRAINT `id-type` FOREIGN KEY (`idType`) REFERENCES 
`type` (`idtype`) ON DELETE NO ACTION ON UPDATE NO ACTION)
