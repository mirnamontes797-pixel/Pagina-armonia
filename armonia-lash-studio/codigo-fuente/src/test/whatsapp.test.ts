import { describe, expect, it } from "vitest";

import { whatsappLink } from "@/lib/whatsapp";

describe("WhatsApp contact link", () => {
  it("opens a chat with Mirna's number 656 203 5427 (México +52)", () => {
    expect(whatsappLink("Hola")).toBe("https://wa.me/526562035427?text=Hola");
  });
});
