import GridProducts from "../components/GridProducts/GridProducts";
import HeaderAndDescription from "../components/headerAndDescription/HeaderAndDescription";
import Navbar from "../components/navbar/Navbar";
import VideoContainer from "../components/videoContainer/VideoContainer";
import MaxWidthWrapper from "../layouts/maxWidth/MaxWidthWrapper";

const headerAndDescription1Data = {
  h1: "IT'S TIME FOR A JOYFUL SHOW",
  h2: "Let the show begin!",
};
const headerAndDescription2Data = {
  h1: "A magical show",
  p: "When 24 Faubourg closes, the street becomes quiet, plunged into silence. The window displays wake up and come to life. Objects leap into action for an unprecedented show. Pegasus sets off, keen not to miss it!",
  h2: "Curtain up",
};
const headerAndDescription3Data = {
  h1: "Through the dunes",
  p: "Having reached the desert, Pegasus spots a shape emerging from the dunes and attaches himself to the rippling strap of a Constance rising up like a sail in the sandy wind. A high-flying rodeo begins! Constance slips between Grand Jeté and Farandole scarf rings. However, during a loop-the-loop, Pegasus lets go of the strap...",
  h2: "Dance in the desert",
};
export const Home = () => {
  return (
    <>
      <Navbar />
      <MaxWidthWrapper>
        <HeaderAndDescription data={headerAndDescription1Data} />
        <VideoContainer />
        <GridProducts arr={[1, 1, 1, 1, 1, 1, 1, 1]} />
        <HeaderAndDescription data={headerAndDescription2Data} />
        <VideoContainer />
        <GridProducts arr={[1, 1, 1, 1]} />
        <HeaderAndDescription data={headerAndDescription3Data} />
      </MaxWidthWrapper>
    </>
  );
};

export default Home;
