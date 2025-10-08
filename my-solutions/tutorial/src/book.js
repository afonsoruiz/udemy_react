
const Book = (props) => {
    const { title, author, image, number } = props
    
    return (
        <article className="book">
            <span className="number">{`#${number + 1}`}</span>
            <img src={image} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    )
}

export default Book