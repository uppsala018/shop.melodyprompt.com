export interface BookChapter {
  number: number;
  title: string;
  description: string;
}

export interface BookFaq {
  q: string;
  a: string;
  link?: { label: string; href: string };
}

export interface SamplePrompt {
  label: string;
  prompt: string;
}

export interface Book {
  id: string; // '01'–'10'
  slug: string;
  volume: string;
  title: string;
  subtitle: string;
  hookSentence: string; // 45–60 word italic hook
  genre: string;
  accentColor: string;
  bgColor: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  listPrice: number;
  salePrice: number;
  pages: number;
  promptCount: number;
  priceEnvVar: string;
  downloadUrl: string;
  chapters: BookChapter[];
  samplePrompts: SamplePrompt[];
  faqs: BookFaq[];
  crossSellIds: string[];
  longFormIntro: string; // 600–900 words, rendered as HTML string
}

export const BOOKS: Book[] = [
  {
    id: "01",
    slug: "sad-song-prompts",
    volume: "01",
    title: "The Ultimate Sad Song Prompt Bible",
    subtitle: "200 Heartbreaking AI Prompts for Suno & Udio",
    hookSentence:
      "Most sad song prompts produce generic piano ballads that all sound the same. The Sad Song Prompt Bible gives you 200 precision-crafted prompts built on the GMIV framework — genre, mood, instrumentation, and vibe — so every track carries genuine emotional weight, tested live in Suno v4 and Udio.",
    genre: "Emotional / Sad",
    accentColor: "#A78BFA",
    bgColor: "#1A0F2E",
    primaryKeyword: "sad song prompts",
    secondaryKeywords: [
      "suno sad song prompts",
      "emotional ballad prompts",
      "suno ai prompt examples for emotional ballad",
      "ai music prompt library",
    ],
    listPrice: 29.99,
    salePrice: 4.99,
    pages: 47,
    promptCount: 200,
    priceEnvVar: "STRIPE_PRICE_BOOK_01",
    downloadUrl: "https://htvctrxs7kiprhmr.public.blob.vercel-storage.com/The_Ultimate_Sad_Song_Prompt_Bible.pdf",
    chapters: [
      {
        number: 1,
        title: "The Anatomy of a Heartbreak Prompt",
        description:
          "Why vague emotion cues produce bland output, and how specificity unlocks Suno's latent grief vocabulary.",
      },
      {
        number: 2,
        title: "Slow Burn Ballads",
        description:
          "40 prompts for quiet devastation — piano, fingerpicked guitar, and orchestral swells.",
      },
      {
        number: 3,
        title: "Cinematic Weepers",
        description:
          "30 prompts designed for film-score sadness: string quartets, tape hiss, late-night rain rooms.",
      },
      {
        number: 4,
        title: "R&B Grief",
        description:
          "30 prompts for soul-heavy sadness — midnight R&B, neo-soul, and urban lament.",
      },
      {
        number: 5,
        title: "Indie Ache",
        description:
          "30 prompts for indie-folk and bedroom-pop melancholy: lo-fi recording, raw vocals, honest loss.",
      },
      {
        number: 6,
        title: "Electronic Emptiness",
        description:
          "30 prompts for electronic sadness — ambient drone, downtempo beats, glitch-touched loneliness.",
      },
      {
        number: 7,
        title: "Layering & Arrangement Prompts",
        description:
          "How to chain prompts to build a complete emotionally-arced sad track from intro to outro.",
      },
      {
        number: 8,
        title: "The Vault (Bonus 40 Prompts)",
        description:
          "40 additional field-tested prompts across every sub-genre, including winter themes, late-night drive, and loss of self.",
      },
      {
        number: 9,
        title: "Appendix — GMIV Reference Sheet",
        description:
          "The complete GMIV framework quick-reference and a checklist for crafting your own prompts.",
      },
    ],
    samplePrompts: [
      {
        label: "Slow Burn Ballad",
        prompt:
          "[Genre: slow-burn ballad] [Mood: devastated, numb, quietly hopeful] [Instrumentation: solo upright piano, cello pizzicato, distant room reverb, subtle vinyl crackle] [Vibe: 3am kitchen table, letter you never sent] — female vocals, breathy, conversational, verse-chorus-verse, 90 BPM",
      },
      {
        label: "Indie Folk Ache",
        prompt:
          "[Genre: indie folk] [Mood: wistful, tender grief, acceptance] [Instrumentation: fingerpicked acoustic guitar in DADGAD, harmonium drone, sparse brushed snare, close mic'd room sound] [Vibe: last summer before everything changed] — male vocal, slightly raw, unhurried, 75 BPM",
      },
      {
        label: "Electronic Emptiness",
        prompt:
          "[Genre: ambient electronic] [Mood: hollow, dissociated, searching] [Instrumentation: detuned synth pads, 808 sub rumble at 60 BPM, reversed piano chords, tape-echo on lead synth, no drums] [Vibe: driving home from a hospital at 5am] — instrumental, evolving 4-minute arc",
      },
    ],
    faqs: [
      {
        q: "Can I release AI music on Spotify?",
        a: "Yes. Spotify accepts AI-generated music through approved distributors. You need to disclose AI involvement on the distributor form — DistroKid, TuneCore, and CD Baby all have AI declaration fields as of 2026. The music lands in normal catalog search and playlists.",
        link: { label: "Read our full release guide at melodyprompt.com", href: "https://melodyprompt.com/guides/ai-music-release-checklist" },
      },
      {
        q: "Does DistroKid allow AI music?",
        a: "DistroKid allows AI-assisted music and requires you to select 'AI-assisted' during upload. Fully AI-generated tracks (no human performance) are permitted but must be declared. Always check their current TOS before releasing.",
        link: { label: "Read our full distribution guide at melodyprompt.com", href: "https://melodyprompt.com/guides/distribute-ai-music" },
      },
      {
        q: "How do I use a custom prompt in Suno AI in 2026?",
        a: "In Suno v4, click 'Custom Mode', paste your prompt into the Style field, add an optional title and lyrics, and click Create. Longer, more specific prompts — like the ones in this book — consistently outperform single-word genre tags.",
        link: { label: "Read our full Suno guide at melodyprompt.com", href: "https://melodyprompt.com/guides/how-to-create-ai-music" },
      },
      {
        q: "What is the GMIV framework?",
        a: "GMIV stands for Genre, Mood, Instrumentation, Vibe. It's the four-part prompt structure used throughout this book. Each element targets a different parameter Suno and Udio use internally when generating audio, so specifying all four dramatically increases prompt-to-output accuracy.",
      },
      {
        q: "Are these prompts for Suno or Udio?",
        a: "Both. Every prompt in this book was tested in Suno v4 and Udio before publication. The GMIV format works on both platforms, though minor syntax adjustments are sometimes needed — the book covers these differences in Chapter 1.",
      },
      {
        q: "Do I get future updates?",
        a: "Yes. Your purchase includes lifetime access to all future updates of this book. When we release new prompts or revise for new Suno/Udio versions, you get the update at no extra charge.",
      },
      {
        q: "What file formats are included?",
        a: "You receive a PDF (6×9\", print-ready). Your download link is available immediately after purchase. If you prefer EPUB for your e-reader, you can convert the PDF using a free tool such as Calibre.",
      },
      {
        q: "How many unique prompts are in this book?",
        a: "200 distinct prompts across 7 chapters, plus 40 bonus Vault prompts — 240 total. Every prompt is different; there is no padding or near-duplicate filler.",
      },
    ],
    crossSellIds: ["06", "02", "10"],
    longFormIntro: `<p>Most people trying to generate sad music with AI get the same result: a mid-tempo piano ballad with vague reverb and no real emotional core. The problem isn't the AI — it's the prompt. "Sad piano ballad" is like handing a film director one sentence and expecting a full scene.</p>

<h2>Why Generic Sad Song Prompts Fail</h2>
<p>Suno and Udio are trained on enormous corpora of music. When you give either model a generic prompt, it regresses to the mean — the most common musical pattern that fits your words. For sadness, that's almost always a slow 4/4 piano track with reverb. It's technically correct, but emotionally flat. Real heartbreak sounds like a lot of things: the hollow tick of a kitchen clock at 3am, a guitar that's slightly out of tune, a vocal that trails off mid-phrase because the singer can't finish the line.</p>

<h2>The GMIV Framework for Emotional AI Music Prompts</h2>
<p>The prompts in this book are built on the GMIV system: Genre, Mood, Instrumentation, and Vibe. Each element serves a specific purpose. Genre anchors the AI to a reference pool of real recordings. Mood layers emotional specificity — not just "sad" but "numb and hollow" or "grief that's almost become comfortable." Instrumentation describes the sonic palette: what instruments, what mic treatment, what production era. Vibe is the cinematic anchor — a scene, a moment, a place. Together, the four elements give the model enough constraints to produce something specific rather than generic.</p>

<h2>What 200 Sad Song Prompts Actually Covers</h2>
<p>This book organizes suno sad song prompts into five emotional territories. Slow burn ballads for the kind of sadness that's quiet and long. Cinematic weepers for film-score grief — the kind you'd score a montage with. R&amp;B grief for soul-drenched, urban late-night heartbreak. Indie ache for the stripped-down, honest loss of bedroom pop and folk. Electronic emptiness for dissociation and ambient loneliness. Each chapter gives you 30–40 GMIV-formatted prompts, tested and refined across multiple Suno generations.</p>

<p>The suno ai prompt examples for emotional ballad in Chapter 3 are particularly useful for film and sync work — they're written to evoke specific visual scenarios, not just musical moods.</p>

<h2>Built for Suno v4 and Udio</h2>
<p>Every prompt was tested against Suno v4 and Udio in the four months before publication. When a prompt underperformed on one platform, it was revised until it hit a consistent output standard on both. You're not getting a list of things someone typed once and uploaded — these are field-tested, production-ready prompts that work the first time.</p>

<h2>From Prompt to Release</h2>
<p>Producing an emotional AI track is only half the process. Chapter 7 covers how to chain prompts — using one output as inspiration for the next iteration — and how to use Suno's inpainting and extension tools to build a complete, emotionally-arced sad song from the prompts in this book. If you're releasing on Spotify via DistroKid or TuneCore, the appendix includes notes on AI music disclosure requirements as of Q1 2026.</p>

<p>The ai music prompt library in this volume is the most comprehensive collection of sad-music prompts available for Suno and Udio. At roughly 5¢ per studio-ready prompt, it's the lowest cost-per-result in the market.</p>`,
  },

  {
    id: "02",
    slug: "cinematic-trailer-music-prompts",
    volume: "02",
    title: "Cinematic AI Music Prompts",
    subtitle:
      "200 Massive AI Prompts for Trailer Music & Film Scores — Suno & Udio",
    hookSentence:
      "Generating trailer music that actually sounds like a trailer is one of the hardest prompting challenges in AI music. This book gives you 200 battle-tested prompts for epic grand entrance, pure cinematic tension, and trailer drop moments — every one verified in Suno v4 and Udio.",
    genre: "Cinematic / Trailer",
    accentColor: "#E5A23B",
    bgColor: "#0E0B08",
    primaryKeyword: "suno ai epic cinematic trailer music prompts",
    secondaryKeywords: [
      "suno ai epic grand entrance music prompt",
      "suno ai epic grand entrance instrumental prompt",
      "best suno ai prompts for epic cinematic trailer music",
      "suno ai cinematic trailer music prompt examples",
      "suno ai epic cinematic instrumental prompts",
      "pure cinematic",
      "suno ai epic grand entrance",
    ],
    listPrice: 29.99,
    salePrice: 4.99,
    pages: 47,
    promptCount: 200,
    priceEnvVar: "STRIPE_PRICE_BOOK_02",
    downloadUrl: "https://htvctrxs7kiprhmr.public.blob.vercel-storage.com/Cinematic_AI_Music_Prompts.pdf",
    chapters: [
      {
        number: 1,
        title: "The Trailer Music Architecture",
        description:
          "How blockbuster trailer music is structured in three acts, and how to prompt each section separately for maximum impact.",
      },
      {
        number: 2,
        title: "Epic Grand Entrance Prompts",
        description:
          "40 prompts for the suno ai epic grand entrance moment — that single massive downbeat that demands attention.",
      },
      {
        number: 3,
        title: "Pure Cinematic Tension",
        description:
          "35 prompts for building dread, expectation, and the slow climb before the drop.",
      },
      {
        number: 4,
        title: "Action & Impact Drops",
        description:
          "35 prompts for the moment everything explodes — percussion-forward, brass-heavy, designed for sync.",
      },
      {
        number: 5,
        title: "Emotional Trailer Moments",
        description:
          "30 prompts for the quieter beat in a trailer — piano or solo voice over rising strings.",
      },
      {
        number: 6,
        title: "Hybrid & Experimental",
        description:
          "30 prompts mixing orchestral with electronic textures — the sound of Netflix sci-fi and prestige TV.",
      },
      {
        number: 7,
        title: "Full Score Sequences",
        description:
          "How to chain the prompts in this book to build a complete 2:30 trailer cue.",
      },
      {
        number: 8,
        title: "The Vault (30 Bonus Prompts)",
        description:
          "30 additional prompts including horror trailer, comedy trailer, sports montage, and period-piece score.",
      },
      {
        number: 9,
        title: "Appendix — Epic Sound Design Reference",
        description:
          "Glossary of cinematic production terms used in the prompts, plus a quick-start prompt template.",
      },
    ],
    samplePrompts: [
      {
        label: "Epic Grand Entrance",
        prompt:
          "[Genre: orchestral epic / hybrid trailer] [Mood: triumphant, overwhelming, goosebumps-inducing] [Instrumentation: 80-piece orchestra, Taiko drums, processed brass stabs, sub-bass impacts at downbeats, choir stabs] [Vibe: hero steps onto the battlefield for the last time] — 140 BPM half-time feel, key of D minor, no synth leads, pure cinematic",
      },
      {
        label: "Pure Cinematic Tension Build",
        prompt:
          "[Genre: cinematic tension / trailer underscore] [Mood: dread, inevitability, held breath] [Instrumentation: low cello ostinato, sustained horn drone, spiccato violins rising in register, no percussion until bar 32] [Vibe: satellite imagery shows the convoy approaching] — 60 BPM, slowly accelerating, best suno ai prompts for epic cinematic trailer music style",
      },
      {
        label: "Hybrid Electronic Trailer Drop",
        prompt:
          "[Genre: hybrid orchestral electronic] [Mood: explosive release after tension, electric, unstoppable] [Instrumentation: processed brass with distortion, 808 kick on every beat, orchestral hit samples, rising sweep before drop, synth bass layer at 60Hz] [Vibe: launch sequence initiated, 3-2-1] — 128 BPM, D minor pentatonic, suno ai epic cinematic instrumental prompts style",
      },
    ],
    faqs: [
      {
        q: "What makes a good suno ai epic cinematic trailer music prompt?",
        a: "The key is separating the three sections of a trailer cue: the build, the hit, and the release. A single prompt covering all three usually produces a compressed, unconvincing result. The best approach is a dedicated prompt for each section, then use Suno's continue feature to link them.",
      },
      {
        q: "Can I release AI music on Spotify?",
        a: "Yes — Spotify accepts AI music through distributors. DistroKid and TuneCore both support AI music uploads with the required disclosure. Sync licensing of AI music is still evolving, but for direct-to-consumer releases the path is clear.",
        link: { label: "Read our full release guide at melodyprompt.com", href: "https://melodyprompt.com/guides/ai-music-release-checklist" },
      },
      {
        q: "Does DistroKid allow AI music?",
        a: "DistroKid allows AI-assisted and AI-generated music. You must select the 'AI-assisted' or 'AI-generated' option during upload. Review their most current TOS as this area is actively being updated.",
        link: { label: "Read our full distribution guide at melodyprompt.com", href: "https://melodyprompt.com/guides/distribute-ai-music" },
      },
      {
        q: "How do I use a custom prompt in Suno AI for cinematic music?",
        a: "In Suno v4 Custom Mode, paste the full GMIV prompt into the Style box. For cinematic music, include BPM, key, and whether you want vocals. Use the Title field to name the cue (e.g., 'Act 3 Opening') so you can reference it when chaining with the Continue feature.",
        link: { label: "Read our full Suno guide at melodyprompt.com", href: "https://melodyprompt.com/guides/how-to-create-ai-music" },
      },
      {
        q: "What is the GMIV framework?",
        a: "GMIV stands for Genre, Mood, Instrumentation, Vibe. It's the four-part structure behind every prompt in this book. Genre grounds the model's reference pool. Mood specifies emotional output. Instrumentation describes the sonic palette. Vibe is the scene anchor that unlocks the model's full storytelling capability.",
      },
      {
        q: "Are these prompts for Suno or Udio?",
        a: "Both platforms. The prompts are written and tested on Suno v4 and Udio. Cinematic music tends to perform slightly better on Suno due to its orchestral training data, but Udio's hybrid textures are excellent for the electronic-cinematic prompts in Chapter 6.",
      },
      {
        q: "Can I use these prompts for YouTube content?",
        a: "Yes, with proper attribution per your platform's AI music disclosure requirements. YouTube's Content ID system can flag AI music the same as any other, so using a distributor with Content ID management (like DistroKid) is recommended before commercial use.",
      },
      {
        q: "Do I get future updates?",
        a: "Yes — lifetime access, no subscription. When we add prompts for new Suno or Udio versions, you receive the update automatically.",
      },
    ],
    crossSellIds: ["01", "06", "07"],
    longFormIntro: `<p>Cinematic trailer music is the hardest genre to get right with AI. The problem is structural: a great trailer cue is three acts compressed into 90 seconds. There's a slow tension build, a massive hit, and then a release into full-throttle action or emotional payoff. When you prompt Suno with "epic cinematic trailer music," you get the average of all three — which usually sounds like a muddy orchestral loop with no real arc.</p>

<h2>The Three-Act Problem in Cinematic Prompting</h2>
<p>The suno ai epic cinematic trailer music prompts in this book are written as separate acts. Chapter 2 covers the grand entrance — the downbeat that lands like a punch — in 40 dedicated prompts. Chapter 3 covers the tension build. Chapter 4 covers the action drop. The result is a library you can mix and match to construct a full cue, or use individually for underscore work.</p>

<h2>What "Pure Cinematic" Actually Means as a Prompt</h2>
<p>Pure cinematic is a Suno-specific style signal that pulls from Hollywood orchestral libraries rather than commercial pop production. Combined with the GMIV structure — specifying Taiko drums, choir hits, brass registers, and BPM — it produces the kind of output that would sit comfortably next to a Hans Zimmer cue. The best suno ai prompts for epic cinematic trailer music in Chapter 2 use this signal specifically.</p>

<h2>Hybrid Orchestral Electronic Textures</h2>
<p>The fastest-growing segment of trailer music is hybrid: full orchestra plus processed electronics, sub-bass, and distorted brass. Chapters 5 and 6 cover this territory with the suno ai epic cinematic instrumental prompts designed for prestige TV and sci-fi. These work particularly well in Udio, which handles electronic-orchestral blending better than any prior AI music model.</p>

<h2>Grand Entrance Prompts: The Critical First Beat</h2>
<p>The suno ai epic grand entrance instrumental prompt is one of the most searched prompting terms in the Suno community. The reason is simple: the first beat of a trailer cue sets everything. Get it wrong and the whole cue feels limp. The 40 grand entrance prompts in Chapter 2 are built around that single moment — specifying not just instrumentation but mic placement, reverb room size, and whether the downbeat has a pre-echo (a classic trailer technique where a ghosted version of the hit appears slightly before the main impact).</p>

<h2>Sync, Film, and YouTube Applications</h2>
<p>These prompts were developed with sync licensing in mind. That means they're written to avoid any instrumentation or style cue that would be instantly recognizable as derived from a specific copyrighted work. Chapter 7 covers the process of building a complete 2:30 trailer cue using the prompt chaining approach — giving you a deliverable that's ready for sync submission or YouTube placement.</p>

<h2>From Prompt to Deliverable</h2>
<p>The appendix includes a complete glossary of cinematic production terms used across the book, plus a quick-start template for writing your own suno ai cinematic trailer music prompt examples based on the GMIV system. Whether you're a film composer integrating AI into your workflow or a content creator building a YouTube channel around epic music, these 200 prompts give you a professional starting point that works the first time.</p>`,
  },

  {
    id: "03",
    slug: "hip-hop-prompts",
    volume: "03",
    title: "The Hip-Hop Prompt Architect",
    subtitle: "200 Studio-Ready AI Prompts for Trap, Boom-Bap, Drill & R&B",
    hookSentence:
      "Hip-hop production is deeply technical — kick placement, hi-hat swing, 808 tuning, sample chop timing. This book gives you 200 hip hop suno prompts built with producer-level specificity across trap, boom-bap, drill, and R&B, so your AI tracks sound like they came out of a real studio session.",
    genre: "Hip-Hop / R&B",
    accentColor: "#E04848",
    bgColor: "#150B0B",
    primaryKeyword: "hip hop suno prompts",
    secondaryKeywords: [
      "hip hop suno prompts",
      "copy paste suno prompts",
      "studio-ready ai music prompts",
      "udio prompts",
      "ai music prompt library",
      "suno v4 prompts",
    ],
    listPrice: 29.99,
    salePrice: 4.99,
    pages: 47,
    promptCount: 200,
    priceEnvVar: "STRIPE_PRICE_BOOK_03",
    downloadUrl: "https://htvctrxs7kiprhmr.public.blob.vercel-storage.com/The_Hip-Hop_Prompt_Architect.pdf",
    chapters: [
      {
        number: 1,
        title: "Prompt Engineering for Hip-Hop",
        description:
          "The specific tags and terms Suno and Udio respond to for rap production — from 808 bass weight to hi-hat triplet patterns.",
      },
      {
        number: 2,
        title: "Trap Bangers",
        description:
          "40 prompts for modern trap — distorted 808s, hi-hat rolls, dark minor melodies, and Atlanta-influenced cadences.",
      },
      {
        number: 3,
        title: "Boom-Bap & Golden Era",
        description:
          "35 prompts for sample-based production: dusty kicks, chopped jazz piano, NYC grit.",
      },
      {
        number: 4,
        title: "UK Drill & Dark Trap",
        description:
          "30 prompts for the sliding 808 bass and off-beat hi-hat patterns that define UK and Chicago drill.",
      },
      {
        number: 5,
        title: "Contemporary R&B",
        description:
          "35 prompts for melodic R&B: warm keys, trap hi-hats with melodic bass, Neo-Soul-influenced progressions.",
      },
      {
        number: 6,
        title: "West Coast & G-Funk",
        description:
          "25 prompts for synth-based G-funk, laid-back West Coast boom-bap, and Cali summer vibes.",
      },
      {
        number: 7,
        title: "Layering & Structure",
        description:
          "How to build full beats from these prompts using Suno's continue and variation features.",
      },
      {
        number: 8,
        title: "The Vault (35 Bonus Prompts)",
        description:
          "35 additional prompts including lo-fi hip-hop, phonk, hyper-pop rap, and crunk throwbacks.",
      },
      {
        number: 9,
        title: "Appendix — Production Reference",
        description:
          "BPM ranges, key centers, and 808 tuning guides for each sub-genre in this book.",
      },
    ],
    samplePrompts: [
      {
        label: "Modern Trap",
        prompt:
          "[Genre: modern trap] [Mood: cold, menacing, confident] [Instrumentation: 808 bass tuned to D with glide slides, hi-hat triplet roll, clap on 2+4 with slight delay, minor pentatonic piano loop, dark string stabs] [Vibe: parking lot at midnight, paper on the table] — 140 BPM, trap hi-hat open on the 'and', no pads, copy paste suno prompts style",
      },
      {
        label: "Boom-Bap Golden Era",
        prompt:
          "[Genre: boom-bap / golden era hip-hop] [Mood: focused, hungry, nostalgic NYC energy] [Instrumentation: chopped jazz piano sample with pitch correction, boom-bap kick at 90 BPM, SP-1200 snare snap, sub bass following the kick, no hi-hat rolls] [Vibe: 1994 Brooklyn, headphones on, notebook open] — live-sounding drum break, gritty compression",
      },
      {
        label: "Contemporary R&B",
        prompt:
          "[Genre: contemporary R&B / melodic trap] [Mood: vulnerable, late-night intimacy, wanting more] [Instrumentation: Rhodes piano with tremolo, 808 bass melodic, trap hi-hats at 100 BPM, subtle synth pad, live-sounding hi-hat brush] [Vibe: FaceTime at 2am, feelings running past midnight] — female vocal hook, smooth, whisper-to-belt dynamic",
      },
    ],
    faqs: [
      {
        q: "Can I release AI music on Spotify?",
        a: "Yes. Spotify accepts AI music through distributors like DistroKid, TuneCore, and CD Baby as long as you declare AI involvement during the upload process. Hip-hop is one of the most commercially active genres on Spotify — getting your AI track into playlists follows the same pitching process as any release.",
        link: { label: "Read our full release guide at melodyprompt.com", href: "https://melodyprompt.com/guides/ai-music-release-checklist" },
      },
      {
        q: "Does DistroKid allow AI music?",
        a: "Yes. DistroKid has had an AI music declaration option since 2024. Select 'AI-assisted' or 'AI-generated' depending on your level of human involvement. Their TOS updates regularly, so review it before your next release.",
        link: { label: "Read our full distribution guide at melodyprompt.com", href: "https://melodyprompt.com/guides/distribute-ai-music" },
      },
      {
        q: "How do I use a custom prompt in Suno AI for hip-hop beats?",
        a: "Use Custom Mode in Suno v4 and paste the GMIV prompt into the Style field. For hip-hop specifically, always include BPM and whether you want vocals or instrumental. Suno's instrumental mode generally produces cleaner beats for further production work.",
        link: { label: "Read our full Suno guide at melodyprompt.com", href: "https://melodyprompt.com/guides/how-to-create-ai-music" },
      },
      {
        q: "What is the GMIV framework for hip-hop?",
        a: "In hip-hop context: Genre specifies the sub-style (trap, boom-bap, drill). Mood captures the energy and attitude. Instrumentation describes your drum machine sounds, 808 character, melody instruments. Vibe is the scene — what does this beat feel like playing in a car? That last element is surprisingly powerful for directing Suno's tonal choices.",
      },
      {
        q: "Are these hip hop suno prompts for Suno or Udio?",
        a: "Both. Trap and drill prompts tend to perform better on Suno due to its strong trap/hip-hop training data. The boom-bap and R&B prompts work excellently on Udio. The book notes platform recommendations for each chapter.",
      },
      {
        q: "Can I use these beats commercially?",
        a: "Suno's paid plans grant commercial usage rights to outputs. Udio's commercial license terms are similar. Always check the current TOS on both platforms before releasing commercially, as licensing terms are still evolving industry-wide.",
      },
      {
        q: "Do I get future updates?",
        a: "Yes — lifetime updates included. When Suno v5 or new Udio versions land, we test and update the prompt catalog.",
      },
      {
        q: "How many trap prompts are in the book?",
        a: "40 dedicated trap prompts in Chapter 2, plus additional trap-influenced prompts in the R&B and drill chapters, and 10+ trap vault prompts. Total trap-related content is roughly 60–70 prompts.",
      },
    ],
    crossSellIds: ["05", "07", "10"],
    longFormIntro: `<p>Hip-hop is the most technically demanding genre to prompt correctly in AI music. The issue isn't the AI's knowledge of hip-hop — Suno and Udio both have extensive training data from decades of rap production. The issue is that hip-hop production is built on micro-decisions: the exact weight and pitch of an 808 bass note, whether the hi-hats swing or rush, how compressed and saturated the kick sounds, whether the sample is chopped in a stuttering pattern or played straight.</p>

<h2>Why Hip Hop Suno Prompts Fail Without Specificity</h2>
<p>When you type "trap beat" into Suno, you get the statistical average of trap — which in 2024–2025 AI models means a slightly generic dark beat that doesn't commit to any particular era or producer style. To get a beat that sounds like it came out of a real session, you need to specify the era, the drum machine, the 808 character, the melodic approach, and the vibe. That's what the 200 hip hop suno prompts in this book do.</p>

<h2>Sub-Genre Architecture</h2>
<p>The book is organized by sub-genre because each one has distinct sonic signatures that require different prompt strategies. Trap needs distorted, sub-heavy 808s and hi-hat triplets. Boom-bap needs a specific drum compression feel — the sound of an SP-1200 or MPC60, not a clean VST kick. UK and Chicago drill requires the sliding 808 bass pattern that defines the genre. R&B needs warmth and space — the opposite of drill's aggression. Using a trap prompt for an R&B track will produce something that sounds confused; using a tuned, genre-specific prompt from the right chapter produces something that sounds intentional.</p>

<h2>Studio-Ready AI Music Prompts</h2>
<p>The phrase "studio-ready" means the output is clean enough to work with in post-production — either used directly or as a reference for a hybrid workflow where you layer live elements on top. Each prompt in this book is tested against this standard: does the output sound like something you could put on an EP, or does it need major reconstruction? Only prompts that clear the studio-ready bar made it into the final catalog.</p>

<h2>Copy-Paste Ready for Production Workflows</h2>
<p>These are genuine copy paste suno prompts — formatted, tested, and ready to paste into Suno's Custom Mode or Udio's prompt field. No assembly required. Chapter 7 covers how to chain multiple prompts to build a complete beat with intro, verse, hook, and bridge sections.</p>

<h2>The Future of Hip-Hop and AI</h2>
<p>AI music prompt library tools are changing how independent hip-hop producers work. The barrier to beat production — which used to require a hardware setup worth thousands of dollars — is now a well-crafted prompt and a Suno or Udio subscription. This book gives you 200 prompts that represent hundreds of hours of testing and iteration, so you can skip the trial-and-error phase entirely.</p>`,
  },

  {
    id: "04",
    slug: "lo-fi-atmosphere-prompts",
    volume: "04",
    title: "The Complete Lo-Fi Atmosphere Prompt Collection",
    subtitle: "200 AI Prompts for Chill, Study, Sleep & Night Drives",
    hookSentence:
      "Lo-fi is the most-streamed ambient genre on Spotify and YouTube, but the prompts most people use produce the same looping jazz chord with rain sounds. This book gives you 200 lo-fi suno prompts across study, sleep, late-night drive, and seasonal sub-genres — each built with the production specificity that separates lo-fi that streams from lo-fi that loops once and stops.",
    genre: "Lo-Fi / Chill",
    accentColor: "#7CB8B8",
    bgColor: "#0E1A1A",
    primaryKeyword: "lo-fi suno prompts",
    secondaryKeywords: [
      "lo-fi suno prompts",
      "ai music prompt library",
      "copy paste suno prompts",
      "udio ai prompts",
      "prompt engineering for ai music",
    ],
    listPrice: 29.99,
    salePrice: 4.99,
    pages: 47,
    promptCount: 200,
    priceEnvVar: "STRIPE_PRICE_BOOK_04",
    downloadUrl: "https://htvctrxs7kiprhmr.public.blob.vercel-storage.com/The_Complete_Lo-Fi_Atmosphere_Prompt_Collection.pdf",
    chapters: [
      {
        number: 1,
        title: "The Lo-Fi Production Formula",
        description:
          "What makes lo-fi feel warm and humanized — and which prompt elements trigger these qualities in Suno and Udio.",
      },
      {
        number: 2,
        title: "Study Session Beats",
        description:
          "40 prompts designed for focus and sustained listening — the lo-fi hip-hop that plays for 8 hours without fatigue.",
      },
      {
        number: 3,
        title: "Sleep & Ambient Textures",
        description:
          "35 prompts for deep relaxation: slow tempos, filtered frequencies, nature sound integration.",
      },
      {
        number: 4,
        title: "Late-Night Drive",
        description:
          "30 prompts for the city-at-3am aesthetic — jazz-influenced melodies over muted drum patterns.",
      },
      {
        number: 5,
        title: "Seasonal Lo-Fi",
        description:
          "30 prompts by season: winter lo-fi with snow ambience, autumn lo-fi with leaf-rain, spring lo-fi with birdsong.",
      },
      {
        number: 6,
        title: "Lo-Fi Jazz & Neo-Soul Crossover",
        description:
          "30 prompts blending lo-fi textures with jazz harmony and neo-soul chord voicings.",
      },
      {
        number: 7,
        title: "Playlist Architecture",
        description:
          "How to build a 10-track lo-fi playlist using these prompts, including BPM sequencing and tonal variety.",
      },
      {
        number: 8,
        title: "The Vault (35 Bonus Prompts)",
        description:
          "35 additional prompts including lo-fi R&B, Japanese city-pop lo-fi, and lo-fi ambient drone.",
      },
      {
        number: 9,
        title: "Appendix — Lo-Fi Sound Design Glossary",
        description:
          "Production terminology used in the prompts, with explanations for non-engineers.",
      },
    ],
    samplePrompts: [
      {
        label: "Study Session",
        prompt:
          "[Genre: lo-fi hip-hop] [Mood: focused, warm, gentle productivity] [Instrumentation: upright bass pluck, jazz piano chords with tape saturation, brushed drum kit at 75 BPM, vinyl crackle, slight wow-and-flutter on piano] [Vibe: library carrel, 2pm sunlight through dusty windows] — instrumental, no synth, 4-minute loop potential, lo-fi suno prompts standard",
      },
      {
        label: "Late-Night City",
        prompt:
          "[Genre: lo-fi jazz / chillhop] [Mood: introspective, gentle melancholy, city solitude] [Instrumentation: muted trumpet melody, walking bass, brushed hi-hat, Rhodes pad with flutter, distant city ambient layer] [Vibe: 24-hour diner, streetlights reflecting on wet pavement] — 65 BPM, no kick drum, jazz harmony, udio ai prompts quality",
      },
      {
        label: "Sleep & Rain",
        prompt:
          "[Genre: lo-fi ambient] [Mood: deeply calm, floating, dissociative comfort] [Instrumentation: sine wave pads with slow LFO, gentle rain recording underneath, acoustic guitar harmonics, no drums, sub-bass drone] [Vibe: falling asleep watching rain on the window] — 50 BPM, mostly static dynamics, sleep/ASMR quality, pure atmosphere",
      },
    ],
    faqs: [
      {
        q: "Can I release lo-fi AI music on Spotify?",
        a: "Yes — lo-fi is one of the best-performing AI genres on streaming platforms. Spotify's editorial playlists like 'Lo-Fi Beats' accept independent submissions via distributor. The genre's long-form listening behavior (listeners play tracks on repeat for hours) creates favorable streaming metrics for playlist consideration.",
        link: { label: "Read our full release guide at melodyprompt.com", href: "https://melodyprompt.com/guides/ai-music-release-checklist" },
      },
      {
        q: "Does DistroKid allow AI music for lo-fi releases?",
        a: "Yes, with the required AI declaration during upload. Lo-fi music is particularly common in AI releases and distributors are well-practiced at handling it.",
        link: { label: "Read our full distribution guide at melodyprompt.com", href: "https://melodyprompt.com/guides/distribute-ai-music" },
      },
      {
        q: "How do I use a custom prompt in Suno AI for lo-fi music?",
        a: "In Custom Mode, paste the GMIV prompt into the Style box. For lo-fi, leave the lyrics field blank to get instrumentals. The 'vinyl crackle' and 'tape saturation' tags are particularly powerful Suno-specific signals that reliably trigger lo-fi texture.",
        link: { label: "Read our full Suno guide at melodyprompt.com", href: "https://melodyprompt.com/guides/how-to-create-ai-music" },
      },
      {
        q: "What is the GMIV framework?",
        a: "Genre, Mood, Instrumentation, Vibe. For lo-fi, this means: specify the exact sub-type (lo-fi hip-hop vs lo-fi jazz vs ambient lo-fi), the mood granularity (focused vs sleepy vs melancholy), the specific instruments and their analog texture cues, and a visual scene that grounds the vibe.",
      },
      {
        q: "Are these lo-fi prompts for Suno or Udio?",
        a: "Both. Lo-fi performs well on both platforms. Udio handles the jazz harmony in lo-fi jazz prompts with particular musicality. Suno's 'vinyl crackle' and 'tape' responses are consistently strong.",
      },
      {
        q: "Can I use lo-fi AI tracks for YouTube videos?",
        a: "Yes. Always check the current TOS of whichever platform generated the track — both Suno and Udio's paid plans allow commercial use. Using Content ID management through DistroKid helps protect your tracks and prevents false copyright claims.",
      },
      {
        q: "Do I get future updates to this book?",
        a: "Yes — lifetime access included. As lo-fi sub-genres evolve and Suno/Udio models improve, we update the prompt catalog.",
      },
      {
        q: "How long are the lo-fi tracks generated from these prompts?",
        a: "Suno generates up to 4 minutes per generation; Udio generates up to 3 minutes. For longer sleep or study tracks, use the 'Continue' or 'Extend' features to seamlessly extend outputs to any length.",
      },
    ],
    crossSellIds: ["01", "09", "10"],
    longFormIntro: `<p>Lo-fi is the most commercially successful ambient genre in the streaming era. Tracks with titles like "lo-fi hip-hop beats to study/relax to" regularly accumulate hundreds of millions of streams on YouTube and Spotify. But generating lo-fi music with AI that's actually worth listening to for longer than three minutes requires knowing exactly which production signals trigger the warmth, humanization, and gentle fatigue that the genre depends on.</p>

<h2>The Lo-Fi Production Signature</h2>
<p>The lo-fi sound is built on deliberate imperfection: vinyl surface noise, tape wow-and-flutter, compressed dynamics that feel like a bedroom recording rather than a studio. When you prompt Suno or Udio with just "lo-fi hip-hop," you get a statistically average version of the genre — usually a piano chord loop over a drum pattern, with generic vinyl crackle applied as an afterthought. The 200 lo-fi suno prompts in this book are built on a different approach: specifying the analog artifacts, the room sound, the instrument microphone placement, and the visual scene that anchors the vibe.</p>

<h2>Study, Sleep, and Night Drive — Three Distinct Approaches</h2>
<p>The three main use cases for lo-fi music require different prompt strategies. Study-mode lo-fi needs a slightly faster BPM (70–85), a more rhythmically active drum pattern, and melodic content that's engaging enough to set a focus mood without being distracting enough to pull attention. Sleep lo-fi needs a slower tempo (50–65 BPM), fewer drum elements, and longer note durations that don't jar the listener awake. Late-night drive lo-fi — the jazz-influenced city-at-midnight aesthetic — needs more harmonic complexity and a specific cinematic quality that the other categories don't.</p>

<h2>Lo-Fi Jazz and Neo-Soul Crossover</h2>
<p>Chapter 6 covers the lo-fi jazz crossover territory — the udio ai prompts style that blends jazz harmony, neo-soul chord voicings, and lo-fi production texture. This is the most musically sophisticated category in the book, and the one most likely to surface in editorial playlists that curate actual musical quality rather than just background-music utility.</p>

<h2>Seasonal Lo-Fi</h2>
<p>One underutilized strategy for building a lo-fi catalog is seasonal releases. Winter lo-fi with snow ambience and warm piano performs particularly well on Spotify during the Q4 holiday period. The 30 prompts in Chapter 5 are organized by season, with specific ambient layer instructions (rain, wind, birdsong, coffee shop background) that trigger different environmental feelings in the listener.</p>

<h2>Prompt Engineering for AI Music — The Lo-Fi Vocabulary</h2>
<p>Prompt engineering for ai music in the lo-fi space has developed a specific vocabulary that Suno and Udio both respond to reliably: "vinyl crackle," "tape saturation," "wow-and-flutter," "brushed kit," "room verb," "muted trumpet." The appendix in this book provides a complete glossary of these terms and what they trigger in each model, so you can mix and match elements to create your own lo-fi prompts beyond the 200 in the catalog.</p>`,
  },

  {
    id: "05",
    slug: "pop-hit-prompts",
    volume: "05",
    title: "Pop Hit Formula",
    subtitle: "200 AI Prompts for Viral Commercial Music — Suno & Udio",
    hookSentence:
      "Pop music is the most algorithmically demanding genre to generate with AI because it requires the precision of a hit-song formula: a pre-chorus that builds, a chorus that drops hard, a bridge that shifts key. This book gives you 200 pop suno prompts that capture those structural and sonic details, tested against real viral music production standards.",
    genre: "Pop",
    accentColor: "#F25D9C",
    bgColor: "#1A0A1A",
    primaryKeyword: "pop suno prompts",
    secondaryKeywords: [
      "pop suno prompts",
      "viral suno prompts",
      "studio-ready ai music prompts",
      "ai music prompt library",
      "suno v4 prompts",
      "copy paste suno prompts",
    ],
    listPrice: 29.99,
    salePrice: 4.99,
    pages: 47,
    promptCount: 200,
    priceEnvVar: "STRIPE_PRICE_BOOK_05",
    downloadUrl: "https://htvctrxs7kiprhmr.public.blob.vercel-storage.com/Pop_Hit_Formula.pdf",
    chapters: [
      {
        number: 1,
        title: "The Pop Hit Architecture",
        description:
          "The structural formula behind chart-topping pop songs and how to encode it into a Suno prompt.",
      },
      {
        number: 2,
        title: "Commercial Electropop",
        description:
          "40 prompts for high-energy, radio-ready pop: synth leads, four-on-the-floor kick, massive chorus hooks.",
      },
      {
        number: 3,
        title: "Bedroom Pop & Indie Pop",
        description:
          "35 prompts for the intimate, lo-fi-influenced indie pop aesthetic — think Clairo meets Beabadoobee.",
      },
      {
        number: 4,
        title: "Dark Pop & Alt-Pop",
        description:
          "30 prompts for genre-bending dark pop: minor keys, processed vocals, cinematic production.",
      },
      {
        number: 5,
        title: "Dance Pop & Club-Ready",
        description:
          "35 prompts for dance pop designed for TikTok hooks and club floors.",
      },
      {
        number: 6,
        title: "Soft Pop & Adult Contemporary",
        description:
          "25 prompts for melodic, accessible pop designed for Spotify playlist discovery.",
      },
      {
        number: 7,
        title: "Hook Architecture & Structure",
        description:
          "How to use these prompts to build a verse-pre-chorus-chorus-bridge structure.",
      },
      {
        number: 8,
        title: "The Vault (35 Bonus Prompts)",
        description:
          "35 additional prompts including K-pop influenced, Afrobeats pop fusion, and retro 80s pop.",
      },
      {
        number: 9,
        title: "Appendix — Pop Formula Reference",
        description:
          "Song structure templates and viral pop production element checklist.",
      },
    ],
    samplePrompts: [
      {
        label: "Electropop Radio Hit",
        prompt:
          "[Genre: electropop / commercial pop] [Mood: euphoric, unstoppable, arms-in-the-air] [Instrumentation: super-saw synth lead, four-on-the-floor kick at 128 BPM, synth bass with sidechaining to kick, vocal chops in pre-chorus, massive reverb on bridge] [Vibe: summer festival headliner, everyone knows the words] — female vocal, belt on chorus, anthemic, pop suno prompts style",
      },
      {
        label: "Bedroom Indie Pop",
        prompt:
          "[Genre: bedroom pop / indie pop] [Mood: tender, self-aware, genuinely weird in a good way] [Instrumentation: acoustic guitar with slight finger noise, close-mic'd vocals with room reverb, sparse drum machine at 90 BPM, occasional Wurlitzer chord] [Vibe: recording songs in your childhood bedroom before anyone expects anything from you] — intimate, slightly imperfect, one vocal, no harmonies",
      },
      {
        label: "Dark Alt-Pop",
        prompt:
          "[Genre: dark pop / alt-pop] [Mood: brooding, powerful, holding something back] [Instrumentation: distorted synth bass, processed female vocal with pitch-shift artifacts, slow-build kick at 110 BPM, string stabs, drop to silence before chorus] [Vibe: a character deciding whether to reveal their secret] — Billie Eilish production era, understated verse to explosive chorus, viral suno prompts quality",
      },
    ],
    faqs: [
      {
        q: "Can I release AI pop music on Spotify?",
        a: "Yes. Pop is the dominant genre on Spotify and AI pop music releases follow the same distribution path as any independent release. Use DistroKid, TuneCore, or a similar distributor, declare AI involvement, and pitch your tracks to editorial playlists the same way any indie pop artist would.",
        link: { label: "Read our full release guide at melodyprompt.com", href: "https://melodyprompt.com/guides/ai-music-release-checklist" },
      },
      {
        q: "Does DistroKid allow AI music?",
        a: "Yes — with the required disclosure during upload. DistroKid is one of the most AI-friendly distributors and has clear policies for both AI-assisted and AI-generated music.",
        link: { label: "Read our full distribution guide at melodyprompt.com", href: "https://melodyprompt.com/guides/distribute-ai-music" },
      },
      {
        q: "How do I use a custom prompt in Suno AI for pop music?",
        a: "Pop music benefits from including structural cues in the Style field — not just the sound but the song architecture. Include whether you want verses, a pre-chorus, a chorus drop, and a bridge in your Suno prompt. Suno v4's 'structure-aware' generation mode responds well to these architectural signals.",
        link: { label: "Read our full Suno guide at melodyprompt.com", href: "https://melodyprompt.com/guides/how-to-create-ai-music" },
      },
      {
        q: "What makes pop suno prompts different from other genres?",
        a: "Pop is structurally the most demanding genre for AI because radio pop has a tight formula: specific verse energy, pre-chorus tension build, a chorus that peaks dynamically, and a bridge that changes the harmonic center. Good pop prompts encode all of this structure, not just the sonic palette.",
      },
      {
        q: "Are these prompts for Suno or Udio?",
        a: "Both. Pop performs consistently well on both Suno and Udio. Suno has particularly strong commercial pop training data. Udio's tonal warmth works well for the bedroom pop and soft pop chapters.",
      },
      {
        q: "What is the GMIV framework for pop?",
        a: "For pop: Genre specifies the exact sub-style. Mood captures the emotional arc of the song. Instrumentation specifies the production era and sonic palette. Vibe is the specific moment or situation that the song should feel like — this is crucial for pop, where the listener needs to feel the song is about them specifically.",
      },
      {
        q: "Do I get future updates?",
        a: "Yes — lifetime access with free updates when we add prompts for new AI music model versions.",
      },
      {
        q: "Can these prompts work for TikTok-viral music?",
        a: "Yes — the Dance Pop chapter specifically targets TikTok-ready hooks. The structural approach encodes the 15-second 'hook moment' that TikTok's algorithm favors. Several prompts in Chapter 5 are specifically designed to front-load the most compelling melodic element within the first 8 bars.",
      },
    ],
    crossSellIds: ["03", "07", "10"],
    longFormIntro: `<p>Pop music has the most demanding production formula in commercial music. A radio-ready pop track needs a verse with enough energy to hold attention but not so much that it overshadows the chorus. A pre-chorus that builds tension through a rising melodic line or harmonic progression. A chorus that lands with a downbeat so satisfying it makes people reach for the repeat button. And a bridge that briefly disrupts the listener's expectations before resolving back to the final chorus payoff.</p>

<h2>Why Pop Is the Hardest Genre to Prompt Correctly</h2>
<p>When you write a pop prompt without encoding this structure, you get a song that sounds like pop but doesn't feel like one — it lacks the emotional architecture that makes pop songs stick. The 200 pop suno prompts in this book are built around the hit-song formula, not just the sonic palette. Each prompt specifies the structural energy at the major song moments, ensuring that what Suno generates has the right shape.</p>

<h2>From Bedroom to Viral</h2>
<p>The book covers five distinct territories in modern pop. Commercial electropop — the four-on-the-floor, super-saw synth sound of radio pop. Bedroom and indie pop — the intimate, imperfect aesthetic of artists like Clairo and Phoebe Bridgers. Dark and alt-pop — minor key, processed vocals, cinematic production. Dance pop designed for TikTok and club play. And soft adult contemporary pop optimized for Spotify playlist discovery. Each territory has different structural and sonic requirements, and the prompts in each chapter reflect those differences.</p>

<h2>Viral Pop Prompts and the Hook Economy</h2>
<p>The viral suno prompts in Chapter 5 are specifically designed for the social media hook economy — the 15-second moment that makes someone tap the duet button. These prompts front-load the most compelling melodic and rhythmic element, placing the hook within the first two bars rather than building to it conventionally. This is a departure from classical song structure but is now essentially mandatory for TikTok-first releases.</p>

<h2>Studio-Ready Output</h2>
<p>Every prompt in this book was tested against the standard: does the output sound like a real studio production? Pop is a genre where the production quality gap between amateur and professional is immediately audible. Studio-ready ai music prompts for pop specify the exact compression, reverb room size, vocal processing, and mix balance elements that differentiate a commercial pop track from a bedroom demo.</p>

<h2>The Suno v4 Pop Advantage</h2>
<p>Suno v4's commercial pop training data is among the best of any AI music model. The suno v4 prompts in this book are specifically calibrated for v4's particular strengths — its handling of vocal harmonics, its pre-chorus tension modeling, and its ability to produce a chorus "drop" that feels like a real musical event rather than just a volume change.</p>`,
  },

  {
    id: "06",
    slug: "dark-ambient-horror-prompts",
    volume: "06",
    title: "Dark Ambient & Horror AI Music Prompts",
    subtitle: "200 Soundscapes for Film, Game & Nightmare Atmospheres",
    hookSentence:
      "Horror music works through the sustained violation of expectation — the note that shouldn't be there, the silence where a beat should land. This book gives you 200 dark ambient suno prompts for film soundscapes, game atmospheres, and psychological horror, each built to trigger the specific unease that makes a scene unbearable in the best way.",
    genre: "Dark Ambient / Horror",
    accentColor: "#C84141",
    bgColor: "#0A0A0E",
    primaryKeyword: "dark ambient suno prompts",
    secondaryKeywords: [
      "dark ambient suno prompts",
      "horror music prompts",
      "suno ai epic cinematic trailer music prompts",
      "ai music prompt library",
      "prompt engineering for ai music",
    ],
    listPrice: 29.99,
    salePrice: 4.99,
    pages: 47,
    promptCount: 200,
    priceEnvVar: "STRIPE_PRICE_BOOK_06",
    downloadUrl: "https://htvctrxs7kiprhmr.public.blob.vercel-storage.com/Dark_Ambient_Horror_AI_Music_Prompts.pdf",
    chapters: [
      {
        number: 1,
        title: "The Psychology of Horror Sound Design",
        description:
          "Why certain frequencies and rhythmic structures trigger fear, and how to encode these into Suno and Udio prompts.",
      },
      {
        number: 2,
        title: "Psychological Horror & Dread",
        description:
          "40 prompts for quiet, sustained dread — the horror of what you can't see.",
      },
      {
        number: 3,
        title: "Monster & Creature Atmospheres",
        description:
          "35 prompts for the sonic character of monsters: low-frequency rumble, biological distortion, irregular breathing.",
      },
      {
        number: 4,
        title: "Haunted Spaces",
        description:
          "30 prompts for the acoustic signature of abandoned hospitals, empty houses, underwater spaces.",
      },
      {
        number: 5,
        title: "Survival Horror & Video Game",
        description:
          "35 prompts for interactive horror scoring — music that suggests imminent threat without resolving it.",
      },
      {
        number: 6,
        title: "Body Horror & Industrial Noise",
        description:
          "25 prompts for extreme sonic discomfort: industrial clang, flesh-toned percussion, feedback drones.",
      },
      {
        number: 7,
        title: "From Ambient to Sting",
        description:
          "How to build a horror soundtrack from ambient bed through tension to the full jump-scare sting.",
      },
      {
        number: 8,
        title: "The Vault (35 Bonus Prompts)",
        description:
          "35 additional prompts including folk horror, cosmic horror, demonic possession, and apocalyptic soundscapes.",
      },
      {
        number: 9,
        title: "Appendix — Horror Sound Design Toolkit",
        description:
          "Frequency ranges, common horror production techniques, and Suno/Udio-specific horror vocabulary.",
      },
    ],
    samplePrompts: [
      {
        label: "Psychological Dread",
        prompt:
          "[Genre: dark ambient / psychological horror] [Mood: dread, paranoia, something wrong you can't identify] [Instrumentation: low-frequency sine drone with slow LFO tremolo, reversed piano notes, irregular metallic tapping, no identifiable rhythm] [Vibe: realizing mid-conversation that something is watching] — extremely slow evolution, no resolution, sub-20Hz rumble layer, dark ambient suno prompts style",
      },
      {
        label: "Haunted Space",
        prompt:
          "[Genre: horror ambient / hauntology] [Mood: grief-saturated wrongness, temporal displacement, institutional horror] [Instrumentation: decayed music box melody, long empty reverb, distant children's voices, slow pulse at 20 BPM, creaking structure sounds] [Vibe: a hospital that closed thirty years ago but the lights still come on at night] — monophonic, extremely sparse, horror music prompts quality",
      },
      {
        label: "Video Game Survival Horror",
        prompt:
          "[Genre: survival horror game score] [Mood: imminent threat, hypervigilance, shallow breathing] [Instrumentation: string tremolo sul ponte, bass clarinet irregular phrases, sparse percussive thuds at unpredictable intervals, silence as structural element] [Vibe: player in a dark corridor, torch almost out, knows the monster is close] — no repetitive loop, every 8 bars different, game-score standard",
      },
    ],
    faqs: [
      {
        q: "Can I use AI horror music for film and video games?",
        a: "Yes — this is one of the primary commercial applications for AI music in the horror/ambient genre. Both Suno and Udio's paid tiers include commercial use rights. For sync licensing to third-party productions, check with the producing platform for their specific sync licensing terms.",
      },
      {
        q: "Can I release dark ambient AI music on Spotify?",
        a: "Yes. Dark ambient is a growing niche on Spotify with dedicated editorial playlists. DistroKid and TuneCore handle releases with AI disclosure. The genre's long-form listening patterns (hours-long atmospheric albums) make it commercially viable on streaming platforms.",
        link: { label: "Read our full release guide at melodyprompt.com", href: "https://melodyprompt.com/guides/ai-music-release-checklist" },
      },
      {
        q: "Does DistroKid allow AI horror music?",
        a: "Yes — DistroKid's AI policy covers all genres including dark ambient and horror soundscapes. Standard AI declaration applies during upload.",
        link: { label: "Read our full distribution guide at melodyprompt.com", href: "https://melodyprompt.com/guides/distribute-ai-music" },
      },
      {
        q: "How do I use a custom prompt in Suno AI for horror music?",
        a: "Horror music benefits from explicit silence and negative space instructions. In Suno Custom Mode, phrases like 'no percussion,' 'no resolution,' 'silence as structural element' are powerful. The GMIV framework for horror places special emphasis on the Vibe — the more specific and disturbing the scene anchor, the more specific and disturbing the output.",
        link: { label: "Read our full Suno guide at melodyprompt.com", href: "https://melodyprompt.com/guides/how-to-create-ai-music" },
      },
      {
        q: "What is the GMIV framework for dark ambient?",
        a: "For horror ambient: Genre anchors the sub-type (psychological dread, body horror, haunted space). Mood specifies the exact emotional register of fear — dread is different from panic is different from cosmic horror. Instrumentation lists the specific timbres that trigger the desired response. Vibe is the disturbing visual scenario that focuses the model's output.",
      },
      {
        q: "Are these prompts for Suno or Udio?",
        a: "Both. Dark ambient performs particularly well on Udio, which handles atonal, dissonant, and experimental soundscapes with sophistication. Suno's horror output has improved significantly in v4. The book notes which chapter prompts perform best on which platform.",
      },
      {
        q: "Do I get future updates?",
        a: "Yes — lifetime access included. As AI models improve their handling of experimental and atonal music, we update the prompt catalog.",
      },
      {
        q: "How do these prompts handle jump-scare stings vs sustained dread?",
        a: "Chapter 7 covers both ends of the horror sonic spectrum — the sustained atmospheric bed and the sudden percussive sting. The chapter teaches you to chain these two approaches using Suno's continuation feature to build a complete horror scene arc from ambient start through tension peak to sting impact.",
      },
    ],
    crossSellIds: ["02", "04", "10"],
    longFormIntro: `<p>Horror music operates on principles that are almost the opposite of most other genres. Where pop music rewards the listener with satisfying resolution, horror music specifically withholds it. Where ambient music creates comfort through predictable evolution, horror ambient creates discomfort through irregular events and violated expectations. Understanding this inversion is the key to writing dark ambient suno prompts that actually produce effective horror soundscapes.</p>

<h2>The Psychoacoustics of Fear</h2>
<p>Certain frequencies reliably trigger stress responses in human listeners. Sub-20Hz infrasound creates a sense of unease without an identifiable source — the physical sensation without the cognitive label. The tritone (augmented fourth interval) has been called "diabolus in musica" since medieval theory and remains one of the most reliable tension-generators in music. Irregular rhythms that don't resolve to a steady pulse keep the nervous system on alert. The horror music prompts in this book encode these psychoacoustic principles into each prompt, rather than simply describing a scary scene and hoping the AI infers the right sonic response.</p>

<h2>Sub-Genres of Horror Sound Design</h2>
<p>Horror is not a monolithic genre. Psychological dread is the quiet wrongness of something that shouldn't be happening — it requires sustained, barely-moving atmospheres with occasional disturbing interruptions. Creature and monster scoring requires low-frequency biological textures and irregular rhythmic patterns that suggest something living but not human. Haunted spaces require the acoustic signature of emptiness plus traces of past human presence. Survival horror for video games requires music that can loop without being predictable — a specific compositional challenge that Chapter 5 addresses directly.</p>

<h2>Silence as an Instrument</h2>
<p>The most important element in effective horror scoring isn't a sound — it's the absence of one. The beat that doesn't land after you've established a pattern. The held note that suddenly cuts rather than resolving. These prompt elements are included explicitly in the dark ambient suno prompts throughout this book, using phrases like "silence as structural element" and "no resolution" that reliably trigger the desired compositional approach in Suno v4 and Udio.</p>

<h2>From Game Score to Film Sync</h2>
<p>The 35 survival horror game prompts in Chapter 5 are designed for a specific challenge: music that loops without becoming predictable. A game-score horror cue can play for 20 minutes while a player explores a level — it can't have an obvious loop point, and it needs to maintain tension across that entire duration. Chapter 7 covers how to chain these prompts into longer-form scored sequences for film and game applications using Suno's continuation features.</p>

<h2>Industrial Noise and Body Horror</h2>
<p>Chapter 6 covers the extreme end of horror sound design — industrial noise, body horror, and psychological torture soundscapes. These prompts are for advanced applications: extreme cinema, horror games targeting mature audiences, or art installations. The prompt engineering for ai music at this end of the spectrum requires very specific instrumentation vocabulary, which the appendix provides in full.</p>`,
  },

  {
    id: "07",
    slug: "edm-drop-prompts",
    volume: "07",
    title: "EDM Drop Architect",
    subtitle:
      "200 Festival-Ready AI Prompts for Big Room, Future Bass & Tech House",
    hookSentence:
      "The drop is everything in EDM — the moment the crowd's arms go up, the bassline slams in, and four weeks of tension resolution happens in a single bar. These 200 EDM suno prompts are engineered specifically for that moment: the build, the breakdown, and the drop, across big room, future bass, tech house, and dubstep.",
    genre: "EDM / Electronic",
    accentColor: "#3CD0E5",
    bgColor: "#070E1F",
    primaryKeyword: "EDM suno prompts",
    secondaryKeywords: [
      "EDM suno prompts",
      "udio prompts",
      "best udio prompts",
      "studio-ready ai music prompts",
      "suno v4 prompts",
      "ai music prompt library",
    ],
    listPrice: 29.99,
    salePrice: 4.99,
    pages: 47,
    promptCount: 200,
    priceEnvVar: "STRIPE_PRICE_BOOK_07",
    downloadUrl: "https://htvctrxs7kiprhmr.public.blob.vercel-storage.com/EDM_Drop_Architect.pdf",
    chapters: [
      {
        number: 1,
        title: "The EDM Drop Formula",
        description:
          "How the build-breakdown-drop-outro structure works and how to encode each phase into a dedicated Suno prompt.",
      },
      {
        number: 2,
        title: "Big Room House",
        description:
          "40 prompts for stadium-sized house music: wide leads, massive kicks, crowd-ready drops.",
      },
      {
        number: 3,
        title: "Future Bass & Melodic Bass",
        description:
          "35 prompts for the SuperSaw-heavy, emotionally charged future bass sound of post-Flume EDM.",
      },
      {
        number: 4,
        title: "Tech House & Minimal",
        description:
          "30 prompts for the club-focused, groove-driven tech house aesthetic.",
      },
      {
        number: 5,
        title: "Dubstep & Bass Music",
        description:
          "35 prompts for bass-heavy dubstep, riddim, and heavy electronic music.",
      },
      {
        number: 6,
        title: "Melodic Techno & Progressive House",
        description:
          "30 prompts for the emotional, evolving structure of melodic techno and progressive house.",
      },
      {
        number: 7,
        title: "Build, Breakdown, and Drop Architecture",
        description:
          "How to chain the prompts in this book to construct a complete festival-ready EDM track.",
      },
      {
        number: 8,
        title: "The Vault (30 Bonus Prompts)",
        description:
          "30 additional prompts including trance, drum and bass, hardstyle, and ambient house.",
      },
      {
        number: 9,
        title: "Appendix — EDM Production Vocabulary",
        description:
          "Glossary of EDM production terms used in the prompts, with Suno and Udio equivalents.",
      },
    ],
    samplePrompts: [
      {
        label: "Big Room Drop",
        prompt:
          "[Genre: big room house / EDM] [Mood: euphoric release, hands in the air, peak festival energy] [Instrumentation: four-on-the-floor kick at 128 BPM, white-noise riser before drop, super-saw lead chord stab, sidechain compression hard on bass, clap on 2+4, pluck arp in breakdown] [Vibe: main stage, Saturday night, 60,000 people all facing forward] — drop hits at bar 33, no vocals, massive reverb on lead, EDM suno prompts style",
      },
      {
        label: "Future Bass Chord Drop",
        prompt:
          "[Genre: future bass / melodic bass] [Mood: euphoric-melancholic, emotionally overwhelming, beautiful sadness] [Instrumentation: Super Saw chord stacks detuned ±20 cents, chopped vocal sample in buildup, punchy kick with heavy sidechain, bass wobble on drop, lush reverb wash in breakdown] [Vibe: last song before sunrise, everyone knows it's almost over] — 150 BPM, F# minor, best udio prompts quality",
      },
      {
        label: "Tech House Groove",
        prompt:
          "[Genre: tech house / minimal techno] [Mood: hypnotic, physical, underground club in basement] [Instrumentation: driving kick at 130 BPM, sub bass groove with swing, hi-hat with triplet ghost notes, percussion loop with organic texture, filter sweep rising over 4 bars] [Vibe: 3am, concrete walls, 200 people all moving the same way] — minimal melody, drum-forward, groove never drops out, udio prompts style",
      },
    ],
    faqs: [
      {
        q: "Can I release AI EDM on Spotify?",
        a: "Yes — EDM is one of the highest-velocity genres on Spotify. AI EDM tracks are distributed through DistroKid, TuneCore, or similar with standard AI disclosure. Dance/EDM editorial playlists accept independent submissions.",
        link: { label: "Read our full release guide at melodyprompt.com", href: "https://melodyprompt.com/guides/ai-music-release-checklist" },
      },
      {
        q: "Does DistroKid allow AI music for EDM releases?",
        a: "Yes. DistroKid's AI policy applies to all genres. EDM is particularly clean in terms of AI disclosure because it's often fully produced instrumentals without samples — no additional copyright clearance required.",
        link: { label: "Read our full distribution guide at melodyprompt.com", href: "https://melodyprompt.com/guides/distribute-ai-music" },
      },
      {
        q: "How do I use a custom prompt in Suno AI for EDM?",
        a: "EDM benefits from structure-specific prompts. Rather than one prompt for a full 5-minute track, use separate prompts for the intro/build, the breakdown, and the drop. Suno's Continue feature lets you link them while maintaining sonic consistency.",
        link: { label: "Read our full Suno guide at melodyprompt.com", href: "https://melodyprompt.com/guides/how-to-create-ai-music" },
      },
      {
        q: "What is the GMIV framework for EDM?",
        a: "For electronic music: Genre specifies the exact sub-style. Mood specifies the emotional register of the drop — euphoria, aggression, melancholy, hypnosis. Instrumentation lists the specific synthesis types and production techniques. Vibe gives the scene anchor — festival main stage, underground club, sunrise set — which dramatically affects Suno's tonal and dynamic decisions.",
      },
      {
        q: "Are these EDM prompts for Suno or Udio?",
        a: "Both. Suno handles big room and commercial EDM particularly well. Udio's synthesis modeling is excellent for tech house and minimal techno. The book notes platform recommendations per chapter.",
      },
      {
        q: "Do I get future updates?",
        a: "Yes — lifetime access with updates for new Suno/Udio versions.",
      },
      {
        q: "How many sub-genres are covered?",
        a: "Five main sub-genres in the core chapters (big room, future bass, tech house, dubstep, melodic techno/progressive house), plus vault prompts covering trance, drum and bass, hardstyle, and ambient house — 9 sub-genres total across 200 prompts.",
      },
      {
        q: "Can these prompts produce tracks good enough for DJ use?",
        a: "The outputs are production-quality starting points. Many producers use AI as the initial generation layer, then apply post-production (mixing, mastering, additional arrangement) to take the track to release quality. The prompts are written to produce the cleanest, most workable starting point for this workflow.",
      },
    ],
    crossSellIds: ["03", "05", "10"],
    longFormIntro: `<p>In EDM, everything is structured around one moment: the drop. The build creates tension through rising filters, noise sweeps, and escalating synth stacks. The breakdown strips the music down to near-silence, creating maximum tension before the release. The drop delivers the payoff — kick drum, bassline, and lead all slamming in simultaneously at peak intensity. Getting this arc right in an AI-generated track requires encoding the emotional function of each section, not just its sonic characteristics.</p>

<h2>Why Generic EDM Prompts Produce Flat Results</h2>
<p>The most common failure mode for EDM suno prompts is prompting for a sound rather than an arc. "Big room house" as a prompt produces a technically correct but emotionally inert result — correct instrumentation but no sense of tension and release. The 200 prompts in this book encode the emotional function at each structural moment: the anticipation of a build, the restraint of a breakdown, the euphoria of a drop. This functional encoding is what separates festival-ready AI music from generic dance music output.</p>

<h2>Sub-Genre Architecture</h2>
<p>The book covers five EDM territories that each require distinct prompt approaches. Big room house is the stadium-ready, maximum-energy format with wide leads and four-on-the-floor kicks. Future bass — the sound of Flume, Marshmello, and their successors — is about emotional weight through detuned SuperSaw chords and melodic bass movement. Tech house is groove-driven and hypnotic rather than euphoric. Dubstep is bass-first, with the wobble as the primary melodic element. Melodic techno and progressive house are the most compositionally sophisticated, requiring slow evolution over 7–8 minutes.</p>

<h2>The Build, Breakdown, Drop Method</h2>
<p>Chapter 7 covers the practical workflow: using three separate prompts (one for the build section, one for the breakdown, one for the drop) and chaining them using Suno's Continue feature. This is the most reliable way to get a full, structurally correct EDM track from AI. Single-prompt EDM tracks tend to plateau emotionally because the model has to compress all three phases into one generation.</p>

<h2>Best Udio Prompts for Electronic Music</h2>
<p>Udio's synthesis modeling produces some of the most musically sophisticated electronic music of any AI model. The best udio prompts for tech house and minimal techno produce output that sounds genuinely different from Suno's approach to the same prompt — more rhythmically sophisticated, with a more accurate representation of club-music groove. Chapter 4's tech house section includes specific Udio-optimized prompts noted inline.</p>

<h2>From AI Output to Festival Floor</h2>
<p>Studio-ready ai music prompts for EDM are written to minimize post-production time. Every prompt is tested against the question: can a producer take this output, apply basic mixing and mastering, and have something genuinely playable? The EDM market has increasingly embraced AI as part of the production workflow, and these prompts are designed to fit that workflow cleanly.</p>`,
  },

  {
    id: "08",
    slug: "worship-gospel-prompts",
    volume: "08",
    title: "Worship & Gospel AI Music Prompt Handbook",
    subtitle: "200 Prompts for Contemporary Worship, Hymns & Gospel",
    hookSentence:
      "Worship music carries the weight of genuine spiritual practice — it needs to feel sacred, not generic. These 200 worship suno prompts are built for contemporary worship teams, gospel artists, and producers creating music for congregations and streaming, covering everything from intimate piano-led anthems to full gospel choir productions.",
    genre: "Worship / Gospel",
    accentColor: "#D9A93A",
    bgColor: "#1A1408",
    primaryKeyword: "worship suno prompts",
    secondaryKeywords: [
      "worship suno prompts",
      "gospel ai music prompts",
      "ai music prompt library",
      "studio-ready ai music prompts",
      "suno v4 prompts",
    ],
    listPrice: 29.99,
    salePrice: 4.99,
    pages: 47,
    promptCount: 200,
    priceEnvVar: "STRIPE_PRICE_BOOK_08",
    downloadUrl: "https://htvctrxs7kiprhmr.public.blob.vercel-storage.com/Worship_Gospel_AI_Music_Prompt_Handbook.pdf",
    chapters: [
      {
        number: 1,
        title: "The Language of Sacred Music",
        description:
          "Vocabulary and musical theology that makes worship music feel authentic versus formulaic in AI prompts.",
      },
      {
        number: 2,
        title: "Contemporary Worship Anthems",
        description:
          "40 prompts for the modern church sound: electric guitar-led worship, atmospheric keys, congregational dynamics.",
      },
      {
        number: 3,
        title: "Intimate Acoustic Worship",
        description:
          "35 prompts for stripped-down worship: piano, acoustic guitar, close vocals, no production sheen.",
      },
      {
        number: 4,
        title: "Traditional Hymns & Choir",
        description:
          "30 prompts for classic hymnal arrangements with full SATB choir and pipe organ.",
      },
      {
        number: 5,
        title: "Contemporary Gospel",
        description:
          "35 prompts for gospel music: Hammond organ, gospel piano style, call-and-response choir, testifying vocals.",
      },
      {
        number: 6,
        title: "Cinematic Worship & Instrumental",
        description:
          "30 prompts for orchestral worship used in film, documentary, and streaming playlists.",
      },
      {
        number: 7,
        title: "Building a Full Worship Set",
        description:
          "How to chain these prompts into an opening song, a moment of reflection, and a sending-out anthem.",
      },
      {
        number: 8,
        title: "The Vault (30 Bonus Prompts)",
        description:
          "30 additional prompts including spiritual but not religious, ambient prayer, and Christmas/Easter special music.",
      },
      {
        number: 9,
        title: "Appendix — Worship Music Reference",
        description:
          "Key centers for congregational singing, common worship song structures, and production notes.",
      },
    ],
    samplePrompts: [
      {
        label: "Contemporary Worship Anthem",
        prompt:
          "[Genre: contemporary worship / CCM] [Mood: reverent hope, building conviction, communal surrender] [Instrumentation: electric guitar with light reverb, B3 organ swell, kick and snare at 72 BPM, choir pad, piano chords building from sparse to full] [Vibe: 1500 people standing in the dark with phone lights up] — male lead vocal, key of G major, strong pre-chorus build to anthem chorus, worship suno prompts standard",
      },
      {
        label: "Intimate Acoustic Worship",
        prompt:
          "[Genre: intimate acoustic worship] [Mood: tender surrender, personal and quiet, God is in the room] [Instrumentation: fingerpicked acoustic guitar in open tuning, single piano note melody, no drums, room reverb only, sparse cello note] [Vibe: small group worship, living room, early morning] — close-mic'd female vocal, key of D, no chorus dynamics, pure presence",
      },
      {
        label: "Gospel Choir Explosion",
        prompt:
          "[Genre: contemporary gospel] [Mood: joyful declaration, uncontainable praise, testifying] [Instrumentation: Hammond B3 organ, gospel piano runs, full SATB choir, snare on all four beats, tambourine, bass guitar groove] [Vibe: Sunday morning, fourth song in, congregation on their feet] — call-and-response choir, male lead with wail, key of Bb, gospel ai music prompts quality",
      },
    ],
    faqs: [
      {
        q: "Can I release AI worship music on Spotify?",
        a: "Yes — Christian/Gospel is one of the most active categories on Spotify with dedicated editorial playlists. AI-generated worship music is treated the same as any other release. Declare AI involvement through your distributor (DistroKid, TuneCore) and submit to Christian music playlists through standard editorial pitching.",
        link: { label: "Read our full release guide at melodyprompt.com", href: "https://melodyprompt.com/guides/ai-music-release-checklist" },
      },
      {
        q: "Does DistroKid allow AI gospel music?",
        a: "Yes. DistroKid's AI policy applies to all genres including worship and gospel. Declare AI involvement during upload. Many contemporary worship artists use AI in their production workflow already.",
        link: { label: "Read our full distribution guide at melodyprompt.com", href: "https://melodyprompt.com/guides/distribute-ai-music" },
      },
      {
        q: "How do I use a custom prompt in Suno AI for worship music?",
        a: "Worship music in Suno responds well to specific congregation-size cues (small group vs. large arena), instrument presence (Hammond organ, electric guitar, acoustic), and dynamic arc cues (intimate verse to anthem chorus). Always specify the key — congregational worship needs to be singable, typically in the range of D to G major.",
        link: { label: "Read our full Suno guide at melodyprompt.com", href: "https://melodyprompt.com/guides/how-to-create-ai-music" },
      },
      {
        q: "What is the GMIV framework for worship music?",
        a: "For worship: Genre specifies the worship style (contemporary, acoustic, gospel, hymnal). Mood captures the specific devotional emotion — surrender, declaration, lament, gratitude. Instrumentation describes the worship band or choir configuration. Vibe is the worship setting — small group, 1500-seat auditorium, outdoor festival — which dramatically shapes the production feel.",
      },
      {
        q: "Are these prompts appropriate for church use?",
        a: "The prompts produce music, not lyrics. The musical output is appropriate for worship contexts. Lyrics generation (if enabled) should be reviewed before congregational use. Most users use the instrumental versions from these prompts and add their own lyrics or existing hymn texts.",
      },
      {
        q: "Are these worship prompts for Suno or Udio?",
        a: "Both. Contemporary worship and gospel perform well on both platforms. The gospel choir and traditional hymn prompts produce particularly authentic results on Udio. Suno's CCM worship output is strong for modern church sounds.",
      },
      {
        q: "Do I get future updates?",
        a: "Yes — lifetime access with updates.",
      },
      {
        q: "Can I use these for Christmas or Easter special music?",
        a: "Yes — the Vault in Chapter 8 includes 10 prompts specifically for Christmas and Easter special music, covering everything from children's choir to full orchestral Christmas cantata.",
      },
    ],
    crossSellIds: ["09", "01", "10"],
    longFormIntro: `<p>Worship music carries a weight that most commercial genres don't. It's not background music — it's the sonic environment for some of the most significant moments in a congregation's shared life. When AI-generated worship music sounds formulaic, it fails its purpose entirely. The 200 worship suno prompts in this book are built to avoid that failure, encoding not just the sonic characteristics of contemporary worship but the devotional emotional arc that makes a worship song feel like an encounter rather than a performance.</p>

<h2>The Language of Authentic Worship Music</h2>
<p>Chapter 1 addresses the specific vocabulary that makes AI worship music feel authentic. This isn't about inserting religious words — it's about understanding the musical theology embedded in the genre's production choices. Contemporary worship uses electric guitar with light reverb and B3 organ swells for a reason: these instruments carry cultural associations with the Holy Spirit's presence in charismatic church tradition. A pipe organ signals a different theological posture entirely. These choices aren't arbitrary, and encoding them intentionally produces music that resonates with actual worship communities rather than sounding like generic inspirational music.</p>

<h2>Contemporary Worship vs. Traditional Gospel</h2>
<p>The book draws a clear line between contemporary worship (CCM, modern church sound) and traditional gospel. These are musically different genres with different production approaches, different chord voicings, and different emotional registers. Contemporary worship anthems (Chapter 2) use the sonic vocabulary of modern rock and pop applied to sacred content. Gospel (Chapter 5) uses the vocabulary of African American church music — Hammond organ, gospel piano runs, call-and-response choir, testifying vocalism. Each chapter's prompts are written with genre-specific precision.</p>

<h2>Intimate and Acoustic Worship</h2>
<p>Chapter 3 covers a frequently underserved category: stripped-down worship for small groups, prayer meetings, and personal devotional use. These gospel ai music prompts produce the quiet, close presence that arena worship can't achieve — the sound of someone praying out loud with a guitar, raw and unpolished. This is some of the most musically honest content in the book.</p>

<h2>Cinematic Worship for Media</h2>
<p>Chapter 6 covers orchestral and cinematic worship — the sound of worship music used in Christian film, documentary, and streaming playlists like Spotify's "Peaceful Christian Songs." These prompts are designed for sync and media applications rather than congregational use, with the production scale and emotional scope of film scoring applied to sacred themes.</p>

<h2>Building a Complete Worship Set</h2>
<p>Chapter 7 provides a practical workflow for using these prompts to build a three-song worship set: an opening song that draws the congregation in, a mid-set moment of intimate reflection, and a sending-out anthem that carries people into their week. Each section requires a different emotional and sonic approach, and the chapter shows exactly which prompts to combine for each moment.</p>`,
  },

  {
    id: "09",
    slug: "country-folk-prompts",
    volume: "09",
    title: "Country & Folk Storytelling Prompt Vault",
    subtitle: "200 AI Prompts for Honest Songs from the Front Porch",
    hookSentence:
      "Country and folk music is built on truth-telling — the specific detail that makes a listener recognize their own life in a stranger's song. These 200 country suno prompts are built around storytelling specificity, covering traditional country, modern Nashville pop-country, Americana, and folk, with the production authenticity to match each sub-genre.",
    genre: "Country / Folk",
    accentColor: "#C28443",
    bgColor: "#1B1410",
    primaryKeyword: "country suno prompts",
    secondaryKeywords: [
      "country suno prompts",
      "folk storytelling prompts",
      "ai music prompt library",
      "studio-ready ai music prompts",
      "copy paste suno prompts",
    ],
    listPrice: 29.99,
    salePrice: 4.99,
    pages: 47,
    promptCount: 200,
    priceEnvVar: "STRIPE_PRICE_BOOK_09",
    downloadUrl: "https://htvctrxs7kiprhmr.public.blob.vercel-storage.com/Country_Folk_Storytelling_Prompt_Vault.pdf",
    chapters: [
      {
        number: 1,
        title: "The Country-Folk Storytelling Tradition",
        description:
          "What makes country and folk music authentic — the production choices and lyrical specificity that AI can replicate.",
      },
      {
        number: 2,
        title: "Traditional Country & Honky-Tonk",
        description:
          "40 prompts for classic country: fiddle, pedal steel, Telecaster twang, and storytelling in the Hank Williams tradition.",
      },
      {
        number: 3,
        title: "Modern Nashville Country",
        description:
          "35 prompts for contemporary pop-country: anthemic choruses, production sheen, bro-country energy.",
      },
      {
        number: 4,
        title: "Americana & Roots",
        description:
          "30 prompts for the country-rock-folk crossover: Americana, outlaw country, Southern Gothic.",
      },
      {
        number: 5,
        title: "Singer-Songwriter Folk",
        description:
          "35 prompts for the stripped-down acoustic storytelling tradition: one guitar, one voice, complete honesty.",
      },
      {
        number: 6,
        title: "Bluegrass & String Band",
        description:
          "30 prompts for traditional string band music: banjo, mandolin, fiddle, upright bass.",
      },
      {
        number: 7,
        title: "Building a Country Album",
        description:
          "How to chain these prompts to build a cohesive 10-track country/folk album with varied moods.",
      },
      {
        number: 8,
        title: "The Vault (30 Bonus Prompts)",
        description:
          "30 additional prompts including Celtic-influenced folk, gospel country, and country Christmas.",
      },
      {
        number: 9,
        title: "Appendix — Country Production Reference",
        description:
          "Traditional vs. modern Nashville production differences, and key-center guide for country.",
      },
    ],
    samplePrompts: [
      {
        label: "Traditional Honky-Tonk",
        prompt:
          "[Genre: traditional country / honky-tonk] [Mood: heartbroken but defiant, drinking to forget but it's not working] [Instrumentation: Telecaster lead with chicken-picking, pedal steel sob notes, upright bass walk, shuffle drum pattern at 120 BPM, acoustic rhythm guitar] [Vibe: dive bar on a Tuesday, the kind where everyone knows your name and your problem] — male vocal with twang, key of G, first verse slow build, chorus opens up, country suno prompts style",
      },
      {
        label: "Singer-Songwriter Folk",
        prompt:
          "[Genre: singer-songwriter folk] [Mood: honest, searching, the moment before you understand something] [Instrumentation: fingerpicked steel-string acoustic, sparse brush percussion at 80 BPM, cello note held in low register, no other instruments] [Vibe: driving a highway you used to drive with someone who isn't here anymore] — close-mic'd vocal, conversational, imperfect in the right places, folk storytelling prompts style",
      },
      {
        label: "Americana Roots Rock",
        prompt:
          "[Genre: Americana / roots rock] [Mood: weathered, clear-eyed, earned wisdom] [Instrumentation: slide guitar in open G, Hammond organ accent, kick and snare at 95 BPM, acoustic bass, harmony vocal on chorus] [Vibe: small-town main street, autumn, thirty years after you left and came back] — male-female harmony, key of A, unhurried tempo, copy paste suno prompts quality",
      },
    ],
    faqs: [
      {
        q: "Can I release AI country music on Spotify?",
        a: "Yes — country is a major commercial genre on Spotify with multiple editorial playlists. AI country music releases through DistroKid or TuneCore with standard AI disclosure. Country-specific playlist pitching through Spotify for Artists follows the same process as any independent country release.",
        link: { label: "Read our full release guide at melodyprompt.com", href: "https://melodyprompt.com/guides/ai-music-release-checklist" },
      },
      {
        q: "Does DistroKid allow AI folk music?",
        a: "Yes. DistroKid's AI declaration process covers all genres including country and folk. Singer-songwriter folk especially is a clean use case — no sample clearance, no interpolation concerns, straightforward AI declaration.",
        link: { label: "Read our full distribution guide at melodyprompt.com", href: "https://melodyprompt.com/guides/distribute-ai-music" },
      },
      {
        q: "How do I use a custom prompt in Suno AI for country music?",
        a: "Country music in Suno responds well to specific instrument cues (pedal steel, Telecaster, fiddle), regional specificity (Nashville vs. Texas vs. Appalachian), and storytelling vibe anchors. Always specify BPM and shuffle vs. straight feel — country's rhythmic groove is deeply tied to these distinctions.",
        link: { label: "Read our full Suno guide at melodyprompt.com", href: "https://melodyprompt.com/guides/how-to-create-ai-music" },
      },
      {
        q: "What is the GMIV framework for country and folk?",
        a: "For country/folk: Genre specifies the exact sub-style from traditional honky-tonk to contemporary Nashville to Americana to singer-songwriter folk. Mood captures the specific emotional honesty of the song. Instrumentation describes the specific instrument configuration and playing style. Vibe is the scene — the specific place, time, and situation that grounds the storytelling.",
      },
      {
        q: "Are these prompts for Suno or Udio?",
        a: "Both. Country and Americana perform well on Suno, which has strong training data for these genres. Udio handles the folk and singer-songwriter prompts with particularly authentic instrumental texture.",
      },
      {
        q: "Do these prompts work for modern pop-country?",
        a: "Yes — Chapter 3 is dedicated specifically to modern Nashville pop-country with the contemporary production elements (big choruses, anthemic delivery, modern production sheen) that define current chart country.",
      },
      {
        q: "Do I get future updates?",
        a: "Yes — lifetime access with updates.",
      },
      {
        q: "What's the difference between Americana and traditional country in these prompts?",
        a: "Traditional country prompts (Chapter 2) encode the classic Nashville Sound and honky-tonk tradition: pedal steel, Telecaster, shuffle rhythm, straight commercial structure. Americana prompts (Chapter 4) encode the country-rock-folk crossover: more production rawness, longer song forms, more harmonic complexity, and often a literary or Southern Gothic narrative vibe.",
      },
    ],
    crossSellIds: ["08", "01", "04"],
    longFormIntro: `<p>Country music has survived for a century because it tells the truth. Not emotional truth in the abstract, but specific truth: the name of the bar, the smell of the truck cab, the exact way someone's voice sounds when they're trying not to cry. This specificity — the concrete detail that makes a stranger recognize their own life — is what separates country music that connects from country music that sounds like a country song. It's also the most important principle behind the 200 country suno prompts in this book.</p>

<h2>Why Specificity Matters in Country and Folk Prompts</h2>
<p>When you prompt Suno with "country song," you get the average of country — which in the AI training data means something between modern Nashville pop-country and the classic 1990s country that still dominates the model's reference frame. The Vibe element of the GMIV framework is particularly critical for this genre: not just "heartbreak" but "standing in the parking lot after last call realizing she's already gone." That specificity is the difference between a generic country-sounding output and something that sounds like it happened to a real person.</p>

<h2>The Sub-Genre Architecture</h2>
<p>Country and folk is a deeply fragmented genre space. Traditional honky-tonk (Chapter 2) requires fiddle, pedal steel, and a specific rhythmic shuffle feel that Suno responds to with particular accuracy when prompted correctly. Modern Nashville pop-country (Chapter 3) is a completely different animal — anthemic chorus dynamics, contemporary production sheen, and bro-country energy that's frankly closer to radio pop than to Hank Williams. Americana (Chapter 4) is the outlaw tradition: rawer production, more literary content, country-rock guitar, and a Southern Gothic atmosphere. Singer-songwriter folk (Chapter 5) strips everything back to one voice and one guitar in a room.</p>

<h2>Storytelling and the Folk Tradition</h2>
<p>The folk storytelling prompts in Chapter 5 are built around the tradition that runs from Woody Guthrie through Bob Dylan through Gillian Welch and Adrianne Lenker: music that tells a complete story with the economy of a short story, where every word earns its place. These prompts encode the close-mic vocal intimacy, the fingerpicking guitar patterns, and the unhurried tempo that allow a narrative to unfold naturally. These folk storytelling prompts are among the most consistently authentic in this entire catalog when used on Udio, which handles acoustic guitar timbre with particular fidelity.</p>

<h2>Bluegrass and String Band Music</h2>
<p>Chapter 6 covers bluegrass — a category that AI music models handle with variable success because bluegrass demands technical precision: the specific timing of banjo rolls, the call-and-response between fiddle and mandolin, the way a five-string banjo in G tuning relates to an upright bass in the same key. The prompts in this chapter are written with that technical specificity, producing output that's genuinely usable rather than a caricature of the genre.</p>

<h2>From Prompt to Release</h2>
<p>Chapter 7 provides a practical workflow for building a complete country or folk album from these copy paste suno prompts — sequencing the 10 tracks for emotional variety, balancing fast and slow, and maintaining tonal and thematic coherence across a full release. Whether you're an independent country artist or a songwriter exploring AI tools, this book gives you the production starting points to work with.</p>`,
  },

  {
    id: "10",
    slug: "udio-suno-mastery-guide",
    volume: "10",
    title: "The Ultimate Udio & Suno Prompt Mastery Guide",
    subtitle: "A Professional System for Studio-Ready AI Music",
    hookSentence:
      "Most AI music books teach you prompts. This one teaches you the system behind the prompts — how to use the GMIV framework, how to chain generations, how to use Suno v4's custom mode step by step, and how to build a repeatable production workflow that produces studio-ready AI music every session.",
    genre: "Mastery / System",
    accentColor: "#7B8BFA",
    bgColor: "#0B0F1E",
    primaryKeyword: "how to use suno ai music generator step by step",
    secondaryKeywords: [
      "how to use custom prompt in suno ai 2026",
      "udio prompts",
      "best udio prompts",
      "udio ai prompts",
      "suno v4 prompts",
      "suno custom prompt guide",
      "GMIV framework",
      "prompt engineering for ai music",
      "how to use suno ai music generator step by step",
    ],
    listPrice: 29.99,
    salePrice: 4.99,
    pages: 52,
    promptCount: 200,
    priceEnvVar: "STRIPE_PRICE_BOOK_10",
    downloadUrl: "https://htvctrxs7kiprhmr.public.blob.vercel-storage.com/The_Ultimate_Udio_Suno_Prompt_Mastery_Guide.pdf",
    chapters: [
      {
        number: 1,
        title: "How Suno and Udio Actually Work",
        description:
          "A non-technical explanation of what these models do with a prompt, and why certain prompt structures produce better outputs.",
      },
      {
        number: 2,
        title: "The Complete GMIV Framework",
        description:
          "A deep dive into Genre, Mood, Instrumentation, and Vibe — with 30 before/after examples showing GMIV in action.",
      },
      {
        number: 3,
        title: "How to Use Custom Mode in Suno AI 2026",
        description:
          "Step-by-step walkthrough of Suno v4 Custom Mode, inpainting, extension, and generation settings.",
      },
      {
        number: 4,
        title: "Udio Prompts — The Complete System",
        description:
          "How Udio processes prompts differently than Suno, and how to adapt your GMIV prompts for maximum Udio output quality.",
      },
      {
        number: 5,
        title: "Chaining Generations",
        description:
          "How to build complete, multi-section tracks using Suno's Continue feature and Udio's extension tools.",
      },
      {
        number: 6,
        title: "Genre Mastery Templates",
        description:
          "40 master prompts covering all 10 genres — one per genre — plus variations showing how to modify them.",
      },
      {
        number: 7,
        title: "Production Workflows",
        description:
          "Three complete production workflows: quick content creation, album production, and sync/licensing preparation.",
      },
      {
        number: 8,
        title: "The Vault (Bonus 40 Cross-Genre Prompts)",
        description:
          "40 experimental prompts that blend genres in unexpected ways — country-electronic, horror-gospel, jazz-trap.",
      },
      {
        number: 9,
        title: "Appendix — Complete GMIV Reference and Release Guide",
        description:
          "Full GMIV cheat sheet, release checklist for Spotify/DistroKid, and platform comparison table.",
      },
    ],
    samplePrompts: [
      {
        label: "GMIV Master Template",
        prompt:
          "[Genre: <your genre — be specific: not 'rock' but 'post-grunge alternative rock'] [Mood: <your mood — not 'sad' but 'hollow grief becoming acceptance'] [Instrumentation: <list each instrument separately, with playing style and audio character: 'overdriven Les Paul through Marshall, palm-muted verses'> ] [Vibe: <a specific visual scene that grounds the emotion: '2am kitchen, power's out, candle in a wine bottle'>] — <any additional technical details: key, BPM, vocals yes/no, song structure>",
      },
      {
        label: "Suno v4 Custom Mode Example",
        prompt:
          "[Genre: neo-soul / R&B] [Mood: confident self-knowledge, sensual, unhurried] [Instrumentation: Rhodes electric piano with tremolo, smooth bass guitar, brushed drum kit at 85 BPM, vibraphone accent, background synth pad] [Vibe: golden-hour bedroom session, someone who has nothing left to prove] — female vocal, key of Eb major, verse-chorus, contemporary R&B production standard — Custom Mode: Style field, no lyrics, extend to 4 min using Continue",
      },
      {
        label: "Udio Cross-Genre Experimental",
        prompt:
          "[Genre: country-electronic fusion] [Mood: lonely nostalgia filtered through digital abstraction] [Instrumentation: pedal steel guitar processed through granular synthesis, 808 kick at 90 BPM with natural decay, banjo picked then pitch-shifted down, ambient pad in the distance] [Vibe: the version of your hometown that exists only in your phone's photo library] — udio ai prompts style, no vocals, experimental, 3-minute evolving arc",
      },
    ],
    faqs: [
      {
        q: "How do I use Suno AI music generator step by step?",
        a: "1) Go to suno.com and sign in. 2) Click 'Create' to enter the generation interface. 3) Toggle 'Custom Mode' on. 4) Paste your GMIV-formatted prompt into the Style field. 5) Optionally add a title and lyrics (or leave blank for instrumental). 6) Click Create. The model generates two variations. 7) Use 'Continue' to extend your favorite. Chapter 3 of this book covers every option in Custom Mode with screenshots and worked examples.",
      },
      {
        q: "What is the GMIV framework?",
        a: "GMIV stands for Genre, Mood, Instrumentation, Vibe — the four-part prompt structure that forms the backbone of this entire book series. Chapter 2 provides a complete deep-dive with 30 before/after examples. The short version: Genre anchors the model's reference pool. Mood specifies emotional output. Instrumentation describes the sonic palette. Vibe is the visual/cinematic anchor that focuses all three into a specific creative direction.",
      },
      {
        q: "What's the difference between Suno and Udio for prompting?",
        a: "Suno tends to produce more commercially-polished output with stronger melodic hooks. Udio tends to produce more musically sophisticated output with better handling of complex harmony, unusual timbres, and experimental genres. For most commercial pop, trap, and EDM, Suno v4 is the stronger choice. For jazz, classical, experimental, and complex orchestral music, Udio generally produces better results. Chapter 4 covers the full comparison with genre-specific recommendations.",
      },
      {
        q: "Can I release AI music on Spotify?",
        a: "Yes — Spotify accepts AI music. You need to release through a distributor (DistroKid, TuneCore, CD Baby) that has an AI disclosure process. Declare your use of AI during the upload. Spotify treats AI music the same as any other indie release in terms of playlist consideration and discovery. The appendix in this book includes a complete release checklist for Spotify, Apple Music, and YouTube Music.",
        link: { label: "Read our full release guide at melodyprompt.com", href: "https://melodyprompt.com/guides/ai-music-release-checklist" },
      },
      {
        q: "Does DistroKid allow AI music?",
        a: "Yes. DistroKid has an 'AI-assisted' or 'AI-generated' declaration option in their upload flow. Both options are permitted. The main requirement is honest disclosure. DistroKid is generally considered the most straightforward distributor for AI music releases as of 2026.",
        link: { label: "Read our full distribution guide at melodyprompt.com", href: "https://melodyprompt.com/guides/distribute-ai-music" },
      },
      {
        q: "How do I use custom prompts in Suno AI in 2026?",
        a: "In Suno v4, go to Custom Mode, paste your GMIV prompt in the Style field. You can include: instrument descriptions, genre tags, mood descriptions, BPM, key, and the Vibe anchor. Chapter 3 covers every field in Suno's interface with specific examples for each genre covered in this book series.",
        link: { label: "Read our full Suno guide at melodyprompt.com", href: "https://melodyprompt.com/guides/how-to-create-ai-music" },
      },
      {
        q: "What's the best way to use Udio prompts?",
        a: "Udio responds well to highly specific instrumentation descriptions and less well to vague mood or genre tags. For best udio prompts results: be specific about instrument character (not 'guitar' but 'nylon-string classical guitar with room reverb'), specify the harmonic approach if relevant, and use the Vibe element to give strong cinematic direction. Chapter 4 covers the full Udio-specific prompt system.",
      },
      {
        q: "Do I get future updates to the Mastery Guide?",
        a: "Yes — lifetime access. This book is updated whenever Suno or Udio releases significant new versions, interface changes, or new generation capabilities. It's the living reference document for the entire MelodyPrompt prompt system.",
      },
    ],
    crossSellIds: ["01", "02", "03"],
    longFormIntro: `<p>Every other book in the MelodyPrompt series teaches you prompts for a specific genre. This book teaches you the system that generates all of them. Understanding how Suno and Udio actually process a prompt — what they do with a genre tag, why a Vibe anchor produces consistently different output than a Mood tag alone, how the Continue feature maintains sonic identity across multiple generations — is what separates producers who get good results some of the time from producers who get good results every time.</p>

<h2>How to Use Suno AI Music Generator Step by Step</h2>
<p>Chapter 3 is the most practical chapter in this book: a complete, step-by-step walkthrough of how to use custom prompt in Suno AI 2026. Every field in Custom Mode is explained — what it does, what values it accepts, and what happens when you fill it in different ways. Screenshots aren't possible in a static ebook, but the chapter includes exact interface terminology so you can follow along in real time. By the end of Chapter 3, you understand every option available in Suno v4's generation interface.</p>

<h2>The GMIV Framework in Full</h2>
<p>The GMIV framework — Genre, Mood, Instrumentation, Vibe — is the central organizing principle of the MelodyPrompt prompt system. Chapter 2 provides 30 before/after examples, showing the same prompt with and without full GMIV structure and analyzing the differences in output. The framework isn't magic; it's a method for systematically eliminating the vagueness that causes AI models to regress to generic output. When you give the model four specific, non-redundant pieces of information about what you want, it has enough constraints to make interesting decisions rather than safe ones.</p>

<h2>Udio Prompts — The Complete System</h2>
<p>Udio processes prompts differently than Suno. Where Suno's training data skews toward commercial, melodically-led music, Udio's training data includes a higher proportion of jazz, classical, and experimental music. This makes Udio the better choice for complex harmony, unusual timbres, and genre-blending experiments. The best udio prompts are written with this difference in mind — more specific about instrument character, more musically precise about harmonic approach, and often simpler in their structural cues than the equivalent Suno prompt for the same genre. Chapter 4 provides a complete udio ai prompts system with side-by-side comparisons.</p>

<h2>Chaining Generations for Professional Results</h2>
<p>Chapter 5 covers the production technique that most AI music users never discover: chaining generations to build a complete multi-section track. A single Suno generation produces 3–4 minutes of music with its own internal logic. Using Continue, you can extend that generation — and the model maintains the sonic identity of the original because it's conditioned on the audio you provide. Chapter 5 shows three complete workflows for building a full track: a simple verse-chorus song, a cinematic cue with distinct acts, and a long-form ambient piece.</p>

<h2>The Prompt Engineering Foundation</h2>
<p>Prompt engineering for ai music is still a young discipline, but its principles are already clear: specificity beats vagueness, structure beats description, and constraints produce better creative decisions than freedom. This book is the complete, genre-spanning reference for applying these principles to Suno v4 and Udio — the definitive suno custom prompt guide for professional use.</p>`,
  },
];

export function getBookBySlug(slug: string): Book | undefined {
  return BOOKS.find((b) => b.slug === slug);
}

export function getBookById(id: string): Book | undefined {
  return BOOKS.find((b) => b.id === id);
}

export function getCrossSellBooks(book: Book): Book[] {
  return book.crossSellIds
    .map((id) => getBookById(id))
    .filter((b): b is Book => b !== undefined);
}

export function slugForBookId(bookId: string): string {
  if (bookId === "bundle") return "";
  const book = getBookById(bookId);
  return book?.slug ?? "";
}

export const LIST_PRICE = 29.99;
export const SALE_PRICE = 4.99;
export const BUNDLE_LIST_PRICE = 299.9;
export const BUNDLE_SALE_PRICE = 39.0;
