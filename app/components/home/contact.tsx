import { contactEmailAddress, gitHubLink, linkedInLink } from "../../data/links"
import ContactIconLink from "../contactIconLink"
import EmailIcon from "../icons/email"
import GitHubIcon from "../icons/github"
import LinkedInIcon from "../icons/linkedIn"
import SectionHeading from "../sectionHeading"

const Contact = () => {
    return (
        <section id="contact" className='py-12 sm:py-24'>
            <SectionHeading title='Contact' />
            <div className="text-center max-w-md mx-auto">

                <div className="flex justify-center">

                    <ContactIconLink
                        href={`mailto:${contactEmailAddress}`}
                        label='Email'
                        icon={<EmailIcon />}
                    />

                    <ContactIconLink
                        href={gitHubLink} 
                        label='GitHub'
                        icon={<GitHubIcon />}
                    />

                    <ContactIconLink
                        href={linkedInLink} 
                        label='LinkedIn'
                        icon={<LinkedInIcon />}
                    />

                </div>

            </div>
        </section>
    )
}

export default Contact