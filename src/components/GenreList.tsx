import { Heading, list } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <ul>
      {data &&
        data.map((genre) => (
          <Heading fontSize={15} key={genre.id}>
            {genre.name}
          </Heading>
        ))}
    </ul>
  );
};

export default GenreList;
