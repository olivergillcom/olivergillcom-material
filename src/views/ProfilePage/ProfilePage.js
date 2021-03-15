/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Briefcase from "@material-ui/icons/Work";
import People from "@material-ui/icons/People";
import EmojiPeople from "@material-ui/icons/EmojiPeople";
import Projects from "@material-ui/icons/Build";
import Favorite from "@material-ui/icons/Favorite";
import CodeIcon from "@material-ui/icons/Code";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Dashboard from "@material-ui/icons/Dashboard";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccessTime from "@material-ui/icons/AccessTime";
import AttachMoney from "@material-ui/icons/AttachMoney";
import Code from "@material-ui/icons/Code";
import SportsEsports from "@material-ui/icons/SportsEsports";
import CallSplit from "@material-ui/icons/CallSplit";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Badge from "components/Badge/Badge.js";
import Muted from "components/Typography/Muted.js";
import Parallax from "components/Parallax/Parallax.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Button from "components/CustomButtons/Button.js";
import Accordion from "components/Accordion/Accordion.js";
import InfoArea from "components/InfoArea/InfoArea.js";
// images
import face from "assets/img/faces/oli.jpg";
import oluEletu from "assets/img/examples/olu-eletu.jpg";
import clemOnojeghuo from "assets/img/examples/clem-onojeghuo.jpg";
import cynthiaDelRio from "assets/img/examples/cynthia-del-rio.jpg";
import mariyaGeorgieva from "assets/img/examples/mariya-georgieva.jpg";
import clemOnojegaw from "assets/img/examples/clem-onojegaw.jpg";
import darrenColeshill from "assets/img/examples/darren-coleshill.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import marc from "assets/img/faces/marc.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";
import bg9 from "assets/img/bg9.jpg";


import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";

const useStyles = makeStyles(profilePageStyle);

