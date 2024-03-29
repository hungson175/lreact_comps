
import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: '121',
      label: 'Can I use React on a project ?',
      content: 'You can use React on any project u want.You can use React on any project u want.You can use React on any project u want.You can use React on any project u want.You can use React on any project u want.'
    },
    {
      id: '2324',
      label: 'Can I use JS on a project ?',
      content: 'You can use React on any project u want.You can use React on any project u want.You can use React on any project u want.You can use React on any project u want.You can use React on any project u want.'
    },
    {
      id: '5657',
      label: 'Can I use CSS on a project ?',
      content: 'You can use React on any project u want.You can use React on any project u want.You can use React on any project u want.You can use React on any project u want.You can use React on any project u want.'
    },
  ];

  return <Accordion items = {items}/>
}

export default AccordionPage;

