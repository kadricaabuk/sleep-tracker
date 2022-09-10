import Icons from "../assets/icons.svg"

const Icon = ({ name, fill, size, height, width, margin, cssClass, style, ...props }) => (
  <svg
    className={`icon icon-${name}${cssClass ? " " + cssClass : ""}`}
    fill={fill ? fill : "currentColor"}
    height={height ? height : size ? size : 24}
    width={width ? width : size ? size : 24}
    style={{ margin: margin ? margin : "" + style }}
    {...props}
  >
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
)

export default Icon
