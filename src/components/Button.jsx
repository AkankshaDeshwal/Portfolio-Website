const Button = ({btnText, btnHandler}) => {
    return ( 
        <button className="font-bold cursor-pointer hover:text-accent-blue-bg" onClick={btnHandler}>[{btnText}]</button>
     );
}
 
export default Button;