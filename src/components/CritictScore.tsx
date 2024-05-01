import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CritictScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge
      fontSize="14px"
      paddingX={3}
      borderRadius="4px"
      colorScheme={color}
      key={score}
    >
      {score}
    </Badge>
  );
};

export default CritictScore;
