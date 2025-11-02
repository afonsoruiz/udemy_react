import { useState } from "react"
import useTours from "./useTours"

const Tour = ({ tours, removal }) => {
    // const { tours } = useTours()
    const [readMore, setReadMore] = useState(false)

    return (
        <div>
            <h1 className="title">Our tours</h1>
            <div className="title-underline"></div>
            <main className="tours">
                {tours.map((tour) => {
                    const { id, name, info, image, price } = tour
                    return (
                        <div key={id} className="single-tour">
                            <div>
                                <span className="tour-price">{price}€</span>
                                <img src={image} alt={name} className="img" />
                            </div>
                            <div className="tour-info">
                                <h5>{name}</h5>
                                <p>{readMore ? info : `${info.substring(0, 200)}...`}
                                    <button onClick={() => setReadMore(!readMore)} type="button" className="info-btn">{readMore ? "Show less" : "Show more"}</button>
                                </p>
                                <button onClick={() => removal(id)} className="btn  btn-block delete-btn">Not Interested</button>
                            </div>
                        </div>
                    )
                })}
            </main>
        </div>

    )
}
export default Tour