import styled from "styled-components";

const StyledInput = styled.input`
  padding: 8px 20px;
  font-size: 16px;
  background-color: white;
  border-radius: 999px;
  width: 100%;
  color: black;

  &::placeholder {
    color: gray;
    font-size: 1.1em;
  }
`;
const Home = () => {
  // Generate a random number between 1 and 20
  const randomIndex = Math.floor(Math.random() * 20) + 1;
  const bgImageUrl = `/images/bg${randomIndex}.webp`;

  return (
    <div
      className="flex items-center justify-center"
      style={{
        backgroundImage: `url("${bgImageUrl}")`,
        height: 'calc(100vh/2.5)',
        minHeight: '300px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white'
      }}
    ><div className="w-[1220px]">
        <div className="px-[40px] py-[30px]">
          <div className="flex flex-col gap-0">
            <h1
              style={{
                fontSize: '3em', fontWeight: '700'
              }}
            >Welcome.</h1>
            <p
              style={{
                fontSize: '2em', fontWeight: '600'
              }}

            >Millions of movies, TV shows and people to discover. Explore now.</p></div>
          <StyledInput placeholder="Search for a movie, tv show, person......" />
        </div>

      </div>
    </div>
  );
};

export default Home;
