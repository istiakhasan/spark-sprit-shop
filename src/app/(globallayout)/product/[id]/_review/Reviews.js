"use client";
import { Button, Rating } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Reviews = () => {
  const [state, setState] = useState(false);
  const router=useRouter()
  useEffect(() => {
    const calculateInnerWidth=()=>{
      if (window.innerWidth < 600) {
        setState(true);
      } else {
        setState(false);
      }
    }
    calculateInnerWidth()
    window.addEventListener("resize" ,calculateInnerWidth);
    window.addEventListener("load", calculateInnerWidth);
    return ()=>{
      window.removeEventListener("resize" ,calculateInnerWidth)
      window.removeEventListener("load" ,calculateInnerWidth)
    }
  }, []);

  return (
    <div className="pt-5" style={{ background: "#F8F8F8", minHeight: "400px" }}>
      <div className="container ">
        <div className="row">
          {[...Array(4).keys()].map((item) => (
            <div key={item} className="col-md-6  mb-4">
              <div
                style={!state?{ width: "90%" }:{width:"100%"}}
                className={`${item % 2 === 1 ? "ms-lg-auto" : ""}`}
              >
                <div className="d-flex  align-items-center justify-content-between">
                  <p className="d-flex align-items-center gap-2 mb-0">
                    <Rating
                      name="size-small"
                      readOnly
                      defaultValue={5}
                      size="small"
                    />{" "}
                    <span
                      style={{ fontSize: "14px" }}
                      className="fst-italic text-secondary"
                    >
                      5.0/5.0
                    </span>
                  </p>
                  <span
                    style={{ fontSize: "15px" }}
                    className="fst-italic text-secondary"
                  >
                    Published 54 minutes ago
                  </span>
                </div>
                <p style={{ fontSize: "16px", color: "#444444",textAlign:"justify" }}>
                  <strong className="d-block my-2">
                    Commpletely satisfied
                  </strong>
                  Lorem ipsum dolor sit amet, his no adipisci pericula
                  conclusionemque. Qui labore salutandi ex, vivendum argumentum
                  mediocritatem vis eu, viris tritani per id. At iudicabit
                  maluisset vis, dicant diceret pri cu. Cum at rebum vulputate
                  forensibus, eruditi principes ad vel, pro denique recusabo at.
                  Ubique nominavi delicata sit cu, quo no reque insolens
                  suscipiantur.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="pb-5">
          <Button
            sx={{ background: "#004DDA", fontSize: "12px" }}
            className=" px-2 py-2 d-block ms-auto"
            variant="contained"
            onClick={()=>router.push('/product/1/review')}
          >
            LEAVE A REVIEW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
