import { createTheme} from "@mui/material";
import { blue, brown, green, teal, yellow } from "@mui/material/colors";

const theme1 = createTheme({
  palette: {
    primary: teal,
    secondary: yellow,
  },
});

const theme2 = createTheme({
  palette: {
    primary: blue,
    secondary: yellow,
  },
});

const theme3 = createTheme({
  palette: {
    primary: green,
    secondary: brown,
  },
});


export {theme1, theme2, theme3} 