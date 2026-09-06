import {
  BRAND,
  COLORS,
  button,
  escapeHtml,
  panel,
  paragraph,
  renderEmailShell,
} from "./layout";

interface ContactConfirmationParams {
  first_name: string;
  service: string;
}

export function contactConfirmationEmail({
  first_name,
  service,
}: ContactConfirmationParams): string {
  const firstName = escapeHtml(first_name);
  const customerService = escapeHtml(service);

  const body = `
    ${paragraph(`Hi ${firstName},`)}
    ${paragraph(
      `Thanks for reaching out to <strong style="color:${COLORS.text};">${escapeHtml(
        BRAND.name
      )}</strong>. We&rsquo;ve received your message and a member of our team will review your request and get back to you as soon as possible.`
    )}
    ${paragraph(`For your reference, you contacted us about:`)}
    ${panel(customerService)}
    ${paragraph(
      `Need to add anything? Just reply to this email &mdash; it comes straight to us.`
    )}

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:24px 0 8px;">
      <tr><td align="center">
        ${button("Visit our website", BRAND.url)}
      </td></tr>
    </table>

    ${paragraph(
      `<span style="color:${COLORS.textDim}; font-size:14px;">Talk soon,<br />${escapeHtml(
        BRAND.name
      )}</span>`
    )}
  `;

  return renderEmailShell({
    title: `We've received your message — ${BRAND.name}`,
    preheader: `Thanks for contacting ${BRAND.name} — we'll be in touch shortly.`,
    heading: "Thanks for reaching out!",
    body,
  });
}
