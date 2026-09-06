import {
  COLORS,
  detailRow,
  escapeHtml,
  paragraph,
  renderEmailShell,
} from "./layout";

interface ContactNotificationParams {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  service: string;
  details?: string;
}

export function contactNotificationEmail({
  first_name,
  last_name,
  email,
  phone,
  service,
  details,
}: ContactNotificationParams): string {
  const firstName = escapeHtml(first_name);
  const lastName = escapeHtml(last_name);
  const customerEmail = escapeHtml(email);
  const customerPhone = escapeHtml(phone);
  const customerService = escapeHtml(service);
  const customerDetails = escapeHtml(details || "");

  const body = `
    ${paragraph(
      `A new contact form submission just came in. Reply to this email to respond to <strong style="color:${COLORS.text};">${firstName}</strong> directly.`
    )}

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:8px 0 28px;">
      ${detailRow("Name", `${firstName} ${lastName}`)}
      ${detailRow(
        "Email",
        `<a href="mailto:${customerEmail}" style="color:${COLORS.accentBlue}; text-decoration:none;">${customerEmail}</a>`
      )}
      ${detailRow(
        "Phone",
        `<a href="tel:${customerPhone.replace(
          /[^0-9+]/g,
          ""
        )}" style="color:${COLORS.accentBlue}; text-decoration:none;">${customerPhone}</a>`
      )}
      ${detailRow("Service", customerService)}
    </table>

    <p style="margin:0 0 10px; font-family:'Space Grotesk','Inter',Arial,sans-serif; font-size:14px; font-weight:600; text-transform:uppercase; letter-spacing:0.06em; color:${COLORS.textDim};">
      Customer message
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 28px;">
      <tr>
        <td style="background-color:${COLORS.panelBg}; border:1px solid ${COLORS.border}; border-left:3px solid ${COLORS.accentBlue}; border-radius:8px; padding:16px 18px; font-family:'Inter',Arial,sans-serif; font-size:15px; line-height:1.65; color:${COLORS.text}; white-space:pre-wrap;">${
          customerDetails || "No additional details provided."
        }</td>
      </tr>
    </table>

    <p style="margin:0; padding-top:20px; border-top:1px solid ${COLORS.border}; font-family:'Inter',Arial,sans-serif; font-size:12px; color:${COLORS.textDim};">
      This submission has also been saved to the ${escapeHtml("OverTime Tech")} database.
    </p>
  `;

  return renderEmailShell({
    title: `New contact form submission — ${firstName} ${lastName}`,
    preheader: `New lead: ${first_name} ${last_name} — ${service}`,
    heading: "New contact form submission",
    body,
  });
}
