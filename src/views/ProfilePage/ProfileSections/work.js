/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

// @material-ui/icons
import Camera from "@material-ui/icons/Camera";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Accordion from "components/Accordion/Accordion.js";

// images
import face from "assets/img/faces/oli.jpg";

// styles
import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";

const useStyles = makeStyles(profilePageStyle);

export default function Work({ ...rest }) {
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
                      <GridItem xs={12} sm={12} md={10}>
                            <span>
                              <p>
                              If I describe myself as a consultant, nobody knows what that means. The issue with "consulting" as a career is how much of a catch-all term it has morphed into, and therefore become meaningless. If I were to write out all the responsibilities I have held and roles I have performed, there would be few areas of business I haven't touched.<br /><br />Rather than roll off my CV, I feel it would be best to explain what I actually end up doing which also turns out to be what I find most enjoyable.
                              </p>
                            </span>
                          <br /><center><span><h5>Apparently that includes half building websites, to be continued...</h5></span></center>

                      </GridItem>
                    </GridContainer>
                    {/*<GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={10}>
                      <h3>My favourite roles</h3>
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
                      </GridContainer>*/}
                    </div>
                  
  );
}
