export type DepartmentType = "Production" | "Packing";

export type MachineItem = {
  name: string;
  department: DepartmentType;
  section: string;
  sectionKey: "coating" | "compression" | "granulation" | "lubrication" | "blister" | "pouching" | "striping";
  purpose: string;
  icon: "factory" | "layers" | "box" | "settings" | "shield" | "spark" | "flask" | "clipboard";
};

export type SectionGroup = {
  name: string;
  sectionKey: "coating" | "compression" | "granulation" | "lubrication" | "blister" | "pouching" | "striping";
  department: DepartmentType;
  count: number;
  description: string;
  machines: MachineItem[];
};

export const machineryData: SectionGroup[] = [
  // ── PRODUCTION DEPARTMENT (18 Machines) ──
  {
    name: "Coating",
    sectionKey: "coating",
    department: "Production",
    count: 5,
    description: "Controlled tablet-coating operations supporting consistent product appearance and finishing.",
    machines: [
      {
        name: "Autocoater",
        department: "Production",
        section: "Coating",
        sectionKey: "coating",
        purpose: "Automated perforated pan coating system for precision aqueous and organic film coating.",
        icon: "shield",
      },
      {
        name: 'Coating Pan 36"',
        department: "Production",
        section: "Coating",
        sectionKey: "coating",
        purpose: "Conventional 36-inch coating pan for controlled batch sugar and film coating applications.",
        icon: "layers",
      },
      {
        name: 'Coating Pan 48I"',
        department: "Production",
        section: "Coating",
        sectionKey: "coating",
        purpose: "48-inch coating pan unit I for medium-to-large scale tablet finishing and polishing.",
        icon: "layers",
      },
      {
        name: 'Coating Pan 48II"',
        department: "Production",
        section: "Coating",
        sectionKey: "coating",
        purpose: "48-inch coating pan unit II engineered for uniform solution spray and batch replication.",
        icon: "layers",
      },
      {
        name: 'Coating Pan 48III"',
        department: "Production",
        section: "Coating",
        sectionKey: "coating",
        purpose: "48-inch coating pan unit III dedicated to specialized protective and aesthetic tablet coats.",
        icon: "layers",
      },
    ],
  },
  {
    name: "Compression",
    sectionKey: "compression",
    department: "Production",
    count: 9,
    description: "Tablet compression equipment supporting different production requirements and station configurations.",
    machines: [
      {
        name: "Punching M/c-1[45stn]",
        department: "Production",
        section: "Compression",
        sectionKey: "compression",
        purpose: "High-speed 45-station rotary tablet punching press for continuous commercial output.",
        icon: "factory",
      },
      {
        name: "Punching M/c-2[41stn]",
        department: "Production",
        section: "Compression",
        sectionKey: "compression",
        purpose: "41-station compression press with precision weight adjustment and low friability control.",
        icon: "factory",
      },
      {
        name: "Punching M/c-3[27stn]",
        department: "Production",
        section: "Compression",
        sectionKey: "compression",
        purpose: "27-station rotary press ideal for specialized tooling, larger cores, and pilot batches.",
        icon: "factory",
      },
      {
        name: "Punching M/c-4[41stn]",
        department: "Production",
        section: "Compression",
        sectionKey: "compression",
        purpose: "41-station tablet compression machine supporting multi-parameter in-process monitoring.",
        icon: "factory",
      },
      {
        name: "Punching M/c-5[41stn]",
        department: "Production",
        section: "Compression",
        sectionKey: "compression",
        purpose: "41-station high-efficiency rotary press calibrated for uniform core hardness.",
        icon: "factory",
      },
      {
        name: "Punching M/c-6[35stn]",
        department: "Production",
        section: "Compression",
        sectionKey: "compression",
        purpose: "35-station rotary punching machine optimized for modified-shape tablets and caplets.",
        icon: "factory",
      },
      {
        name: "Punching M/c-7[75stn]",
        department: "Production",
        section: "Compression",
        sectionKey: "compression",
        purpose: "High-output 75-station double-sided rotary press for large volume tablet manufacturing.",
        icon: "factory",
      },
      {
        name: "Punching M/c-8[51stn]",
        department: "Production",
        section: "Compression",
        sectionKey: "compression",
        purpose: "51-station rotary press designed for rapid changeovers and high tooling flexibility.",
        icon: "factory",
      },
      {
        name: "Punching M/c-9[75stn]",
        department: "Production",
        section: "Compression",
        sectionKey: "compression",
        purpose: "75-station high-capacity rotary compression press built for long-run consistency.",
        icon: "factory",
      },
    ],
  },
  {
    name: "Granulation-I",
    sectionKey: "granulation",
    department: "Production",
    count: 1,
    description: "Granulation-stage equipment supporting preparation of material for tablet manufacturing.",
    machines: [
      {
        name: "PLM",
        department: "Production",
        section: "Granulation-I",
        sectionKey: "granulation",
        purpose: "Planetary / Powder Loader Mixer equipment for controlled preparation of granulation mass.",
        icon: "settings",
      },
    ],
  },
  {
    name: "Granulation-II",
    sectionKey: "granulation",
    department: "Production",
    count: 1,
    description: "Rapid mixing granulation equipment for controlled material processing.",
    machines: [
      {
        name: "RMG",
        department: "Production",
        section: "Granulation-II",
        sectionKey: "granulation",
        purpose: "Rapid Mixer Granulator for high-shear wet granulation and uniform binder dispersion.",
        icon: "settings",
      },
    ],
  },
  {
    name: "Lubrication-I",
    sectionKey: "lubrication",
    department: "Production",
    count: 1,
    description: "Blending equipment for uniform mixing during formulation processing.",
    machines: [
      {
        name: "Oct Blender",
        department: "Production",
        section: "Lubrication-I",
        sectionKey: "lubrication",
        purpose: "Octagonal blender for gentle, low-shear lubrication and uniform blend homogeneity.",
        icon: "flask",
      },
    ],
  },
  {
    name: "Lubrication-II",
    sectionKey: "lubrication",
    department: "Production",
    count: 1,
    description: "Controlled powder blending equipment supporting consistent material mixing.",
    machines: [
      {
        name: "Double Cone Blender",
        department: "Production",
        section: "Lubrication-II",
        sectionKey: "lubrication",
        purpose: "Double cone blender providing balanced tumbling action for sensitive active blends.",
        icon: "flask",
      },
    ],
  },

  // ── PACKING DEPARTMENT (11 Machines) ──
  {
    name: "Blister",
    sectionKey: "blister",
    department: "Packing",
    count: 5,
    description: "Blister packaging infrastructure for secure and professional pharmaceutical presentation.",
    machines: [
      {
        name: "Allu Allu -V",
        department: "Packing",
        section: "Blister",
        sectionKey: "blister",
        purpose: "Cold-form Alu-Alu blister packaging machine ensuring zero-moisture transmission barrier.",
        icon: "box",
      },
      {
        name: "Blister-I",
        department: "Packing",
        section: "Blister",
        sectionKey: "blister",
        purpose: "Automated rotary blister packing machine unit I for thermoformed PVC/PVDC packaging.",
        icon: "box",
      },
      {
        name: "Blister-II",
        department: "Packing",
        section: "Blister",
        sectionKey: "blister",
        purpose: "High-speed blister packaging unit II with camera inspection and leak testing integration.",
        icon: "box",
      },
      {
        name: "Blister-III",
        department: "Packing",
        section: "Blister",
        sectionKey: "blister",
        purpose: "Flexible tooling blister packing unit III for variable tablet dimensions and push-through foil.",
        icon: "box",
      },
      {
        name: "Blister-IV",
        department: "Packing",
        section: "Blister",
        sectionKey: "blister",
        purpose: "Blister packing machine unit IV calibrated for continuous batch seal integrity.",
        icon: "box",
      },
    ],
  },
  {
    name: "Pouching",
    sectionKey: "pouching",
    department: "Packing",
    count: 3,
    description: "Pouch filling equipment for efficient and reliable unit packaging.",
    machines: [
      {
        name: "Pouch Filling M/c-1",
        department: "Packing",
        section: "Pouching",
        sectionKey: "pouching",
        purpose: "Automated vertical pouch forming and filling machine unit 1 with hermetic sealing.",
        icon: "clipboard",
      },
      {
        name: "Pouch Filling M/c-2",
        department: "Packing",
        section: "Pouching",
        sectionKey: "pouching",
        purpose: "High-accuracy pouch filling machine unit 2 supporting multi-track foil laminate pouches.",
        icon: "clipboard",
      },
      {
        name: "Pouch Filling M/c-3",
        department: "Packing",
        section: "Pouching",
        sectionKey: "pouching",
        purpose: "Unit-dose pouch packaging machine unit 3 with tear-notch and batch coding integration.",
        icon: "clipboard",
      },
    ],
  },
  {
    name: "Striping",
    sectionKey: "striping",
    department: "Packing",
    count: 3,
    description: "Strip packaging equipment supporting practical and protected pharmaceutical packaging.",
    machines: [
      {
        name: "Striping M/c-1",
        department: "Packing",
        section: "Striping",
        sectionKey: "striping",
        purpose: "High-speed strip packaging machine unit 1 for poly/foil strip sealing.",
        icon: "layers",
      },
      {
        name: "Striping M/c-2",
        department: "Packing",
        section: "Striping",
        sectionKey: "striping",
        purpose: "Precision heat-seal strip packaging unit 2 engineered for light and humidity protection.",
        icon: "layers",
      },
      {
        name: "Striping M/c-3",
        department: "Packing",
        section: "Striping",
        sectionKey: "striping",
        purpose: "Strip packaging machine unit 3 supporting perforated multi-tablet consumer strips.",
        icon: "layers",
      },
    ],
  },
];

export const totalMachineryCount = machineryData.reduce((acc, sec) => acc + sec.count, 0); // 29
export const productionMachineryCount = machineryData
  .filter((s) => s.department === "Production")
  .reduce((acc, s) => acc + s.count, 0); // 18
export const packingMachineryCount = machineryData
  .filter((s) => s.department === "Packing")
  .reduce((acc, s) => acc + s.count, 0); // 11
