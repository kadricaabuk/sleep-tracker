import styled from "styled-components"

const YGSection = ({
    children,
    title,
    titlePosition = "inside",
    titleColor = "#61529D",
    titleSize = 22,
    titleWeight= 800,
    sectionWidth,
    sectionHeight,
    sectionPadding
}) => {

    const Section = styled("div")`
        position: relative;
        background-color: var(--yg-section-background);
        border-radius: 13px;
        width: ${sectionWidth ? sectionWidth : "100%"};
        height: ${sectionHeight ? sectionHeight : "fit-content"};
        padding: ${sectionPadding ? sectionPadding : 16}px;
        .SectionTitle{
            position: ${titlePosition === "inside" ? "unset" : "absolute"};
            top: ${
                titlePosition === "out" ? "-40px" : titlePosition === "merged-top" ? "-20px" : "unset"
            };
            color: ${titleColor};
            font-size: ${titleSize}px;
            font-weight: ${titleWeight};
        }
        .children{
            margin-top: ${titlePosition !== "out" ? 8 : 0}px;
        }
    `
    return (
        <Section>
            {
                title && (
                    <p className="SectionTitle">
                        {title}
                    </p>
                )
            }
            <div className="children">
                {children}
            </div>
        </Section>
    )

}

export default YGSection