import { Header } from "./landing-page";

export const TandC = () => {
  return (
    <>
      <h1 className="TandCTitle" style={{ textAlign: "center" }}>
        Terms and Conditions
      </h1>
    </>
  );
};

const TandCPage = () => {
  return (
    <>
      <Header />
      <TandC />
    </>
  );
};
export default TandCPage;
