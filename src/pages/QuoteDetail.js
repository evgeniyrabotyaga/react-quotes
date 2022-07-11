import FullScreenQuote from "../components/quotes/FullscreenQuote";
import { useParams, Outlet } from "react-router-dom";
import useHttp from "../components/hooks/use-http";
import { getSingleQuote } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const params = useParams();
  const quoteId = params.quoteId;

  const { sendRequest, status, data, error } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p className="err-text">{error}.</p>;
  }

  if (status === "completed" && (!data || data.length === 0)) {
    return <p className="err-text">No quotes found</p>;
  }

  return (
    <>
      <FullScreenQuote text={data.text} author={data.author} />
      <Outlet />
    </>
  );
};

export default QuoteDetail;
