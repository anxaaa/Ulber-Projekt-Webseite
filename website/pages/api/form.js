export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses in the command line where next.js app is running.
  console.log("body: ", body);

  const reason = body.reason ? true : false;
  const contact = body.contact ? true : false;

  // Check for empty fields
  if (
    body.firstName === "" ||
    body.lastName === "" ||
    body.email === "" ||
    body.phone === "" ||
    body.message === "" ||
    !reason ||
    !contact
  ) {
    // if data is not found, forward to error page
    res
      .writeHead(301, {
        Location: `/Kontakt/error`,
      })
      .end();
  } else {
    // If data is found, forward to succes page
    res
      .writeHead(301, {
        Location: `/Kontakt/success`,
      })
      .end();
  }
}
