import TechBlogCard from "../components/TechBlogCard";

const TechBlogs = () => {
    return ( 
        <div className="w-full">
            <h1 className="text-l text-foreground font-semibold font-primary mb-6">TECH BLOGS WRITTEN</h1>
            <div className="flex gap-4 flex-col md:flex-row">
                <TechBlogCard />
                <TechBlogCard />
                <TechBlogCard />
            </div>
        </div>
     );
}
 
export default TechBlogs;