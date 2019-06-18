import React from "react"
import styled from "@emotion/styled"
import ButtonAnchor from "./ButtonAnchor"
import TextInput from "./TextInput"
import CircleIcon from "./CircleIcon"
import { breakpoints } from "../utils/variables"

// images
import redditIcon from "../assets/icon-reddit.png"
import redditIcon2x from "../assets/icon-reddit@2x.png"
import riotIcon from "../assets/icon-riot.png"
import riotIcon2x from "../assets/icon-riot@2x.png"
import stackexchangeIcon from "../assets/icon-stackexchange.png"
import stackexchangeIcon2x from "../assets/icon-stackexchange@2x.png"

const srcSet = (src, src2x) => `${src} 1x, ${src2x} 2x`

const HomeHeroContent = () => (
  <Container>
    <SocialLinks>
      <li>
        <CircleIcon href="https://www.reddit.com/r/tezos">
          <img
            src={redditIcon2x}
            srcSet={srcSet(redditIcon, redditIcon2x)}
            alt="Reddit"
          />
        </CircleIcon>
      </li>
      <li>
        <CircleIcon href="https://riot.im/app/#/room/#freenode_#tezos:matrix.org">
          <img
            src={riotIcon2x}
            srcSet={srcSet(riotIcon, riotIcon2x)}
            alt="Riot"
          />
        </CircleIcon>
      </li>
      <li>
        <CircleIcon href="https://tezos.stackexchange.com/">
          <img
            src={stackexchangeIcon2x}
            srcSet={srcSet(stackexchangeIcon, stackexchangeIcon2x)}
            alt="Stack Exchange"
          />
        </CircleIcon>
      </li>
    </SocialLinks>

    <Rule />

    <MailSignup action="">
      <label htmlFor="email">
        <span>Developer Mailing List</span>
      </label>
      <TextInput id="email" name="email" type="email" placeholder="Email" required></TextInput>
      <ButtonAnchor type="submit" isAnchor={false} isSmall isSecondary>Submit</ButtonAnchor>
    </MailSignup>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;

  @media (min-width: ${breakpoints.mobile}) {
    align-items: flex-start;
  }

  @media (min-width: ${breakpoints.tablet}) {
    flex-flow: row nowrap;
  }
`

const SocialLinks = styled.ul`
  display: inline-flex;
  list-style: none;
  margin: 0;

  li {
    margin-bottom: 0;
  }

  li + li {
    margin-left: 12px;
  }

  @media (min-width: ${breakpoints.mobile}) {
    display: flex;
  }
`

const Rule = styled.hr`
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
  margin: 40px auto;
  width: 100%;

  @media (min-width: ${breakpoints.mobile}) {
    margin-left: 0;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none
  }
`

const MailSignup = styled.form`
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  max-width: 320px;
  width: 100%;

  label {
    align-items: center;
    display: flex;

    span {
      white-space: nowrap;
      font-weight: 300;
      font-size: 18px;
    }
  }

  input {
    margin: 10px 0 20px;
    max-width: 400px;
  }

  @media (min-width: ${breakpoints.mobile}) {
    align-items: center;
    flex-flow: row nowrap;
    max-width: 100%;

    input {
      margin: 2px 20px 0;
    }

    button {
      align-self: flex-end;
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    border-top: none;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    margin-left: 40px;
    padding-left: 40px;
  }
`

export default HomeHeroContent