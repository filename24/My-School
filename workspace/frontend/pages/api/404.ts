import { StatusCode } from "@types";
import RequestHandler from "@utils/RequestHandler";

export default RequestHandler.all(async (req, res) => {
  res.status(StatusCode.NotFound).json({
    data: 'Not Found ',
    code: StatusCode.NotFound
  })
})