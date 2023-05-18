import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background: #231f20 0% 0% no-repeat padding-box;
  opacity: 1;
  height: 300px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 41px 0 47px;
`

export const SocialIconsContainer = styled.div`
  display: flex;
`

export const SocialIcon = styled.a`
  transition: color 0.2s;
  color: #ffffff;
  &:hover {
    color: #e7e7e7;
  }
  &:not(:last-child) {
    margin-inline-end: 32px;
  }
  background: transparent;
`

export const CompanyIcon = styled.img``

export const CompanyIconContainer = styled.a``

export const Title = styled.div`
  text-align: center;
  font: normal normal normal 33px/37px Georgia;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`

export const SubTitle = styled.div`
  text-align: center;
  font: normal normal normal 16px/21px Georgia;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  width: 250px;
`
