import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { HiPlus } from 'react-icons/hi';
import Ellipse from '@/components/miscellaneous/Ellipse';
import CustomTypography from '@/components/halper/CustomTypo';
import { accordionData } from './accordionData';

interface AccordionData {
  id: string;
  title: string;
  content: string;
}

export default function Fqa() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box p="0 3rem 0 3rem" mb={{ xs: '1rem', sm: '3rem', md: '6.25rem' }} position="relative">
      <Box marginBottom={{ xs:"1rem",md:"3rem"}}>
      <CustomTypography>faq</CustomTypography>
      </Box>
      <Ellipse top={-70} left={-100} width={350} height={350} />
      {accordionData.map((item: AccordionData) => (
        <Accordion
          key={item.id}
          component="div"
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
          sx={{
            border: 'none',
            backgroundColor: 'secondary.dark',
            marginTop: '1rem',
            borderRadius: '1rem',
          }}
        >
          <AccordionSummary
            aria-controls={`panel-${item.id}-content`}
            id={`panel-${item.id}-header`}
            expandIcon={<HiPlus/>}
            sx={{
              padding: '0',
              margin: '0',
              paddingRight: { xs: '1rem', md: '2.25rem' },
            }}
          >
            <Typography
              padding={{ xs: '0rem 1rem 0rem 1rem', md: '2.25rem 2.25rem 2.25rem 2.25rem' }}
              sx={{
                color: 'tertiary.main',
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 500,
              }}
            >
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              padding: '0',
            }}
          >
            <Typography
              padding={{ xs: '0rem 1rem 1rem 1rem', md: '2.25rem 2.25rem 2.25rem 2.25rem' }}
              sx={{
                color: 'tertiary.main',
                fontSize: '1.5rem',
                fontWeight: 400,
              }}
            >
              {item.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
