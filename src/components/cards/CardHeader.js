import React from "react/index.js";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types/index.js";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import cardHeaderStyle from "./cardHeaderStyle.js";
function CardHeader({ ...props }) {
  const {
    classes,
    className,
    children,
    color,
    plain,
    stats,
    icon,
    ...rest
  } = props;
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderStats]: stats,
    [classes.cardHeaderIcon]: icon,
    [className]: className !== undefined
  });
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
}
CardHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose"
  ]),
  plain: PropTypes.bool,
  stats: PropTypes.bool,
  icon: PropTypes.bool
};
export default withStyles(cardHeaderStyle)(CardHeader);
