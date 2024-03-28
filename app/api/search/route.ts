import "@/lib/db/db";
import { ProductsModel } from "@/lib/db/model/products";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, {}) {
  const query = request.nextUrl.searchParams.get("query");

  let searchQuery = {};

  if (query) {
    searchQuery = { $text: { $search: query } };
  }

  const docs = await ProductsModel.find(searchQuery);
  return Response.json(docs);
}
