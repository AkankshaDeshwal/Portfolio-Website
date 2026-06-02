import { ArrowUpRight } from "lucide-react";

const ThemeToggle
 = ({btnText}) => {
    return ( 
        
        <button className="font-primary inline-flex items-center gap-1 cursor-pointer text-foreground">{btnText}<ArrowUpRight /></button>
    
    );
}
 
export default ThemeToggle
;