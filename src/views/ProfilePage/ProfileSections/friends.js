/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Camera from "@material-ui/icons/Camera";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Muted from "components/Typography/Muted.js";
import Button from "components/CustomButtons/Button.js";
import CardFooter from "components/Card/CardFooter.js";

// images
import cardProfile1Square from "assets/img/faces/card-profile1-square.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";
import cardProfile4Square from "assets/img/faces/card-profile4-square.jpg";
import cardProfile6Square from "assets/img/faces/card-profile6-square.jpg";

// style
import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";

const useStyles = makeStyles(profilePageStyle);

export default function Friends({ ...rest }) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
                    <div>
                    <div className={classes.team}>
                      <div className={classes.container}>
                        <GridContainer>
                          <GridItem
                            xs={12}
                            sm={12}
                            md={12}
                            className={
                              classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
                            }
                          >
                            <h2 className={classes.title}>Friends who do things online</h2>
                            <h5 className={classes.description}>
                              This is the paragraph where you can write more details about
                              your team. Keep you user engaged by providing meaningful
                              information.
                            </h5>
                          </GridItem>
                        </GridContainer>
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card profile plain className={classes.card3}>
                              <GridContainer>
                                <GridItem xs={12} sm={5} md={5}>
                                  <CardHeader image plain>
                                    <a href="#pablo" onClick={e => e.preventDefault()}>
                                      <img src={cardProfile1Square} alt="..." />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage: `url(${cardProfile1Square})`,
                                        opacity: "1"
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={7} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>Alec Thompson</h4>
                                    <Muted>
                                      <h6 className={classes.cardCategory}>FOUNDER</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      Don{"'"}t be scared of the truth because we need to
                                      restart the human foundation in truth...
                                    </p>
                                  </CardBody>
                                  <CardFooter profile plain>
                                    <Button justIcon simple color="twitter">
                                      <i className="fab fa-twitter" />
                                    </Button>
                                    <Button justIcon simple color="facebook">
                                      <i className="fab fa-facebook-square" />
                                    </Button>
                                    <Button justIcon simple color="google">
                                      <i className="fab fa-google" />
                                    </Button>
                                  </CardFooter>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card profile plain className={classes.card3}>
                              <GridContainer>
                                <GridItem xs={12} sm={5} md={5}>
                                  <CardHeader image plain>
                                    <a href="#pablo" onClick={e => e.preventDefault()}>
                                      <img src={cardProfile6Square} alt="..." />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage: `url(${cardProfile6Square})`,
                                        opacity: "1"
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={7} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>Kendall Andrew</h4>
                                    <Muted>
                                      <h6 className={classes.cardCategory}>
                                        GRAPHIC DESIGNER
                                      </h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      Don{"'"}t be scared of the truth because we need to
                                      restart the human foundation in truth...
                                    </p>
                                  </CardBody>
                                  <CardFooter profile plain>
                                    <Button justIcon simple color="linkedin">
                                      <i className="fab fa-linkedin-in" />
                                    </Button>
                                    <Button justIcon simple color="facebook">
                                      <i className="fab fa-facebook-square" />
                                    </Button>
                                    <Button justIcon simple color="dribbble">
                                      <i className="fab fa-dribbble" />
                                    </Button>
                                    <Button justIcon simple color="google">
                                      <i className="fab fa-google" />
                                    </Button>
                                  </CardFooter>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card profile plain className={classes.card3}>
                              <GridContainer>
                                <GridItem xs={12} sm={5} md={5}>
                                  <CardHeader image plain>
                                    <a href="#pablo" onClick={e => e.preventDefault()}>
                                      <img src={cardProfile4Square} alt="..." />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage: `url(${cardProfile4Square})`,
                                        opacity: "1"
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={7} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>Gina Andrew</h4>
                                    <Muted>
                                      <h6 className={classes.cardCategory}>WEB DESIGNER</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      I love you like Kanye loves Kanye. Don{"'"}t be scared
                                      of the truth.
                                    </p>
                                  </CardBody>
                                  <CardFooter profile plain>
                                    <Button justIcon simple color="youtube">
                                      <i className="fab fa-youtube" />
                                    </Button>
                                    <Button justIcon simple color="twitter">
                                      <i className="fab fa-twitter" />
                                    </Button>
                                    <Button justIcon simple color="instagram">
                                      <i className="fab fa-instagram" />
                                    </Button>
                                  </CardFooter>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card profile plain className={classes.card3}>
                              <GridContainer>
                                <GridItem xs={12} sm={5} md={5}>
                                  <CardHeader image plain>
                                    <a href="#pablo" onClick={e => e.preventDefault()}>
                                      <img src={cardProfile2Square} alt="..." />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage: `url(${cardProfile2Square})`,
                                        opacity: "1"
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={7} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>George West</h4>
                                    <Muted>
                                      <h6 className={classes.cardCategory}>BACKEND HACKER</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      I love you like Kanye loves Kanye. Don{"'"}t be scared
                                      of the truth.
                                    </p>
                                  </CardBody>
                                  <CardFooter profile plain>
                                    <Button justIcon simple color="linkedin">
                                      <i className="fab fa-linkedin-in" />
                                    </Button>
                                    <Button justIcon simple color="facebook">
                                      <i className="fab fa-facebook-square" />
                                    </Button>
                                    <Button justIcon simple color="google">
                                      <i className="fab fa-google" />
                                    </Button>
                                  </CardFooter>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                        </GridContainer>
                      </div>
                    </div>
                    </div>);
}
