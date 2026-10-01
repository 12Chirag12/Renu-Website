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
  { name: "Tablets", code: "TB", note: "Solid oral dosage form — comprehensive tablet manufacturing capabilities" },
  { name: "Capsules", code: "CP", note: "Solid oral dosage form — hard gelatin & vegetarian capsule manufacturing" },
] as const;

export const productionCapacity = {
  annual: {
    tablets: "1500+",
    capsules: "960+",
    total: "2460+",
    unit: "million / annum",
  },
  monthly: {
    tablets: "125+",
    capsules: "80+",
    total: "205+",
    unit: "million / month",
  },
} as const;

export const servicePlaceholders = [
  "Contract manufacturing",
  "Third-party manufacturing",
  "Product development support",
  "Packaging services",
  "Documentation support",
  "Business partnership enquiries",
] as const;

