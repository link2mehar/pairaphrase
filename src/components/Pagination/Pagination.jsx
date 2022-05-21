import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded() {
  return (
    <Stack spacing={2}>
      <Pagination
        count={3}
        shape="rounded"
        sx={{
          color: "red",
          ".Mui-selected": {
            backgroundColor: "#0872BA !important",
            color: "white"
          }
        }}
      />
    </Stack>
  );
}
