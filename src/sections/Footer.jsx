import {HeartHandshake} from "lucide-react"
import Button from "../components/Button";
import GetInTouchButton from "../components/GetInTouchButton";

const Footer = () => {
    return ( 
        <div className="bg-fixed relative bottom-0 bg-foreground pt-8  flex flex-col justify-center items-center gap-8">
            <div className="w-2/3 md:w-1/2 text-center flex flex-col gap-4 items-center py-4">
            <HeartHandshake color="var(--color-muted)" size={30}/> 
                <h1 className="font-primary text-background text-xl">About Me</h1>
                <span className="font-secondary text-sm font-thin text-background">I love learning mathematics in my free time.<br /> 
My major strength is my love for my work. Whether it's a personal project, a business, or a professional role, I do it with full commitment and joy.

I believe curiosity, discipline, and consistency matter more than talent.</span>
            </div>
            <h1 className="text-md text-accent-blue-text font-semibold font-primary">OPEN TO WORK</h1>

            <div className="flex gap-2 font-secondary text-background">
        
        <Button btnText="Download Resume"/>
        <GetInTouchButton />
            </div>

            <div className="w-full text-center py-4 bg-foreground border-t border-muted font-secondary text-muted text-sm">
                Copyright@Akanksha Deshwal. All rights reserved.
            </div>
        </div>
     );
}
 
export default Footer;