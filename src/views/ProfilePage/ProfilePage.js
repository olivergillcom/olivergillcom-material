/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Briefcase from "@material-ui/icons/Work";
import People from "@material-ui/icons/People";
import EmojiPeople from "@material-ui/icons/EmojiPeople";
import Projects from "@material-ui/icons/Build";
import Favorite from "@material-ui/icons/Favorite";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Button from "components/CustomButtons/Button.js";

// images
import face from "assets/img/faces/oli.jpg";

import About from "views/ProfilePage/ProfileSections/about.js"
import Work from "views/ProfilePage/ProfileSections/work.js"
import Photos from "views/ProfilePage/ProfileSections/photos.js"
import Project from "views/ProfilePage/ProfileSections/projects.js"
import Friends from "views/ProfilePage/ProfileSections/friends.js"

// style
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
              tabs={[{
                tabButton: "About Me",
                tabIcon: EmojiPeople,
                tabContent: (<About/>)
              },
              {
                tabButton: "Work",
                tabIcon: Briefcase,
                tabContent: (<Work/>)
              },
              {
                tabButton: "Projects",
                tabIcon: Projects,
                tabContent: (<Project/>)
              },
              {
                tabButton: "Photos",
                tabIcon: Camera,
                tabContent: (<Photos/>)
              },
              {
                tabButton: "Friends",
                tabIcon: People,
                tabContent: (<Friends/>)
              }
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
