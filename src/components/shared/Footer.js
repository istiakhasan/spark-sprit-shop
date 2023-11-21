import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start text-white py-5"
      style={{backgroundColor: "#172134",fontSize:"14px",textDecoration:"none"}}
    >
      <div className="container p-4 pb-0">
        <section className="">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">FOOTER CONTENT</h5>

              <p className="text-secondary mx-atuo   footer_content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis
                obcaecati. Ducimus, quas. Corrupti, pariatur eaque? Reiciendis
                assumenda iusto sapiente inventore animi?
              </p>
            </div>
            <div className="col-lg-8">
                <div className="row">
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">QUICK LINKS</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className=" text-secondary">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#!" className=" text-secondary">
                    Faq
                  </a>
                </li>
                <li>
                  <a href="#!" className=" text-secondary">
                    Help
                  </a>
                </li>
                <li>
                  <a href="#!" className=" text-secondary">
                    My Account
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">CATEGORIES</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-secondary">
                  Clothes
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-secondary">
                  Electronics
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-secondary">
                  Furniture
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-secondary">
                  Glasses
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-secondary">
                  Shoes
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">CONTACTS</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-secondary">
                  97845 Baker st. 567 <br />
Los Angeles - US
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-secondary">
                  +94 423-23-221
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-secondary">
                  info@allaia.com
                  </a>
                </li>
              </ul>
            </div>
                </div>
            </div>


           
          </div>
        </section>


      </div>
    </footer>
  );
};

export default Footer;
