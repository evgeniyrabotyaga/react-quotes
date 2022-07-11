import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useHttp from "../components/hooks/use-http";
import AddQoute from "../components/quotes/AddQuote";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      navigate("/quotes");
    }
  }, [status, navigate]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return <AddQoute onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
