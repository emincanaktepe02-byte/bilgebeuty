import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, service, date, time, note } = body;

    if (!name || !phone || !service || !date) {
      return NextResponse.json(
        { error: "Zorunlu alanlar eksik" },
        { status: 400 }
      );
    }

    // Log the appointment (in production, connect to a CRM, email service, or database)
    console.log("📅 New Appointment Request:", {
      name,
      phone,
      email,
      service,
      date,
      time,
      note,
      submittedAt: new Date().toISOString(),
    });

    // TODO: Integrate with email service (Resend, SendGrid) or CRM
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'randevu@bilgebeauty.com',
    //   to: 'salon@bilgebeauty.com',
    //   subject: `Yeni Randevu Talebi - ${name}`,
    //   html: `<p>Ad: ${name}</p><p>Tel: ${phone}</p><p>Hizmet: ${service}</p><p>Tarih: ${date} ${time}</p>`
    // });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}
