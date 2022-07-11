import { useEffect } from "react";
import useHttp from "../components/hooks/use-http";
import NoQuotes from "../components/quotes/NoQuotes";
import QuotesList from "../components/quotes/QuotesList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { getAllQuotes } from "../lib/api";

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedData,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p className="err-text">{error}</p>;
  }

  if (status === "completed" && (!loadedData || loadedData.length === 0)) {
    return <NoQuotes />;
  }

  return <QuotesList quotes={loadedData} />;
};

export default AllQuotes;
