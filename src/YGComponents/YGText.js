import {memo, Component } from "react"
import styled from "styled-components"
class Text extends Component {
  render() {
    const {
      children,
      color,
      activeColor,
      size,
      weight,
      lineHeight,
      margin,
      align,
      spacing,
      select,
      whiteSpace,
      otherStyles,
      cssClass,
      transform,
      ...props
    } = this.props

    const YGText = styled("div")`
      display: inline;
      ${margin ? "margin: " + margin + " !important;" : ""}

        user-select: ${select ? select + " !important;" : "none !important;"};
        display: inline;
        margin: 0;
        color: ${color ? color : "var(--yg-primary)"} !important;

        ${size ? "font-size: " + size + (Number.isInteger(size) ? "px !important;" : " !important;") : ""}
        ${weight ? "font-weight: " + weight + " !important;" : ""}
        ${align ? "text-align: " + align + " !important;" : ""}
        ${spacing ? "letter-spacing: " + spacing + " !important;" : ""}
        ${lineHeight ? "line-height: " + lineHeight + " !important;" : ""}
        ${activeColor ? "&:active {color: " + activeColor + ";}" : ""}
        ${transform ? "text-transform: " + transform + ";" : ""}
        ${whiteSpace ? "white-space: " + whiteSpace + ";" : ""}
        
        ${otherStyles ? otherStyles : ""}
    `

    return (
      <YGText className={`Text${cssClass ? " " + cssClass : ""}`} {...props}>
        {children}
      </YGText>
    )
  }
}

export default memo(Text)