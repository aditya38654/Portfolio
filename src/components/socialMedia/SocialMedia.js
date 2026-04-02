import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";

const IconWrapper = styled.span`
  i,
  .iconify {
    background-color: ${(props) => props.backgroundColor};
  }

  &:hover i,
  &:hover .iconify {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function socialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, i) => {
        return (
          <a
            key={i}
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper {...media} {...props}>
              {media.fontAwesomeIcon.startsWith("fa") ? (
                <i className={`fab ${media.fontAwesomeIcon}`}></i>
              ) : (
                <span
                  className="iconify"
                  data-icon={media.fontAwesomeIcon}
                  data-inline="false"
                ></span>
              )}
            </IconWrapper>
            {/* <span></span> */}
          </a>
        );
      })}
    </div>
  );
}
