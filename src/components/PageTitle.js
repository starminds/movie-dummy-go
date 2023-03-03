import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>M-Movie{title}</title>
    </Helmet>
  );
};