import { NextResponse } from "next/server";

export async function GET(req: Request) {

  // Simulate a delay between 500ms and 2000ms
  const delay = Math.floor(Math.random() * (2000 - 500 + 1) + 500);
  await new Promise(resolve => setTimeout(resolve, delay));

  // Simulate a 20% chance of an error response
  const shouldError = Math.random() < 0.2;

  if (shouldError) {
    return NextResponse.json(
      { error: "Failed to fetch payment history" },
      { status: 404 }
    );
  }

  return NextResponse.json([
    {
      transactionId: "1234567890",
      date: new Date(),
      description: "Payment for order 1234567890",
      amount: 100,
    },
    {
      transactionId: "1234567891",
      date: new Date(),
      description: "Payment for order 1234567891",
      amount: 200,
    },
    {
      transactionId: "1234567892",
      date: new Date(),
      description: "Payment for order 1234567892",
      amount: 300,
    },
    {
      transactionId: "1234567893",
      date: new Date(),
      description: "Payment for order 1234567893",
      amount: 400,
    },
    {
      transactionId: "1234567894",
      date: new Date(),
      description: "Payment for order 1234567894",
      amount: 500,
    },
    {
      transactionId: "1234567895",
      date: new Date(),
      description: "Payment for order 1234567895",
      amount: 600,
    }
  ]);
}
