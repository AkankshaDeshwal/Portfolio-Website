import { useState } from "react";
import Button from "./Button";
import {Check} from "lucide-react"

const GetInTouchButton = () => {
    const email = "adeshwal85@gmail.com"
    const [emailCopied, setEmailCopied] = useState(false)

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email)
            setEmailCopied(true)

            setTimeout(() => setEmailCopied(false), 10000)
        }
        catch(err) {
            alert(
                "Error occurred while copying email to clipboard. Please try again!"
            )
        }
        
    }


    if (emailCopied) {
        return <Button btnText="Email Copied to Clipboard" customStyles="text-accent-blue-bg cur"><Check size={20}/> </Button>
    }
    return ( 
        <Button btnText="Get in Touch" btnHandler={copyEmail} />
     );
}
 
export default GetInTouchButton;