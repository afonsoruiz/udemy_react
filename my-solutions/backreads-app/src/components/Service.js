import { services } from "../data"

const Service = (props) => {
    const { icon, title, text } = props
    return (
        <article>
            <span className="service-icon"><i className={icon}></i></span>
            <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">
                    {text}
                </p>
            </div>
        </article>
    )
}
export default Service