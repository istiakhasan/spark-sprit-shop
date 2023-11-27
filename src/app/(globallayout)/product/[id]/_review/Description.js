import React from "react";

const Description = () => {
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
              Lorem ipsum dolor sit amet, in eleifend inimicus elaboraret his,
              harum efficiendi mel ne. Sale percipit vituperata ex mel, sea ne
              essent aeterno sanctus, nam ea laoreet civibus electram. Ea vis
              eius explicari. Quot iuvaret ad has. Vis ei ipsum conclusionemque.
              Te enim suscipit recusabo mea, ne vis mazim aliquando, everti
              insolens at sit. Cu vel modo unum quaestio, in vide dicta has. Ut
              his laudem explicari adversarium, nisl laboramus hendrerit te his,
              alia lobortis vis ea. Perfecto eleifend sea no, cu audire
              voluptatibus eam. An alii praesent sit, nobis numquam principes ea
              eos, cu autem constituto suscipiantur eam. Ex graeci elaboraret
              pro. Mei te omnis tantas, nobis viderer vivendo ex has.
            </p>{" "}
          </div>
          <div className="col-md-6 ps-lg-5">
            <p className="text-secondary">Specifications</p>

            <table className="specification_table ps-5">
              <tbody>
                <tr>
                  <td>Color</td>
                  <td>Blue,Purple</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td> 150x100x100</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>0.6kg</td>
                </tr>
                <tr>
                  <td>Manifacturer </td>
                  <td>Manifacturer </td>
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
