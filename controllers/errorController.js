const error404 = (req, res) => {
    res.status(404).json({
      code: 404,
      message: "Not found"
    })
  };
  
  export default {
    error404,
  };