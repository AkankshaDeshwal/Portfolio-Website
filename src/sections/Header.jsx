import ThemeToggle from "../components/ThemeToggle";

const Header = ({selectedTheme}) => {
    return ( 
        <nav className="flex justify-between items-center h-10 p-6 ">
            {/* Website Logo/Name */}
            <h1 className="font-primary text-2xl font-bold text-foreground">AD.</h1>

            {/* Theme toggle button */}
            <ThemeToggle btnText={selectedTheme}/>



        </nav>
     );
}
 
export default Header;