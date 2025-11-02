import Tour from "./Tour";
import useTours from "./useTours";

const App = () => {
  const { tours, loading, error, removeTour, refresh } = useTours()

  if (loading) {
    return <h2 className="title">Loading...</h2>
  }

  if (tours.length === 0) {
    return <button onClick={refresh} className="btn btn-block">Click to refresh</button>
  }

  if (error) {
    return (
      <>
        <h2 className="title">Error</h2>
        <h4 className="title">{error}</h4>
        <button className="btn btn-block" onClick={refresh}>Refresh</button>
      </>
    )
  }


  return <Tour tours={tours} removal={removeTour} refresh={refresh} />
};
export default App;
