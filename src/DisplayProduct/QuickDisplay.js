import "../CSS/QuickDisplay.css";
const QuickDisplay = (props) => {
  const findData = ({ prod }) => {
    if (prod) {
      return prod.map((item) => {
        console.log(item);
        return (
          <div>
            <div className="imageCard" key={item.id}>
              <img src={item.image} alt="" />
              <p>{item.category} </p>
              <button> Click</button>
            </div>
          </div>
        );
      });
    }
  };
  return <div className="alignImage">{findData(props)}</div>;
};

export default QuickDisplay;
