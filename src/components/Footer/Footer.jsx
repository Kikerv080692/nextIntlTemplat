"use client"
import * as SC from './Footer.styled'
import { useTranslations } from 'next-intl'


export default function Footer() {
    const t = useTranslations("translation")

    return (
        <SC.MainWrapper>

        <SC.WrapperFooter>
            <SC.InfoSection>
                <img src="/images/footer/clock.png" alt="clock" />
                <div>
                    <h4>{t('footer.hours')}</h4>
                    <p>{t("footer.days")} <span>8:00 - 19:00</span></p>
                </div>
            </SC.InfoSection>
            <SC.ContactSection>
                <address>
                    <div>
                        <img src="/images/footer/mail.png" alt="mail" />
                        <a href="mailto:valihursky@gmail.com">valihursky@gmail.com</a>
                    </div>
                    <div>
                        <img src="/images/footer/telephone.png" alt="phone" />
                        <a href="tel:+420773612198">+420 773 612 198</a>
                    </div>
                    <div>
                        <img src="/images/footer/location.png" alt="location" />
                        <a href="https://www.google.com/maps?q=49.1713935,16.6466475"   target="_blank"  rel="noopener noreferrer">
                            Vinohradská 1305/82a, <br />    618 00 Brno-Černovice 
                        </a>
                    </div>
                </address>
            </SC.ContactSection>
        </SC.WrapperFooter>
        </SC.MainWrapper>
        
    );
}
