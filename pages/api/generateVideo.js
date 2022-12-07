// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import path from "path";
import axios from "axios";
import { deploySite, getOrCreateBucket } from "@remotion/lambda";
import { baseUrl } from "../../baseUrl";

export default async function handler(req, res) {
  console.log(req.body)
  const { composition, siteName } = JSON.parse(req.body);

  try {
    // Get the bucket name
    const { bucketName } = await getOrCreateBucket({
      region: "us-east-1",
    });

    // Deploy latest version of composition
    const { serveUrl } = await deploySite({
      bucketName,
      entryPoint: path.resolve(process.cwd(), "remotion/index.js"),
      region: "us-east-1",
      siteName, // Pass the artboard siteName here
    });

    // Generate video
    const reponse = await axios.post(`${baseUrl}/generate-video`,
      {
        composition,
        serveUrl,
      }
    );

    // console.log(reponse.data);
    res.status(200).json({ name: serveUrl });

  } catch (error) {
    console.log(error)
  }

}

