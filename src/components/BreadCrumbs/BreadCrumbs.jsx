/* eslint-disable comma-dangle */

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

function handleClick(event) {
  event.preventDefault();
}

export default function CustomSeparator() {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
      sx={{
        fontSize: "12px",
        lineHeight: "16px",
      }}
    >
      Active Document
    </Link>,
    <Typography
      component="div"
      key="3"
      sx={{
        fontSize: "12px",
        lineHeight: "16px",
        color: "#0872BA",
      }}
    >
      Translation Detail
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
