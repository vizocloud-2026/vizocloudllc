import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, company, phone, service, budget, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' });
  }

  try {
    await resend.emails.send({
      from: 'Vizo Cloud <info@vizocloud.com>',
      to: 'info@vizocloud.com',
      reply_to: email,
      subject: `New Inquiry from ${name} — ${service || 'Vizo Cloud'}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9f9f9;border-radius:8px;">
          <h2 style="color:#ff2b2b;margin-bottom:20px;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;font-weight:bold;width:130px;color:#555;">Name</td><td style="padding:8px 0;">${name}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#555;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#555;">Company</td><td style="padding:8px 0;">${company || 'N/A'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#555;">Phone</td><td style="padding:8px 0;">${phone || 'N/A'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#555;">Service</td><td style="padding:8px 0;">${service || 'Not specified'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#555;">Budget</td><td style="padding:8px 0;">${budget || 'Not specified'}</td></tr>
          </table>
          <div style="margin-top:20px;padding:16px;background:#fff;border-left:4px solid #ff2b2b;border-radius:4px;">
            <strong style="color:#555;">Message</strong>
            <p style="margin:8px 0 0;line-height:1.6;">${message}</p>
          </div>
        </div>
      `,
    });

    await resend.emails.send({
      from: 'Vizo Cloud <info@vizocloud.com>',
      to: email,
      subject: 'We received your message — Vizo Cloud',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9f9f9;border-radius:8px;">
          <h2 style="color:#ff2b2b;margin-bottom:8px;">Thank You, ${name}!</h2>
          <p style="color:#444;line-height:1.7;">We've received your inquiry about <strong>${service || 'our services'}</strong> and our team will get back to you within <strong>24 hours</strong>.</p>
          <p style="color:#444;line-height:1.7;">In the meantime, feel free to call us at <strong>+1-307-381-9690</strong> (Mon – Fri, 9AM – 6PM EST).</p>
          <hr style="border:none;border-top:1px solid #ddd;margin:24px 0;" />
          <p style="color:#888;font-size:13px;margin:0;">Best regards,<br/><strong style="color:#333;">The Vizo Cloud Team</strong><br/>info@vizocloud.com</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
}
