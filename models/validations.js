const validateURL = (req, res, next) => {
  console.log(
    "This function checks the validity of the URL entered by the user"
  );
  console.log(req.url);
  const url = req.body.url;
  //   if (url.test(/))
  if (url.startsWith("http://") || url.startsWith("https://")) {
    next();
  } else {
    res
      .status(400)
      .send("Oops, you forgot to start your url with http:// or https://");
  }
};

module.exports = { validateURL };
