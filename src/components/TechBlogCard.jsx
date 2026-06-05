import { ArrowUpRight } from "lucide-react";
import PageLink from "./PageLink";

const TechBlogCard = () => {
    return ( <div className="font-primary rounded-md p-4 bg-white flex flex-col gap-2 text-foreground">
        <div className="text-sm font-semibold ">01/ This Blog</div>
        <div className="text-xs text-muted font-secondary">React Fiber is an ongoing reimplementation of React's core algorithm. It is the culmination of over two years of research...</div>
        <div className=" text-sm  flex items-center"><PageLink name='Read Article'/><ArrowUpRight size={18} /></div>


    </div> );
}
 
export default TechBlogCard;