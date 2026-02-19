import { NextApiRequest, NextApiResponse } from "next";

export default async function hanler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    await res.revalidate("/");
    return res.json({ revaidate: true });
  } catch (error) {
    res.status(500).send("Revalidatio Failed");
    console.error(error);
  }
}
