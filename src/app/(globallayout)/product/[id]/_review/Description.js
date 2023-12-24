import React from "react";

const Description = ({data}) => {
  return (
    <div className="pt-5" style={{ background: "#F8F8F8", minHeight: "400px" }}>
      <div className="container ">
        <div className="row">
          <div className="col-md-6 pe-lg-5">
            <p className="text-secondary">Details</p>
            <p
              style={{
                fontSize: "16px",
                color: "#444444",
                whiteSpace: "pre-line",
                textAlign:"justify"
              }}
            >
             {data?.description}
            </p>{" "}
          </div>
          <div className="col-md-6 ps-lg-5">
            <p className="text-secondary">Specifications</p>

            <table className="specification_table ps-5">
              <tbody>
                <tr>
                  <td>Color</td>
                  <td>{data?.colors?.map((item, index, array) => (
  <span key={item}>
    {item}
    {index < array.length - 1 && ','}
  </span>
))}</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td> {data?.size?.map((item, index, array) => (
  <span key={item}>
    {item}
    {index < array.length - 1 && ','}
  </span>
))}</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>{data?.weight}kg</td>
                </tr>
                <tr>
                  <td>Manifacturer </td>
                  <td>{data?.manifacturer?"true":"false"} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
