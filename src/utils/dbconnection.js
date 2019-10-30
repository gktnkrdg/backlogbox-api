const Sequelize = require('sequelize');

 const sequelize = new Sequelize('postgres://htzidzfvdxfqde:a5ad49bc4f6ab04850d4a1adfe76f986f070a6525edaa13146991b6ef8e8b194@ec2-54-243-239-199.compute-1.amazonaws.com:5432/dd4u26g7kcp1i8?ssl=true');
//  const sequelize = new Sequelize(
//     "ec2-54-243-239-199.compute-1.amazonaws.com/dd4u26g7kcp1i8",
//     "htzidzfvdxfqde",
//     process.env.DATABASE_PASSWORD,
//     {
//       dialect: 'postgres',
//     },
//   );




  module.exports = sequelize;