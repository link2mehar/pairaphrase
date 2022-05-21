import MUIDataTable from "mui-datatables";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import styles from "./documentsListing.module.scss";

const theme = createTheme({
  components: {
    MUIDataTable: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          h6: {
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0.25px",
            color: "rgba(0, 0, 0, 0.87)"
          },
          th: {
            color: "#757575",
            backgroundColor: "#F6F7F9",
            padding: "3px 16px",
            fontWeight: "700",
            fontSize: "12px",
            lineHeight: "20px",
            letterSpacing: "0.4px",
            whiteSpace: "nowrap"
          },
          tbody: {
            tr: {
              td: {
                padding: "4px 16px",
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: "0.25px",
                color: "rgba(0, 0, 0, 0.87)",
                cursor: "pointer",
                whiteSpace: "nowrap"
              }
            }
          },
          tfoot: {
            td: {
              borderBottom: "none !important"
            }
          },
          "& .mui-row-selected": {
            backgroundColor: "#F5F5F5 !important",
            "&:hover": {
              backgroundColor: "#F5F5F5"
            },
            td: {
              color: "#0872BA"
            }
          }
        }
      }
    }
  }
});

const columns = [
  "File Name",
  "Language Pair",
  "Last Modified",
  {
    name: "Status",
    options: {
      customBodyRender: (value) => {
        if (value === "inProgress") {
          return <p className={styles.inProgress}>In Progress</p>;
        }
        return <p className={styles.completed}>Completed</p>;
      }
    }
  }
];

const data = [
  ["GermanText.txt", "DE-DE / EN-US", "11/23/2021 | 13:00", "inProgress"],
  ["GermanText.txt", "DE-DE / EN-US", "11/23/2021 | 13:00", "inProgress"],
  ["GermanText.txt", "DE-DE / EN-US", "11/23/2021 | 13:00"],
  ["GermanText.txt", "DE-DE / EN-US", "11/23/2021 | 13:00"]
];

const options = {
  filterType: "checkbox",
  selectableRowsOnClick: true,
  selectableRows: "single",
  setRowProps: () => ({
    onMouseUp: () => {
      console.log("row clicked");
    }
  })
};

export default function DocumentsListing() {
  return (
    <ThemeProvider theme={theme}>
      <MUIDataTable
        title="Show documents shared only with me"
        data={data}
        columns={columns}
        options={options}
      />
    </ThemeProvider>
  );
}
