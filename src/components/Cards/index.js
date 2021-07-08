import { Card, Txt } from "./card-styled";
import { cardsLinks } from "./cardsLinks";

export default function Cards() {
  const handleClick = (url) => {
    window.location.assign(url);
  };

  return (
    <>
      {cardsLinks.map(({ txt, url, textColor, bgColor, IconComponent }) => (
        <Card
          key={txt}
          color={textColor}
          bgcolor={bgColor}
          onClick={() => handleClick(url)}
        >
          {IconComponent}
          <Txt>{txt}</Txt>
        </Card>
      ))}
    </>
  );
}
