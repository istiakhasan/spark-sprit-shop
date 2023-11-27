"use client"
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";


export default function MuiBreadCrumb({breadcrumbs}) {
  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
