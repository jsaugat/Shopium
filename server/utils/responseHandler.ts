//? Purpose: Handle response creation for the server.
export const createResponse = (
  body: string | object,
  status: number = 200
) => {
  // syntax: new Response(body, options)
  return new Response(
    typeof body === "string"
      ? JSON.stringify({ message: body })
      : JSON.stringify(body),
    {
      status,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
};
