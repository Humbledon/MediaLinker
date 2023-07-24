import React, { useEffect, useState, useContext, createContext } from 'react';
import { Box, Button } from "@mui/material";
import { RessourcesDiv,FAQPageDiv,Rowbox, TemoignagePageDiv, PresentationBox, CampaignPresentationPageDiv, StepPresentation, CustomList, CustomListItem, CustomListItemText, StepPresentationPageDiv, VideoPageDiv, ColumnDiv, BoldText, NormalText, BlackLine, SeperateDiv, BlueText, SpacebetweenDiv, LogoDiv, ContentNavDiv, NavDiv, ButtonWithBackground, ButtonWithoutBackground } from "../../theme/custom_components";
import logo from '../../theme/images/MEDIALINKER.png'
import firstImage from '../../theme/images/futureHomePicture.png'
import videoPresentation from '../../theme/images/mediaLinkerVideoPres.png'
import StepPresentationImage from '../../theme/images/StepPresentation.png'
import ressources from '../../theme/images/Ressources.png'
import temoignage from '../../theme/images/temoignage.png'
import footer from '../../theme/images/footer.png'
import { faFileText, faCheckCircle, faEnvelopeOpen, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SimpleAccordion from './SimpleAccordeon';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out-back',
        });
    }, []);
    return (
        <Box>
            <NavDiv >
                <LogoDiv>
                    <img src={logo} className="logoImage" alt="" />
                </LogoDiv>

                <ContentNavDiv>
                    <ButtonWithoutBackground>
                        CRÉER MA CAMPAGNE
                    </ButtonWithoutBackground>
                    <ButtonWithoutBackground>
                        BLOG
                    </ButtonWithoutBackground>
                    <ButtonWithBackground>
                        SE CONNECTER
                    </ButtonWithBackground>
                </ContentNavDiv>
            </NavDiv>
            <SpacebetweenDiv data-aos="zoom-in-up">
                <SeperateDiv>
                    <ColumnDiv>


                        <BlueText sx={{ fontSize:"2.7rem"}}>
                            Offrez-vous la visibilité que vous méritez
                        </BlueText>
                        <BlackLine />
                        <NormalText sx={{ fontSize:"1.5rem"}}>
                            Découvrez <BoldText sx={{ fontSize:"1.5rem"}} component="span">gratuitement</BoldText> et en <BoldText component="span" sx={{ fontSize:"1.5rem"}}>quelques clics </BoldText> combien de
                            médias parleront de vous !
                        </NormalText>
                    </ColumnDiv>
                    <ButtonWithBackground>
                        C'est parti
                    </ButtonWithBackground>

                </SeperateDiv>
                <SeperateDiv>
                    <img src={firstImage} className="firstImage" alt="" />
                </SeperateDiv>


            </SpacebetweenDiv>
            <VideoPageDiv data-aos="fade-right">
                <BlueText sx={{ width: "40rem", fontSize:"2rem", textAlign: "center" }}>
                    Les relations presse comme vous ne les avez jamais vues !
                </BlueText>
                <NormalText>
                    Découvrez tous les avantages de MediaLinker dans cette courte vidéo :
                </NormalText>
                <ColumnDiv sx={{ marginTop: "4rem", fontSize:"1rem" }}>
                    <img src={videoPresentation} className="videoPresentation" alt="" />
                </ColumnDiv>
            </VideoPageDiv>
            <StepPresentationPageDiv data-aos="fade-left">
                <SpacebetweenDiv>
                    <SeperateDiv>
                        <StepPresentation>
                            <img src={StepPresentationImage} className="StepPresentationImage" alt="" />
                        </StepPresentation>


                    </SeperateDiv>
                    <SeperateDiv>
                        <ColumnDiv>
                            <BlueText sx={{ fontSize: "2rem", marginBottom: "1rem" }} >
                                Étape par étape, créez votre campagne presse
                            </BlueText>
                            <NormalText sx={{ marginTop: "0", fontSize: "1.5rem" }}>
                                MediaLinker vous accompagne à chaque étape de votre campagne de relations presse.
                            </NormalText>
                            <NormalText sx={{ marginTop: "0", fontSize: "1.5rem" }}>
                                Avec notre outil, vos relations presse deviennent :
                            </NormalText>
                            <CustomList>
                                <CustomListItem>plus accessibles</CustomListItem>
                                <CustomListItem>plus faciles</CustomListItem>
                                <CustomListItem>plus performantes </CustomListItem>
                                {/* Add more CustomListItem for more points */}
                            </CustomList>
                            <NormalText sx={{ marginTop: "0", fontSize: "1.5rem" }}>
                                Alors qu'attendez-vous pour vous lancer ?
                            </NormalText>

                        </ColumnDiv>
                        <ButtonWithBackground>
                            Je commence
                        </ButtonWithBackground>
                    </SeperateDiv>
                </SpacebetweenDiv>
            </StepPresentationPageDiv>
            <CampaignPresentationPageDiv data-aos="fade-up-right">
                <BlueText sx={{ width: "70rem", textAlign: "center", fontSize: "2.2rem", paddingBottom:"1.2rem" }}>
                    Définissez votre propre campagne de relations presse
                </BlueText>
                <SpacebetweenDiv sx={{ marginTop: "0rem" }}>
                    <SeperateDiv sx={{ marginTop: "0rem", paddingTop: "0rem" }}>
                        <PresentationBox sx={{ paddingTop: "1rem" }}>

                            <FontAwesomeIcon size="3x" color="#0097B2" icon={faEnvelopeOpen} />

                            <BoldText sx={{ textAlign: "center", fontSize: "1.3rem" }}>
                                Gestion et envoi de mails personnalisés
                            </BoldText>
                            <NormalText sx={{ textAlign: "center", fontSize: "1rem", marginTop: "0rem" }}>
                                Gérer vos campagnes de relations
                                presse plus facilement et rédigez
                                des mails personnalisés à chaque
                                média.

                            </NormalText>
                        </PresentationBox>
                        <PresentationBox sx={{ paddingTop: "1rem" }}>

                            <FontAwesomeIcon size="3x" color="#0097B2" icon={faFileText} />

                            <BoldText sx={{ textAlign: "center", fontSize: "1.3rem" }}>
                                Modèles de mails, communiqués et dossiers de presse

                            </BoldText>
                            <NormalText sx={{ textAlign: "center", fontSize: "1rem", marginTop: "0rem" }}>
                                Retrouvez chaque semaine de
                                nouveaux modèles de mails,
                                communiqués de presse et dossiers
                                de presse à personnaliser.
                            </NormalText>
                        </PresentationBox>


                    </SeperateDiv>
                    <SeperateDiv sx={{ marginTop: "0rem", paddingTop: "0rem" }}>
                        <PresentationBox sx={{ paddingTop: "1rem" }}>

                            <FontAwesomeIcon size="3x" color="#0097B2" icon={faCheckCircle} />

                            <BoldText sx={{ textAlign: "center", fontSize: "1.3rem" }}>
                                Sélection de médias
                                adaptés à votre besoin
                            </BoldText>
                            <NormalText sx={{ textAlign: "center", fontSize: "1rem", marginTop: "0rem" }}>
                                Nous vous proposons une liste de
                                médias répondant à vos critères en
                                termes de secteur, type de média
                                et audience.

                            </NormalText>
                        </PresentationBox>
                        <PresentationBox sx={{ paddingTop: "1rem" }}>

                            <FontAwesomeIcon size="3x" color="#0097B2" icon={faLightbulb} />

                            <BoldText sx={{ textAlign: "center", fontSize: "1.3rem" }}>
                                Dizaines de ressources pour
                                une campagne réussie

                            </BoldText>
                            <NormalText sx={{ textAlign: "center", fontSize: "1rem", marginTop: "0rem" }}>
                                Retrouvez sur notre blog de
                                nombreuses ressources et des
                                astuces pour vous aider à rédiger,
                                gérer et suivre vos campagnes
                                presse.
                            </NormalText>
                        </PresentationBox>


                    </SeperateDiv>
                </SpacebetweenDiv>
            </CampaignPresentationPageDiv>
            <TemoignagePageDiv data-aos="fade-up-left">
                <BlueText sx={{ width: "70rem", textAlign: "center", fontSize: "2.2rem", paddingBottom:"1.2rem" }}>
                    Vous aussi, passez le cap 
                </BlueText>
                <Rowbox>
                    <Box>
                    <img src={temoignage} className="temoignage" alt="" />
                    </Box>
                    <Box>
                    <img src={temoignage} className="temoignage" alt="" />
                    </Box>
                    <Box>
                    <img src={temoignage} className="temoignage" alt="" />
                    </Box>
                </Rowbox>
                <ButtonWithBackground>
                        Je me lance
                </ButtonWithBackground>

            </TemoignagePageDiv>
            <FAQPageDiv  data-aos="flip-left">
            <BlueText sx={{ width: "70rem", textAlign: "center", fontSize: "2.2rem", paddingBottom:"3rem" }}>
                    Foire au Questions
                </BlueText>
                <SimpleAccordion />
            </FAQPageDiv>
            <RessourcesDiv data-aos="flip-right">
            <BlueText sx={{ width: "70rem", textAlign: "center", fontSize: "2.2rem", paddingBottom:"3rem" }}>
            Nos dernières ressources
                </BlueText>
                <Rowbox>
                    <Box>
                    <img src={ressources} className="temoignage" alt="" />                        
                    </Box>
                    <Box>
                    <img src={ressources} className="temoignage" alt="" />                        
                    </Box>
                    <Box>
                    <img src={ressources} className="temoignage" alt="" />                        
                    </Box>
                    <Box>
                    <img src={ressources} className="temoignage" alt="" />                        
                    </Box>
                </Rowbox>

            </RessourcesDiv>
            <Box sx={{marginBottom: "0rem", width:"100%"}}>
            <img src={footer} className="footer" alt="" />  
            </Box>
        </Box>
    );
}

export default Home;