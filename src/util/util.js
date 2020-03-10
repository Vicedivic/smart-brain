/**
 * Calculates face locations for a particular image from Clarifai data.
 * @param {object} data - The face location data.
 * @param {object} image - The image to calculate the locations from.
 */
const calculateFaceLocations = (data, image) =>
  data.outputs[0].data.regions.map(region => {
    const face = region.region_info.bounding_box;
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - face.right_col * width,
      bottomRow: height - face.bottom_row * height
    };
  });