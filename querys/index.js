const { Sequelize, Op } = require('sequelize');

const { User, Task } = require('./models')

const sequelize = new Sequelize('todos_sequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

const knex = require('knex')({
    client: "mysql2",
    connection: {
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        password: null,
        database: "todos_sequelize"
    }
})

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        // Raw Query
        // await sequelize.query(`
        //     INSERT INTO users (name, email, password, createdAt, updatedAt)
        //     VALUES ("Antonio", "antonio@gmail.com", "1234", NOW(), NOW())
        // `);

        // Query Builder
        // await knex('users').insert({
        //     name: "Manolo",
        //     email: "manolo@gmail.com",
        //     password: "1234",
        //     createdAt: new Date(),
        //     updatedAt: new Date()
        // });

        // ORM - Object Relational Mapper
        // User.create({
        //     name: "Paco",
        //     email: "paco@gmail.com",
        //     password: "1234",
        // });


        // Raw Query
        // const [results, metadata] = await sequelize.query(
        //         "SELECT * FROM users WHERE name = 'Manolo'"
        // );

        // Query Builder
        // const results = await knex('users').where('name', 'Manolo').select()

        // ORM
        // User.findOne({where: { name: 'Manolo' } })

        // Raw Query
        // await sequelize.query(`
        //     INSERT INTO tasks (userId, title, description, dueDate, completed, createdAt, updatedAt)
        //     VALUES (3, "Tarea Uno", "Desc Uno", "2022-05-05", false, NOW(), NOW())
        // `);

        // ORM
        // await Task.create({
        //     userId: 5,
        //     title: "Tarea Uno",
        //     description: "Desc Uno",
        //     dueDate: new Date("2022-05-04"),
        //     completed: true
        // })
        
        // Raw Query
        // const [results, metadata] = await sequelize.query(
        //     "SELECT * FROM users JOIN tasks ON tasks.userId = users.id"
        // );

        // // Query Builder
        // const restults = await knex('users')
        //     .join('tasks', 'tasks.userId', '=', 'users.id')
        //     .select()

        // // ORM
        // const users = await User.findAll({ include: Task })

        // //Raw Query
        // const [results, metadata] = await sequelize.query(`
        //     SELECT * FROM users
        //     JOIN tasks ON tasks.userId = users.id
        //     WHERE tasks.completed = FALSE
        //     AND YEAR(tasks.dueDate) = 2022
        //     AND MONTH(tasks.dueDate) < 6
        // `)

        // //Query Builder
        // const results = await knex('users')
        //     .join('tasks', 'tasks.userId', '=', 'users.id')
        //     .where('tasks.completed', false)
        //     .andWhereRaw('YEAR(tasks.dueDate) = 2022')
        //     .andWhereRaw('MONTH(tasks.dueDate) < 6')
        //     .select()

        // // ORM
        // const users = await User.findAll({
        //     include: {
        //         model: Task,
        //         where: {
        //             [Op.and]: [
        //                 { completed: false },
        //                 { dueDate: { [Op.lt]: new Date("2022-06-01") } }
        //             ]
        //         }
        //     }
        // })

        // console.log(JSON.stringify(users, null, 4))
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

connect();