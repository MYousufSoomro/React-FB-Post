import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import ThumbUp from "@material-ui/icons/ThumbUp";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FbImageLibrary from "react-fb-image-grid";
import FacebookEmoji from "react-facebook-emoji";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  avatar: {
    backgroundColor: red[500]
  },
  lightTooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11
  }
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false, isFavorite: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    const { isFavorite } = this.state;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {this.props.avatars}
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.username}
          subheader={this.props.date}
        />
        {/* <CardMedia
          className={classes.media}
          image="../assets/images/image-1.jpg"
          title="Image 1"
        /> */}
        <FbImageLibrary images={this.props.images} />

        <CardContent>
          <Typography component="p">{this.props.description}</Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <Tooltip
            classes={{ tooltip: classes.lightTooltip }}
            TransitionComponent={Zoom}
            title={
              <div>
                <FacebookEmoji type="like" size="sm" />
                <FacebookEmoji type="love" size="sm" />
                <FacebookEmoji type="wow" size="sm" />
                <FacebookEmoji type="angry" size="sm" />
                <FacebookEmoji type="haha" size="sm" />
                <FacebookEmoji type="sad" size="sm" />
              </div>
            }
          >
            <IconButton aria-label="Add to favorites">
              <ThumbUp />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);
