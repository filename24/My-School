
import { StatusCode } from '@types'
import RequestHandler from '@utils/RequestHandler'

export default RequestHandler.all(async (req, res) => {
  res.status(StatusCode.Continue).json({
    data: 'Hello World!',
    code: StatusCode.Continue
  })
})
