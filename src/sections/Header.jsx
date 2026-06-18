import ThemeToggle from "../components/ThemeToggle";

const Header = ({selectedTheme, toggleThemeHandler}) => {
    return ( 
        <nav className="flex justify-between items-center h-10 p-8 ">
            {/* Website Logo/Name */}
            <h1 className="font-primary text-2xl font-bold text-foreground">AD.</h1>

            {/* Theme toggle button */}
            <ThemeToggle btnText={selectedTheme} toggleThemeHandler={toggleThemeHandler} />

        </nav>
     );
}
 
export default Header;