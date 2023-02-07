export default function handler(req, res) {
  req.setPreviewData({})
  req.end('Preview mode enabled')
}
