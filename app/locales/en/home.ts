const home = {
  ankit_kumar: "Ankit Kumar",
  intro:
    "Hey 👋, so glad you're here.<1 /><1 />A little about me, I'm a <0>Co-Founder</0>, <0>Software Engineer</0>, <0>UI/UX Designer</0>, and <0>Mentor</0>—crafting  tools people enjoy, writing thoughtful, maintainable code, and helping others grow with me.<1 /><1 />And most importantly, I'm rooted in Nalanda, Bihar (India).",
  about_me: `
  <0>Well</0>, here goes—telling my story is never easy, especially the professional part. But I'll give it a shot.<1 /><1 />
My journey began in 2017, when I co-founded <0>Asaan Contracts Private Limited</0> with my brothers and close friends.
Our mission was simple: to make life easier for small and medium business owners through technology.
At Asaan, we built numerous proof-of-concepts aimed at codifying everyday business processes.
Looking back, that chapter was foundational—it gave me the chance to explore, experiment, and grow. <1 /><1 />

I'm not one to lie—when we started, we were complete beginners, figuring things out as we went. But what we lacked in experience,
we made up for in passion and resilience. Limited resources meant wearing many hats. I primarily took on the
role of Lead Frontend Engineer—architecting dashboards, defining design and coding guidelines, and creating
branding assets. It was intense, chaotic, and honestly... a lot of fun. <1 /><1 />

After Asaan and completing my undergraduate degree, I moved to the UK and joined a small lab at the <0>University of Cambridge</0>
as a Research Software Engineer. The team was incredibly skilled and deeply rooted in academic research. I worked mainly on
building a dashboard for a cloud-based tool, and also led the redesign of the lab's website and logo. It was a completely
different rhythm compared to a startup—slower in some ways, more deliberate in others. I gained a new appreciation for how
academic environments function, and the unique challenges they bring. <1 /><1 />

From there, I moved to Japan, where I joined <0>Startbahn</0>, a startup focused on building blockchain infrastructure for the creative industries.
It opened the door for me into the world of blockchain—and showed me just how broadly it can be applied.
It was a short but eye-opening experience. I rewrote their component library, led a major refactor of their legacy core platform,
and helped create internal coding guidelines and best practices. One thing that stood out: the discipline. Even in a small team,
documentation was taken seriously, and the feedback I received on my guidelines helped me become a better communicator and a more
thoughtful developer. <1 /><1 />

Then came summer 2023—and a new chapter with <0>Bodygram</0>, where I joined as a Software Engineer. Bodygram is on a mission to help businesses
tap into the power of body measurement data. It's something we all have, but most of us don't realize how valuable it can be—from fashion
and fitness to healthcare and even choosing the perfect mattress. At Bodygram, I worked on enhancing the core scanning logic, building
dashboards to manage scan results, developing SDKs to help clients integrate scan widgets, and creating components for embedding 3D avatar
viewers. <1 /><1 />

Outside of work, I enjoy contributing to open source projects—it's my way of giving back, learning, and staying connected with
the wider dev community. <1 /><1 />

And that's my professional journey—so far. It's just the beginning, and I'm sure I'll have even better stories to share
when we meet in person.
  `,

  experience: {
    bodygram: {
      intro:
        "Bodygram challenged me to level up—especially in handling cameras within browsers, using MediaPipe to validate poses, and building web apps that seamlessly integrate into other web apps, as well as native iOS and Android apps.\n\nThe toughest (and most exciting) part? Learning Three.js from scratch—rendering avatars, drawing measurement rings around them, morphing avatars from their current body to a projected future body, and, most importantly, building a fully-fledged SDK that anyone could use to embed Bodygram's 3D avatars into their own applications.",
      notable_projects_1_slash:
        "/experience/bodygram/projects/sdk-to-integrate-3d-avatar-view",
      notable_projects_1_title: "SDK to integrate 3D avatar view",
      notable_projects_1_intro:
        "The project was to create a framework agnostic SDK that is easier to integrate into a webapp or native app easily. The answer was to learn web-components. I created a bunch of components, with good flexibility that anyone the can use to render 3D avatar, show  or hide rings, styled it according to their app theme etc., I solved many technical challenges like, how to manage state between parent and slotted children and parent and non-slotted children, sync threejs meshes lifecycle with web components lifecycle, and realised there is not much resources available if you are doing web thing that is not react derivative.",
    },

    startbahn: {
      intro:
        "At Startbahn I worked on migrating legacy web app that managed NFTs.  To support the team's workflow, I simplified the frontend deployment pipelines and took the initiative to document and refine our coding guidelines—making development smoother and more consistent across the board.",
    },
    uoc: {
      intro:
        "At the University of Cambridge, I learned just how massive biological data can be. My main task was to build a dashboard that allowed researchers to spin up instances of <1>[InterMine](https://github.com/intermine/intermine_cloud)</1>, a cloud-based omics data warehouse and analysis platform. One key challenge was enabling users to upload huge biological data files without crashing their browser. Loading these files all at once would consume too much memory—especially on machines with limited RAM. To solve this, I implemented chunked uploads, splitting files into manageable parts and uploading them incrementally, ensuring stability and performance.\n\nBeyond that, I also contributed to a component library for internal tools and served as a teaching assistant for <1>[Bioinformatics for SARS Genomic Surveillance](https://cambiotraining.github.io/sars-cov-2-genomics/)</1>.",
    },
    asaan: {
      intro:
        "Asaan was where I truly learned <0>how to learn</0>. I spent countless hours experimenting with frontend frameworks and libraries—React, Vue, SolidJS, Next.js, JQuery—chasing the right fit for our evolving needs.\n\nOne of my most rewarding challenges was building a flexible (yet slightly rigid) component library tailored to our product demands.As we developed dashboards for various clients, I began noticing patterns—recurring flows, common UI steps, shared logic. I took that as a cue to componentize the repeated parts, turning them into reusable building blocks. That's where I discovered the real power of reusable components—not just for cleaner code, but for dramatically accelerating development across the board.",
    },
  },

  projects: {
    cleanJSDocTheme: {
      description: `
        Back in college, while building my startup, I became deeply invested in documenting my code—not just for myself, but for anyone who might work with it. That's when I discovered JSDoc. It did the job, but its default theme left a lot to be desired. I believed documentation should be inviting—something you'd actually want to read. I searched for a theme that felt premium, offered good searchability, dark mode, font controls, and was mobile-friendly. Nothing quite fit.
        <1></1><1></1>
        So, I built <3>clean-jsdoc-theme</3>—a minimalist, responsive, and highly customizable theme for JSDoc. What started as a personal need became my first open source project on npm, and it's now helping developers deliver beautiful documentation with ease.
      `,
    },
    outspeedJS: {
      description: `
      In the summer of 2024, I finally carved out time to explore something I'd always been curious about—<4>WebRTC</4>. That led me to <4>Outspeed</4>, <2>formerly Adapt AI</2>,
      where I joined as a consultant to help shape their core library, <3>@outspeed/core</3>. Written in vanilla JavaScript, the library provides the foundational building
      blocks—classes and methods—to establish and manage WebRTC connections from the ground up.
      <1></1><1></1>
      Beyond the core, I also contributed to <3>@outspeed/react</3> and <3>@outspeed/react-native</3>, which are built on top of the core library to support seamless integration
      across platforms. It was one of those rare projects that felt both technically challenging and deeply rewarding. I gained a strong understanding of the intricacies of
      WebRTC—its quirks, limitations, and the raw power it offers when used well.`,
    },
  },
};

export default home;
export type HomeTranslation = typeof home;
