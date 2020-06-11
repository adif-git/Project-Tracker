const editProject = (projectID, projectTitle, projectDesc) =>{
    document.getElementById("edit_project_title").value = projectTitle;
    document.getElementById("edit_project_description").value = projectDesc;
    document.getElementById("edit_project_form").action = '/update-idea/'+projectID;
    $('#editproject').modal('show');
}

const changeTaskStatus = (taskState) =>{
    document.getElementById(taskState).submit();
    setTimeout(function(){

    },800);
}