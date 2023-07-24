import { Container, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SimpleAccordion() {
  return (
    <Container maxWidth="md" sx={{ mt: 2 }}>
      <Accordion sx={{ backgroundColor: '#edede7'}}>
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faPlusSquare} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Qu'est-ce qu'une agence de communication éthique ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Une agence de communication éthique s'engage à promouvoir des pratiques de communication responsables, respectueuses de l'environnement, des droits humains et des principes éthiques dans l'ensemble de ses activités et projets.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: '#edede7'}}>
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faPlusSquare} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Quels sont les accompagnements que propose Horaé ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Horaé propose une gamme d'accompagnements allant de la stratégie de communication, la création de contenu, la gestion des réseaux sociaux, la conception graphique, jusqu'à la formation en communication éthique et durable.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: '#edede7'}}>
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faPlusSquare} />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Quelle différence entre le greenwashing et la communication éthique ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Le greenwashing est une stratégie de marketing qui vise à donner une image écologique fausse ou exagérée à une entreprise ou à un produit. En revanche, la communication éthique est basée sur l'honnêteté, la transparence et le respect de principes éthiques, écologiques et sociaux dans toutes les actions de communication.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: '#edede7'}}>
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faPlusSquare} />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>Qui sommes-nous ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nous sommes Horaé, une agence de communication éthique dédiée à aider les entreprises à communiquer de manière responsable et durable. Notre équipe est composée de professionnels expérimentés qui partagent une passion pour la communication éthique et l'innovation.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: '#edede7'}}>
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faPlusSquare} />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography>Pourquoi le nom Horaé ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Le nom Horaé est inspiré de la déesse grecque des saisons et du temps qui passe. Cela représente notre engagement envers une communication durable qui respecte les cycles naturels et les besoins changeants de notre société.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
