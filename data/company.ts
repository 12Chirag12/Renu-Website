export const company = {
  name: "Renumed Pharmaceutical Labs",
  description: "A pharmaceutical manufacturing organization focused on disciplined processes, documented operations, and responsive business support.",
  status: {
    registeredOffice: "To be confirmed",
    manufacturingUnit: "To be confirmed",
    phone: "To be confirmed",
    email: "To be confirmed",
    businessHours: "To be confirmed",
    establishmentYear: "To be confirmed",
    leadership: "To be confirmed",
  },
} as const;

export const capabilityPlaceholders = [
  { name: "Tablets", code: "TB", note: "Manufacturing capability to be confirmed" },
  { name: "Capsules", code: "CP", note: "Manufacturing capability to be confirmed" },
  { name: "Powders", code: "PW", note: "Manufacturing capability to be confirmed" },
  { name: "Liquids", code: "LQ", note: "Manufacturing capability to be confirmed" },
  { name: "External preparations", code: "EX", note: "Manufacturing capability to be confirmed" },
  { name: "Primary & secondary packaging", code: "PK", note: "Packaging capability to be confirmed" },
] as const;

export const servicePlaceholders = [
  "Contract manufacturing",
  "Third-party manufacturing",
  "Product development support",
  "Packaging services",
  "Documentation support",
  "Business partnership enquiries",
] as const;
