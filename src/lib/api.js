const API_URL =
  "https://react-quotes-e5984-default-rtdb.asia-southeast1.firebasedatabase.app/";

export const getAllQuotes = async () => {
  const response = await fetch(`${API_URL}/quotes.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  const quotes = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };
    quotes.push(quoteObj);
  }
  return quotes;
};

export const getSingleQuote = async (quoteId) => {
  const response = await fetch(`${API_URL}/quotes/${quoteId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quote.");
  }

  const loadedQuote = {
    id: quoteId,
    ...data,
  };

  return loadedQuote;
};

export const addQuote = async (quoteData) => {
  const response = await fetch(`${API_URL}/quotes.json`, {
    method: "POST",
    body: JSON.stringify(quoteData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }

  return null;
};

export const getAllComments = async (quoteId) => {
  const response = await fetch(`${API_URL}/comments/${quoteId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get comments.");
  }

  const comments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    comments.push(commentObj);
  }

  return comments;
};

export const addComment = async (requestData) => {
  const response = await fetch(
    `${API_URL}/comments/${requestData.quoteId}.json`,
    {
      method: "POST",
      body: JSON.stringify(requestData.commentData),
      headers: { "Content-Type": "application/json" },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get comments");
  }

  return { commentId: data.name };
};
