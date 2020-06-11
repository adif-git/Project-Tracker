const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

const connection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: 'projects_diary'
});

connection.connect((err) => {
    if(err){
        console.log('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected to database!');
});

app.get('/', (req,res) => {
    var projects_table = 'SELECT * from projects';
    var tasks_table = 'SELECT * from tasks';

    connection.query(
        projects_table,(error_projects,results_projects)=>{
            connection.query(
                tasks_table,(error_tasks,results_tasks)=>{
                    res.render('index.ejs', {projects: results_projects, tasks: results_tasks});
                }
            );
        }
    );
});

//==============================PROJECT IDEA MODELS==========================
app.post('/create-idea', (req,res)=>{
    connection.query(
        'INSERT INTO projects (project_title, project_description) VALUES (?, ?)',
        [req.body.add_project_title, req.body.add_project_description],
        (error, results)=>{
            if (error) throw error;
            res.redirect('/');
        }
    );
});

app.post('/update-idea/:id', (req, res) => {
    connection.query(
      'UPDATE projects SET project_title=?, project_description=? WHERE id=?',
      [req.body.edit_project_title, req.body.edit_project_description, req.params.id],
      (error, results) => {
        res.redirect('/');
      }
    );
  });

app.post('/delete-idea/:id', (req, res) => {
connection.query(
    'DELETE FROM projects WHERE id = ?',
    [req.params.id],
    (error, results) => {
        res.redirect('/');
    }
    );
});
//==============================TO-DO TASK MODELS==========================
app.post('/create-task', (req,res)=>{
    connection.query(
        'INSERT INTO tasks (task_title, task_description, project_id) VALUES (?, ?, ?)',
        [req.body.task_title, req.body.task_description, req.body.project_id],
        (error, results)=>{
            if (error) throw error;
            res.redirect('/');
        }
    );
});

app.post('/delete-task/:id', (req, res) => {
    connection.query(
        'DELETE FROM tasks WHERE id = ?',
        [req.params.id],
        (error, results) => {
            res.redirect('/');
        }
    );
});  

app.post('/update-task-status/:id', (req, res) => {
    connection.query(
        'UPDATE tasks SET task_status=? WHERE id=?',
        [req.body.task_status, req.params.id],
        (error, results) => {
            res.redirect('/');
        }
    );
});  

const port = 3000;
app.listen(port);