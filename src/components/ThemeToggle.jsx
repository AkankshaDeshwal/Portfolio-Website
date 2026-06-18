import { ArrowUpRight } from "lucide-react";

const ThemeToggle
 = ({btnText, toggleThemeHandler}) => {
    return ( 
        
        <button onClick={toggleThemeHandler} className="font-primary inline-flex items-center gap-1 cursor-pointer text-accent-pink-text">{btnText}<ArrowUpRight /></button>
    
    );
}
 
export default ThemeToggle
;