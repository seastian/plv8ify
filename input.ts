import sh from "sanitize-html";

export function oa_sanitize_html(content: string): string {
  return sh(content, { allowedTags: [] });
}
