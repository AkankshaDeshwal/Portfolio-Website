const Button = ({btnText}) => {
    return ( 
        <button className="font-bold cursor-pointer hover:text-accent-blue-bg">[{btnText}]</button>
     );
}
 
export default Button;