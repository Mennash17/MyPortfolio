// import ProjectsData from '../data/projectsData';

let ProjectsData = [
  {"project1" : {
      "name": "Login Form", 
      "tools" : "HTML, CSS", 
      "info": "FreeCodeCamp CSS Challenge", 
      "link": "https://mennash17.github.io/freecodecamp-form.io/"
  }},
  {"project2" : {
      "name": "Login Form", 
      "tools" : "HTML, CSS", 
      "info": "FreeCodeCamp CSS Challenge", 
      "link": "https://mennash17.github.io/freecodecamp-form.io/"
  }}
]

console.log(ProjectsData)


const Project = (ProjectsData) => {
console.log(ProjectsData)
  
  return (
    // ProjectsData.array.forEach(element => {
      <div class="main_container">
      <iframe
        class="peak"
        src="https://mennash17.github.io/freecodecamp-form.io/"
        frameborder="0"
         width="800" height="300" scrolling="no"
      ></iframe>
      <div class="insider_container">
        <div class="project_name">Login Form</div>
        <div class="project_tools">HTML , CSS</div>
        <div class="project_info">FreeCodeCamp CSS Challenge</div>
        <div class="project_link">
          <a href="https://mennash17.github.io/freecodecamp-form.io/">
            Check it in here
          </a>
        </div>
      </div>
    </div>
    // })
  );
};

export default Project;
