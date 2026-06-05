const PageLink = ({name, link}) => {
    return (
        <>
        <a className="no-underline hover:underline underline-offset-4" href={link} target="_blank">{name}</a>
        </>
     );
}
 
export default PageLink;