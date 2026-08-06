import { NextResponse, type NextRequest } from "next/server";

const FORM_ENDPOINT =
  "https://ywwxvriolxwuqcwjaluh.supabase.co/functions/v1/form-submit/0d57320f-1866-41d5-829f-88444c49a616";

const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const TOKEN_FIELD = "cf-turnstile-response";

export async function POST(request: NextRequest) {
  const origin = new URL(request.url).origin;
  const fail = (reason: "captcha" | "submit" | "server") =>
    NextResponse.redirect(`${origin}/contact-us?error=${reason}#request`, 303);

  const submission = await request.formData();
  const token = String(submission.get(TOKEN_FIELD) ?? "");
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    console.error("TURNSTILE_SECRET_KEY is not set — cannot verify the captcha.");
    return fail("server");
  }
  if (!token) return fail("captcha");

  const verifyBody = new URLSearchParams({ secret, response: token });
  const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  if (clientIp) verifyBody.set("remoteip", clientIp);

  try {
    const verifyRes = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: verifyBody,
    });
    const verdict = (await verifyRes.json()) as { success?: boolean };
    if (!verdict.success) return fail("captcha");
  } catch {
    return fail("server");
  }

  submission.delete(TOKEN_FIELD);
  const payload = new URLSearchParams();
  for (const [key, value] of submission.entries()) {
    if (typeof value === "string") payload.set(key, value);
  }

  try {
    const forwarded = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: payload,
    });
    if (!forwarded.ok) return fail("submit");
  } catch {
    return fail("submit");
  }

  return NextResponse.redirect(`${origin}/thank-you`, 303);
}
