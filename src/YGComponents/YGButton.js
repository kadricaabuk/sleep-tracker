// Ionic & React
import { Component } from "react"
import { IonButton } from "@ionic/react"

// Plugins
import styled from "styled-components"

// Components
import Icon from "./YGIcon"

export default class Button extends Component {
  render() {
    const {
      children,
      theme,
      expand,
      margin,
      icon,
      iconDivider,
      iconColor,
      iconSize,
      iconHeight,
      iconWidth,
      iconLeft,
      color,
      backgroundColor,
      fontSize,
      fontWeight,
      textDecoration,
      cssClass,
      ...buttonProps
    } = this.props

    const YGButton = styled(IonButton)`
      --background-focused: unset;
      --background-activated: unset;
      --background-hover: unset;

      flex-shrink: 0;

      width: ${expand === "block" ? "100%" : "fit-content"};

      ${margin ? "margin: " + margin + ";" : "margin: 0;"}
      text-transform: unset;
      letter-spacing: unset;

      &::part(native) {
        flex-shrink: 0;
        background-color: unset;
        border-radius: ${theme === "fab" ? "50%" : "unset"};
        box-shadow: unset;
      }

      &.theme-button-primary {
        height: 55px;
        width: 100%;
      }
      
      .theme-button-primary&::part(native) {
        user-select: none;
        border-radius: 56px;
        background-color: var(--dt-primary);
        color: #fff;
        font-size: 15px;
        font-weight: 600;
        transition: all 0.1s ease-out;
      }

      &.theme-button-custom {
        width: 100px;
      }
      .theme-button-custom&::part(native) {
        user-select: none;
        border-radius: 56px;
        background-color: var(--dt-primary);
        color: #fff;
        font-size: 15px;
        font-weight: 600;
        transition: all 0.1s ease-out;
      }

      &.theme-button-secondary {
        --ripple-color: var(--dt-primary);

        height: 55px;
      }
      .theme-button-secondary&::part(native) {
        user-select: none;
        padding: 0 42px;
        border-radius: 55px;
        background-color: #fff;
        color: var(--dt-primary);
        font-size: 16px;
        font-weight: 600;
        transition: all 0.1s ease-out;

        ${icon
          ? iconLeft
            ? "padding-left: 12px"
            : "padding-right: 12px;"
          : ""}
      }
      &.theme-button-secondary .icon {
        margin: ${iconLeft ? "0 12px 0 0" : "0 0 0 12px"};
      }
      &.theme-button-secondary .iconDivider {
        height: 26px;
        width: 1px;
        margin: ${iconLeft ? "0 12px 0 0" : "0 0 0 12px"};
        background-color: var(--dt-purple);
      }

      &.theme-button-sm {
        --ripple-color: var(--dt-secondary);

        height: 25px;
      }
      .theme-button-sm&::part(native) {
        user-select: none;
        padding: 0 10px;
        border-radius: 2px;
        background-color: var(--dt-primary);
        color: #fff;
        font-size: 10px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0;
        transition: all 0.1s ease-out;
        box-shadow: unset;

        ${icon
          ? iconLeft
            ? "padding-left: 12px"
            : "padding-right: 12px;"
          : ""}
      }
      &.theme-button-sm .icon {
        margin: ${iconLeft ? "0 10px 0 0" : "0 0 0 10px"};
      }
      &.theme-button-sm .iconDivider {
        height: 26px;
        width: 1px;
        margin: ${iconLeft ? "0 10px 0 0" : "0 0 0 10px"};
        background-color: var(--dt-purple);
      }

      &.theme-button-md {
        --ripple-color: var(--dt-secondary);

        height: 30px;
      }
      .theme-button-md&::part(native) {
        user-select: none;
        padding: 0 8px;
        border-radius: 5px;
        background-color: var(--dt-primary);
        color: #fff;
        font-size: 10px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0;
        transition: all 0.1s ease-out;
        box-shadow: unset;

        ${icon ? (iconLeft ? "padding-left: 8px" : "padding-right: 8px;") : ""}
      }
      &.theme-button-md .icon {
        margin: ${iconLeft ? "0 6px 0 0" : "0 0 0 6px"};
      }
      &.theme-button-md .iconDivider {
        height: 26px;
        width: 1px;
        margin: ${iconLeft ? "0 6px 0 0" : "0 0 0 6px"};
        background-color: var(--dt-purple);
      }

      ${theme === "link"
        ? "height: fit-content; width: fit-content !important;"
        : ""}
      .theme-button-link&::part(native) {
        --ripple-color: transparent;

        width: fit-content;
        padding: 0;
        background-color: unset;
        transition: all 0.1s ease-out;
        color: ${color ? color : "var(--dt-pink)"};
        font-size: ${fontSize ? fontSize : "12px"};
        font-weight: ${fontWeight ? fontWeight : "500"};
        line-height: 14px;
        overflow: visible;

        &:hover {
          background-color: unset;
        }
        &:active {
          opacity: 0.9;
          background-color: unset;
        }
      }
      .theme-button-link&::part(native)::after {
        content: none;
      }

      .icon {
        height: 14px;
        width: auto;
        ${iconLeft ? "margin-right: 8px;" : "margin-left: 8px;"}
      }

      ${theme === "outline"
        ? `
        height: 55px;
        width: 100%;
        border: 1px solid rgba(61, 60, 87, 0.15);
        border-radius: 55px;
        
        &::part(native) {
          border-radius: 55px;
          color: var(--dt-primary);
          font-size: 14px;
          font-weight: 600;
        }
      `
        : ``}

      &::part(native) {
        ${color ? "color: " + color + " !important;" : ""}
        ${fontSize ? "font-size: " + fontSize + " !important;" : ""}
        ${fontWeight ? "font-weight: " + fontWeight + " !important;" : ""}
      }

      ${theme === "header"
        ? `
        --ripple-color: transparent;
        
        height: 22px;
        width: 22px;
        margin: 0;
        padding: 0;
        border: none;
        outline: none;

        &::part(native) {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 22px;
          width: 22px;
          padding: 0;
          border-radius: 2px;
          color: var(--dt-primary);
        }

        .icon {
          height: auto;
          width: auto;
          margin: 0;
        }
      `
        : ``}
    `

    return (
      <YGButton
        className={`${
          theme ? " theme-button-" + theme : "theme-button-primary"
        } ${cssClass ? cssClass : ""}`}
        {...buttonProps}
      >
        {icon && iconLeft ? (
          <>
            <Icon
              name={icon}
              fill={iconColor ? iconColor : "currentColor"}
              height={iconSize ? iconSize : iconHeight ? iconHeight : 24}
              width={iconSize ? iconSize : iconWidth ? iconWidth : 24}
              size={iconSize ? iconSize : 24}
            />
            {iconDivider ? <div className="iconDivider" /> : ""}
          </>
        ) : (
          ""
        )}
        {icon ? <span>{children}</span> : children}
        {icon && !iconLeft ? (
          <>
            {iconDivider ? <div className="iconDivider" /> : ""}
            <Icon
              name={icon}
              fill={iconColor ? iconColor : "currentColor"}
              height={iconSize ? iconSize : iconHeight ? iconHeight : 24}
              width={iconSize ? iconSize : iconWidth ? iconWidth : 24}
              size={iconSize ? iconSize : 24}
            />
          </>
        ) : (
          ""
        )}
      </YGButton>
    )
  }
}
