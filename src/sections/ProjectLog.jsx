import PageLink from "../components/PageLink";
import ProjectRow from "../components/ProjectRow";

const ProjectLog = ({projectLogRef}) => {
    const projects = [
        {
            id:1,
            year:2026,
            name:'E-Commerce Store',
            techStack:'React, Rest API',
            link:'https://ecomstore.akankshadeshwal.com/',
        },
        {
            id:2,
            year:2026,
            name:'Crypto Currency Tracker',
            techStack:'React, Rest API',
            link:'https://cryptotracker.akankshadeshwal.com/',
        },
        {
            id:3,
            year:2026,
            name:'Kanban Board',
            techStack:'Javascript',
            link:'https://kanbanboard.akankshadeshwal.com/',
        },
    ]
    return ( 
       <div ref= {projectLogRef} className="w-full">
        <h1 className="text-l text-foreground font-semibold font-primary mb-6">Project Log</h1>
        {projects.map((project) => 
        <ProjectRow key={project.id} project={project}/>)}
        <span className="text-sm text-muted">*Click on the Project name to view. To see the code, visit <span className="italic text-accent-pink-text"><PageLink name='my Github' link='https://github.com/AkankshaDeshwal'/></span></span>
        
       </div>
    )
}
 
export default ProjectLog;