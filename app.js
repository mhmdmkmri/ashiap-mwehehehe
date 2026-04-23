(function () {
  const tabRegistry = new Map();
  const languageButtons = Array.from(document.querySelectorAll("[data-language]"));
  const languageSwitcher = document.getElementById("language-switcher");
  const pageDescription = document.getElementById("page-description");
  const pageKeywords = document.getElementById("page-keywords");
  const ogLocale = document.getElementById("og-locale");
  const ogTitle = document.getElementById("og-title");
  const ogDescription = document.getElementById("og-description");
  const twitterTitle = document.getElementById("twitter-title");
  const twitterDescription = document.getElementById("twitter-description");
  const structuredData = document.getElementById("seo-structured-data");
  const languageStorageKey = "mark-landing-language";
  const siteUrl = "https://markapp.id/";
  const logoUrl = "https://markapp.id/mark-logo.png";
  const translations = {
    id: {
      pageTitle: "MARK | Software Koordinasi Project, Dashboard Proyek, dan Monitoring Tim",
      pageDescription: "MARK Manajemen Assistant Realtime Koordination adalah software koordinasi project untuk dashboard proyek, monitoring progres, task management, kanban tim, dan pelaporan kerja yang lebih tertata.",
      pageKeywords: "software manajemen proyek, software koordinasi project, dashboard project, dashboard proyek, monitoring proyek, task management, kanban tim, pelaporan progres, delivery management",
      languageSwitchLabel: "Pemilih bahasa",
      brandTagline: "Platform koordinasi project untuk delivery, visibilitas progres, dan ritme kerja tim.",
      navValue: "Keunggulan",
      navPreview: "Preview",
      navContact: "Kontak",
      languageLabel: "Bahasa",
      heroEyebrow: "Platform Koordinasi Project",
      heroTitle: "Mewujudkan koordinasi project yang lebih tertib, responsif, dan meyakinkan.",
      heroBody: "MARK Manajemen Assistant Realtime Koordination mendukung tim dalam menjaga kesinambungan kerja dari perencanaan hingga evaluasi. Seluruh pihak dapat memantau progres, prioritas, potensi hambatan, dan arah tindak lanjut dari satu referensi yang sama, sehingga koordinasi tidak lagi bergantung pada percakapan yang tercecer atau pelaporan manual yang terlambat.",
      heroNote1: "Dasbor lintas peran",
      heroNote2: "Alur kerja real-time",
      heroNote3: "Monitoring dan pelaporan",
      heroNote4: "Nyaman di berbagai perangkat",
      stageBrandTitle: "Pusat Kendali MARK",
      stageBrandText: "Pratinjau area kendali MARK dengan bahasa visual yang selaras dengan identitas brand.",
      heroMini1Title: "Arah kerja lebih jelas",
      heroMini1Text: "Setiap pekerjaan memiliki jalur tindak lanjut yang lebih terstruktur sehingga tim tidak mudah kehilangan fokus.",
      heroMini2Title: "Koordinasi lebih terkendali",
      heroMini2Text: "Informasi penting lebih mudah diikuti tanpa harus mengejar pembaruan dari berbagai jalur komunikasi.",
      heroMini3Title: "Pelaporan lebih meyakinkan",
      heroMini3Text: "Perkembangan project tampil lebih rapi saat dibahas dengan pimpinan, tim internal, maupun stakeholder.",
      heroMockTopbar: "Ringkasan Dasbor",
      mockProjectHealth: "Kesehatan Project",
      mockTaskLoad: "Beban Tugas",
      mockPriorityAlerts: "Peringatan Prioritas",
      mockOverdueCount: "7 lewat tenggat",
      mockBlockerCount: "3 hambatan",
      mockWeeklyPulse: "Denyut Delivery Mingguan",
      mockWeeklyPulseText: "Memberikan gambaran cepat tentang progres, kapasitas tim, dan area yang membutuhkan eskalasi.",
      mockModuleCoverage: "Cakupan Modul",
      chipDashboard: "Dasbor",
      chipKanban: "Kanban",
      chipMonitoring: "Monitoring",
      chipControls: "Kontrol",
      mockPlanningTitle: "Perencanaan",
      mockPlanningText: "Intake, pemetaan kerja, penugasan.",
      mockExecutionTitle: "Eksekusi",
      mockExecutionText: "Board kerja dan aktivitas harian.",
      mockControlTitle: "Pengendalian",
      mockControlText: "Monitoring dan beban kerja.",
      mockReportingTitle: "Pelaporan",
      mockReportingText: "Ringkasan siap dipresentasikan.",
      stat1Title: "Satu pusat kendali",
      stat1Text: "Project, tugas, aktivitas tim, dan prioritas bergerak lebih selaras dalam satu alur kerja.",
      stat2Title: "Progres lebih terbaca",
      stat2Text: "Pimpinan, project lead, dan tim operasional dapat membaca kondisi lebih cepat tanpa menunggu rangkuman manual.",
      stat3Title: "Koordinasi lebih efisien",
      stat3Text: "Perubahan, tindak lanjut, dan ritme kerja harian lebih mudah dijaga ketika tim bergerak cepat.",
      stat4Title: "Presentasi lebih siap",
      stat4Text: "Tampilan dasbor dan ringkasan progres membantu tim tampil lebih percaya diri di hadapan client maupun stakeholder.",
      mainSectionKicker: "Ikhtisar Produk",
      mainSectionTitle: "Seluruh informasi penting diringkas dalam tab yang mudah dijelajahi.",
      mainSectionText: "Halaman ini disusun untuk menonjolkan manfaat MARK secara lebih formal dan terarah. Pengunjung dapat memahami nilai utama platform, melihat gambaran halaman penting, dan menemukan informasi kontak dengan rapi.",
      mainTabOverview: "Ringkasan",
      mainTabFeatures: "Keunggulan Utama",
      mainTabPreview: "Preview Halaman",
      mainTabValue: "Nilai Tambah",
      overviewCard1Title: "Nilai yang langsung terasa",
      overviewCard1Text: "MARK tidak berhenti pada pencatatan pekerjaan. Platform ini membantu arah kerja, progres, dan koordinasi lintas peran menjadi lebih hidup serta lebih mudah dibaca.",
      overviewCard1Item1: "Seluruh pihak lebih cepat memahami apa yang sedang berjalan.",
      overviewCard1Item2: "Potensi hambatan lebih cepat terlihat sebelum membesar.",
      overviewCard1Item3: "Forum pembaruan progres menjadi lebih fokus karena data telah tertata.",
      overviewCard2Title: "Relevan untuk tim delivery",
      overviewCard2Text: "Tim yang menangani banyak project memerlukan alat yang nyaman dipakai setiap hari sekaligus layak dibaca pada level manajemen. MARK hadir di antara dua kebutuhan tersebut.",
      overviewCard2Item1: "Nyaman digunakan oleh tim inti untuk menjalankan pekerjaan harian.",
      overviewCard2Item2: "Cukup rapi untuk dibawa ke pimpinan maupun client.",
      overviewCard2Item3: "Membantu menjaga tempo kerja saat jumlah project terus bertambah.",
      overviewCard3Title: "Cakupan yang mendukung pertumbuhan",
      overviewCard3Text: "Dari kickoff, pembagian kerja, pemantauan milestone, aktivitas tim, pengelolaan perubahan, hingga evaluasi progres, seluruhnya bergerak dalam ritme yang sama.",
      overviewCard3Item1: "Tim tidak perlu terus-menerus berpindah antara banyak alat.",
      overviewCard3Item2: "Informasi penting lebih mudah ditelusuri saat dibutuhkan.",
      overviewCard3Item3: "Pertumbuhan project menjadi lebih mudah dikendalikan.",
      feature1Title: "Pusat kendali project",
      feature1Text: "Seluruh pihak dapat melihat arah, progres, dan prioritas dari satu tempat yang lebih mudah dipahami.",
      feature2Title: "Koordinasi lintas fungsi",
      feature2Text: "Setiap peran mempertahankan fokus kerjanya masing-masing tanpa kehilangan konteks project secara keseluruhan.",
      feature3Title: "Ritme kerja yang lebih tertib",
      feature3Text: "Tugas bergerak, agenda berubah, dan tindak lanjut menumpuk dapat ditangani dengan lebih terukur.",
      feature4Title: "Visibilitas progres yang konsisten",
      feature4Text: "Perkembangan tim, milestone, dan kondisi project dapat dibaca lebih cepat sebelum muncul kejutan.",
      feature5Title: "Ringkasan yang siap dipresentasikan",
      feature5Text: "Dasbor dan visual progres membantu tim menyampaikan pembaruan dengan lebih rapi kepada pimpinan atau stakeholder.",
      feature6Title: "Siap mendampingi tim yang bertumbuh",
      feature6Text: "Ketika project, user, dan kebutuhan koordinasi semakin banyak, MARK tetap relevan sebagai titik temu kerja.",
      previewTabDashboard: "Dasbor",
      previewTabKanban: "Kanban",
      previewTabMonitoring: "Monitoring",
      previewTabActivity: "Aktivitas",
      previewTabControl: "Kontrol",
      dashboardCopyTitle: "Dashboard Eksekutif",
      dashboardCopyText: "Tampilan ini menunjukkan seberapa cepat MARK membantu pimpinan atau project lead memahami kondisi kerja tanpa tenggelam dalam detail yang tidak mendesak.",
      dashboardCopyItem1: "Angka penting langsung terlihat sejak layar pertama.",
      dashboardCopyItem2: "Ringkasan progres terasa lebih mudah dipahami.",
      dashboardCopyItem3: "Sangat kuat sebagai tampilan pembuka saat presentasi.",
      dashboardMockTopbar: "Dasbor Eksekutif",
      mockRevenueImpact: "Dampak Kinerja",
      mockProjectLoad: "Beban Project",
      mockHotItems: "Area Prioritas",
      mockRiskCount: "5 risiko",
      mockActiveCount: "11 aktif",
      mockDeliveryTrend: "Tren Delivery",
      mockStakeholderView: "Ringkasan Stakeholder",
      mockResource: "Resource",
      mockResourceText: "Alokasi tim dan kapasitas.",
      mockTimeline: "Timeline",
      mockTimelineText: "Perkembangan sprint dan milestone.",
      mockAlerts: "Alert",
      mockAlertsText: "Keterlambatan dan hambatan utama.",
      workflowCopyTitle: "Papan Kerja Harian",
      workflowCopyText: "Bagian ini menunjukkan bagaimana MARK menjaga ritme kerja harian tetap bergerak tanpa membuat prioritas tercecer atau progres hilang di tengah jalan.",
      workflowCopyItem1: "Alur kerja terasa hidup dari backlog hingga selesai.",
      workflowCopyItem2: "Pemilik tugas dan status review lebih mudah dibaca.",
      workflowCopyItem3: "Sangat sesuai untuk daily standup dan kontrol kerja yang cepat.",
      workflowMockTopbar: "Papan Kanban Real-Time",
      workflowLaneBacklog: "Backlog",
      workflowTagSetup: "Inisiasi",
      workflowBacklogText1: "Lingkup implementasi awal untuk dasbor client.",
      workflowTagPlan: "Rencana",
      workflowBacklogText2: "Pemetaan PIC dan target sprint pekan ini.",
      workflowLaneProgress: "In Progress",
      workflowTagActive: "Aktif",
      workflowProgressText: "Pengerjaan visual pelaporan dan penyaringan project.",
      workflowLaneReview: "Review",
      workflowTagReview: "Review",
      workflowReviewText: "Sinkronisasi tindak lanjut dan penelaahan hasil sebelum melanjutkan.",
      workflowLaneDone: "Done",
      workflowTagDone: "Selesai",
      workflowDoneText: "Board real-time, monitoring, dan visibilitas aktivitas sudah tersedia.",
      monitoringCopyTitle: "Monitoring dan Pelaporan",
      monitoringCopyText: "Bagian ini memperlihatkan bahwa MARK bukan hanya alat kerja harian, tetapi juga alat baca kondisi project yang lebih tenang dan lebih tajam.",
      monitoringCopyItem1: "Membantu PM dan koordinator memahami kondisi lebih cepat.",
      monitoringCopyItem2: "Visual progres lebih siap dibawa ke forum evaluasi.",
      monitoringCopyItem3: "Mengurangi ketergantungan pada rangkuman manual terpisah.",
      monitoringMockTopbar: "Monitoring Project",
      mockStatusBreakdown: "Sebaran Status",
      mockTaskTypeRatio: "Rasio Jenis Tugas",
      mockSprintByProject: "Sprint per Project",
      mockWorkloadByUser: "Beban Kerja per User",
      activityCopyTitle: "Aktivitas Tim yang Terdokumentasi",
      activityCopyText: "Bagian ini menunjukkan bahwa koordinasi tidak berhenti setelah tugas diberikan. Perubahan, catatan, dan jejak keputusan tetap mudah diikuti.",
      activityCopyItem1: "Aktivitas dan perubahan tersusun lebih runtut.",
      activityCopyItem2: "Membantu handover dan evaluasi tanpa drama pencarian data.",
      activityCopyItem3: "Memudahkan tim menjelaskan apa yang terjadi dan mengapa.",
      activityMockTopbar: "Detail Aktivitas",
      mockTaskSummary: "Ringkasan Tugas",
      mockHighPriority: "Prioritas Tinggi",
      mockReviewLabel: "Review",
      mockRecentActivity: "Aktivitas Terbaru",
      activityTimeline1Title: "Status dipindah ke review",
      activityTimeline1Text: "Koordinator menelaah hasil dan menambahkan catatan penyempurnaan.",
      activityTimeline2Title: "Tenggat disesuaikan",
      activityTimeline2Text: "Penyesuaian dilakukan setelah dependensi dari modul lain teridentifikasi.",
      activityTimeline3Title: "Masukan stakeholder tercatat",
      activityTimeline3Text: "Umpan balik langsung masuk sebagai bagian dari jejak aktivitas.",
      controlCopyTitle: "Pusat Kontrol Operasional",
      controlCopyText: "Halaman ini menunjukkan bahwa MARK tetap rapi ketika digunakan oleh banyak orang, banyak project, dan banyak kebutuhan koordinasi dalam satu organisasi.",
      controlCopyItem1: "Menguatkan kesan bahwa sistem ini tertata dan terarah.",
      controlCopyItem2: "Membantu tim bertumbuh tanpa kehilangan kontrol.",
      controlCopyItem3: "Memberi rasa aman saat aplikasi digunakan lebih luas.",
      controlMockTopbar: "Pusat Kontrol",
      mockApplicationSetup: "Pengaturan Aplikasi",
      mockRoleMatrix: "Matriks Akses",
      mockRoleMatrixItem1: "Akses ringkasan untuk project lead",
      mockRoleMatrixItem2: "Visibilitas aktivitas tim",
      mockRoleMatrixItem3: "Pengendalian alur persetujuan",
      valueCard1Title: "Mengapa MARK layak dipertimbangkan",
      valueCard1Text: "MARK bukan sekadar tempat menaruh pekerjaan, melainkan platform yang membantu menjaga arah kerja tim tetap selaras dari hari ke hari.",
      valueCard1Block1Title: "Koordinasi lebih tenang",
      valueCard1Block1Text: "Seluruh pihak memiliki referensi kerja yang sama, sehingga miskomunikasi lebih mudah ditekan.",
      valueCard1Block2Title: "Visibilitas lebih jelas",
      valueCard1Block2Text: "Kondisi project, beban tim, dan prioritas tidak lagi terasa abu-abu.",
      valueCard1Block3Title: "Ritme kerja lebih terjaga",
      valueCard1Block3Text: "Tim lebih mudah bergerak konsisten dari hari ke hari tanpa kehilangan arah.",
      valueCard1Block4Title: "Lebih siap di depan stakeholder",
      valueCard1Block4Text: "Pembaruan progres terasa lebih rapi, profesional, dan meyakinkan.",
      valueCard2Title: "Mengapa relevan bagi organisasi yang bertumbuh",
      valueCard2Text: "MARK nyaman dipakai untuk kerja harian, namun tetap cukup rapi untuk menjelaskan kondisi project pada level manajemen maupun client.",
      valueCard2Block1Title: "Arah kerja lebih jelas",
      valueCard2Block1Text: "Prioritas dan progres lebih mudah dipahami tanpa harus menebak-nebak.",
      valueCard2Block2Title: "Perpindahan kerja lebih halus",
      valueCard2Block2Text: "Tugas, review, dan tindak lanjut tidak mudah terputus di tengah jalan.",
      valueCard2Block3Title: "Nyaman untuk tim yang bertumbuh",
      valueCard2Block3Text: "Saat project dan user bertambah, kontrol kerja tetap terasa rapi.",
      valueCard2Block4Title: "Lebih mantap untuk dipresentasikan",
      valueCard2Block4Text: "Ringkasan dan visual progres membantu pembaruan terasa lebih mantap.",
      faqTitle: "Pertanyaan umum",
      faq1Question: "Apa yang paling terasa setelah menggunakan MARK?",
      faq1Answer: "Bukan hanya pekerjaan yang lebih rapi, tetapi koordinasi lintas peran menjadi lebih mudah, progres lebih mudah dibaca, dan keputusan lebih cepat diambil.",
      faq2Question: "Siapa yang paling diuntungkan oleh MARK?",
      faq2Answer: "Tim delivery, software house, unit operasional, maupun organisasi yang menangani banyak project dan memerlukan visibilitas kerja yang lebih baik.",
      faq3Question: "Mengapa halaman ini tersedia dalam dua bahasa?",
      faq3Answer: "Agar materi presentasi lebih fleksibel digunakan untuk kebutuhan internal maupun eksternal, baik dalam Bahasa Indonesia maupun English.",
      advantageTitle: "Keunggulan yang lebih terasa",
      advantage1: "Membuat kerja tim terasa lebih tertata tanpa menambah beban yang tidak perlu.",
      advantage2: "Membantu pimpinan membaca kondisi project lebih cepat dan dengan kejernihan yang lebih baik.",
      advantage3: "Menjaga koordinasi antar tim tetap selaras saat pekerjaan bergerak cepat.",
      advantage4: "Memberi kesan lebih siap dan profesional saat progres dibahas dengan client atau stakeholder.",
      footerTagline: "Platform koordinasi project yang membantu tim bekerja lebih tertata, selaras, dan siap saat progres perlu dipresentasikan.",
      footerMiniContactLabel: "Kontak:",
      footerContactHeading: "Kontak",
      footerCallLabel: "Telepon Langsung",
      footerContactText: "Hubungi kami untuk demo, diskusi kebutuhan, atau pembahasan operasional yang selaras dengan alur kerja tim Anda.",
      footerCopyrightHeading: "Hak Cipta",
      footerCopyrightText: "© 2026 MARK Manajemen Assistant Realtime Koordination. Seluruh hak cipta dilindungi."
    },
    en: {
      pageTitle: "MARK | Project Coordination Software, Team Dashboard, and Progress Monitoring",
      pageDescription: "MARK Management Assistant Realtime Koordination is project coordination software for team dashboards, progress monitoring, task management, kanban workflows, and clearer delivery reporting.",
      pageKeywords: "project coordination software, project management dashboard, project monitoring, task management software, kanban workflow, delivery reporting, team coordination platform",
      languageSwitchLabel: "Language selector",
      brandTagline: "A project coordination platform for delivery, progress visibility, and team cadence.",
      navValue: "Value",
      navPreview: "Preview",
      navContact: "Contact",
      languageLabel: "Language",
      heroEyebrow: "Project Coordination Platform",
      heroTitle: "Bringing more order, responsiveness, and confidence to project coordination.",
      heroBody: "MARK Management Assistant Realtime Koordination helps teams maintain continuity from planning through evaluation. Everyone can monitor progress, priorities, potential blockers, and next actions from a shared source of truth, so coordination no longer depends on scattered conversations or delayed manual reporting.",
      heroNote1: "Cross-role dashboards",
      heroNote2: "Real-time workflows",
      heroNote3: "Monitoring and reporting",
      heroNote4: "Comfortable across devices",
      stageBrandTitle: "MARK Control Center",
      stageBrandText: "A preview of the MARK control area with a visual language aligned to the brand identity.",
      heroMini1Title: "Clearer direction of work",
      heroMini1Text: "Every work item follows a more structured next-step path, so teams do not lose focus easily.",
      heroMini2Title: "Better-controlled coordination",
      heroMini2Text: "Critical information is easier to follow without chasing updates across disconnected channels.",
      heroMini3Title: "More convincing reporting",
      heroMini3Text: "Project progress appears more polished when discussed with leadership, internal teams, and stakeholders.",
      heroMockTopbar: "Dashboard Summary",
      mockProjectHealth: "Project Health",
      mockTaskLoad: "Task Load",
      mockPriorityAlerts: "Priority Alerts",
      mockOverdueCount: "7 overdue",
      mockBlockerCount: "3 blockers",
      mockWeeklyPulse: "Weekly Delivery Pulse",
      mockWeeklyPulseText: "Provides a quick picture of progress, team capacity, and areas that may require escalation.",
      mockModuleCoverage: "Module Coverage",
      chipDashboard: "Dashboard",
      chipKanban: "Kanban",
      chipMonitoring: "Monitoring",
      chipControls: "Controls",
      mockPlanningTitle: "Planning",
      mockPlanningText: "Intake, work mapping, assignment.",
      mockExecutionTitle: "Execution",
      mockExecutionText: "Work board and daily activity.",
      mockControlTitle: "Control",
      mockControlText: "Monitoring and workload.",
      mockReportingTitle: "Reporting",
      mockReportingText: "Presentation-ready summaries.",
      stat1Title: "One control center",
      stat1Text: "Projects, tasks, team activities, and priorities move in greater alignment through one workflow.",
      stat2Title: "Progress is easier to read",
      stat2Text: "Leaders, project leads, and operational teams can understand current conditions faster without waiting for manual summaries.",
      stat3Title: "More efficient coordination",
      stat3Text: "Changes, follow-ups, and daily operating rhythm become easier to sustain when teams move quickly.",
      stat4Title: "Better presentation readiness",
      stat4Text: "Dashboards and progress summaries help teams present updates with more confidence to clients and stakeholders.",
      mainSectionKicker: "Product Overview",
      mainSectionTitle: "All essential information is organized into tabs that are easy to explore.",
      mainSectionText: "This page is designed to present the value of MARK in a more formal and focused way. Visitors can understand the core value of the platform, review key page concepts, and find contact information clearly.",
      mainTabOverview: "Overview",
      mainTabFeatures: "Key Strengths",
      mainTabPreview: "Page Preview",
      mainTabValue: "Added Value",
      overviewCard1Title: "Value that feels immediate",
      overviewCard1Text: "MARK goes beyond work tracking. It helps direction, progress, and cross-role coordination feel more alive and easier to understand.",
      overviewCard1Item1: "Everyone understands what is moving more quickly.",
      overviewCard1Item2: "Potential blockers become visible before they grow.",
      overviewCard1Item3: "Progress review forums stay more focused because the data is already organized.",
      overviewCard2Title: "Relevant for delivery teams",
      overviewCard2Text: "Teams that manage many projects need a tool that is comfortable for daily use while still being presentable at management level. MARK sits effectively between those two needs.",
      overviewCard2Item1: "Comfortable for core teams running day-to-day execution.",
      overviewCard2Item2: "Structured enough to share with leadership and clients.",
      overviewCard2Item3: "Helps sustain working rhythm as the number of projects grows.",
      overviewCard3Title: "Coverage that supports growth",
      overviewCard3Text: "From kickoff, work allocation, milestone visibility, and team activities to change handling and progress evaluation, everything moves in one rhythm.",
      overviewCard3Item1: "Teams do not need to keep jumping between many tools.",
      overviewCard3Item2: "Important information is easier to trace when needed.",
      overviewCard3Item3: "Project growth becomes easier to control.",
      feature1Title: "A central project command space",
      feature1Text: "Everyone can see direction, progress, and priorities from one place that is easier to understand.",
      feature2Title: "Cross-functional coordination",
      feature2Text: "Each role keeps its operational focus without losing the broader project context.",
      feature3Title: "A more disciplined working rhythm",
      feature3Text: "Moving tasks, changing agendas, and accumulating follow-ups can be managed in a more measured way.",
      feature4Title: "Consistent progress visibility",
      feature4Text: "Team progress, milestones, and project condition become easier to read before surprises emerge.",
      feature5Title: "Summaries ready for presentation",
      feature5Text: "Dashboards and progress visuals help teams communicate updates more clearly to leadership and stakeholders.",
      feature6Title: "Ready for growing teams",
      feature6Text: "As projects, users, and coordination needs increase, MARK remains relevant as the meeting point for work.",
      previewTabDashboard: "Dashboard",
      previewTabKanban: "Kanban",
      previewTabMonitoring: "Monitoring",
      previewTabActivity: "Activity",
      previewTabControl: "Control",
      dashboardCopyTitle: "Executive Dashboard",
      dashboardCopyText: "This view shows how quickly MARK helps leaders or project leads understand working conditions without sinking into unnecessary detail.",
      dashboardCopyItem1: "Important numbers are visible from the first screen.",
      dashboardCopyItem2: "Progress summaries are easier to digest.",
      dashboardCopyItem3: "Strong as an opening view during presentations.",
      dashboardMockTopbar: "Executive Dashboard",
      mockRevenueImpact: "Performance Impact",
      mockProjectLoad: "Project Load",
      mockHotItems: "Priority Areas",
      mockRiskCount: "5 risks",
      mockActiveCount: "11 active",
      mockDeliveryTrend: "Delivery Trend",
      mockStakeholderView: "Stakeholder Summary",
      mockResource: "Resources",
      mockResourceText: "Team allocation and capacity.",
      mockTimeline: "Timeline",
      mockTimelineText: "Sprint and milestone progression.",
      mockAlerts: "Alerts",
      mockAlertsText: "Delays and key blockers.",
      workflowCopyTitle: "Daily Work Board",
      workflowCopyText: "This section shows how MARK keeps daily execution moving without letting priorities scatter or progress disappear midstream.",
      workflowCopyItem1: "The work flow feels alive from backlog to completion.",
      workflowCopyItem2: "Owners and review status are easier to read.",
      workflowCopyItem3: "Well suited for daily standups and fast execution control.",
      workflowMockTopbar: "Real-Time Kanban Board",
      workflowLaneBacklog: "Backlog",
      workflowTagSetup: "Initiation",
      workflowBacklogText1: "Initial implementation scope for the client dashboard.",
      workflowTagPlan: "Plan",
      workflowBacklogText2: "PIC mapping and this week’s sprint targets.",
      workflowLaneProgress: "In Progress",
      workflowTagActive: "Active",
      workflowProgressText: "Building reporting visuals and project filtering.",
      workflowLaneReview: "Review",
      workflowTagReview: "Review",
      workflowReviewText: "Follow-up alignment and result review before moving forward.",
      workflowLaneDone: "Done",
      workflowTagDone: "Done",
      workflowDoneText: "Real-time boards, monitoring, and activity visibility are already available.",
      monitoringCopyTitle: "Monitoring and Reporting",
      monitoringCopyText: "This section shows that MARK is not only a daily execution tool, but also a calmer and sharper way to read project conditions.",
      monitoringCopyItem1: "Helps PMs and coordinators understand conditions faster.",
      monitoringCopyItem2: "Progress visuals are more ready for evaluation forums.",
      monitoringCopyItem3: "Reduces dependence on separate manual summaries.",
      monitoringMockTopbar: "Project Monitoring",
      mockStatusBreakdown: "Status Breakdown",
      mockTaskTypeRatio: "Task Type Ratio",
      mockSprintByProject: "Sprint by Project",
      mockWorkloadByUser: "Workload by User",
      activityCopyTitle: "Documented Team Activity",
      activityCopyText: "This section shows that coordination does not stop after a task is assigned. Changes, notes, and decision trails remain easy to follow.",
      activityCopyItem1: "Activities and changes stay more chronological.",
      activityCopyItem2: "Supports handovers and evaluations without the drama of data hunting.",
      activityCopyItem3: "Makes it easier for teams to explain what happened and why.",
      activityMockTopbar: "Activity Detail",
      mockTaskSummary: "Task Summary",
      mockHighPriority: "High Priority",
      mockReviewLabel: "Review",
      mockRecentActivity: "Recent Activity",
      activityTimeline1Title: "Status moved to review",
      activityTimeline1Text: "The coordinator reviewed the outcome and added refinement notes.",
      activityTimeline2Title: "Deadline adjusted",
      activityTimeline2Text: "The change was made after a dependency from another module was identified.",
      activityTimeline3Title: "Stakeholder input recorded",
      activityTimeline3Text: "Feedback entered directly as part of the activity trail.",
      controlCopyTitle: "Operational Control Center",
      controlCopyText: "This page shows that MARK remains organized even when used by many people, across many projects, and for many coordination needs within one organization.",
      controlCopyItem1: "Reinforces the impression of a structured and directed system.",
      controlCopyItem2: "Helps teams grow without losing control.",
      controlCopyItem3: "Creates confidence when the application is used at broader scale.",
      controlMockTopbar: "Control Center",
      mockApplicationSetup: "Application Settings",
      mockRoleMatrix: "Access Matrix",
      mockRoleMatrixItem1: "Summary access for project leads",
      mockRoleMatrixItem2: "Team activity visibility",
      mockRoleMatrixItem3: "Approval flow control",
      valueCard1Title: "Why MARK deserves consideration",
      valueCard1Text: "MARK is not simply a place to store work. It is a platform that helps keep team direction aligned from day to day.",
      valueCard1Block1Title: "Calmer coordination",
      valueCard1Block1Text: "Everyone works from the same reference point, reducing the chance of miscommunication.",
      valueCard1Block2Title: "Clearer visibility",
      valueCard1Block2Text: "Project condition, team load, and priorities no longer feel vague.",
      valueCard1Block3Title: "A steadier operating rhythm",
      valueCard1Block3Text: "Teams can move more consistently from day to day without losing direction.",
      valueCard1Block4Title: "Better stakeholder readiness",
      valueCard1Block4Text: "Progress updates feel more polished, professional, and convincing.",
      valueCard2Title: "Why it matters for growing organizations",
      valueCard2Text: "MARK is comfortable enough for everyday execution, yet structured enough to explain project conditions at management or client level.",
      valueCard2Block1Title: "Clearer direction of work",
      valueCard2Block1Text: "Priorities and progress are easier to understand without guesswork.",
      valueCard2Block2Title: "Smoother work transitions",
      valueCard2Block2Text: "Tasks, reviews, and follow-ups are less likely to break midstream.",
      valueCard2Block3Title: "Comfortable for growing teams",
      valueCard2Block3Text: "As projects and users expand, work control still feels orderly.",
      valueCard2Block4Title: "Stronger presentation confidence",
      valueCard2Block4Text: "Summaries and progress visuals help updates land with more confidence.",
      faqTitle: "Common questions",
      faq1Question: "What is the most noticeable result after using MARK?",
      faq1Answer: "Not only does work become more organized, but cross-role coordination becomes easier, progress is easier to read, and decisions can be made faster.",
      faq2Question: "Who benefits most from MARK?",
      faq2Answer: "Delivery teams, software houses, operational units, and organizations managing many projects that need stronger work visibility.",
      faq3Question: "Why is this page available in two languages?",
      faq3Answer: "So the presentation material can be used more flexibly for both internal and external audiences, in either Indonesian or English.",
      advantageTitle: "Benefits that feel more tangible",
      advantage1: "It makes team execution feel more structured without adding unnecessary overhead.",
      advantage2: "It helps leadership read project conditions faster and with greater clarity.",
      advantage3: "It keeps cross-team coordination aligned while work is moving fast.",
      advantage4: "It creates a more prepared and professional impression when progress is reviewed with clients or stakeholders.",
      footerTagline: "A project coordination platform that helps teams work with more structure, alignment, and confidence when progress needs to be presented.",
      footerMiniContactLabel: "Contact:",
      footerContactHeading: "Contact",
      footerCallLabel: "Direct Call",
      footerContactText: "Contact us for a demo, needs discussion, or an operational conversation aligned with your team workflow.",
      footerCopyrightHeading: "Copyright",
      footerCopyrightText: "© 2026 MARK Management Assistant Realtime Koordination. All rights reserved."
    }
  };

  function setupTabGroup(group) {
    const groupName = group.dataset.tabGroup;
    const buttons = Array.from(group.querySelectorAll("[data-tab]"));
    const panels = Array.from(document.querySelectorAll('[data-tab-panel-group="' + groupName + '"]'));

    if (!groupName || !buttons.length || !panels.length) {
      return;
    }

    function activate(tabId) {
      buttons.forEach(function (button) {
        const isActive = button.dataset.tab === tabId;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-selected", String(isActive));
        button.tabIndex = isActive ? 0 : -1;
      });

      panels.forEach(function (panel) {
        const isActive = panel.dataset.panel === tabId;
        panel.hidden = !isActive;
      });
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        activate(button.dataset.tab);
      });
    });

    const initial = buttons.find(function (button) {
      return button.classList.contains("active");
    }) || buttons[0];

    activate(initial.dataset.tab);
    tabRegistry.set(groupName, activate);
  }

  function getPreferredLanguage() {
    const savedLanguage = readStoredLanguage();

    if (savedLanguage && translations[savedLanguage]) {
      return savedLanguage;
    }

    const browserLanguage = (navigator.language || "id").toLowerCase();
    if (browserLanguage.indexOf("en") === 0) {
      return "en";
    }

    return "id";
  }

  function readStoredLanguage() {
    try {
      return window.localStorage.getItem(languageStorageKey);
    } catch (error) {
      return null;
    }
  }

  function storeLanguage(language) {
    try {
      window.localStorage.setItem(languageStorageKey, language);
    } catch (error) {
      return;
    }
  }

  function updateMeta(node, value) {
    if (node && value) {
      node.setAttribute("content", value);
    }
  }

  function buildStructuredData(language, dictionary) {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "SoftwareApplication",
          name: "MARK Manajemen Assistant Realtime Koordination",
          alternateName: "MARK",
          applicationCategory: "BusinessApplication",
          applicationSubCategory: language === "en" ? "Project Coordination Platform" : "Platform Koordinasi Project",
          operatingSystem: "Web",
          inLanguage: language,
          url: siteUrl,
          image: logoUrl,
          description: dictionary.pageDescription,
          keywords: dictionary.pageKeywords,
          featureList: [
            dictionary.heroNote1,
            dictionary.heroNote2,
            dictionary.heroNote3,
            dictionary.previewTabKanban,
            dictionary.previewTabMonitoring
          ]
        },
        {
          "@type": "Organization",
          name: "MARK",
          url: siteUrl,
          logo: logoUrl,
          telephone: "+6285161250909"
        },
        {
          "@type": "FAQPage",
          inLanguage: language,
          mainEntity: [
            {
              "@type": "Question",
              name: dictionary.faq1Question,
              acceptedAnswer: {
                "@type": "Answer",
                text: dictionary.faq1Answer
              }
            },
            {
              "@type": "Question",
              name: dictionary.faq2Question,
              acceptedAnswer: {
                "@type": "Answer",
                text: dictionary.faq2Answer
              }
            },
            {
              "@type": "Question",
              name: dictionary.faq3Question,
              acceptedAnswer: {
                "@type": "Answer",
                text: dictionary.faq3Answer
              }
            }
          ]
        }
      ]
    };
  }

  function applyLanguage(language) {
    const dictionary = translations[language] || translations.id;

    document.documentElement.lang = language;
    document.title = dictionary.pageTitle;

    updateMeta(pageDescription, dictionary.pageDescription);
    updateMeta(pageKeywords, dictionary.pageKeywords);
    updateMeta(ogTitle, dictionary.pageTitle);
    updateMeta(ogDescription, dictionary.pageDescription);
    updateMeta(twitterTitle, dictionary.pageTitle);
    updateMeta(twitterDescription, dictionary.pageDescription);
    updateMeta(ogLocale, language === "en" ? "en_US" : "id_ID");

    if (structuredData) {
      structuredData.textContent = JSON.stringify(buildStructuredData(language, dictionary));
    }

    if (languageSwitcher) {
      languageSwitcher.setAttribute("aria-label", dictionary.languageSwitchLabel);
    }

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      const key = node.dataset.i18n;
      if (!dictionary[key]) {
        return;
      }

      node.textContent = dictionary[key];
    });

    languageButtons.forEach(function (button) {
      const isActive = button.dataset.language === language;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    storeLanguage(language);
  }

  document.querySelectorAll("[data-tab-group]").forEach(setupTabGroup);

  document.querySelectorAll("[data-open-tab-group]").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      const groupName = trigger.dataset.openTabGroup;
      const tabId = trigger.dataset.openTab;
      const scrollTarget = trigger.dataset.scrollTarget;
      const activate = tabRegistry.get(groupName);

      if (activate && tabId) {
        activate(tabId);
      }

      if (scrollTarget) {
        const target = document.getElementById(scrollTarget);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  languageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      applyLanguage(button.dataset.language);
    });
  });

  applyLanguage(getPreferredLanguage());
})();