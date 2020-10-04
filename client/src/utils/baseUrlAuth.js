var baseUrlAuth = "";
if (process.env.NODE_ENV === "production") {
  baseUrlAuth = "http://139.59.2.0/api/";
} else {
  baseUrlAuth = "http://localhost:5000/api/";
}
export default baseUrlAuth;
