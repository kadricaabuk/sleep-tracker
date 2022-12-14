import { PureComponent, memo } from "react"
import { IonInput } from "@ionic/react"

import styled from "styled-components"
import STIcon from "./STIcon"

class Input extends PureComponent {
  render() {
    const {
      id,
      icon,
      iconFill,
      iconSize,
      iconHeight,
      iconWidth,
      label,
      theme,
      searchActive,
      cssClass,
      children,
      margin,
      textTransform,
      ...inputProps
    } = this.props

    const STInputWrapper = styled("div")`
      position: relative;
      flex-shrink: 0;
      width: 100%;
      ${margin ? "margin: " + margin + ";" : ""}

      &.shake .native-input {
        border-color: var(--st-purple);
      }
      &.success .native-input {
        border-color: var(--st-success);
      }
      &.error .native-input {
        border-color: var(--st-error);
      }
      &.warning .native-input {
        border-color: var(--st-warning);
      }
      &.info .native-input {
        border-color: var(--st-info);
      }

      &.icon-left .native-input {
        padding: 0 22px 0 50px;
      }
      &.icon-left .icon-${icon} {
        left: 16px;
        right: unset;
      }
    `

    const STInput = styled(IonInput)`
      height: 100%;
      width: 100%;
      flex-shrink: 0;
      font-family: var(--st-font-family);

      .native-input {
        flex-shrink: 0;
        position: relative;
        height: 100%;
        width: 100%;
        padding: 0 15px;
        border: 1px solid var(--st-border-light);
        border-radius: 4px;
        background-color: transparent;
        color: #000;
        font-size: 16px;
        font-weight: 400;
        ${textTransform ? "text-transform: " + textTransform + ";" : ""}
        transition: all 0.1s ease-out;

        &::placeholder {
          user-select: none;
          color: #635c5c;
        }
      }

      .native-input:focus {
        border-color: var(--st-purple);
      }

      .icon-${icon} {
        pointer-events: none;
        position: absolute;
        right: 22px;
        transition: all 0.1s ease-out;
        z-index: 1;
      }

      &.has-value .icon-${icon} {
        fill: var(--st-link);
      }
      &.has-value .native-input {
        border-color: var(--st-link);
      }

      ${theme === "primary"
        ? `
          position: relative;
          height: 55px;
          width: 100%;
          background-color: #fff;
          border: 1px solid var(--st-primary-300);
          border-radius: 12px;
          transition: all 0.15s ease-out;

          .native-input {
            height: 100%;
            width: 100%;
            padding: 0 14px;
            background-color: #fff;
            border: none;
            border-radius: 12px;
            color: var(--st-primary);
            font-size: 16px;
            font-weight: 400;
            text-align: left;
          }

          &.has-focus,
          &.has-value {
            border-color: var(--st-primary);
          }

          .STInputLabel {
            pointer-events: none;
            position: absolute;
            top: 50%;
            left: 14px;
            color: #635c5c;
            font-size: 16px;
            font-weight: 400;
            transform: translateY(-50%);
            transition: all 0.1s ease-out;
            z-index: 1;
          }
          &.has-focus .STInputLabel,
          &.has-value .STInputLabel {
            top: -6px;
            transform: translateY(-100%);
            color: #635c5c;
            font-size: 14px;
            font-weight: 600;
          }
      `
        : ""}
    `

    function idGenerator() {
      var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
      }
      return (
        S4() +
        S4() +
        "-" +
        S4() +
        "-" +
        S4() +
        "-" +
        S4() +
        "-" +
        S4() +
        S4() +
        S4()
      )
    }

    const generateID = idGenerator()

    return (
      <STInputWrapper
        className={`input-wrapper${cssClass ? " " + cssClass : ""}`}
      >
        <STInput id={id ? id : generateID} {...inputProps}>
          {icon ? (
            <STIcon
              name={icon}
              fill={iconFill ? iconFill : "#a2a2a2"}
              size={iconSize ? iconSize : 24}
              height={iconSize ? iconSize : iconHeight ? iconHeight : 24}
              width={iconSize ? iconSize : iconWidth ? iconWidth : 24}
            />
          ) : (
            ""
          )}
          {label ? (
            <label htmlFor={id ? id : generateID} className="STInputLabel">
              {label}
            </label>
          ) : (
            ""
          )}
          {children}
        </STInput>
      </STInputWrapper>
    )
  }
}

export default memo(Input)
