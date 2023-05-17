import dictionary from '../../utils/dictionary'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faFacebookF,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import {
  FooterContainer,
  SocialIconsContainer,
  SocialIcon,
  Title,
  SubTitle,
  CompanyIcon,
  CompanyIconContainer,
} from './Footer.style'
import nextInsurance from 'assets/icons/next-insurance.svg'

const Footer = () => {
  const {
    footer: { title, subTitle, companyUrl },
  } = dictionary

  return (
    <FooterContainer>
      <CompanyIconContainer href={companyUrl}>
        <CompanyIcon src={nextInsurance} />
      </CompanyIconContainer>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <SocialIconsContainer>
        <SocialIcon
          data-testid="facebook"
          target="_black"
          href="https://www.facebook.com/NextInsuranceIL?mibextid=LQQJ4d"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </SocialIcon>
        <SocialIcon
          data-testid="linkedin"
          target="_black"
          href="https://www.linkedin.com/company/nextinsurance/"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </SocialIcon>
        <SocialIcon
          data-testid="twitter"
          target="_black"
          href="https://twitter.com/nextInsurance1"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </SocialIcon>
        <SocialIcon
          data-testid="instagram"
          target="_black"
          href="https://www.instagram.com/nextinsurance/"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </SocialIcon>
        <SocialIcon
          data-testid="youtube"
          target="_black"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </SocialIcon>
      </SocialIconsContainer>
    </FooterContainer>
  )
}

export default Footer
