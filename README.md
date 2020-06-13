# Project Tracker (In Development)
Project Tracker website for tracking your own side projects build using Node.js and MySQL as database. This website contain two main parts, Project List and Task List. Project List is a list which define your main idea when doing projects. Task list is a list of task on what will you be doing from specific project. You can change each task's status (Pending, On Progress, or Completed). 

![alt text][Screenshot]

Note: 
- Website still not responsive to mobile/tablet
- History tracker not available yet

## MySQL Table
### Projects
 id | project_title | project_description | project_created 
--- | --- | --- | --- 
PRIMARYKEY, INT(11), NOT NULL, AUTO INCREMENT | VARCHAR(255), NOT NULL | TEXT, DEFAULT : NULL | DATETIME , DEFAULT: CURRENT_TIMESTAMP

### Tasks
 id | task_title | task_description | task_created | project_id | task_status
--- | --- | --- | --- | --- | ---
PRIMARYKEY, INT(11), NOT NULL, AUTO INCREMENT | VARCHAR(255), NOT NULL | TEXT, DEFAULT : NULL | DATETIME , DEFAULT: CURRENT_TIMESTAMP | INT(11), NOT NULL | VARCHAR(45), NOT NULL, DEFAULT : 'Pending'



[Screenshot]: https://github.com/adif-git/Project-Tracker/blob/master/Screenshot/1.png "Screenshot"
