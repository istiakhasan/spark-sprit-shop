import { Skeleton } from "@mui/material";
const MuiSkilton = () => {
  return (
    <div className="main_body_container">
      <div className="container py-5">
        <div style={{ minHeight: "60vh" }} className="gap-3 d-flex justify-content-start align-items-start">
          <Skeleton sx={{ height: "60vh", width: "200px", transform: "scale(1)" }} animation="wave" />
          <div style={{ flex: 1 }}>
            <Skeleton height={40} animation="wave" />
            <Skeleton sx={{ height: "40vh", transform: "scale(1)" }} animation="wave" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MuiSkilton;