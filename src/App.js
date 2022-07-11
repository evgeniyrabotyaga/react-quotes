import { Route, Routes, Navigate, Link } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import Comments from "./components/comments/Comments";
import Author from "./components/Author";
import MinWidth from "./components/MinWidth";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/quotes" />}></Route>
          <Route path="/quotes" element={<AllQuotes />} />
          <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
            <Route
              path=""
              element={
                <div>
                  <Link className="comments-link" to="comments">
                    Load Comments
                  </Link>
                </div>
              }
            />
            <Route path={`comments`} element={<Comments />} />
          </Route>
          <Route path="/add" element={<NewQuote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Author />
        <MinWidth />
      </Layout>
    </>
  );
}

export default App;