export default function ProfilePage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Oliver Gill"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "dark"
        }}
        {...rest}
      />
      <Parallax
        image={require("assets/img/examples/city.jpg")}
        filter="dark"
        className={classes.parallax}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={face} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>Oli Gill</h3>
                  <h6>GEEK | GAMER | TRAILBLAZER</h6>
                  <Button
                    justIcon
                    simple
                    color="primary"
                    className={classes.margin5}
                    href="https://twitch.tv/olig89"
                  >
                    <i className={classes.socials + " fab fa-twitch"} />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="twitter"
                    className={classes.margin5}
                    href="https://twitter.com/oli_g89"
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="youtube"
                    className={classes.margin5}
                    href="https://youtube.com/olig89"
                  >
                    <i className={classes.socials + " fab fa-youtube"} />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="twitter"
                    className={classes.margin5}
                    href="https://www.linkedin.com/in/olivergill/"
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </Button>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classes.profileTabs}>
            <NavPills
              alignCenter
              color="primary"
              tabs={[
                {
                  tabButton: "About Me",
                  tabIcon: EmojiPeople,
                  tabContent: (
                    <div>
                    <GridContainer justify="center">  
                      <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                          icon={CodeIcon}
                          title="Geek"
                          description={
                            <span>
                              <p>
                              From an early age I have always been fascinated by how things work, how they could be improved, and how they could be combined with something else to become greater than the sum of their parts. Luckily for my parents, the deconstructed devices they came home to were not sacrificed in vain - first leading me to study Computer Science at University, and subsequently launch my career.
                              </p>
                            </span>
                          }
                          iconColor="info"
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                          icon={SportsEsports}
                          title="Gamer"
                          description={
                            <span>
                              <p>
                              Flicking between PC and Consoles, I have always enjoyed digital escapism. It's easy to spot patterns of activity retrospectively, and my gaming habits can loosely be split into A-Games and B-Games. A-Games are more active, pressured and a great source of adrenaline e.g. First Person Shooters and Sim Racing. B-Games are more laid back and serve as a relaxant, adventure crafters and more casual titles.
                              </p>
                            </span>
                          }
                          iconColor="danger"
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                          icon={CallSplit}
                          title="Trailblazer"
                          description={
                            <span>
                              <p>
                              I have been prototyping ideas since kindergarten and still love to hack things together to prove a concept, suss out it's potential value, or just to see what happens. I have a passion for tinkering and my greatest source of happiness is helping friends and family with the first steps of their projects and holding the torch (or soldiering iron) through the trickier early stages of idea development. 
                              </p>
                            </span>
                          }
                          iconColor="success"
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer justify="center">
                      
                    </GridContainer>
                    </div>
                  )
                },
                {
                  tabButton: "Work",
                  tabIcon: Briefcase,
                  tabContent: (
                    <div>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={10}>
                            <span>
                              <p>
                              If I describe myself as a consultant, nobody knows what that means, and for good reason. The issue with "consulting" as a career is how much of a catch-all term it has become, and therefore become meaningless. If I were to write out all the responsibilities I have held and roles I have performed, contractually and otherwise, there would be few areas of business I haven't touched.<br /><br />Rather than roll off my CV, I feel it would be best to explain what I actually end up doing which also turns out to be what I find most enjoyable.
                              </p>
                            </span>

                      </GridItem>
                    </GridContainer>
                    <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={10}>
                      <h3>Some roles of note</h3>
                    </GridItem>
                      <GridItem xs={12} sm={12} md={8}>
                      <Accordion
                      
                        activeColor="rose"
                        collapses={[
                          {
                            title: "Senior Consultant - Atos",
                            content:
                              "TBC"
                          },
                          {
                            title: "Digital Strategy Consultant - Accenture",
                            content:
                              "TBC"
                          },
                          {
                            title: "Technology Consultant - CSC",
                            content:
                              "TBC"
                          }
                        ]}
                      />
                      </GridItem>
                    </GridContainer>
                    </div>
                  )
                }/*
                ,
                {
                  tabButton: "Projects",
                  tabIcon: Projects,
                  tabContent: (
                    <GridContainer>
                      <GridItem
                        xs={12}
                        sm={12}
                        md={7}
                        className={classes.gridItem}
                      >
                        <h4 className={classes.title}>Latest Projects</h4>
                        <GridContainer className={classes.collections}>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: "url(" + mariyaGeorgieva + ")"
                              }}
                            >
                              <CardBody background className={classes.cardBody}>
                                <Badge
                                  color="warning"
                                  className={classes.badge}
                                >
                                  WEBSITE
                                </Badge>
                                <a href="#pablo">
                                  <h2 className={classes.cardTitleWhite}>
                                    Gillflix
                                  </h2>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: "url(" + clemOnojeghuo + ")"
                              }}
                            >
                              <CardBody background className={classes.cardBody}>
                                <Badge color="info" className={classes.badge}>
                                  INFRA
                                </Badge>
                                <a href="#pablo">
                                  <h2 className={classes.cardTitleWhite}>
                                    Smart Home
                                  </h2>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: "url(" + oluEletu + ")"
                              }}
                            >
                              <CardBody background className={classes.cardBody}>
                                <Badge color="danger" className={classes.badge}>
                                  Youtube
                                </Badge>
                                <a href="#pablo">
                                  <h2 className={classes.cardTitleWhite}>
                                    Idiots Onboard
                                  </h2>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                        </GridContainer>
                      </GridItem>
                    </GridContainer>
                  )
                },
                {
                  tabButton: "Photos",
                  tabIcon: Camera,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={3}>
                        <img
                          alt="..."
                          src={mariyaGeorgieva}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={clemOnojegaw}
                          className={navImageClasses}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <img
                          alt="..."
                          src={clemOnojeghuo}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={oluEletu}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={cynthiaDelRio}
                          className={navImageClasses}
                        />
                      </GridItem>
                    </GridContainer>
                  )
                },
                {
                  tabButton: "Friends",
                  tabIcon: People,
                  tabContent: (
                    <div>
                      <GridContainer justify="center">
                        <GridItem
                          xs={12}
                          sm={12}
                          md={5}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="#pablo">
                                    <img src={avatar} alt="..." />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage: "url(" + avatar + ")",
                                      opacity: "1"
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    Gigi Hadid
                                  </h4>
                                  <Muted>
                                    <h6>MODEL</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    Don{"'"}t be scared of the truth because we
                                    need to restart the human foundation in
                                    truth...
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={5}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="#pablo">
                                    <img src={marc} alt="..." />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage: "url(" + marc + ")",
                                      opacity: "1"
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    Marc Jacobs
                                  </h4>
                                  <Muted>
                                    <h6>DESIGNER</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    Don{"'"}t be scared of the truth because we
                                    need to restart the human foundation in
                                    truth...
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                      </GridContainer>
                      <GridContainer justify="center">
                        <GridItem
                          xs={12}
                          sm={12}
                          md={5}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="#pablo">
                                    <img src={kendall} alt="..." />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage: "url(" + kendall + ")",
                                      opacity: "1"
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    Kendall Jenner
                                  </h4>
                                  <Muted>
                                    <h6>MODEL</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    I love you like Kanye loves Kanye. Don
                                    {"'"}t be scared of the truth.
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={5}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="#pablo">
                                    <img src={cardProfile2Square} alt="..." />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage:
                                        "url(" + cardProfile2Square + ")",
                                      opacity: "1"
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    George West
                                  </h4>
                                  <Muted>
                                    <h6>MODEL/DJ</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    I love you like Kanye loves Kanye.
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                      </GridContainer>
                    </div>
                  )
                }*/
              ]}
            />
          </div>
          <Clearfix />
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              {/*
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=mkpr-profile"
                    target="_blank"
                    className={classes.block}
                  >
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=mkpr-profile"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="//blog.creative-tim.com/" className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkpr-profile"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>*/}
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()}, made with{" "}
              <Favorite className={classes.icon} /> by{" "}Oli.
            </div>
          </div>
        }
      />
    </div>
  );
}
