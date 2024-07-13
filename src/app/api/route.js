import EmailTemplate from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(NextRequest) {
  const body = await NextRequest.json();
  const name = body.name;
  const email = body.email;
  const phone = body.phone;
  const message = body.message;

  try {
    const { data, error } = await resend.emails.send({
      from: "Our website <onboarding@resend.dev>",
      to: ["makeupcoders@gmail.com"],
      subject: "Website Contact Email",
      react: EmailTemplate({ name, sender: email, phone, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
