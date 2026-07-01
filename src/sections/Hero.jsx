import Button from "../components/Button";
import GetInTouchButton from "../components/GetInTouchButton";

const Hero = ({scrollToLog}) => {
    return ( 
        <div>
            {/* Name */}
            <div>
                <span className="text-xl text-foreground text font-semibold">Akanksha Deshwal</span>, <span className="text-md italic text-muted">Frontend Developer</span>
            </div>

            {/* Short Intro */}
            <p className="mt-4 text-muted font-secondary text-sm">I’m a frontend developer focused on performance, clean state systems, and product intent.

For the last 4 years, I built and managed an independent Ayurvedic business. Running an enterprise taught me user psychology, growth loops, and exactly why businesses need high-performing software. Now, I write the React code that powers those experiences.</p>

{/* CTA */}
<div className="mt-2 font-primary text-foreground text-md">
    Read my <Button btnText='Project Log' btnHandler={scrollToLog} />, <Button btnText='Download Resume' /> or <GetInTouchButton/>.
</div>
        </div>
     );
}
 
export default Hero;