// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { requireSession } from "@clerk/nextjs/api";
export default requireSession((req, res) => {
  res.status(200).json({ userId: req.session.userId });
});
