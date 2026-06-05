import PageLink from "../components/PageLink";
import ProjectRow from "../components/ProjectRow";

const ProjectLog = () => {
    const projects = [
        {
            id:1,
            year:2026,
            name:'E-Commerce Store',
            techStack:['React', 'Redux'],
            link:'#',
        },
        {
            id:2,
            year:2026,
            name:'Real Time Chat App',
            techStack:['React', 'ChatGPT', 'Rest API'],
            link:'#',
        },
        {
            id:3,
            year:2026,
            name:'Kanban Board',
            techStack:['Javascript'],
            link:'#',
        },
    ]
    return ( 
       <div className="w-full">
        <h1 className="text-l text-foreground font-semibold font-primary mb-6">Project Log</h1>
        {projects.map((project) => 
        <ProjectRow project={project}/>)}
        <span className="text-sm text-muted">*Click on the Project name to view. To see the code, visit <span className="italic text-accent-pink-text"><PageLink name='my Github' link='#'/></span></span>
        
       </div>
    )
}
 
export default ProjectLog;