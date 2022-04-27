import { Backdrop, Container, Grid } from "@mui/material";
import Header from "../header/Header";
import LoadingOverlay from "../loading-overlay/LoadingOverlay";
import AppMenu from "../menu/AppMenu";

const LayoutContainer: React.FC<{ children: JSX.Element }> = (props) => {
  return (
    <>
      <Header />
      <main>
        <Container sx={{ py: 4 }} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              {props.children}
            </Grid>
          </Grid>
        </Container>
      </main>
      <AppMenu />
     <LoadingOverlay/>
    </>
  );
};
export default LayoutContainer;
