/* eslint-disable react/prop-types */
const ChildProp = ({Poster, Title, Year, Type}) => {
  return (
    <section className="movie-container">
        <div className="image-container">
            <img src={Poster !== "N/A"? Poster : "https://www.tyres.im/wp-content/uploads/2017/05/placeholder-400x400.png"} alt="" />
        </div>
        <div className="info-container">
            <h2 className="title">{Title}</h2>
            <div className="release-year">{Year}</div>
            <div className="type">{Type}</div>
        </div>
    </section>
  )
}

export default ChildProp