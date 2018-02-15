const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const initialLocations = [
  {
    id: "id1",
    name: "Denver",
    lat: 39.742043,
    lng: -104.991531
  },
  {
    id: "id2",
    name: "LA",
    lat: 34.052235,
    lng: -118.243683
  },
  {
    id: "id3",
    name: "Boston",
    lat: 42.364506,
    lng: -71.038887
  }
];

app.locals.idIndex = 3;
app.locals.locations = initialLocations;

app.get("/locations", (request, response) =>
  response.send({ locations: app.locals.locations })
);

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.post("/locations", (req, res) => {
  const { body } = req;
  let { locations } = app.locals;

  for (let requiredParam of ["name", "lat", "lng"]) {
    if (!body[requiredParam]) return res.status(422).json({ error: `Missing ${requiredParam}.` });
  }

  const postedLocation = { id: `id${locations.length + 1}`, ...body };
  app.locals.locations = [...locations, postedLocation];
  res.send(postedLocation);
});

const portNumber = process.env.PORT || 3001;

/* eslint-disable no-console */
app.listen(portNumber, () =>
  console.log("It's ultra chill at port 3001")
);
