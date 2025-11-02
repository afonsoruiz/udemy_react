import { useCallback, useEffect, useState } from "react"

const url = 'https://www.course-api.com/react-tours-project';

export default function useTours() {
    const [tours, setTours] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const fetchTours = useCallback(async () => {
        try {
            const response = await fetch(url)
            if(!response.ok) {
                throw new Error("Network response was not ok")
            }
            const data = await response.json()
            setTours(data)
            console.log("data: ", data)
            return data
        } catch (error) {
            setError("Error fetching data")
            setTours([])
            console.log(error)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchTours()
    }, [fetchTours])


    const removeTour = (id) => {
        let filtered = tours.filter((tour) => tour.id !== id)
        setTours(filtered)
    }


    return { tours, loading, error, removeTour, refresh: fetchTours }
}
