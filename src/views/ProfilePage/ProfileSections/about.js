/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import CodeIcon from "@material-ui/icons/Code";
import SportsEsports from "@material-ui/icons/SportsEsports";
import CallSplit from "@material-ui/icons/CallSplit";
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

// images
import face from "assets/img/faces/oli.jpg";

// style
import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";

const useStyles = makeStyles(profilePageStyle);

export default function About({ ...rest }) {

  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
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
                    {/*}
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={8} md={8}>
                          <h2 className={classes.title}>Personality</h2>
                          <h5 className={classes.description}>
                            This is the paragraph where you can write more details about your
                            product. Keep you user engaged by providing meaningful information.
                            Remember that by this time, the user is curious, otherwise he wouldn
                            {"'"}t scroll to get here. Add a button if you want the user to see
                            more.
                          </h5>
                        </GridItem>
                      </GridContainer>
                        <GridContainer>
                          <GridItem xs={12} sm={8} md={4}>
                            <InfoArea
                              title="Free Chat"
                              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                              icon={Chat}
                              iconColor="info"
                              vertical
                            />
                          </GridItem>
                          <GridItem xs={12} sm={8} md={4}>
                            <InfoArea
                              title="Verified Users"
                              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                              icon={VerifiedUser}
                              iconColor="success"
                              vertical
                            />
                          </GridItem>
                          <GridItem xs={12} sm={8} md={4}>
                            <InfoArea
                              title="Fingerprint"
                              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                              icon={Fingerprint}
                              iconColor="danger"
                              vertical
                            />
                          </GridItem>
                        </GridContainer>*/}
                      </div>
  );
}
