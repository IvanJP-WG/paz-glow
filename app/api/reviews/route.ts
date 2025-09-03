import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!, // server-only
  dataset: process.env.SANITY_DATASET!,
  apiVersion: "2023-10-01",
  token: process.env.SANITY_API_WRITE_TOKEN, // must be write-enabled
  useCdn: false,
});

// GET reviews for a product
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const productId = searchParams.get("productId");

  if (!productId) {
    return NextResponse.json({ error: "Missing productId" }, { status: 400 });
  }

  try {
    const reviews = await client.fetch(
      `*[_type == "review" && productId == $productId] | order(createdAt desc) {
        _id,
        user,
        comment,
        stars,
        createdAt
      }`,
      { productId: String(productId) } // ensure string
    );

    return NextResponse.json(reviews, { status: 200 });
  } catch (err) {
    console.error("GET /reviews error:", err);
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}

// POST a new review
export async function POST(req: Request) {
  try {
    const { productId, user, comment, stars } = await req.json();

    if (!productId || !user || !comment || stars === undefined) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const newReview = await client.create({
      _type: "review",
      productId: String(productId), // store productId as string
      user,
      comment,
      stars,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json(newReview, { status: 201 });
  } catch (err) {
    console.error("POST /reviews error:", err);
    return NextResponse.json({ error: "Failed to create review" }, { status: 500 });
  }
}
