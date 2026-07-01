const Button = ({btnText, btnHandler, customStyles="", children}) => {
    return ( 
        <button className={`inline-flex items-center font-bold cursor-pointer hover:text-accent-blue-bg ${customStyles}`} onClick={btnHandler} >[{children}{btnText}]</button>
     );
}
 
export default Button;