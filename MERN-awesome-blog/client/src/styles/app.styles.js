import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  navigationBar: {
    borderRadius: 10,
    margin: "6px 0px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#8661d1",
    fontFamily: "Poppins",
    fontStyle: "bold",
  },
  image: {
    marginRight: "25px",
  },
}));
