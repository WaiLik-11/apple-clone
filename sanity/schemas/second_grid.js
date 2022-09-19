export default {
  name: "second_grid",
  title: "Second Grid",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "logoImage",
      title: "Logo Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "midText",
      title: "MidText",
      type: "string",
    },
    {
      name: "midTextSecond",
      title: "MidText2",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "arrowText",
      title: "Arrow Text",
      type: "string",
    },
    {
      name: "arrowSVG",
      title: "Arrow SVG",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "buyText",
      title: "Buy / Try Text",
      type: "string",
    },
    {
      name: "buySVG",
      title: "Buy / Try SVG",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "price",
      title: "price",
      type: "array",
      of: [{ type: "number" }],
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },
  ],
};
