
import PageLink from "./PageLink";

const ProjectRow = ({project}) => {
    return ( 
        <>
        <div className="grid grid-cols-6 w-full font-secondary text-sm text-foreground">
            <div className="col-span-1 text-muted italic font-semibold">{project.year}</div>
            <div className="col-span-3"><PageLink name={project.name} link={project.link} /></div>
            <div className="col-span-2 text-right">[{project.techStack}]</div>
        </div>
        <hr className="w-full border-t border-gray-300 my-4" />

        
       
        </>
     );
}
 
export default ProjectRow;