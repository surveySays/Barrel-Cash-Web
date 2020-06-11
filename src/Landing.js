import React, { Component } from "react";
import "./App.css";

//firebase db
import { db } from "./firebase.js";

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

//Components
import AlertSuccess from "./AlertSuccess.js";

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
      isEmpty: false,
      email: "",
      emailHelper: "",
      alert: false,
    };
    this.Features = React.createRef();
    this.Docs = React.createRef();
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

  handleOnClickFeatures = (event) => {
    //.current is verification that your element has rendered
    if (this.Features.current) {
      this.Features.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  handleOnClickDocs = (event) => {
    //.current is verification that your element has rendered
    if (this.Docs.current) {
      this.Docs.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  handleEmailSubscrible = () => {
    if (
      this.state.email === "" ||
      this.emailIsValid(this.state.email) === false
    ) {
      this.setState({
        isEmpty: true,
        emailHelper: "*Not a valid email. No spaces.",
      });
    } else {
      const liame = {
        liame: this.state.email,
      };

      db.collection("subscribers").add(liame); // update

      this.setState({ alert: true });
      setTimeout(
        function () {
          this.setState({ alert: false });
        }.bind(this),
        4000
      );
      this.setState({ isEmpty: false, email: "", emailHelper: "" });
    }
  };

  emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  handleChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

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
        {this.state.alert ? <AlertSuccess /> : null}
        <div className={classes.sectionDark}>
          <div
            style={{
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto",
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
              <h2 style={{ marginRight: 30, fontFamily: "Montserrat" }}>
                Barrel Cash
              </h2>
              {isDesktop ? (
                <div style={{ display: "flex" }}>
                  <a onClick={this.handleOnClickFeatures}>
                    <h2
                      style={{
                        marginRight: 30,
                        cursor: "pointer",
                        fontFamily: "Montserrat",
                      }}
                    >
                      Features
                    </h2>
                  </a>
                  <a onClick={this.handleOnClickDocs}>
                    <h2
                      style={{
                        marginRight: 30,
                        cursor: "pointer",
                        fontFamily: "Montserrat",
                      }}
                    >
                      Docs
                    </h2>
                  </a>
                </div>
              ) : null}
            </div>
            <Typography
              variant="h2"
              style={{ marginTop: 30, fontFamily: "Montserrat" }}
            >
              Budget easily on iOS
            </Typography>
            <Typography style={{ marginTop: 20 }}>
              Barrel Cash is a beautiful, simple way to budget monthly expenses.
            </Typography>
            <div style={{ width: 144, height: 48, marginTop: 40 }}>
              <a
                target="_blank"
                href="https://apps.apple.com/us/app/clash-royale/id1053012308"
                title="Download Barrel Cash for iOS"
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
                    value={this.state.email}
                    error={this.state.isEmpty}
                    style={{ width: "100%", fontSize: 10 }}
                    onChange={this.handleChange}
                    helperText={this.state.emailHelper}
                  />
                </form>
                <div style={{ marginLeft: 20 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleEmailSubscrible}
                    style={{
                      height: 56,
                      width: 200,
                      backgroundColor: "#a7e8b9",
                      color: "#000000",
                      fontFamily: "Montserrat",
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
                    value={this.state.email}
                    error={this.state.isEmpty}
                    style={{ width: "100%", fontSize: 10 }}
                    onChange={this.handleChange}
                    helperText={this.state.emailHelper}
                    style={{ width: "100%", fontSize: 10 }}
                  />
                </form>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleEmailSubscrible}
                  style={{
                    height: "100%",
                    width: 200,
                    backgroundColor: "#a7e8b9",
                    color: "#000000",
                    marginTop: 20,
                    fontFamily: "Montserrat",
                  }}
                >
                  Subscribe
                </Button>
              </div>
            )}
            <Typography style={{ marginTop: 30 }}>
              Get updates on Barrel Cash. Never spam.
            </Typography>
          </div>
        </div>
        <div className={classes.sectionTest}>
          <div
            style={{
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto",
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
                <h2
                  style={{
                    maxWidth: "80%",
                    overflowWrap: "break-word",
                    fontFamily: "Montserrat",
                  }}
                >
                  Use it everywhere
                </h2>
                <p style={{ maxWidth: "80%", overflowWrap: "break-word" }}>
                  Barrel cash works on iPhone, and iPad, so you can save{" "}
                  <b>easily</b> anywhere. Add custom budgets and deduct bills
                  while on the go.
                </p>
              </div>
              <div style={{ width: "50%", position: "relative" }}>
                <h2
                  style={{
                    maxWidth: "80%",
                    overflowWrap: "break-word",
                    fontFamily: "Montserrat",
                  }}
                >
                  Take control of your budget
                </h2>
                <p style={{ maxWidth: "80%", overflowWrap: "break-word" }}>
                  Barrel cash was made for <b>you</b>. Tired of using excel or a
                  budgeting app where your not in control? Your account and
                  spending habits is completely up to <b>you</b>.
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
        <div className={classes.sectionDark} ref={this.Features}>
          <div
            style={{
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: 50,
              textAlign: "center",
              maxWidth: 1189,
            }}
          >
            <h1 style={{ margin: 0, paddingTop: 60, fontFamily: "Montserrat" }}>
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
              marginLeft: "auto",
              marginRight: "auto",
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
                  <h2 style={{ fontFamily: "Montserrat" }}>Budget your way</h2>
                  <p>
                    Barrel cash is <b>perfect</b> for managing your grocery,
                    gas, and food budget. Easily deduct an amount after going to
                    the grocery store or getting gas. There are hundreds of
                    bills to manage, why not <b>make it easy</b> by trusting
                    barrel cash?
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    textAlign: "left",
                  }}
                >
                  <h2 style={{ fontFamily: "Montserrat" }}>Budget your way</h2>
                  <p>
                    Barrel cash is <b>perfect</b> for managing your grocery,
                    gas, and food budget. Easily deduct an amount after going to
                    the grocery store or getting gas. There are hundreds of
                    bills to manage, why not
                    <b>make it easy</b> by trusting barrel cash?
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
              marginLeft: "auto",
              marginRight: "auto",
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
                fontFamily: "Montserrat",
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
                    <b>Share an account with someone you trust</b>. Easily add
                    someone you want to share budgeted bills with and watch for
                    realtime updates when a bill gets budgeted.
                  </li>
                  <li style={{ marginBottom: 20 }}>
                    <b>Access anywhere</b>. Log on from your iPhone, or iPad at
                    the store, home, or on vacation so you never lose track of
                    your bills.
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
                    <b>Share an account with someone you trust</b>. Easily add
                    someone you want to share budgeted bills with and watch for
                    realtime updates when a bill gets budgeted.
                  </li>
                  <li style={{ marginBottom: 20 }}>
                    <b>Access anywhere</b>. Log on from your iPhone, or iPad at
                    the store, home, or on vacation so you never lose track of
                    your bills.
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
              marginLeft: "auto",
              marginRight: "auto",
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
                fontFamily: "Montserrat",
              }}
            >
              Barrel Cash on the Web
            </h2>
            <Typography style={{ marginTop: 20, textAlign: "center" }}>
              A collection of open source, code, and helpful documents for
              Barrel Cash.
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
                    href="https://github.com/surveySays/Barrel-Cash-Web"
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
        <div className={classes.sectionTest} ref={this.Docs}>
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
