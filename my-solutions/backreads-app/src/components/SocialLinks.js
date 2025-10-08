const SocialLinks = (props) => {
    const { href, name, itemClass } = props
    return (
        <li>
            <a href={href} target="_blank" className={itemClass}><i className={name}></i></a>
        </li>
    )
}
export default SocialLinks