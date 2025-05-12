import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { email, name, country, phone, organization } = await req.json();

  if (!process.env.MAILER_LITE_API_KEY) {
    return new Response(JSON.stringify({ message: "API key not configured" }), {
      status: 500,
    });
  }
  const response = await fetch(
    "https://connect.mailerlite.com/api/subscribers",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MAILER_LITE_API_KEY}`,
      },
      body: JSON.stringify({
        email,
        fields: {
          name,
          country,
          phone,
          organization,
        },
      }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    console.error("MailerLite API error:", errorData || response.statusText);

    return new Response(JSON.stringify({ message: "Failed to subscribe." }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ message: "Successfully subscribed!" }), {
    status: 200,
  });
}
