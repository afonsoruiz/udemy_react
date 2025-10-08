import { pageLinks } from "../data"

const PageLinks = (props) => {
    const {parentClass, itemCLass} = props
    return (
        <ul className={parentClass}> 
            {pageLinks.map((link) => {
                const { id, href, name } = link
                return (
                    <li key={id}>
                        <a href={href} className={itemCLass}>{name}</a>
                    </li>
                )
            })}
        </ul>
    )
}
export default PageLinks