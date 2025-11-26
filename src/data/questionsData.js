const questionsData = {
  "UI UX Design": {
    easy: [
      {
        question: "What does UX stand for?",
        options: ["User Xperience", "User Experience", "Unique Experience", "Universal Exchange", "User Extension"],
        answer: "User Experience",
        difficulty: "easy",
      },
      {
        question: "Which software is commonly used for UI design?",
        options: ["Figma", "Excel", "Blender", "Premiere Pro", "After Effects"],
        answer: "Figma",
        difficulty: "easy",
      },
      {
        question: "UI focuses on:",
        options: ["User Interaction", "User Experience", "Database", "Backend Logic", "Networking"],
        answer: "User Interaction",
        difficulty: "easy",
      },
      {
        question: "What does a wireframe represent?",
        options: ["A final product", "A rough layout", "A code structure", "A color palette", "A user story"],
        answer: "A rough layout",
        difficulty: "easy",
      },
      {
        question: "Which is NOT a UX principle?",
        options: ["Consistency", "Feedback", "Complexity", "Usability", "Accessibility"],
        answer: "Complexity",
        difficulty: "easy",
      },
      {
        question: "Which color scheme is easier for users?",
        options: ["High contrast", "Random colors", "Flashing lights", "Neon only", "All dark"],
        answer: "High contrast",
        difficulty: "easy",
      },
      {
        question: "Personas are used to:",
        options: ["Define target users", "Create wireframes", "Test software", "Write backend code", "Host servers"],
        answer: "Define target users",
        difficulty: "easy",
      },
      {
        question: "What is the main goal of UX design?",
        options: ["Beautiful visuals", "User satisfaction", "Complex interfaces", "Fast loading only", "Color matching"],
        answer: "User satisfaction",
        difficulty: "easy",
      },
      {
        question: "What is a prototype?",
        options: ["Final version", "Interactive sample", "Code snippet", "UI library", "Logo"],
        answer: "Interactive sample",
        difficulty: "easy",
      },
      {
        question: "Which tool helps in prototyping?",
        options: ["Adobe XD", "MySQL", "React", "Firebase", "Notepad"],
        answer: "Adobe XD",
        difficulty: "easy",
      },
    ],



    medium: [
      {
        question: "What does the 'U' in UI stand for?",
        options: ["Universal", "User", "Unique", "Utility", "Unit"],
        answer: "User",
        difficulty: "medium",
      },
      {
        question: "Which of these best describes an 'Affinity Map'?",
        options: [
          "Grouping similar user insights together",
          "Mapping website structure",
          "Designing interface components",
          "Sketching color palettes",
          "Coding API endpoints",
        ],
        answer: "Grouping similar user insights together",
        difficulty: "medium",
      },
      {
        question: "What is the purpose of usability testing?",
        options: [
          "To evaluate how easy a product is to use",
          "To test server speed",
          "To check UI colors",
          "To train users",
          "To test backend APIs",
        ],
        answer: "To evaluate how easy a product is to use",
        difficulty: "medium",
      },
      {
        question: "Which UX law states that users spend most of their time on other sites?",
        options: [
          "Jakob’s Law",
          "Hick’s Law",
          "Fitts’s Law",
          "Miller’s Law",
          "Parkinson’s Law",
        ],
        answer: "Jakob’s Law",
        difficulty: "medium",
      },
      {
        question: "What does a journey map help visualize?",
        options: [
          "User’s experience across touchpoints",
          "UI components",
          "Color palettes",
          "App performance",
          "Database connections",
        ],
        answer: "User’s experience across touchpoints",
        difficulty: "medium",
      },
      {
        question: "In usability heuristics, 'visibility of system status' means:",
        options: [
          "The system keeps users informed about what’s happening",
          "Design must be colorful",
          "System should be fast",
          "UI must be responsive",
          "Users must see backend code",
        ],
        answer: "The system keeps users informed about what’s happening",
        difficulty: "medium",
      },
      {
        question: "Wireframes are usually created before:",
        options: [
          "Visual design and prototyping",
          "User interviews",
          "Product launch",
          "Server setup",
          "Testing phase",
        ],
        answer: "Visual design and prototyping",
        difficulty: "medium",
      },
      {
        question: "What’s a 'call to action' (CTA)?",
        options: [
          "An element prompting user interaction",
          "A backend trigger",
          "A design bug",
          "A logo",
          "A color contrast test",
        ],
        answer: "An element prompting user interaction",
        difficulty: "medium",
      },
      {
        question: "Which UX principle helps minimize user mistakes?",
        options: [
          "Error prevention",
          "Complexity",
          "Overdesign",
          "Flat structure",
          "Accessibility",
        ],
        answer: "Error prevention",
        difficulty: "medium",
      },
      {
        question: "What is 'responsive design'?",
        options: [
          "Adapting layout to different screen sizes",
          "Fast response time of servers",
          "Color reaction on hover",
          "Animation speed",
          "Page load optimization",
        ],
        answer: "Adapting layout to different screen sizes",
        difficulty: "medium",
      },
    ],



    hard: [
      {
        question: "Hick’s Law suggests that:",
        options: [
          "The time to make a decision increases with the number of choices",
          "Users read faster on bright screens",
          "Animations improve UX",
          "More options improve satisfaction",
          "Users prefer complex layouts",
        ],
        answer: "The time to make a decision increases with the number of choices",
        difficulty: "hard",
      },
      {
        question: "Fitts’s Law focuses on:",
        options: [
          "The relationship between target size and selection speed",
          "Color psychology",
          "Information hierarchy",
          "Typography balance",
          "Navigation order",
        ],
        answer: "The relationship between target size and selection speed",
        difficulty: "hard",
      },
      {
        question: "What does 'progressive disclosure' achieve in UX?",
        options: [
          "Shows users information as needed to reduce cognitive load",
          "Reveals all options at once",
          "Hides content permanently",
          "Animates screens continuously",
          "Displays backend logic",
        ],
        answer: "Shows users information as needed to reduce cognitive load",
        difficulty: "hard",
      },
      {
        question: "Which of these is a quantitative research method?",
        options: [
          "Surveys",
          "User interviews",
          "Focus groups",
          "Field observation",
          "Contextual inquiry",
        ],
        answer: "Surveys",
        difficulty: "hard",
      },
      {
        question: "In accessibility design, WCAG stands for:",
        options: [
          "Web Content Accessibility Guidelines",
          "World Computer Access Group",
          "Website Code Adaptation Guide",
          "Web Compliance Audit Guidelines",
          "Wide Content Access Grid",
        ],
        answer: "Web Content Accessibility Guidelines",
        difficulty: "hard",
      },
      {
        question: "What is 'card sorting' used for?",
        options: [
          "Organizing content into logical structures",
          "Measuring design quality",
          "Testing color combinations",
          "Evaluating performance",
          "Building prototypes",
        ],
        answer: "Organizing content into logical structures",
        difficulty: "hard",
      },
      {
        question: "Which metric best measures task efficiency in usability tests?",
        options: [
          "Time on task",
          "Color accuracy",
          "Bounce rate",
          "Session length",
          "Page views",
        ],
        answer: "Time on task",
        difficulty: "hard",
      },
      {
        question: "A/B testing is used to:",
        options: [
          "Compare two design variations to see which performs better",
          "Check app security",
          "Measure code efficiency",
          "Generate animations",
          "Analyze backend errors",
        ],
        answer: "Compare two design variations to see which performs better",
        difficulty: "hard",
      },
      {
        question: "What does 'contextual inquiry' involve?",
        options: [
          "Observing users in their actual environment",
          "Sending online surveys",
          "Conducting remote testing only",
          "Measuring performance metrics",
          "Building user personas",
        ],
        answer: "Observing users in their actual environment",
        difficulty: "hard",
      },
      {
        question: "What does heuristic evaluation mean?",
        options: [
          "Experts reviewing a design against usability principles",
          "Automated bug testing",
          "Surveying random users",
          "Generating AI-based designs",
          "Tracking UI performance",
        ],
        answer: "Experts reviewing a design against usability principles",
        difficulty: "hard",
      },
    ],
  },







  // "Graphic Design": [
  //   {
  //     question: "Which tool is used for vector graphics?",
  //     options: ["Adobe Illustrator", "Photoshop", "Figma", "Canva", "Blender"],
  //     answer: "Adobe Illustrator",
  //   },
  //   {
  //     question: "What does RGB stand for?",
  //     options: ["Red Green Blue", "Real Graphic Blend", "Random Gradient Balance", "Render Graph Base", "Read Gain Base"],
  //     answer: "Red Green Blue",
  //   },
  //   {
  //     question: "CMYK is used for:",
  //     options: ["Printing", "Web", "3D Design", "Animation", "Coding"],
  //     answer: "Printing",
  //   },
  //   {
  //     question: "What is typography?",
  //     options: ["Font style and arrangement", "Image layout", "3D animation", "Logo motion", "Vector scaling"],
  //     answer: "Font style and arrangement",
  //   },
  //   {
  //     question: "Which software is best for photo editing?",
  //     options: ["Photoshop", "After Effects", "Excel", "Premiere Pro", "Unity"],
  //     answer: "Photoshop",
  //   },
  //   {
  //     question: "A logo should be:",
  //     options: ["Simple and memorable", "Complex", "Colorful only", "Huge in size", "Text only"],
  //     answer: "Simple and memorable",
  //   },
  //   {
  //     question: "What is negative space?",
  //     options: ["Empty space used creatively", "Unwanted area", "Color background", "Dark mode", "Border color"],
  //     answer: "Empty space used creatively",
  //   },
  //   {
  //     question: "Which format supports transparency?",
  //     options: ["PNG", "JPG", "PDF", "BMP", "GIF"],
  //     answer: "PNG",
  //   },
  //   {
  //     question: "What’s the ideal DPI for print?",
  //     options: ["300 DPI", "72 DPI", "150 DPI", "600 DPI", "90 DPI"],
  //     answer: "300 DPI",
  //   },
  //   {
  //     question: "What’s the primary color scheme?",
  //     options: ["Red, Blue, Yellow", "Red, Green, Blue", "Cyan, Magenta, Yellow", "Orange, Green, Purple", "White, Black, Gray"],
  //     answer: "Red, Blue, Yellow",
  //   },
  // ],
  "Graphic Design": {
    easy: [
      {
        question: "Which tool is used for vector graphics?",
        options: ["Adobe Illustrator", "Photoshop", "Figma", "Canva", "Blender"],
        answer: "Adobe Illustrator",
        difficulty: "easy",
      },
      {
        question: "What does RGB stand for?",
        options: [
          "Red Green Blue",
          "Real Graphic Blend",
          "Random Gradient Balance",
          "Render Graph Base",
          "Read Gain Base",
        ],
        answer: "Red Green Blue",
        difficulty: "easy",
      },
      {
        question: "CMYK is used for:",
        options: ["Printing", "Web", "3D Design", "Animation", "Coding"],
        answer: "Printing",
        difficulty: "easy",
      },
      {
        question: "What is typography?",
        options: [
          "Font style and arrangement",
          "Image layout",
          "3D animation",
          "Logo motion",
          "Vector scaling",
        ],
        answer: "Font style and arrangement",
        difficulty: "easy",
      },
      {
        question: "Which software is best for photo editing?",
        options: [
          "Photoshop",
          "After Effects",
          "Excel",
          "Premiere Pro",
          "Unity",
        ],
        answer: "Photoshop",
        difficulty: "easy",
      },
      {
        question: "A logo should be:",
        options: [
          "Simple and memorable",
          "Complex",
          "Colorful only",
          "Huge in size",
          "Text only",
        ],
        answer: "Simple and memorable",
        difficulty: "easy",
      },
      {
        question: "What is negative space?",
        options: [
          "Empty space used creatively",
          "Unwanted area",
          "Color background",
          "Dark mode",
          "Border color",
        ],
        answer: "Empty space used creatively",
        difficulty: "easy",
      },
      {
        question: "Which format supports transparency?",
        options: ["PNG", "JPG", "PDF", "BMP", "GIF"],
        answer: "PNG",
        difficulty: "easy",
      },
      {
        question: "What’s the ideal DPI for print?",
        options: ["300 DPI", "72 DPI", "150 DPI", "600 DPI", "90 DPI"],
        answer: "300 DPI",
        difficulty: "easy",
      },
      {
        question: "What’s the primary color scheme?",
        options: [
          "Red, Blue, Yellow",
          "Red, Green, Blue",
          "Cyan, Magenta, Yellow",
          "Orange, Green, Purple",
          "White, Black, Gray",
        ],
        answer: "Red, Blue, Yellow",
        difficulty: "easy",
      },
    ],

    medium: [
      {
        question: "Which of these is a raster graphics editor?",
        options: [
          "Adobe Photoshop",
          "Adobe Illustrator",
          "CorelDRAW",
          "Sketch",
          "Figma",
        ],
        answer: "Adobe Photoshop",
        difficulty: "medium",
      },
      {
        question: "What is a mood board used for?",
        options: [
          "Collecting design inspiration and references",
          "Creating logos",
          "Testing typography",
          "Printing flyers",
          "Designing wireframes",
        ],
        answer: "Collecting design inspiration and references",
        difficulty: "medium",
      },
      {
        question: "Which color model is used for screens?",
        options: ["RGB", "CMYK", "Pantone", "Grayscale", "HEX"],
        answer: "RGB",
        difficulty: "medium",
      },
      {
        question: "What is kerning?",
        options: [
          "Adjusting space between letters",
          "Aligning text",
          "Resizing fonts",
          "Boldening text",
          "Changing color contrast",
        ],
        answer: "Adjusting space between letters",
        difficulty: "medium",
      },
      {
        question: "What does 'vector' mean in design?",
        options: [
          "Graphics based on mathematical paths",
          "Pixel-based images",
          "3D animation",
          "Photo-realistic render",
          "Rasterized content",
        ],
        answer: "Graphics based on mathematical paths",
        difficulty: "medium",
      },
      {
        question: "Which of these is NOT a design principle?",
        options: ["Balance", "Contrast", "Alignment", "Coding", "Repetition"],
        answer: "Coding",
        difficulty: "medium",
      },
      {
        question: "What is the main purpose of a grid in design?",
        options: [
          "To align elements consistently",
          "To create patterns",
          "To color backgrounds",
          "To export assets",
          "To reduce file size",
        ],
        answer: "To align elements consistently",
        difficulty: "medium",
      },
      {
        question: "What is a brand identity?",
        options: [
          "Visual representation of a brand’s personality",
          "Company name only",
          "Marketing plan",
          "Web layout",
          "Logo animation",
        ],
        answer: "Visual representation of a brand’s personality",
        difficulty: "medium",
      },
      {
        question: "What is the difference between serif and sans-serif fonts?",
        options: [
          "Serif fonts have decorative strokes; sans-serif don’t",
          "Sans-serif fonts are larger",
          "Serif fonts are only for headings",
          "Sans-serif fonts are italic",
          "Serif fonts are bolder",
        ],
        answer: "Serif fonts have decorative strokes; sans-serif don’t",
        difficulty: "medium",
      },
      {
        question: "Which tool is best for creating layouts for print?",
        options: [
          "Adobe InDesign",
          "Blender",
          "After Effects",
          "Canva",
          "Figma",
        ],
        answer: "Adobe InDesign",
        difficulty: "medium",
      },
    ],

    hard: [
      {
        question: "What does Pantone Matching System (PMS) ensure?",
        options: [
          "Color consistency across different media",
          "Faster rendering speed",
          "Pixel density management",
          "Print file compression",
          "Web-safe colors only",
        ],
        answer: "Color consistency across different media",
        difficulty: "hard",
      },
      {
        question: "What is the 'Golden Ratio' in design?",
        options: [
          "A mathematical ratio used for balanced composition",
          "A type of font scaling",
          "A color blending method",
          "A screen resolution rule",
          "A printing margin technique",
        ],
        answer: "A mathematical ratio used for balanced composition",
        difficulty: "hard",
      },
      {
        question: "What is the main advantage of using SVGs?",
        options: [
          "They scale without losing quality",
          "They load faster always",
          "They use raster pixels",
          "They are limited to web only",
          "They cannot contain color",
        ],
        answer: "They scale without losing quality",
        difficulty: "hard",
      },
      {
        question: "Which file format is best for preserving layers?",
        options: ["PSD", "JPEG", "PNG", "TIFF", "PDF"],
        answer: "PSD",
        difficulty: "hard",
      },
      {
        question: "What does visual hierarchy help with?",
        options: [
          "Guiding the viewer’s attention through design elements",
          "Balancing color contrast only",
          "Adjusting screen resolution",
          "Organizing files in folders",
          "Reducing image noise",
        ],
        answer: "Guiding the viewer’s attention through design elements",
        difficulty: "hard",
      },
      {
        question: "What is 'bleed' in printing?",
        options: [
          "Extra margin area for trimming",
          "Ink smudge issue",
          "Color mixing technique",
          "Typography effect",
          "Transparent area",
        ],
        answer: "Extra margin area for trimming",
        difficulty: "hard",
      },
      {
        question: "What is the main difference between raster and vector graphics?",
        options: [
          "Raster uses pixels; vector uses paths",
          "Vector uses pixels; raster uses lines",
          "Raster is 3D; vector is flat",
          "Raster loads faster",
          "Vector supports animation",
        ],
        answer: "Raster uses pixels; vector uses paths",
        difficulty: "hard",
      },
      {
        question: "What is 'leading' in typography?",
        options: [
          "Vertical space between lines of text",
          "Horizontal spacing",
          "Letter outline thickness",
          "Font size scaling",
          "Kerning adjustment",
        ],
        answer: "Vertical space between lines of text",
        difficulty: "hard",
      },
      {
        question: "Which color combination is best for readability?",
        options: [
          "Dark text on light background",
          "Light text on bright background",
          "Red on green",
          "Blue on black",
          "Yellow on white",
        ],
        answer: "Dark text on light background",
        difficulty: "hard",
      },
      {
        question: "Which design principle is about keeping elements aligned and visually connected?",
        options: [
          "Proximity",
          "Repetition",
          "Contrast",
          "Hierarchy",
          "Movement",
        ],
        answer: "Proximity",
        difficulty: "hard",
      },
    ],
  },








  "3D Animation": {
  "easy": [
    {
      question: "Which software is popular for 3D modeling?",
      options: ["Blender", "Photoshop", "Figma", "Premiere Pro", "Canva"],
      answer: "Blender",
      difficulty: "easy",
    },
    {
      question: "What does 3D stand for?",
      options: ["Three Dimensional", "Triple Design", "Third Degree", "Three Directional", "Three Drawing"],
      answer: "Three Dimensional",
      difficulty: "easy",
    },
    {
      question: "What does rendering mean?",
      options: ["Generating final image/video", "Modeling shapes", "Creating textures", "Color correction", "Sound editing"],
      answer: "Generating final image/video",
      difficulty: "easy",
    },
    {
      question: "Which file format is common in 3D?",
      options: [".obj", ".jpg", ".psd", ".mp3", ".docx"],
      answer: ".obj",
      difficulty: "easy",
    },
    {
      question: "What does FPS stand for?",
      options: ["Frames Per Second", "Fast Processing Speed", "File Processing System", "Final Project Setup", "Frame Pixel Size"],
      answer: "Frames Per Second",
      difficulty: "easy",
    },
    {
      question: "What’s the default render engine in Blender?",
      options: ["Cycles", "Octane", "Arnold", "V-Ray", "Redshift"],
      answer: "Cycles",
      difficulty: "easy",
    },
    {
      question: "What’s rigging used for?",
      options: ["Animating movement", "Lighting", "Camera setup", "Texture design", "Color correction"],
      answer: "Animating movement",
      difficulty: "easy",
    },
    {
      question: "What is keyframing?",
      options: ["Setting animation points", "Recording sound", "Adding background", "Model sculpting", "Color balancing"],
      answer: "Setting animation points",
      difficulty: "easy",
    },
    {
      question: "Lighting affects:",
      options: ["Mood and realism", "File size", "File name", "Textures only", "Color codes"],
      answer: "Mood and realism",
      difficulty: "easy",
    },
    {
      question: "What’s a polygon in 3D?",
      options: ["Flat surface of a model", "Color shade", "Render type", "Frame rate", "File format"],
      answer: "Flat surface of a model",
      difficulty: "easy",
    }
  ],
  "medium": [
    {
      question: "What does UV mapping do?",
      options: ["Projects 2D textures onto 3D models", "Controls lighting", "Sets animation paths", "Creates wireframes", "Applies camera angles"],
      answer: "Projects 2D textures onto 3D models",
      difficulty: "medium",
    },
    {
      question: "What is ambient occlusion used for?",
      options: ["Adding realistic shading", "Increasing file size", "Sound balancing", "Rendering faster", "Color grading"],
      answer: "Adding realistic shading",
      difficulty: "medium",
    },
    {
      question: "In 3D animation, bones are used for:",
      options: ["Controlling movement", "Coloring", "Sculpting details", "Adding textures", "Adjusting brightness"],
      answer: "Controlling movement",
      difficulty: "medium",
    },
    {
      question: "What’s the purpose of the timeline in animation software?",
      options: ["Control keyframes and animation flow", "Add lighting", "Render faster", "Adjust camera focus", "Import textures"],
      answer: "Control keyframes and animation flow",
      difficulty: "medium",
    },
    {
      question: "What is a render farm?",
      options: ["Group of computers for rendering", "3D object collection", "Camera setup", "Texture library", "Lighting tool"],
      answer: "Group of computers for rendering",
      difficulty: "medium",
    },
    {
      question: "What is motion capture?",
      options: ["Recording human movement for animation", "Editing videos", "Designing characters", "Adding sound", "Color grading"],
      answer: "Recording human movement for animation",
      difficulty: "medium",
    },
    {
      question: "Subdivision surface modeling helps in:",
      options: ["Smoothing model geometry", "Adding textures", "Rendering faster", "Editing videos", "Lighting control"],
      answer: "Smoothing model geometry",
      difficulty: "medium",
    },
    {
      question: "Which 3D principle is based on squash and stretch?",
      options: ["Animation realism", "Lighting setup", "Texture mapping", "Polygon modeling", "UV unwrapping"],
      answer: "Animation realism",
      difficulty: "medium",
    },
    {
      question: "What’s the function of a normal map?",
      options: ["Simulates surface detail without extra geometry", "Controls color palette", "Adjusts lighting intensity", "Renders faster", "Improves shadows only"],
      answer: "Simulates surface detail without extra geometry",
      difficulty: "medium",
    },
    {
      question: "What’s the role of the Graph Editor in Blender?",
      options: ["Fine-tune animation curves", "Add lighting", "Paint textures", "Manage layers", "Render objects"],
      answer: "Fine-tune animation curves",
      difficulty: "medium",
    }
  ],
  "hard": [
    {
      question: "What does inverse kinematics (IK) mean?",
      options: ["Automatic limb movement control", "Inverse lighting setup", "Render optimization", "Texture mirroring", "Camera inversion"],
      answer: "Automatic limb movement control",
      difficulty: "hard",
    },
    {
      question: "Global illumination simulates:",
      options: ["Realistic light bounce and reflection", "Sound reverberation", "Texture layering", "Motion blur", "Particle effects"],
      answer: "Realistic light bounce and reflection",
      difficulty: "hard",
    },
    {
      question: "What’s a shader in 3D rendering?",
      options: ["Program controlling surface appearance", "Render hardware", "Sound module", "Color palette", "Layer style"],
      answer: "Program controlling surface appearance",
      difficulty: "hard",
    },
    {
      question: "What’s retopology used for?",
      options: ["Optimizing mesh for animation", "Color correction", "File exporting", "Adding lighting", "Compositing scenes"],
      answer: "Optimizing mesh for animation",
      difficulty: "hard",
    },
    {
      question: "What’s the main purpose of compositing?",
      options: ["Combine multiple render passes into final output", "Render faster", "Add textures", "Animate characters", "Edit sounds"],
      answer: "Combine multiple render passes into final output",
      difficulty: "hard",
    },
    {
      question: "What’s the difference between Eevee and Cycles in Blender?",
      options: ["Eevee is real-time; Cycles is path-traced", "Eevee is for audio; Cycles for video", "Eevee is free; Cycles is paid", "Eevee is 2D; Cycles is 3D", "Eevee is for mobile only"],
      answer: "Eevee is real-time; Cycles is path-traced",
      difficulty: "hard",
    },
    {
      question: "What’s the function of the compositor in 3D software?",
      options: ["Post-process rendered images", "Create meshes", "Animate characters", "Add lighting", "Edit scripts"],
      answer: "Post-process rendered images",
      difficulty: "hard",
    },
    {
      question: "What is particle simulation used for?",
      options: ["Creating effects like smoke or fire", "Building character rigs", "Editing sound", "Rendering textures", "Drawing lines"],
      answer: "Creating effects like smoke or fire",
      difficulty: "hard",
    },
    {
      question: "What’s baking in 3D graphics?",
      options: ["Precomputing effects into textures", "Saving render settings", "Animating shadows", "Rendering video", "Color calibration"],
      answer: "Precomputing effects into textures",
      difficulty: "hard",
    },
    {
      question: "Ray tracing improves:",
      options: ["Lighting realism and reflections", "File compression", "Animation speed", "Texture drawing", "Sound effects"],
      answer: "Lighting realism and reflections",
      difficulty: "hard",
    }
  ]
},









  "Physics Fundamentals": {
  "easy": [
    {
      question: "Who proposed the laws of motion?",
      options: ["Newton", "Einstein", "Tesla", "Galileo", "Kepler"],
      answer: "Newton",
      difficulty: "easy",
    },
    {
      question: "Unit of force is:",
      options: ["Newton", "Joule", "Watt", "Meter", "Ampere"],
      answer: "Newton",
      difficulty: "easy",
    },
    {
      question: "What is acceleration?",
      options: ["Rate of change of velocity", "Constant speed", "Force applied", "Displacement", "Energy used"],
      answer: "Rate of change of velocity",
      difficulty: "easy",
    },
    {
      question: "Speed of light is approximately:",
      options: ["3×10⁸ m/s", "1×10⁶ m/s", "3×10⁵ km/s", "1×10³ m/s", "3×10² m/s"],
      answer: "3×10⁸ m/s",
      difficulty: "easy",
    },
    {
      question: "Energy is measured in:",
      options: ["Joule", "Newton", "Watt", "Meter", "Pascal"],
      answer: "Joule",
      difficulty: "easy",
    },
    {
      question: "Gravitational acceleration on Earth is:",
      options: ["9.8 m/s²", "10 m/s²", "8.9 m/s²", "9.6 m/s²", "11 m/s²"],
      answer: "9.8 m/s²",
      difficulty: "easy",
    },
    {
      question: "Power is defined as:",
      options: ["Work per unit time", "Force times distance", "Energy squared", "Mass per unit volume", "Velocity per second"],
      answer: "Work per unit time",
      difficulty: "easy",
    },
    {
      question: "Which particle carries a negative charge?",
      options: ["Electron", "Proton", "Neutron", "Nucleus", "Photon"],
      answer: "Electron",
      difficulty: "easy",
    },
    {
      question: "What is the first law of thermodynamics?",
      options: ["Energy cannot be created or destroyed", "For every action there is reaction", "Entropy always increases", "Force equals mass times acceleration", "Light travels in straight lines"],
      answer: "Energy cannot be created or destroyed",
      difficulty: "easy",
    },
    {
      question: "Which instrument measures current?",
      options: ["Ammeter", "Voltmeter", "Thermometer", "Barometer", "Altimeter"],
      answer: "Ammeter",
      difficulty: "easy",
    }
  ],
  "medium": [
    {
      question: "What type of energy is stored in a stretched spring?",
      options: ["Elastic potential energy", "Kinetic energy", "Thermal energy", "Nuclear energy", "Gravitational potential energy"],
      answer: "Elastic potential energy",
      difficulty: "medium",
    },
    {
      question: "What is momentum defined as?",
      options: ["Mass × velocity", "Force × time", "Energy × power", "Acceleration × distance", "Mass × distance"],
      answer: "Mass × velocity",
      difficulty: "medium",
    },
    {
      question: "The unit of electric charge is:",
      options: ["Coulomb", "Watt", "Joule", "Ohm", "Volt"],
      answer: "Coulomb",
      difficulty: "medium",
    },
    {
      question: "Which law explains the relationship between voltage, current, and resistance?",
      options: ["Ohm’s Law", "Newton’s Law", "Boyle’s Law", "Hooke’s Law", "Faraday’s Law"],
      answer: "Ohm’s Law",
      difficulty: "medium",
    },
    {
      question: "What happens to density when mass remains constant but volume increases?",
      options: ["It decreases", "It increases", "It remains constant", "It doubles", "It becomes zero"],
      answer: "It decreases",
      difficulty: "medium",
    },
    {
      question: "What is the SI unit of pressure?",
      options: ["Pascal", "Newton", "Watt", "Joule", "Bar"],
      answer: "Pascal",
      difficulty: "medium",
    },
    {
      question: "What kind of mirror is used in car headlights?",
      options: ["Concave mirror", "Convex mirror", "Plane mirror", "Parabolic lens", "Flat mirror"],
      answer: "Concave mirror",
      difficulty: "medium",
    },
    {
      question: "Which of the following is not a vector quantity?",
      options: ["Speed", "Velocity", "Acceleration", "Force", "Momentum"],
      answer: "Speed",
      difficulty: "medium",
    },
    {
      question: "Which physical quantity is the slope of a velocity-time graph?",
      options: ["Acceleration", "Displacement", "Speed", "Momentum", "Force"],
      answer: "Acceleration",
      difficulty: "medium",
    },
    {
      question: "What is the principle of flotation called?",
      options: ["Archimedes’ Principle", "Pascal’s Law", "Bernoulli’s Principle", "Hooke’s Law", "Newton’s Third Law"],
      answer: "Archimedes’ Principle",
      difficulty: "medium",
    }
  ],
  "hard": [
    {
      question: "According to Einstein’s equation, E = mc², what does ‘c’ represent?",
      options: ["Speed of light", "Specific heat", "Charge", "Constant of gravity", "Speed of sound"],
      answer: "Speed of light",
      difficulty: "hard",
    },
    {
      question: "What is the second law of thermodynamics about?",
      options: ["Entropy of an isolated system never decreases", "Energy cannot be created or destroyed", "Force equals mass times acceleration", "Every action has an equal reaction", "Current equals voltage divided by resistance"],
      answer: "Entropy of an isolated system never decreases",
      difficulty: "hard",
    },
    {
      question: "What is the dimensional formula of power?",
      options: ["M¹L²T⁻³", "M⁰L¹T⁻¹", "M¹L¹T⁻²", "M²L⁰T⁻³", "M¹L⁰T⁻²"],
      answer: "M¹L²T⁻³",
      difficulty: "hard",
    },
    {
      question: "Which law gives the relationship between temperature, pressure, and volume of a gas?",
      options: ["Combined Gas Law", "Boyle’s Law", "Charles’s Law", "Newton’s Law", "Hooke’s Law"],
      answer: "Combined Gas Law",
      difficulty: "hard",
    },
    {
      question: "What phenomenon explains why stars appear to twinkle?",
      options: ["Atmospheric refraction", "Reflection", "Scattering", "Diffraction", "Dispersion"],
      answer: "Atmospheric refraction",
      difficulty: "hard",
    },
    {
      question: "In nuclear fission, what particle usually initiates the reaction?",
      options: ["Neutron", "Proton", "Photon", "Electron", "Positron"],
      answer: "Neutron",
      difficulty: "hard",
    },
    {
      question: "The rate of doing work is known as:",
      options: ["Power", "Force", "Energy", "Velocity", "Acceleration"],
      answer: "Power",
      difficulty: "hard",
    },
    {
      question: "What is the escape velocity from Earth's surface?",
      options: ["11.2 km/s", "9.8 km/s", "3.0 km/s", "7.9 km/s", "12.5 km/s"],
      answer: "11.2 km/s",
      difficulty: "hard",
    },
    {
      question: "Which law explains electromagnetic induction?",
      options: ["Faraday’s Law", "Newton’s Third Law", "Hooke’s Law", "Pascal’s Law", "Boyle’s Law"],
      answer: "Faraday’s Law",
      difficulty: "hard",
    },
    {
      question: "What does Heisenberg’s uncertainty principle state?",
      options: ["You cannot know both position and momentum exactly", "Light behaves only as a wave", "Energy is quantized", "Mass and energy are equivalent", "Time dilation is constant"],
      answer: "You cannot know both position and momentum exactly",
      difficulty: "hard",
    }
  ]
},






 

  "Chemistry Reactions": {
  "easy": [
    {
      question: "What is the symbol for Sodium?",
      options: ["Na", "So", "Sn", "S", "Si"],
      answer: "Na",
      difficulty: "easy",
    },
    {
      question: "H₂O is the chemical formula for:",
      options: ["Water", "Hydrogen Peroxide", "Hydroxide", "Oxygen", "Steam"],
      answer: "Water",
      difficulty: "easy",
    },
    {
      question: "NaCl is commonly known as:",
      options: ["Salt", "Sugar", "Baking soda", "Chalk", "Vinegar"],
      answer: "Salt",
      difficulty: "easy",
    },
    {
      question: "Acids have a pH:",
      options: ["Less than 7", "Equal to 7", "Greater than 7", "Neutral", "Zero only"],
      answer: "Less than 7",
      difficulty: "easy",
    },
    {
      question: "Which gas is essential for combustion?",
      options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen", "Methane"],
      answer: "Oxygen",
      difficulty: "easy",
    },
    {
      question: "Which particle is negatively charged?",
      options: ["Electron", "Proton", "Neutron", "Ion", "Atom"],
      answer: "Electron",
      difficulty: "easy",
    },
    {
      question: "What type of reaction is photosynthesis?",
      options: ["Endothermic", "Exothermic", "Combustion", "Neutralization", "Decomposition"],
      answer: "Endothermic",
      difficulty: "easy",
    },
    {
      question: "What is the periodic table arranged by?",
      options: ["Atomic number", "Atomic mass", "Valence", "Charge", "Size"],
      answer: "Atomic number",
      difficulty: "easy",
    },
    {
      question: "The atomic number represents:",
      options: ["Number of protons", "Number of neutrons", "Mass", "Volume", "Energy level"],
      answer: "Number of protons",
      difficulty: "easy",
    },
    {
      question: "Rusting is an example of:",
      options: ["Oxidation", "Reduction", "Combustion", "Decomposition", "Neutralization"],
      answer: "Oxidation",
      difficulty: "easy",
    }
  ],
  "medium": [
    {
      question: "What is the chemical symbol for Potassium?",
      options: ["K", "P", "Pt", "Po", "Ka"],
      answer: "K",
      difficulty: "medium",
    },
    {
      question: "Which element has the chemical symbol ‘Fe’?",
      options: ["Iron", "Fluorine", "Francium", "Ferrite", "Fermium"],
      answer: "Iron",
      difficulty: "medium",
    },
    {
      question: "Which gas turns limewater milky?",
      options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium", "Methane"],
      answer: "Carbon Dioxide",
      difficulty: "medium",
    },
    {
      question: "What is formed when an acid reacts with a base?",
      options: ["Salt and water", "Oxygen", "Hydrogen gas", "Carbon dioxide", "Steam"],
      answer: "Salt and water",
      difficulty: "medium",
    },
    {
      question: "Which of these is an example of a chemical change?",
      options: ["Rusting iron", "Melting ice", "Boiling water", "Breaking glass", "Cutting paper"],
      answer: "Rusting iron",
      difficulty: "medium",
    },
    {
      question: "Which gas is released during respiration?",
      options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Methane", "Hydrogen"],
      answer: "Carbon Dioxide",
      difficulty: "medium",
    },
    {
      question: "What is the main component of natural gas?",
      options: ["Methane", "Ethane", "Propane", "Butane", "Carbon dioxide"],
      answer: "Methane",
      difficulty: "medium",
    },
    {
      question: "What is the pH of pure water?",
      options: ["7", "0", "14", "5", "10"],
      answer: "7",
      difficulty: "medium",
    },
    {
      question: "Which acid is found in vinegar?",
      options: ["Acetic acid", "Citric acid", "Sulfuric acid", "Nitric acid", "Hydrochloric acid"],
      answer: "Acetic acid",
      difficulty: "medium",
    },
    {
      question: "Which of these metals reacts vigorously with water?",
      options: ["Sodium", "Iron", "Copper", "Gold", "Silver"],
      answer: "Sodium",
      difficulty: "medium",
    }
  ],
  "hard": [
    {
      question: "What type of bond involves the sharing of electron pairs?",
      options: ["Covalent bond", "Ionic bond", "Hydrogen bond", "Metallic bond", "Van der Waals bond"],
      answer: "Covalent bond",
      difficulty: "hard",
    },
    {
      question: "Which law states that mass is conserved in a chemical reaction?",
      options: ["Law of Conservation of Mass", "Boyle’s Law", "Charles’ Law", "Avogadro’s Law", "Dalton’s Law"],
      answer: "Law of Conservation of Mass",
      difficulty: "hard",
    },
    {
      question: "Which element is used as a catalyst in the Haber process?",
      options: ["Iron", "Copper", "Zinc", "Platinum", "Nickel"],
      answer: "Iron",
      difficulty: "hard",
    },
    {
      question: "What is the pH of a strong acid close to?",
      options: ["0", "7", "10", "12", "14"],
      answer: "0",
      difficulty: "hard",
    },
    {
      question: "Which compound is produced when calcium carbonate is heated?",
      options: ["Calcium oxide", "Calcium hydroxide", "Calcium chloride", "Carbon dioxide", "Calcium nitrate"],
      answer: "Calcium oxide",
      difficulty: "hard",
    },
    {
      question: "In electrolysis, which electrode attracts cations?",
      options: ["Cathode", "Anode", "Electrolyte", "Conductor", "Insulator"],
      answer: "Cathode",
      difficulty: "hard",
    },
    {
      question: "What is Avogadro’s number approximately equal to?",
      options: ["6.022 × 10²³", "3.14", "9.8", "1.67 × 10⁻²⁷", "1.6 × 10⁻¹⁹"],
      answer: "6.022 × 10²³",
      difficulty: "hard",
    },
    {
      question: "Which of these is an example of an endothermic reaction?",
      options: ["Photosynthesis", "Combustion", "Neutralization", "Rusting", "Condensation"],
      answer: "Photosynthesis",
      difficulty: "hard",
    },
    {
      question: "Which gas is collected at the cathode during electrolysis of water?",
      options: ["Hydrogen", "Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
      answer: "Hydrogen",
      difficulty: "hard",
    },
    {
      question: "What is the oxidation state of sulfur in H₂SO₄?",
      options: ["+6", "+4", "0", "-2", "+2"],
      answer: "+6",
      difficulty: "hard",
    }
  ]
},





  "Biology Basics": {
  "easy": [
    {
      question: "The basic unit of life is:",
      options: ["Tissue", "Cell", "DNA", "Organ", "Nucleus"],
      answer: "Cell",
      difficulty: "easy",
    },
    {
      question: "DNA stands for:",
      options: ["Deoxyribonucleic Acid", "Double Nitric Acid", "Dynamic Neural Acid", "Deoxy Natural Agent", "None"],
      answer: "Deoxyribonucleic Acid",
      difficulty: "easy",
    },
    {
      question: "Plants make food by:",
      options: ["Digestion", "Photosynthesis", "Transpiration", "Respiration", "Reproduction"],
      answer: "Photosynthesis",
      difficulty: "easy",
    },
    {
      question: "Which organ pumps blood?",
      options: ["Kidney", "Brain", "Heart", "Liver", "Lungs"],
      answer: "Heart",
      difficulty: "easy",
    },
    {
      question: "Which part controls the cell?",
      options: ["Membrane", "Cytoplasm", "Nucleus", "Chloroplast", "Cell wall"],
      answer: "Nucleus",
      difficulty: "easy",
    },
    {
      question: "Humans have how many chromosomes?",
      options: ["23", "44", "46", "24", "40"],
      answer: "46",
      difficulty: "easy",
    },
    {
      question: "Which organ helps in breathing?",
      options: ["Heart", "Brain", "Liver", "Lungs", "Kidney"],
      answer: "Lungs",
      difficulty: "easy",
    },
    {
      question: "What carries oxygen in the blood?",
      options: ["White blood cells", "Plasma", "Platelets", "Red blood cells", "Lymph"],
      answer: "Red blood cells",
      difficulty: "easy",
    },
    {
      question: "Which organ filters waste from the blood?",
      options: ["Kidney", "Liver", "Heart", "Lungs", "Stomach"],
      answer: "Kidney",
      difficulty: "easy",
    },
    {
      question: "Which process do plants use to release oxygen?",
      options: ["Photosynthesis", "Respiration", "Transpiration", "Fermentation", "Excretion"],
      answer: "Photosynthesis",
      difficulty: "easy",
    }
  ],
  "medium": [
    {
      question: "Blood carries:",
      options: ["Hormones only", "Oxygen", "Light", "DNA", "Carbon dioxide"],
      answer: "Oxygen",
      difficulty: "medium",
    },
    {
      question: "Which system controls movement?",
      options: ["Digestive system", "Circulatory system", "Respiratory system", "Nervous system", "Immune system"],
      answer: "Nervous system",
      difficulty: "medium",
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Chloroplast", "Nucleus", "Ribosome", "Membrane", "Mitochondria"],
      answer: "Mitochondria",
      difficulty: "medium",
    },
    {
      question: "Which organ helps in digestion?",
      options: ["Heart", "Liver", "Stomach", "Lungs", "Kidney"],
      answer: "Stomach",
      difficulty: "medium",
    },
    {
      question: "Which hormone regulates blood sugar?",
      options: ["Insulin", "Adrenaline", "Cortisol", "Thyroxine", "Progesterone"],
      answer: "Insulin",
      difficulty: "medium",
    },
    {
      question: "Which system transports nutrients and gases?",
      options: ["Circulatory system", "Nervous system", "Digestive system", "Respiratory system", "Endocrine system"],
      answer: "Circulatory system",
      difficulty: "medium",
    },
    {
      question: "Which organ produces bile?",
      options: ["Kidney", "Liver", "Pancreas", "Spleen", "Heart"],
      answer: "Liver",
      difficulty: "medium",
    },
    {
      question: "Which blood cells help fight infection?",
      options: ["Red blood cells", "Platelets", "White blood cells", "Plasma", "Lymph"],
      answer: "White blood cells",
      difficulty: "medium",
    },
    {
      question: "Which system removes waste from the body?",
      options: ["Excretory system", "Nervous system", "Digestive system", "Circulatory system", "Respiratory system"],
      answer: "Excretory system",
      difficulty: "medium",
    },
    {
      question: "Which organelle makes proteins?",
      options: ["Ribosome", "Mitochondria", "Chloroplast", "Lysosome", "Nucleus"],
      answer: "Ribosome",
      difficulty: "medium",
    }
  ],
  "hard": [
    {
      question: "Which process produces gametes in animals?",
      options: ["Mitosis", "Fertilization", "Meiosis", "Binary fission", "Pollination"],
      answer: "Meiosis",
      difficulty: "hard",
    },
    {
      question: "Which pigment gives plants their green color?",
      options: ["Chlorophyll", "Carotene", "Xanthophyll", "Melanin", "Hemoglobin"],
      answer: "Chlorophyll",
      difficulty: "hard",
    },
    {
      question: "Which macromolecule stores genetic information?",
      options: ["Protein", "Carbohydrate", "DNA", "Lipid", "RNA"],
      answer: "DNA",
      difficulty: "hard",
    },
    {
      question: "Which organelle is responsible for protein synthesis?",
      options: ["Ribosome", "Golgi apparatus", "Mitochondria", "Nucleus", "Lysosome"],
      answer: "Ribosome",
      difficulty: "hard",
    },
    {
      question: "Which blood type is the universal donor?",
      options: ["AB+", "O-", "A+", "B+", "O+"],
      answer: "O-",
      difficulty: "hard",
    },
    {
      question: "Which part of the brain controls balance?",
      options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus", "Pons"],
      answer: "Cerebellum",
      difficulty: "hard",
    },
    {
      question: "Which process converts glucose into energy in cells?",
      options: ["Photosynthesis", "Respiration", "Fermentation", "Transpiration", "Osmosis"],
      answer: "Respiration",
      difficulty: "hard",
    },
    {
      question: "Which structure protects the cell from the environment?",
      options: ["Cell wall", "Cytoplasm", "Nucleus", "Mitochondria", "Ribosome"],
      answer: "Cell wall",
      difficulty: "hard",
    },
    {
      question: "Which system regulates hormones?",
      options: ["Endocrine system", "Nervous system", "Circulatory system", "Immune system", "Digestive system"],
      answer: "Endocrine system",
      difficulty: "hard",
    },
    {
      question: "Which organelle digests waste and cellular debris?",
      options: ["Lysosome", "Ribosome", "Nucleus", "Chloroplast", "Mitochondria"],
      answer: "Lysosome",
      difficulty: "hard",
    }
  ]
},




  "Algebra Mastery": {
  "easy": [
    {
      question: "What is x in 2x + 6 = 10?",
      options: ["4", "1", "2", "3", "5"],
      answer: "2",
      difficulty: "easy",
    },
    {
      question: "What is (3x + 2x)?",
      options: ["x²", "5x", "6x", "10", "x"],
      answer: "5x",
      difficulty: "easy",
    },
    {
      question: "If x = 2, what is 3x + 4?",
      options: ["10", "12", "8", "6", "7"],
      answer: "10",
      difficulty: "easy",
    },
    {
      question: "The opposite of addition is:",
      options: ["Division", "Subtraction", "Multiplication", "Factorization", "Square root"],
      answer: "Subtraction",
      difficulty: "easy",
    },
    {
      question: "What is 5x - 2x?",
      options: ["2x", "3x", "5", "7x", "x"],
      answer: "3x",
      difficulty: "easy",
    },
    {
      question: "Solve: 4x = 20",
      options: ["5", "6", "4", "8", "10"],
      answer: "5",
      difficulty: "easy",
    },
    {
      question: "What is the coefficient in 7x²?",
      options: ["2", "9", "x²", "x", "7"],
      answer: "7",
      difficulty: "easy",
    },
    {
      question: "Simplify: (x² × x³)",
      options: ["x⁴", "x²", "x⁵", "x³", "x⁶"],
      answer: "x⁵",
      difficulty: "easy",
    },
    {
      question: "Simplify: (2a + 3a - a)",
      options: ["3a", "2a", "4a", "5a", "a"],
      answer: "4a",
      difficulty: "easy",
    },
    {
      question: "Simplify: (x + 2)(x + 3)",
      options: ["x² + 5x + 9", "x² + 2x + 3", "x² + 5x + 6", "x² + 6x + 5", "x² + 3x + 2"],
      answer: "x² + 5x + 6",
      difficulty: "easy",
    }
  ],
  "medium": [
    {
      question: "Simplify: 6x - 4 + 3x + 2",
      options: ["9x - 2", "9x + 2", "3x - 2", "6x + 2", "9x - 6"],
      answer: "9x - 2",
      difficulty: "medium",
    },
    {
      question: "Factorize: x² + 5x + 6",
      options: ["(x + 2)(x + 3)", "(x + 1)(x + 6)", "(x + 3)(x + 4)", "(x + 2)(x + 2)", "(x + 6)(x + 1)"],
      answer: "(x + 2)(x + 3)",
      difficulty: "medium",
    },
    {
      question: "Solve for x: 3x - 7 = 8",
      options: ["5", "3", "7", "8", "x = 5"],
      answer: "5",
      difficulty: "medium",
    },
    {
      question: "Simplify: 2(x + 3) + 4",
      options: ["2x + 10", "2x + 7", "2x + 6", "x + 7", "2x + 4"],
      answer: "2x + 10",
      difficulty: "medium",
    },
    {
      question: "What is the square of (x + 4)?",
      options: ["x² + 8x + 16", "x² + 4x + 8", "x² + 16", "x² + 4x + 16", "x² + 8x + 4"],
      answer: "x² + 8x + 16",
      difficulty: "medium",
    },
    {
      question: "Combine like terms: 5a + 2b - 3a + b",
      options: ["2a + 3b", "5a + 3b", "2a + 2b", "3a + 3b", "5a + 2b"],
      answer: "2a + 3b",
      difficulty: "medium",
    },
    {
      question: "Simplify: 4(x - 2) + 3",
      options: ["4x - 5", "4x - 8", "4x + 5", "4x - 4", "x - 5"],
      answer: "4x - 5",
      difficulty: "medium",
    },
    {
      question: "What is the value of x if 5x + 2 = 17?",
      options: ["3", "2", "5", "4", "x = 3"],
      answer: "3",
      difficulty: "medium",
    },
    {
      question: "Factorize: x² - 9",
      options: ["(x - 3)(x + 3)", "(x + 3)(x + 3)", "(x - 9)(x + 1)", "(x - 1)(x + 9)", "(x - 3)(x - 3)"],
      answer: "(x - 3)(x + 3)",
      difficulty: "medium",
    },
    {
      question: "Simplify: 3(x + 2) - 4",
      options: ["3x + 2", "3x + 2", "3x + 6 - 4", "3x + 6 - 4", "3x + 2"],
      answer: "3x + 2",
      difficulty: "medium",
    }
  ],
  "hard": [
    {
      question: "Solve: 2x² - 8x = 0",
      options: ["x(2x - 8)", "x(2x + 8)", "2x² - 8x = 0", "x = 0 or x = 4", "x² - 4x = 0"],
      answer: "x = 0 or x = 4",
      difficulty: "hard",
    },
    {
      question: "Solve: x² - 5x + 6 = 0",
      options: ["(x - 3)(x - 2)", "(x + 3)(x + 2)", "(x - 6)(x - 1)", "(x - 2)(x + 3)", "(x - 1)(x - 6)"],
      answer: "(x - 3)(x - 2)",
      difficulty: "hard",
    },
    {
      question: "Simplify: (x + 2)² - (x - 1)²",
      options: ["6x + 3", "x² + 4x + 4 - x² + 2x - 1", "3x + 3", "x² + 4x + 5", "x² - 1"],
      answer: "6x + 3",
      difficulty: "hard",
    },
    {
      question: "Factorize completely: x² + 7x + 12",
      options: ["(x + 3)(x + 4)", "(x + 1)(x + 12)", "(x + 2)(x + 6)", "(x + 4)(x + 3)", "(x + 12)(x + 1)"],
      answer: "(x + 3)(x + 4)",
      difficulty: "hard",
    },
    {
      question: "Solve: 3x² - 12 = 0",
      options: ["x² = 4", "x = ±2", "x = 2", "x² = 12", "x² = 3"],
      answer: "x = ±2",
      difficulty: "hard",
    },
    {
      question: "Simplify: (2x + 3)(x - 4)",
      options: ["2x² - 5x - 12", "2x² - 5x + 12", "2x² - 8x + 12", "2x² + 3x - 8", "2x² + 3x - 12"],
      answer: "2x² - 5x - 12",
      difficulty: "hard",
    },
    {
      question: "Solve for x: x² + 6x + 9 = 0",
      options: ["x = -3", "x = 3", "x = 0", "x = -9", "x = 9"],
      answer: "x = -3",
      difficulty: "hard",
    },
    {
      question: "Factorize: 4x² - 25",
      options: ["(2x - 5)(2x + 5)", "(4x - 5)(x + 5)", "(2x - 25)(2x + 1)", "(4x - 25)(x + 1)", "(2x - 5)²"],
      answer: "(2x - 5)(2x + 5)",
      difficulty: "hard",
    },
    {
      question: "Simplify: (x - 2)(x + 5) - (x + 1)(x - 3)",
      options: ["6x - 7", "x² + 3x - 10", "x² + 3x + 6", "6x + 7", "x² - 2x - 15"],
      answer: "6x - 7",
      difficulty: "hard",
    },
    {
      question: "Solve: 2x² + 5x - 3 = 0",
      options: ["x = 1/2 or x = -3", "x = -3/2 or x = 1", "x = 3 or x = -1/2", "x = -1/2 or x = 3", "x = 1 or x = -3/2"],
      answer: "x = -3/2 or x = 1",
      difficulty: "hard",
    }
  ]
},





  "Geometry Challenges": {
  "easy": [
    {
      question: "Sum of angles in a triangle is:",
      options: ["180°", "90°", "360°", "120°", "270°"],
      answer: "180°",
      difficulty: "easy",
    },
    {
      question: "A square has how many equal sides?",
      options: ["2", "3", "1", "4", "0"],
      answer: "4",
      difficulty: "easy",
    },
    {
      question: "A right angle measures:",
      options: ["90°", "60°", "45°", "30°", "180°"],
      answer: "90°",
      difficulty: "easy",
    },
    {
      question: "Area of a rectangle =",
      options: ["2l + 2b", "length × breadth", "side²", "πr²", "base × height / 2"],
      answer: "length × breadth",
      difficulty: "easy",
    },
    {
      question: "Perimeter of a square =",
      options: ["4 × side", "2 × side", "side²", "3 × side", "side + side"],
      answer: "4 × side",
      difficulty: "easy",
    },
    {
      question: "A circle has how many sides?",
      options: ["1", "0", "2", "3", "Infinite"],
      answer: "0",
      difficulty: "easy",
    },
    {
      question: "Diameter =",
      options: ["radius / 2", "2 × radius", "πr", "r²", "radius × 3"],
      answer: "2 × radius",
      difficulty: "easy",
    },
    {
      question: "Number of sides in a hexagon:",
      options: ["5", "6", "7", "8", "4"],
      answer: "6",
      difficulty: "easy",
    },
    {
      question: "Area of a triangle =",
      options: ["½ × base × height", "base × height", "side²", "πr²", "length × breadth"],
      answer: "½ × base × height",
      difficulty: "easy",
    },
    {
      question: "Circumference of a circle =",
      options: ["πr²", "2πr", "r²", "π/2", "r×r"],
      answer: "2πr",
      difficulty: "easy",
    }
  ],
  "medium": [
    {
      question: "Sum of interior angles of a quadrilateral:",
      options: ["360°", "180°", "270°", "90°", "540°"],
      answer: "360°",
      difficulty: "medium",
    },
    {
      question: "Area of a parallelogram =",
      options: ["base × height", "side²", "½ × base × height", "2 × base + 2 × height", "length × breadth"],
      answer: "base × height",
      difficulty: "medium",
    },
    {
      question: "Volume of a cube =",
      options: ["side³", "3 × side", "side²", "2 × side³", "side × 4"],
      answer: "side³",
      difficulty: "medium",
    },
    {
      question: "Perimeter of a rectangle =",
      options: ["2(l + b)", "l × b", "l + b", "4 × l", "2l × b"],
      answer: "2(l + b)",
      difficulty: "medium",
    },
    {
      question: "Area of a trapezium =",
      options: ["½ × (a + b) × h", "a × b × h", "a + b × h", "2(a + b)", "a × h"],
      answer: "½ × (a + b) × h",
      difficulty: "medium",
    },
    {
      question: "Number of diagonals in a pentagon:",
      options: ["5", "7", "10", "3", "2"],
      answer: "5",
      difficulty: "medium",
    },
    {
      question: "Volume of a cylinder =",
      options: ["πr²h", "2πr²h", "πr²", "πdh", "r²h"],
      answer: "πr²h",
      difficulty: "medium",
    },
    {
      question: "Pythagoras theorem relates:",
      options: ["Sides of a right triangle", "Angles of a triangle", "Perimeter of square", "Area of circle", "Volume of cube"],
      answer: "Sides of a right triangle",
      difficulty: "medium",
    },
    {
      question: "Number of faces in a cube:",
      options: ["8", "6", "4", "12", "10"],
      answer: "6",
      difficulty: "medium",
    },
    {
      question: "Volume of a sphere =",
      options: ["4/3πr³", "πr³", "2πr³", "πr²h", "4πr²"],
      answer: "4/3πr³",
      difficulty: "medium",
    }
  ],
  "hard": [
    {
      question: "Sum of exterior angles of any polygon:",
      options: ["360°", "180°", "540°", "720°", "90°"],
      answer: "360°",
      difficulty: "hard",
    },
    {
      question: "Area of a regular hexagon with side 'a' =",
      options: ["(3√3/2)a²", "3a²", "2a²", "√3a²", "(√3/2)a²"],
      answer: "(3√3/2)a²",
      difficulty: "hard",
    },
    {
      question: "Volume of a cone =",
      options: ["1/3πr²h", "πr²h", "2/3πr²h", "4/3πr²h", "πr³h"],
      answer: "1/3πr²h",
      difficulty: "hard",
    },
    {
      question: "Area of a circle sector =",
      options: ["½ r²θ", "πr²", "r²θ", "rθ", "2πrθ"],
      answer: "½ r²θ",
      difficulty: "hard",
    },
    {
      question: "Length of diagonal in a square with side 'a' =",
      options: ["a√2", "2a", "a²", "a/2", "√a"],
      answer: "a√2",
      difficulty: "hard",
    },
    {
      question: "Surface area of a sphere =",
      options: ["4πr²", "2πr²", "πr²", "6πr²", "8πr²"],
      answer: "4πr²",
      difficulty: "hard",
    },
    {
      question: "Volume of a rectangular prism =",
      options: ["l × b × h", "2(l + b + h)", "l + b + h", "l × b + h", "l² × b² × h²"],
      answer: "l × b × h",
      difficulty: "hard",
    },
    {
      question: "Number of edges in a cube:",
      options: ["12", "8", "6", "16", "10"],
      answer: "12",
      difficulty: "hard",
    },
    {
      question: "Interior angle of a regular octagon =",
      options: ["135°", "120°", "140°", "150°", "160°"],
      answer: "135°",
      difficulty: "hard",
    },
    {
      question: "Diagonal of a rectangle with sides l and b =",
      options: ["√(l² + b²)", "l + b", "2(l + b)", "l × b", "√(l² - b²)"],
      answer: "√(l² + b²)",
      difficulty: "hard",
    }
  ]
},







  "Calculus Practice": {
  "easy": [
    {
      question: "Derivative of x² is:",
      options: ["x²", "2x", "1", "x", "x³"],
      answer: "2x",
      difficulty: "easy",
    },
    {
      question: "Integral of 2x dx is:",
      options: ["x² + C", "2x + C", "x³ + C", "x²", "3x + C"],
      answer: "x² + C",
      difficulty: "easy",
    },
    {
      question: "Slope of a constant function is:",
      options: ["0", "1", "2", "Undefined", "Depends"],
      answer: "0",
      difficulty: "easy",
    },
    {
      question: "Derivative of sin(x) is:",
      options: ["cos(x)", "-cos(x)", "tan(x)", "-sin(x)", "sec(x)"],
      answer: "cos(x)",
      difficulty: "easy",
    },
    {
      question: "Derivative of eˣ is:",
      options: ["x", "eˣ", "ln(x)", "1", "0"],
      answer: "eˣ",
      difficulty: "easy",
    },
    {
      question: "If dy/dx = 0, function is:",
      options: ["Linear", "Quadratic", "Constant", "Cubic", "Undefined"],
      answer: "Constant",
      difficulty: "easy",
    },
    {
      question: "The integral of 1/x dx is:",
      options: ["ln|x| + C", "1/x + C", "x² + C", "x + C", "eˣ + C"],
      answer: "ln|x| + C",
      difficulty: "easy",
    },
    {
      question: "d/dx of ln(x) =",
      options: ["1/x", "x", "x²", "eˣ", "log(x)"],
      answer: "1/x",
      difficulty: "easy",
    },
    {
      question: "d/dx of cos(x) =",
      options: ["-sin(x)", "sin(x)", "-cos(x)", "tan(x)", "sec²(x)"],
      answer: "-sin(x)",
      difficulty: "easy",
    },
    {
      question: "The integral of 0 dx is:",
      options: ["0", "x", "1", "C", "Undefined"],
      answer: "C",
      difficulty: "easy",
    }
  ],
  "medium": [
    {
      question: "Derivative of x³ is:",
      options: ["3x²", "x²", "x³", "3x", "1"],
      answer: "3x²",
      difficulty: "medium",
    },
    {
      question: "Integral of x dx is:",
      options: ["x²/2 + C", "x + C", "1/2 + C", "x² + C", "2x + C"],
      answer: "x²/2 + C",
      difficulty: "medium",
    },
    {
      question: "Derivative of tan(x) is:",
      options: ["sec²(x)", "cot²(x)", "csc(x)", "tan(x)", "-sec²(x)"],
      answer: "sec²(x)",
      difficulty: "medium",
    },
    {
      question: "Integral of e^(2x) dx is:",
      options: ["(1/2)e^(2x) + C", "e^(2x) + C", "2e^(2x) + C", "ln(e^(2x)) + C", "C"],
      answer: "(1/2)e^(2x) + C",
      difficulty: "medium",
    },
    {
      question: "Second derivative of x² is:",
      options: ["2", "0", "x", "x²", "1"],
      answer: "2",
      difficulty: "medium",
    },
    {
      question: "Derivative of ln(x²) =",
      options: ["2/x", "ln(x)", "1/x²", "x²", "2x"],
      answer: "2/x",
      difficulty: "medium",
    },
    {
      question: "Integral of cos(x) dx =",
      options: ["sin(x) + C", "-sin(x) + C", "cos(x) + C", "-cos(x) + C", "tan(x) + C"],
      answer: "sin(x) + C",
      difficulty: "medium",
    },
    {
      question: "d/dx of 1/x =",
      options: ["-1/x²", "1/x²", "1/x", "-x", "0"],
      answer: "-1/x²",
      difficulty: "medium",
    },
    {
      question: "Integral of 3x² dx =",
      options: ["x³ + C", "3x² + C", "x² + C", "1/3 x³ + C", "C"],
      answer: "x³ + C",
      difficulty: "medium",
    },
    {
      question: "Derivative of e^(3x) is:",
      options: ["3e^(3x)", "e^(3x)", "e^x", "ln(3x)", "0"],
      answer: "3e^(3x)",
      difficulty: "medium",
    }
  ],
  "hard": [
    {
      question: "Derivative of sin²(x) =",
      options: ["2sin(x)cos(x)", "sin(x)", "cos²(x)", "sin²(x)", "-2sin(x)cos(x)"],
      answer: "2sin(x)cos(x)",
      difficulty: "hard",
    },
    {
      question: "Integral of 1/(1+x²) dx =",
      options: ["arctan(x) + C", "ln|x| + C", "1/(1+x²) + C", "x + C", "arcsin(x) + C"],
      answer: "arctan(x) + C",
      difficulty: "hard",
    },
    {
      question: "Derivative of arctan(x) =",
      options: ["1/(1+x²)", "1/x", "x²", "-1/(1+x²)", "ln|x|"],
      answer: "1/(1+x²)",
      difficulty: "hard",
    },
    {
      question: "Integral of sec²(x) dx =",
      options: ["tan(x) + C", "sec(x) + C", "cos(x) + C", "sin(x) + C", "-tan(x) + C"],
      answer: "tan(x) + C",
      difficulty: "hard",
    },
    {
      question: "d/dx of x^x =",
      options: ["x^x(1 + ln(x))", "x^(x-1)", "x^(x+1)", "ln(x)", "x^x"],
      answer: "x^x(1 + ln(x))",
      difficulty: "hard",
    },
    {
      question: "Integral of e^(-x) dx =",
      options: ["-e^(-x) + C", "e^(-x) + C", "1 + C", "-1 + C", "0"],
      answer: "-e^(-x) + C",
      difficulty: "hard",
    },
    {
      question: "Derivative of ln(sin(x)) =",
      options: ["cot(x)", "tan(x)", "1/sin(x)", "-cot(x)", "sin(x)"],
      answer: "cot(x)",
      difficulty: "hard",
    },
    {
      question: "Integral of x e^x dx =",
      options: ["e^x(x-1) + C", "e^x + C", "xe^x + C", "x² e^x + C", "1 + C"],
      answer: "e^x(x-1) + C",
      difficulty: "hard",
    },
    {
      question: "Derivative of ln(x² + 1) =",
      options: ["2x/(x²+1)", "1/(x²+1)", "ln(x²+1)", "x²+1", "-2x/(x²+1)"],
      answer: "2x/(x²+1)",
      difficulty: "hard",
    },
    {
      question: "Integral of 1/√(1-x²) dx =",
      options: ["arcsin(x) + C", "arccos(x) + C", "arctan(x) + C", "1/√(1-x²) + C", "-arcsin(x) + C"],
      answer: "arcsin(x) + C",
      difficulty: "hard",
    }
  ]
},






"Web Development": {
  "easy": [
    {
      question: "HTML stands for:",
      options: ["HyperText Markup Language", "HyperType Mark Language", "HighText Machine Learning", "HyperText Multi Language", "None"],
      answer: "HyperText Markup Language",
      difficulty: "easy",
    },
    {
      question: "CSS is used for:",
      options: ["Logic", "Server", "Debugging", "Styling", "Database"],
      answer: "Styling",
      difficulty: "easy",
    },
    {
      question: "JavaScript is:",
      options: ["Framework", "Database tool", "A scripting language", "Server only", "Markup language"],
      answer: "A scripting language",
      difficulty: "easy",
    },
    {
      question: "React is developed by:",
      options: ["Microsoft", "Netflix", "Facebook", "Apple", "Google"],
      answer: "Facebook",
      difficulty: "easy",
    },
    {
      question: "Which tag defines a hyperlink?",
      options: ["<link>", "<a>", "<p>", "<div>", "<href>"],
      answer: "<a>",
      difficulty: "easy",
    },
    {
      question: "What does DOM stand for?",
      options: ["Document Operating Mode", "Data Object Method", "Document Object Model", "Dynamic Output Machine", "Desktop Object Model"],
      answer: "Document Object Model",
      difficulty: "easy",
    },
    {
      question: "Which CSS property changes text color?",
      options: ["fill", "color", "font", "background", "text-style"],
      answer: "color",
      difficulty: "easy",
    },
    {
      question: "In React, state is:",
      options: ["Library", "A component’s data", "CSS class", "Router", "Global variable"],
      answer: "A component’s data",
      difficulty: "easy",
    },
    {
      question: "What does API stand for?",
      options: ["Applied Program Input", "Application Programming Interface", "Active Process Integration", "Automated Process Info", "App Protocol Interface"],
      answer: "Application Programming Interface",
      difficulty: "easy",
    },
    {
      question: "Which HTTP method is used to fetch data?",
      options: ["PATCH", "GET", "POST", "PUT", "DELETE"],
      answer: "GET",
      difficulty: "easy",
    }
  ],
  "medium": [
    {
      question: "What does the <head> tag contain?",
      options: ["Metadata", "Body content", "Scripts only", "Links only", "Images only"],
      answer: "Metadata",
      difficulty: "medium",
    },
    {
      question: "Which CSS property controls spacing between lines?",
      options: ["line-height", "letter-spacing", "margin", "padding", "font-size"],
      answer: "line-height",
      difficulty: "medium",
    },
    {
      question: "In React, useEffect is used for:",
      options: ["Side effects", "Routing", "Styling", "State", "Rendering JSX"],
      answer: "Side effects",
      difficulty: "medium",
    },
    {
      question: "Bootstrap is a:",
      options: ["CSS framework", "JavaScript library", "Database", "Server", "Programming language"],
      answer: "CSS framework",
      difficulty: "medium",
    },
    {
      question: "Which HTML element is used for a numbered list?",
      options: ["<ol>", "<ul>", "<li>", "<dl>", "<list>"],
      answer: "<ol>",
      difficulty: "medium",
    },
    {
      question: "Which JavaScript method converts JSON to object?",
      options: ["JSON.parse()", "JSON.stringify()", "Object.toJSON()", "parseJSON()", "convertJSON()"],
      answer: "JSON.parse()",
      difficulty: "medium",
    },
    {
      question: "Which HTTP status code means 'Not Found'?",
      options: ["404", "200", "500", "301", "403"],
      answer: "404",
      difficulty: "medium",
    },
    {
      question: "Which attribute in HTML specifies inline styles?",
      options: ["style", "class", "id", "css", "link"],
      answer: "style",
      difficulty: "medium",
    },
    {
      question: "Which JavaScript operator is used for strict equality?",
      options: ["===", "==", "=", "!==", "!="],
      answer: "===",
      difficulty: "medium",
    },
    {
      question: "Which CSS unit is relative to the root font-size?",
      options: ["rem", "em", "px", "%", "vh"],
      answer: "rem",
      difficulty: "medium",
    }
  ],
  "hard": [
    {
      question: "What is the difference between var, let, and const in JS?",
      options: ["Scope and reassignability", "Data type", "Function type", "Browser compatibility", "Memory usage"],
      answer: "Scope and reassignability",
      difficulty: "hard",
    },
    {
      question: "Which hook in React manages local component state?",
      options: ["useState", "useEffect", "useRef", "useContext", "useReducer"],
      answer: "useState",
      difficulty: "hard",
    },
    {
      question: "Which HTTP method is idempotent?",
      options: ["GET", "POST", "PATCH", "DELETE", "PUT"],
      answer: "PUT",
      difficulty: "hard",
    },
    {
      question: "What is CORS used for?",
      options: ["Controlling cross-origin requests", "Styling pages", "Database connections", "Routing", "Event handling"],
      answer: "Controlling cross-origin requests",
      difficulty: "hard",
    },
    {
      question: "Which JS function runs after the page loads completely?",
      options: ["window.onload", "document.ready", "setTimeout()", "setInterval()", "DOMContentLoaded"],
      answer: "window.onload",
      difficulty: "hard",
    },
    {
      question: "In React, what is a Higher-Order Component?",
      options: ["Function that returns a component", "Class component", "Pure function", "Hook", "Context provider"],
      answer: "Function that returns a component",
      difficulty: "hard",
    },
    {
      question: "Which CSS property enables flexbox layout?",
      options: ["display", "flex", "justify-content", "align-items", "position"],
      answer: "display",
      difficulty: "hard",
    },
    {
      question: "What is the difference between relative and absolute positioning in CSS?",
      options: ["Reference point differs", "Color changes", "Z-index differs", "Font changes", "Margin differs"],
      answer: "Reference point differs",
      difficulty: "hard",
    },
    {
      question: "Which JS array method returns a new array with elements that pass a test?",
      options: ["filter()", "map()", "reduce()", "forEach()", "find()"],
      answer: "filter()",
      difficulty: "hard",
    },
    {
      question: "Which HTML5 element is used to embed videos?",
      options: ["<video>", "<audio>", "<embed>", "<object>", "<media>"],
      answer: "<video>",
      difficulty: "hard",
    }
  ]
},








  "App Development": {
  "easy": [
    {
      question: "Android apps are mostly written in:",
      options: ["Kotlin", "Swift", "JavaScript", "Python", "C++"],
      answer: "Kotlin",
      difficulty: "easy",
    },
    {
      question: "iOS apps use:",
      options: ["Swift", "Kotlin", "Java", "React", "C"],
      answer: "Swift",
      difficulty: "easy",
    },
    {
      question: "React Native is for:",
      options: ["Mobile development", "Desktop", "Backend", "Games", "AI"],
      answer: "Mobile development",
      difficulty: "easy",
    },
    {
      question: "Which file format is an Android app package?",
      options: [".apk", ".ipa", ".exe", ".zip", ".app"],
      answer: ".apk",
      difficulty: "easy",
    },
    {
      question: "Xcode is used for:",
      options: ["iOS development", "Android", "Web", "API", "AI"],
      answer: "iOS development",
      difficulty: "easy",
    },
    {
      question: "Which platform uses Play Console?",
      options: ["Android", "iOS", "Windows", "macOS", "Linux"],
      answer: "Android",
      difficulty: "easy",
    },
    {
      question: "Firebase is used for:",
      options: ["Backend", "Frontend", "UI design", "Color scheme", "3D rendering"],
      answer: "Backend",
      difficulty: "easy",
    },
    {
      question: "Flutter is:",
      options: ["A UI toolkit", "Database", "API", "IDE", "Server"],
      answer: "A UI toolkit",
      difficulty: "easy",
    },
    {
      question: "What language is used in Flutter?",
      options: ["Dart", "Java", "Swift", "JS", "Python"],
      answer: "Dart",
      difficulty: "easy",
    },
    {
      question: "Which command runs a Flutter app?",
      options: ["flutter run", "npm start", "yarn dev", "flutter build", "expo start"],
      answer: "flutter run",
      difficulty: "easy",
    }
  ],
  "medium": [
    {
      question: "Which database is commonly used with Firebase?",
      options: ["Firestore", "MySQL", "PostgreSQL", "MongoDB", "SQLite"],
      answer: "Firestore",
      difficulty: "medium",
    },
    {
      question: "Hot reload is a feature of:",
      options: ["Flutter", "React Native", "Xcode", "Android Studio", "VS Code"],
      answer: "Flutter",
      difficulty: "medium",
    },
    {
      question: "Which of these is used for native iOS UI design?",
      options: ["Storyboard", "XML", "HTML", "CSS", "Dart"],
      answer: "Storyboard",
      difficulty: "medium",
    },
    {
      question: "Which language is used for Android development besides Kotlin?",
      options: ["Java", "Swift", "Python", "C#", "Dart"],
      answer: "Java",
      difficulty: "medium",
    },
    {
      question: "Expo is related to:",
      options: ["React Native", "Flutter", "SwiftUI", "Kotlin", "JavaFX"],
      answer: "React Native",
      difficulty: "medium",
    },
    {
      question: "Which IDE is preferred for Android development?",
      options: ["Android Studio", "Xcode", "VS Code", "IntelliJ", "Eclipse"],
      answer: "Android Studio",
      difficulty: "medium",
    },
    {
      question: "Which feature allows using native device capabilities in React Native?",
      options: ["Native Modules", "Hot Reload", "Widget", "Storyboard", "Package Manager"],
      answer: "Native Modules",
      difficulty: "medium",
    },
    {
      question: "Dart is primarily used with:",
      options: ["Flutter", "React Native", "Android Studio", "Xcode", "Unity"],
      answer: "Flutter",
      difficulty: "medium",
    },
    {
      question: "Which Firebase service handles authentication?",
      options: ["Firebase Auth", "Firestore", "Firebase Storage", "Realtime Database", "Firebase Hosting"],
      answer: "Firebase Auth",
      difficulty: "medium",
    },
    {
      question: "Which is a cross-platform mobile framework?",
      options: ["Flutter", "Xcode", "SwiftUI", "Kotlin Native", "Android Studio"],
      answer: "Flutter",
      difficulty: "medium",
    }
  ],
  "hard": [
    {
      question: "Which architecture pattern is commonly used in Flutter?",
      options: ["BLoC", "MVC", "MVVM", "Singleton", "Observer"],
      answer: "BLoC",
      difficulty: "hard",
    },
    {
      question: "Which of these optimizes React Native performance?",
      options: ["Use PureComponent", "Use CSS Grid", "Use Flutter Widgets", "Use Storyboard", "Use XML Layouts"],
      answer: "Use PureComponent",
      difficulty: "hard",
    },
    {
      question: "Which tool bundles JavaScript code in React Native?",
      options: ["Metro Bundler", "Webpack", "Parcel", "Babel", "Rollup"],
      answer: "Metro Bundler",
      difficulty: "hard",
    },
    {
      question: "Which testing framework is used for Flutter unit tests?",
      options: ["Flutter Test", "JUnit", "Mocha", "PyTest", "Karma"],
      answer: "Flutter Test",
      difficulty: "hard",
    },
    {
      question: "Which package manager is used for React Native?",
      options: ["npm", "pip", "gem", "composer", "cargo"],
      answer: "npm",
      difficulty: "hard",
    },
    {
      question: "Which Flutter widget is used for scrolling lists?",
      options: ["ListView", "Column", "Row", "Stack", "GridView"],
      answer: "ListView",
      difficulty: "hard",
    },
    {
      question: "Which command builds a release APK in Flutter?",
      options: ["flutter build apk", "flutter run", "flutter test", "npm run build", "yarn build"],
      answer: "flutter build apk",
      difficulty: "hard",
    },
    {
      question: "Which of these helps manage app state in Flutter?",
      options: ["Provider", "Redux", "Bloc", "All of the above", "None of the above"],
      answer: "All of the above",
      difficulty: "hard",
    },
    {
      question: "Which Firebase service stores files like images or videos?",
      options: ["Firebase Storage", "Firestore", "Realtime Database", "Firebase Auth", "Hosting"],
      answer: "Firebase Storage",
      difficulty: "hard",
    },
    {
      question: "Which widget is used for adaptive layout in Flutter?",
      options: ["LayoutBuilder", "Stack", "Row", "Column", "Container"],
      answer: "LayoutBuilder",
      difficulty: "hard",
    }
  ]
},






    "Computer Science": {
  "easy": [
    {
      question: "What does CPU stand for?",
      options: [
        "Central Programming Unit",
        "Central Processing Unit",
        "Computer Processing Utility",
        "Central Power Unit",
        "Core Programming Unit"
      ],
      answer: "Central Processing Unit",
      difficulty: "easy",
      
    },
    {
      question: "Which data structure uses FIFO (First In, First Out)?",
      options: ["Stack", "Queue", "Array", "Tree", "Graph"],
      answer: "Queue",
      difficulty: "easy",
    },
    {
      question: "What does RAM stand for?",
      options: [
        "Random Access Memory",
        "Read Access Memory",
        "Rapid Action Memory",
        "Read After Memory",
        "Run Access Module"
      ],
      answer: "Random Access Memory",
      difficulty: "easy",
    },
    {
      question: "Which of the following is an example of an operating system?",
      options: ["Python", "Linux", "HTML", "C++", "Oracle"],
      answer: "Linux",
      difficulty: "easy",
    },
    {
      question: "Which of the following is a high-level programming language?",
      options: ["Assembly", "Machine Code", "Python", "Binary", "Microcode"],
      answer: "Python",
      difficulty: "easy",
    },
    {
      question: "What does 'OOP' stand for?",
      options: [
        "Online Output Processing",
        "Object-Oriented Programming",
        "Order of Operations",
        "Overriding Object Procedures",
        "Optical Operation Program"
      ],
      answer: "Object-Oriented Programming",
      difficulty: "easy",
    },
    {
      question: "Which of these is a non-volatile memory?",
      options: ["RAM", "Cache", "ROM", "Register", "Stack"],
      answer: "ROM",
      difficulty: "easy",
    },
    {
      question: "Which algorithm is used for sorting?",
      options: [
        "Binary Search",
        "Quick Sort",
        "Depth First Search",
        "Breadth First Search",
        "Linear Search"
      ],
      answer: "Quick Sort",
      difficulty: "easy",
    },
    {
      question: "What is the main function of an operating system?",
      options: [
        "Compile programs",
        "Design user interfaces",
        "Store user data",
        "Manage hardware and software resources",
        "Connect to the internet"
      ],
      answer: "Manage hardware and software resources",
      difficulty: "easy",
    },
    {
      question: "Which of these is used to uniquely identify a record in a database?",
      options: ["Primary Key", "Foreign Key", "Unique Constraint", "Index", "Attribute"],
      answer: "Primary Key",
      difficulty: "easy",
    }
  ],
  "medium": [
    {
      question: "Which data structure uses LIFO (Last In, First Out)?",
      options: ["Stack", "Queue", "Tree", "Graph", "Linked List"],
      answer: "Stack",
      difficulty: "medium",
    },
    {
      question: "Which language is primarily used for web development?",
      options: ["Python", "HTML", "C++", "Java", "SQL"],
      answer: "HTML",
      difficulty: "medium",
    },
    {
      question: "Which of the following is a low-level programming language?",
      options: ["Assembly", "Python", "JavaScript", "Java", "Ruby"],
      answer: "Assembly",
      difficulty: "medium",
    },
    {
      question: "Which algorithm is best for searching in a sorted array?",
      options: ["Linear Search", "Binary Search", "Bubble Sort", "Quick Sort", "DFS"],
      answer: "Binary Search",
      difficulty: "medium",
    },
    {
      question: "Which of these is volatile memory?",
      options: ["RAM", "ROM", "Hard Drive", "SSD", "Flash Drive"],
      answer: "RAM",
      difficulty: "medium",
    },
    {
      question: "Which HTML tag is used to define a table row?",
      options: ["<td>", "<tr>", "<table>", "<th>", "<row>"],
      answer: "<tr>",
      difficulty: "medium",
    },
    {
      question: "Which data type stores true or false values?",
      options: ["Integer", "String", "Boolean", "Float", "Char"],
      answer: "Boolean",
      difficulty: "medium",
    },
    {
      question: "Which of these is not a programming paradigm?",
      options: ["Procedural", "Object-Oriented", "Functional", "Circular", "Event-Driven"],
      answer: "Circular",
      difficulty: "medium",
    },
    {
      question: "What is the main purpose of an index in a database?",
      options: ["Speed up searches", "Store backups", "Encrypt data", "Manage users", "Normalize tables"],
      answer: "Speed up searches",
      difficulty: "medium",
    },
    {
      question: "Which command is used to list files in Linux?",
      options: ["ls", "dir", "list", "show", "files"],
      answer: "ls",
      difficulty: "medium",
    }
  ],
  "hard": [
    {
      question: "Which algorithm has the best average-case time complexity for sorting?",
      options: ["Bubble Sort", "Quick Sort", "Insertion Sort", "Selection Sort", "Merge Sort"],
      answer: "Merge Sort",
      difficulty: "hard",
    },
    {
      question: "Which of these is a dynamic programming problem?",
      options: ["Fibonacci sequence", "Binary Search", "DFS traversal", "Stack operations", "Queue operations"],
      answer: "Fibonacci sequence",
      difficulty: "hard",
    },
    {
      question: "Which of the following is not a type of database normalization?",
      options: ["1NF", "2NF", "3NF", "4NF", "5NF"],
      answer: "5NF",
      difficulty: "hard",
    },
    {
      question: "Which data structure is used in implementing recursion?",
      options: ["Stack", "Queue", "Tree", "Graph", "Heap"],
      answer: "Stack",
      difficulty: "hard",
    },
    {
      question: "Which scheduling algorithm minimizes the average waiting time?",
      options: ["FCFS", "SJF", "Round Robin", "Priority", "Multilevel Queue"],
      answer: "SJF",
      difficulty: "hard",
    },
    {
      question: "Which of the following is a greedy algorithm example?",
      options: ["Kruskal's Algorithm", "Merge Sort", "DFS", "Binary Search", "Quick Sort"],
      answer: "Kruskal's Algorithm",
      difficulty: "hard",
    },
    {
      question: "Which OS concept prevents deadlocks?",
      options: ["Mutual Exclusion", "Banker’s Algorithm", "Paging", "Segmentation", "Interrupts"],
      answer: "Banker’s Algorithm",
      difficulty: "hard",
    },
    {
      question: "Which graph traversal uses a queue?",
      options: ["DFS", "BFS", "Topological Sort", "Dijkstra", "Prim"],
      answer: "BFS",
      difficulty: "hard",
    },
    {
      question: "Which data structure allows constant-time access by key?",
      options: ["Array", "Hash Table", "Linked List", "Stack", "Queue"],
      answer: "Hash Table",
      difficulty: "hard",
    },
    {
      question: "Which programming paradigm focuses on functions without side effects?",
      options: ["Functional", "Object-Oriented", "Procedural", "Event-Driven", "Imperative"],
      answer: "Functional",
      difficulty: "hard",
    }
  ]
}


};

export default questionsData;
