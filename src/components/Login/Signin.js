import CardWhite from "../UI/card/CardWhite";
import FormSignin from "./FormSignin/FormSignin";
import BackgroundCard from "../UI/BackgroundCard/BackgroundCard";

const Signin = () => {
  return (
    <BackgroundCard>
      <CardWhite>
        <FormSignin />
      </CardWhite>
    </BackgroundCard>
  );
};

export default Signin;
