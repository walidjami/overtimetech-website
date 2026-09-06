/**
 * Shared shell for all OverTime Tech transactional emails.
 *
 * Table-based, fully inline-styled markup so it renders consistently across
 * Gmail, Apple Mail, Outlook, etc. Mirrors the site aesthetic: near-black
 * background, subtle bordered cards, a blue -> purple accent bar, white pill
 * buttons, Space Grotesk headings / Inter body (with safe fallbacks).
 */

export const BRAND = {
  name: "OverTime Tech",
  tagline: "You bring the tech, we bring the OverTime",
  // Note: the www. subdomain has no matching TLS cert — use the bare domain.
  url: "https://overtimetech.pro",
  email: "contact@overtimetech.pro",
  logo: "https://overtimetech.pro/hlogo.png",
};

export const COLORS = {
  pageBg: "#0a0a0a",
  cardBg: "#141414",
  headerBg: "#111111",
  panelBg: "#1f1f1f",
  border: "#2b2b2b",
  text: "#fafafa",
  textMuted: "#a3a3a3",
  textDim: "#737373",
  accentBlue: "#60a5fa",
  accentPurple: "#9133ea",
  buttonBg: "#ffffff",
  buttonText: "#0a0a0a",
};

const FONT_BODY =
  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";
const FONT_HEADING =
  "'Space Grotesk', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

export function escapeHtml(value: string = ""): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

interface ShellOptions {
  /** Browser tab / inbox client title. */
  title: string;
  /** Hidden inbox-preview line. */
  preheader: string;
  /** Big gradient heading at the top of the card. */
  heading: string;
  /** Inner HTML for the card body (already escaped where needed). */
  body: string;
}

/**
 * Wraps card `body` HTML in the full branded document.
 */
export function renderEmailShell({
  title,
  preheader,
  heading,
  body,
}: ShellOptions): string {
  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="x-apple-disable-message-reformatting" />
  <meta name="color-scheme" content="dark" />
  <meta name="supported-color-schemes" content="dark" />
  <title>${escapeHtml(title)}</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td, a { font-family: Arial, Helvetica, sans-serif !important; }
  </style>
  <![endif]-->
</head>
<body style="margin:0; padding:0; width:100%; background-color:${COLORS.pageBg}; -webkit-font-smoothing:antialiased;">
  <div style="display:none; max-height:0; overflow:hidden; opacity:0; mso-hide:all;">
    ${escapeHtml(preheader)}
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${COLORS.pageBg};">
    <tr>
      <td align="center" style="padding:32px 12px;">

        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px; max-width:600px;">

          <!-- Header -->
          <tr>
            <td align="center" style="background-color:${COLORS.headerBg}; border:1px solid ${COLORS.border}; border-bottom:none; border-radius:16px 16px 0 0; padding:28px 32px 24px;">
              <img src="${BRAND.logo}" alt="${escapeHtml(BRAND.name)}" width="252" height="88" style="height:88px; width:252px; max-width:100%; border:0; color:${COLORS.text}; font-family:${FONT_HEADING}; font-size:22px; font-weight:600; line-height:88px;" />
            </td>
          </tr>

          <!-- Accent bar -->
          <tr>
            <td style="height:4px; line-height:4px; font-size:4px; mso-line-height-rule:exactly; background-color:${COLORS.accentPurple}; background-image:linear-gradient(90deg, ${COLORS.accentBlue} 0%, ${COLORS.accentPurple} 100%);">&nbsp;</td>
          </tr>

          <!-- Card body -->
          <tr>
            <td style="background-color:${COLORS.cardBg}; border:1px solid ${COLORS.border}; border-top:none; border-radius:0 0 16px 16px; padding:36px 32px 40px;">
              <h1 style="margin:0 0 24px; font-family:${FONT_HEADING}; font-size:26px; line-height:1.25; font-weight:600; color:${COLORS.text};">
                ${escapeHtml(heading)}
              </h1>
              ${body}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding:28px 24px 8px;">
              <p style="margin:0 0 6px; font-family:${FONT_HEADING}; font-size:13px; font-weight:500; color:${COLORS.textMuted};">
                ${escapeHtml(BRAND.name)}
              </p>
              <p style="margin:0 0 14px; font-family:${FONT_BODY}; font-size:12px; color:${COLORS.textDim};">
                ${escapeHtml(BRAND.tagline)}
              </p>
              <p style="margin:0; font-family:${FONT_BODY}; font-size:12px; color:${COLORS.textDim};">
                <a href="${BRAND.url}" style="color:${COLORS.accentBlue}; text-decoration:none;">overtimetech.pro</a>
                &nbsp;&middot;&nbsp;
                <a href="mailto:${BRAND.email}" style="color:${COLORS.accentBlue}; text-decoration:none;">${escapeHtml(BRAND.email)}</a>
              </p>
              <p style="margin:14px 0 0; font-family:${FONT_BODY}; font-size:11px; color:${COLORS.textDim};">
                &copy; ${new Date().getFullYear()} ${escapeHtml(BRAND.name)}. All rights reserved.
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>`;
}

/** Standard body paragraph. */
export function paragraph(html: string): string {
  return `<p style="margin:0 0 16px; font-family:${FONT_BODY}; font-size:15px; line-height:1.65; color:${COLORS.textMuted};">${html}</p>`;
}

/** Bordered accent panel (used to highlight the selected service / message). */
export function panel(html: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:8px 0 24px;">
    <tr>
      <td style="background-color:${COLORS.panelBg}; border:1px solid ${COLORS.border}; border-left:3px solid ${COLORS.accentBlue}; border-radius:8px; padding:14px 18px; font-family:${FONT_BODY}; font-size:15px; line-height:1.6; color:${COLORS.text};">
        ${html}
      </td>
    </tr>
  </table>`;
}

/** White pill CTA button. */
export function button(label: string, href: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:8px 0 8px;">
    <tr>
      <td align="center" style="border-radius:9999px; background-color:${COLORS.buttonBg};">
        <a href="${href}" style="display:inline-block; padding:13px 30px; font-family:${FONT_HEADING}; font-size:14px; font-weight:600; color:${COLORS.buttonText}; text-decoration:none; border-radius:9999px;">
          ${escapeHtml(label)}
        </a>
      </td>
    </tr>
  </table>`;
}

/** Key/value detail row for the internal notification. */
export function detailRow(label: string, valueHtml: string): string {
  return `<tr>
    <td style="padding:10px 0; border-bottom:1px solid ${COLORS.border}; font-family:${FONT_BODY}; font-size:13px; font-weight:600; color:${COLORS.textDim}; width:120px; vertical-align:top; text-transform:uppercase; letter-spacing:0.04em;">
      ${escapeHtml(label)}
    </td>
    <td style="padding:10px 0; border-bottom:1px solid ${COLORS.border}; font-family:${FONT_BODY}; font-size:15px; color:${COLORS.text}; vertical-align:top;">
      ${valueHtml}
    </td>
  </tr>`;
}
