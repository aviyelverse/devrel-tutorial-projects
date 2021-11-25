import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  imageContainer: {
    height: 0,
    paddingTop: "15%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  blogContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },
  nameOverlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  editOverlay: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  tagSection: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  titleSection: {
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
});
