import React, { Component } from "react";
import "./App.css";

//Material UI
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

//Logo
import Larger from "./Larger.png";
import Woman from "./Woman.jpg";
import DownloadApp from "./DownloadApp.png";
import TextField from "@material-ui/core/TextField";
import Github from "./Github.png";
import Reddit from "./Reddit.png";
import Barrels from "./Barrels.png";

const useStyles = (theme) => ({
  root: {
    overflowY: "scroll",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  sectionTop: {
    width: "100%",
    height: "65%",
    backgroundImage: `url(${Woman})`,
    backgroundSize: "contain",
    // backgroundRepeat: "no-repeat",
    position: "static",
    borderBottom: "1px solid grey",
    margin: 0,
  },
  sectionDark: {
    width: "100%",
    height: "auto",
    backgroundColor: "#f2f2f2",
    position: "static",
    borderBottom: "1px solid grey",
    margin: 0,
  },
  sectionTest: {
    width: "100%",
    height: "auto",
    backgroundColor: "#f2f2f2",
    position: "relative",
    borderBottom: "1px solid grey",
    margin: 0,
  },
  sectionLight: {
    width: "100%",
    height: "65%",
    backgroundColor: "#ffffff",
    position: "static",
    borderBottom: "1px solid grey",
    margin: 0,
  },
  avatar: {
    height: 70,
    width: 70,
    zIndex: 1,
    marginRight: 30,
  },
});

export class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false,
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 716 });
  }

  render() {
    const isDesktop = this.state.isDesktop; //break at 716 width, when barrel cash stacks
    const { classes } = this.props;

    return (
      <div
        style={{
          overflowY: "scroll",
          height: "100%",
          width: "100%",
          position: "absolute",
        }}
        className="scroll"
      >
        <div className={classes.sectionDark}>
          <div
            style={{
              width: "80%",
              paddingLeft: "10%",
              marginBottom: 50,
              maxWidth: 1189,
            }}
          >
            <div
              style={{
                display: "flex",
                // marginLeft: "auto",
                // marginRight: "auto",
                // justifyContent: "center",
                // alignItems: "center",
                // alignContent: "center",
                paddingTop: 20,
                // position: "absolute",
              }}
            >
              <Avatar className={classes.avatar} src={Larger} alt="logo" />
              <h2 style={{ marginRight: 30 }}>Barrel Cash</h2>
              {isDesktop ? (
                <div style={{ display: "flex" }}>
                  <h2 style={{ marginRight: 30 }}>Features</h2>

                  <h2 style={{ marginRight: 30 }}>Documents</h2>
                </div>
              ) : null}
            </div>
            <Typography variant="h2" style={{ marginTop: 30 }}>
              Budget easily on IOS
            </Typography>
            <Typography style={{ marginTop: 20 }}>
              Barrel Cash is a beautiful, simple way to budget monthly expenses.
            </Typography>
            <div style={{ width: 144, height: 48, marginTop: 40 }}>
              <a
                target="_blank"
                //change to ios app store button
              >
                <img
                  alt="Download Barrel Cash on the App Store"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                  src={DownloadApp}
                />
              </a>
            </div>
            {isDesktop ? (
              <div
                style={{
                  display: "flex",
                  marginTop: 30,
                  width: "100%",
                  position: "relative",
                  height: 50,
                }}
              >
                <form
                  noValidate
                  autoComplete="off"
                  style={{ width: "40%", position: "relative", minWidth: 270 }}
                >
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    style={{ width: "100%", fontSize: 10 }}
                  />
                </form>
                <div style={{ marginLeft: 20 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      height: 56,
                      width: 200,
                      backgroundColor: "#a7e8b9",
                      color: "#000000",
                    }}
                  >
                    Subscribe
                  </Button>
                </div>
                <div style={{ left: 20, position: "relative", bottom: 200 }}>
                  <img style={{ width: 300, height: 300 }} src={Barrels} />
                </div>
              </div>
            ) : (
              <div
                style={{ marginTop: 30, width: "100%", position: "relative" }}
              >
                <form
                  noValidate
                  autoComplete="off"
                  style={{ width: "40%", position: "relative", minWidth: 270 }}
                >
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    style={{ width: "100%", fontSize: 10 }}
                  />
                </form>
                <div style={{ marginTop: 20 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      height: "100%",
                      width: 200,
                      backgroundColor: "#a7e8b9",
                      color: "#000000",
                    }}
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            )}
            <Typography style={{ marginTop: 20 }}>
              Get updates on Barrel Cash. Never spam.
            </Typography>
          </div>
        </div>
        <div className={classes.sectionTest}>
          <div
            style={{
              width: "80%",
              paddingLeft: "10%",
              maxWidth: 1189,
              height: "100%",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                position: "relative",
                textAlign: "left",
              }}
            >
              <div style={{ width: "50%", position: "relative" }}>
                <h2 style={{ maxWidth: "80%", overflowWrap: "break-word" }}>
                  User it everywhere
                </h2>
                <p style={{ maxWidth: "80%", overflowWrap: "break-word" }}>
                  blah blahblahblahblahblah blahblahblah blahblah blah blah blah
                  blah blahblahblahblahblah blahblahblah blahblah blah blah blah
                  blah blahblahblahblahblah blahblahblah blahblah blah blah blah
                  blah blahblahblahblahblah blahblahblah blahblah blah blah blah
                </p>
              </div>
              <div style={{ width: "50%", position: "relative" }}>
                <h2 style={{ maxWidth: "80%", overflowWrap: "break-word" }}>
                  User it everywhere
                </h2>
                <p style={{ maxWidth: "80%", overflowWrap: "break-word" }}>
                  blah blahblahblahblahblah blahblahblah blahblah blah blah blah
                  blah blahblahblahblahblah blahblahblah blahblah blah blah blah
                  blah blahblahblahblahblah blahblahblah blahblah blah blah blah
                  blah blahblahblahblahblah blahblahblah blahblah blah blah blah
                </p>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                margin: 0,
              }}
            >
              <img
                style={{
                  display: "block",
                  width: "100%",
                  maxHeight: 500,
                  height: "100%",
                  position: "relative",
                  margin: 0,
                }}
                src={Woman}
              />
            </div>
          </div>
        </div>
        <div className={classes.sectionDark}>
          <div
            style={{
              width: "80%",
              paddingLeft: "10%",
              marginBottom: 50,
              textAlign: "center",
              maxWidth: 1189,
            }}
          >
            <h1 style={{ margin: 0, paddingTop: 60 }}>
              Welcome to Barrel Cash
            </h1>
            <video
              width="100%"
              height="60%"
              controls
              style={{ marginTop: 30, minHeight: 230 }}
            >
              {/*may need maxHeight 600, height: 100% */}
              <source src="movie.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className={classes.sectionDark}>
          <div
            style={{
              width: "80%",
              paddingLeft: "10%",
              marginBottom: 80,
              textAlign: "center",
              paddingTop: 80,
              maxWidth: 1189,
            }}
          >
            {isDesktop ? (
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "60%",
                    height: "100%",
                    position: "relative",
                    margin: 0,
                  }}
                >
                  <img
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      maxHeight: 500,
                      position: "relative",
                      margin: 0,
                      minHeight: 231,
                      minWidth: 347,
                    }}
                    src={Woman}
                  />
                </div>
                <div
                  style={{
                    width: "40%",
                    height: "100%",
                    position: "relative",
                    margin: 0,
                    textAlign: "left",
                    marginLeft: 40,
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                >
                  <h2>Save your way</h2>
                  <p>
                    blah blahblahblah blahblah blah blah blah blah v v v vblah
                    blah blah blah blah blah blah blah blah blah blah blah blah
                    blah blah
                  </p>
                </div>
              </div>
            ) : (
              <div style={{}}>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    textAlign: "left",
                  }}
                >
                  <h2>Save your way</h2>
                  <p>
                    blah blahblahblah blahblah blah blah blah blah v v v vblah
                    blah blah blah blah blah blah blah blah blah blah blah blah
                    blah blah
                  </p>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    margin: 0,
                  }}
                >
                  <img
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      maxHeight: 500,
                      position: "relative",
                      margin: 0,
                      minHeight: 231,
                    }}
                    src={Woman}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={classes.sectionTest}>
          <div
            style={{
              width: "80%",
              paddingLeft: "10%",
              marginBottom: 15,
              maxWidth: 1189,
            }}
          >
            <h2
              style={{
                textAlign: "center",
                margin: 0,
                paddingTop: 25,
                marginBottom: 15,
              }}
            >
              Barrel Cash features at a glance
            </h2>
            <div
              style={{
                display: "flex",
                width: "100%",
                position: "relative",
                textAlign: "left",
              }}
            >
              <div style={{ width: "50%", position: "relative" }}>
                <ul style={{ maxWidth: "80%", fontSize: 16 }}>
                  <li style={{ marginBottom: 20 }}>
                    <b>Reocurring & Budgeted</b> expenses are easily manageable
                    in Barrel Cash. Simple add an expense and watch it take care
                    of itself each month.
                  </li>
                  <li style={{ marginBottom: 20 }}>
                    <b>Reocurring & Budgeted</b> expenses are easily manageable
                    in Barrel Cash. Simple add an expense and watch it take care
                    of itself each month.
                  </li>
                  <li style={{ marginBottom: 20 }}>
                    <b>Reocurring & Budgeted</b> expenses are easily manageable
                    in Barrel Cash. Simple add an expense and watch it take care
                    of itself each month.
                  </li>
                </ul>
              </div>
              <div style={{ width: "50%", position: "relative" }}>
                <ul style={{ maxWidth: "80%", fontSize: 16 }}>
                  <li style={{ marginBottom: 20 }}>
                    <b>Reocurring & Budgeted</b> expenses are easily manageable
                    in Barrel Cash. Simple add an expense and watch it take care
                    of itself each month.
                  </li>
                  <li style={{ marginBottom: 20 }}>
                    <b>Reocurring & Budgeted</b> expenses are easily manageable
                    in Barrel Cash. Simple add an expense and watch it take care
                    of itself each month.
                  </li>
                  <li style={{ marginBottom: 20 }}>
                    <b>Reocurring & Budgeted</b> expenses are easily manageable
                    in Barrel Cash. Simple add an expense and watch it take care
                    of itself each month.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.sectionTest}>
          <div
            style={{
              width: "80%",
              paddingLeft: "10%",
              marginBottom: 15,
              maxWidth: 1189,
            }}
          >
            <h2
              style={{
                textAlign: "center",
                margin: 0,
                paddingTop: 25,
                marginBottom: 15,
              }}
            >
              Barrel Cash on the Web
            </h2>
            <Typography style={{ marginTop: 20, textAlign: "center" }}>
              A collection of open source code and helpful documents for Barrel
              Cash.
            </Typography>
            <div
              style={{
                display: "flex",
                width: "100%",
                position: "relative",
              }}
            >
              <div style={{ width: "50%", position: "relative" }}>
                <div
                  style={{
                    width: 90,
                    height: 90,
                    marginTop: 40,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <a
                    target="_blank"
                    href="https://apps.apple.com/us/app/bear-beautiful-writing-app/id1016366447?ls=1"
                  >
                    <img
                      alt="Download Barrel Cash on the App Store"
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                      }}
                      src={Github}
                    />
                  </a>
                </div>
                <Typography style={{ marginTop: 20, textAlign: "center" }}>
                  Barrel Cash on Github
                </Typography>
              </div>
              <div style={{ width: "50%", position: "relative" }}>
                <div
                  style={{
                    width: 90,
                    height: 90,
                    marginTop: 40,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <a
                    target="_blank"
                    href="https://www.reddit.com/r/BarrelCash/"
                  >
                    <img
                      alt="Download Barrel Cash on the App Store"
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                      }}
                      src={Reddit}
                    />
                  </a>
                </div>
                <Typography style={{ marginTop: 20, textAlign: "center" }}>
                  /r/BarrelCash on Reddit
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.sectionTest}>
          <div
            style={{
              display: "flex",
              width: "100%",
              position: "relative",
            }}
          >
            <a
              href="https://brennenboese.com/"
              target="_blank"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              <h3 style={{ marginTop: 0, paddingTop: 20, paddingLeft: 20 }}>
                B.Boese
              </h3>
            </a>
            <h4
              style={{
                marginTop: 0,
                paddingTop: 22,
                paddingLeft: 20,
                textAlign: "right",
                width: "100%",
                marginRight: 30,
              }}
            >
              <i>"Why use a piggy bank when you can use a barrel?" - Creator</i>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Landing);
