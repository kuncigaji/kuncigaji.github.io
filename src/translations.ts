export type Language = 'id' | 'en';

export interface TranslationSchema {
  // Banner
  bannerTesting: string;
  bannerBecomeTester: string;

  // Common / CTA
  ctaStartNow: string;
  ctaBack: string;
  ctaUseSystem: string;
  ctaPremiumPackage: string;
  footerRights: string;
  privacyPolicy: string;

  // Hero
  heroTitle1: string;
  heroTitle2: string;
  heroTitle3: string;
  heroSubtitle: string;

  // Problem Section
  problemTitle: string;
  problemTitleHighlight: string;
  problemDesc: string;

  // Solution Section
  solutionTitle1: string;
  solutionTitleHighlight: string;
  solutionDesc: string;

  // How It Works
  howItWorksTitle: string;
  howItWorksTitleHighlight: string;
  howItWorksSubtitle: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;

  // Features Section
  featuresTitle1: string;
  featuresTitleHighlight1: string;
  featuresTitle2: string;
  featuresTitleHighlight2: string;
  featuresSubtitle: string;
  feature1Title: string;
  feature1Desc: string;
  feature2Title: string;
  feature2Desc: string;
  feature3Title: string;
  feature3Desc: string;
  feature4Title: string;
  feature4Desc: string;

  // Premium Section (locked preview)
  premiumTitle: string;
  premiumSubtitle: string;
  premiumUnlockTitle: string;
  premiumCta: string;
  premiumPrice: string;

  // Emotional Section
  emotionalTitle1: string;
  emotionalTitleHighlight: string;
  emotionalDesc: string;

  // Final CTA Section
  finalCtaTitle: string;
  finalCtaSubtitle: string;

  // Privacy Policy Page
  privacyHeaderBack: string;
  privacyTitle: string;
  privacyP1: string;
  privacyP2: string;
  privacyP3: string;
  privacyP4: string;
  privacyP5: string;
  privacyP6: string;
  privacyEffectiveDate: string;

  // SEO / Head
  seoTitle: string;
  seoDescription: string;
}

export const translations: Record<Language, TranslationSchema> = {
  id: {
    // Banner
    bannerTesting: "Bantu KunciGaji menjadi lebih baik dengan mengikuti Closed Testing di Google Play Store.",
    bannerBecomeTester: "Menjadi Penguji",

    // Common / CTA
    ctaStartNow: "Mulai Sekarang",
    ctaBack: "Kembali",
    ctaUseSystem: "Mulai Gunakan Sistem",
    ctaPremiumPackage: "Lihat Paket Premium",
    footerRights: "© 2026 KunciGaji App. All rights reserved.",
    privacyPolicy: "Kebijakan Privasi",

    // Hero
    heroTitle1: "Gaji",
    heroTitle2: " Masuk. Uang ",
    heroTitle3: "Terkontrol",
    heroSubtitle: "30 menit pertama setelah gajian menentukan kondisi finansialmu bulan ini.",

    // Problem Section
    problemTitle: "Masalahnya Bukan di ",
    problemTitleHighlight: "Gaji",
    problemDesc: "Gaji seringkali sekadar \"numpang lewat\". Bukan karena penghasilanmu kurang, tapi karena kamu tidak punya sistem otomatis yang membagi kemana uang itu harus pergi. Penyakit utama kita adalah menabung dari sisa, bukan menyisihkan di awal.",

    // Solution Section
    solutionTitle1: "Bukan Nambah Gaji. Tapi ",
    solutionTitleHighlight: "Sistem",
    solutionDesc: "KunciGaji membantu kamu membangun sistem personal yang tenang. Begitu notifikasi transfer gaji masuk, kamu sudah tahu apa yang harus dilakukan. Tidak ada lagi rasa bersalah atau kecemasan di akhir bulan.",

    // How It Works
    howItWorksTitle: "Cara Kerja dalam ",
    howItWorksTitleHighlight: "3 Langkah",
    howItWorksSubtitle: "Ritual sederhana yang kamu lakukan setiap setelah gajian.",
    step1Title: "1. Catat Gaji",
    step1Desc: "Masukkan total pemasukan begitu gaji masuk. Mulai dari angka nyata, bukan asumsi.",
    step2Title: "2. Bagi & Kunci",
    step2Desc: "Bagi uang ke kebutuhan, masa depan, dan kesenangan — lalu kunci di 30 menit pertama.",
    step3Title: "3. Nikmati Tanpa Beban",
    step3Desc: "Sisa uang adalah “guilt-free money”. Gunakan tanpa rasa khawatir.",

    // Features Section
    featuresTitle1: "Sistem yang ",
    featuresTitleHighlight1: "Menjaga",
    featuresTitle2: " Uangmu Tetap ",
    featuresTitleHighlight2: "Terkontrol",
    featuresSubtitle: "Dari gajian sampai akhir bulan, semuanya sudah punya arah.",
    feature1Title: "Semua Uang Punya Tujuan",
    feature1Desc: "Tidak ada lagi uang “hilang” tanpa arah.",
    feature2Title: "Prioritas Jadi Jelas",
    feature2Desc: "Kamu tahu mana yang harus didahulukan, tanpa mikir berulang.",
    feature3Title: "Tidak Pernah Telat Bayar",
    feature3Desc: "Semua sudah diingatkan sebelum jadi masalah.",
    feature4Title: "Lihat Perubahan Nyata",
    feature4Desc: "Kamu bisa melihat progres dari bulan ke bulan.",

    // Premium Section
    premiumTitle: "Insight Lebih Dalam",
    premiumSubtitle: "Dapatkan analisis spesifik untuk kebiasaan belanja dan masa depan finansialmu menggunakan algoritma canggih.",
    premiumUnlockTitle: "Unlock Fitur Premium",
    premiumCta: "Lihat Paket Premium",
    premiumPrice: "Hanya Rp15.000 / Bulan. Batalkan Kapan Saja.",

    // Emotional Section
    emotionalTitle1: "Bukan soal uang. Tapi ",
    emotionalTitleHighlight: "kebiasaan.",
    emotionalDesc: "KunciGaji tidak dibuat untuk merantai kamu dari kesenangan hidup. Aplikasi ini dibangun agar kamu bisa tidur nyenyak di malam hari, yakin bahwa tagihan bulan depan sudah terurus.",

    // Final CTA Section
    finalCtaTitle: "Mulai dari gajian berikutnya",
    finalCtaSubtitle: "Ubah kondisimu mulai hari ini. Bangun sistem otomatis yang menenangkan pikiran.",

    // Privacy Policy Page
    privacyHeaderBack: "Kembali",
    privacyTitle: "Kebijakan Privasi",
    privacyP1: "Aplikasi ini mengutamakan privasi pengguna.",
    privacyP2: "Data finansial yang dimasukkan pengguna disimpan secara lokal di perangkat menggunakan penyimpanan internal aplikasi, dan tidak dikirim ke server mana pun.",
    privacyP3: "Untuk fitur tertentu, seperti login dan sinkronisasi akun, aplikasi menggunakan layanan pihak ketiga (Supabase Authentication dengan Google OAuth). Proses ini dapat melibatkan data dasar seperti alamat email dan identitas pengguna yang dikelola secara aman oleh penyedia layanan tersebut.",
    privacyP4: "Untuk fitur berlangganan (subscription), aplikasi menggunakan Google Play Billing. Proses transaksi dikelola langsung oleh Google dan dapat melibatkan akun Google pengguna. Aplikasi tidak memiliki akses ke informasi sensitif seperti kata sandi atau detail pembayaran.",
    privacyP5: "Aplikasi tidak melakukan pelacakan (tracking) atau menjual data pengguna ke pihak ketiga.",
    privacyP6: "Jika pengguna menghapus data melalui fitur Reset Data atau menghapus akun (jika tersedia), data finansial akan dihapus dari perangkat dan data akun yang tersimpan di layanan akan mengikuti kebijakan penyedia layanan terkait.",
    privacyEffectiveDate: "Tanggal berlaku: Agustus 2026",

    // SEO / Head
    seoTitle: "KunciGaji - Gaji Masuk, Uang Terkontrol",
    seoDescription: "KunciGaji membantu Anda membangun sistem keuangan personal yang tenang. Kelola gaji dengan bijak, hilangkan kecemasan finansial, dan ambil kendali penuh atas uang Anda dalam 30 menit pertama setelah gajian."
  },
  en: {
    // Banner
    bannerTesting: "Help KunciGaji become better by participating in Closed Testing on the Google Play Store.",
    bannerBecomeTester: "Become a Tester",

    // Common / CTA
    ctaStartNow: "Start Now",
    ctaBack: "Back",
    ctaUseSystem: "Start Using the System",
    ctaPremiumPackage: "See Premium Packages",
    footerRights: "© 2026 KunciGaji App. All rights reserved.",
    privacyPolicy: "Privacy Policy",

    // Hero
    heroTitle1: "Salary",
    heroTitle2: " In. Money ",
    heroTitle3: "Under Control",
    heroSubtitle: "The first 30 minutes after payday determines your financial condition this month.",

    // Problem Section
    problemTitle: "The Problem is Not the ",
    problemTitleHighlight: "Salary",
    problemDesc: "Salary is often just 'passing through'. Not because your income is lacking, but because you don't have an automated system that divides where that money should go. Our main illness is saving from the remainder, not setting aside at the start.",

    // Solution Section
    solutionTitle1: "Not an Increase in Salary. But a ",
    solutionTitleHighlight: "System",
    solutionDesc: "KunciGaji helps you build a calm personal system. Once the salary transfer notification arrives, you already know what to do. No more guilt or anxiety at the end of the month.",

    // How It Works
    howItWorksTitle: "How It Works in ",
    howItWorksTitleHighlight: "3 Steps",
    howItWorksSubtitle: "A simple ritual you do every time after payday.",
    step1Title: "1. Record Salary",
    step1Desc: "Enter total income as soon as salary arrives. Start from real numbers, not assumptions.",
    step2Title: "2. Divide & Lock",
    step2Desc: "Divide money into needs, future, and fun — then lock it in the first 30 minutes.",
    step3Title: "3. Enjoy Guilt-Free",
    step3Desc: "The remaining money is 'guilt-free money'. Use it without worry.",

    // Features Section
    featuresTitle1: "A System that ",
    featuresTitleHighlight1: "Keeps",
    featuresTitle2: " Your Money ",
    featuresTitleHighlight2: "Under Control",
    featuresSubtitle: "From payday to the end of the month, everything already has a direction.",
    feature1Title: "All Money Has a Purpose",
    feature1Desc: "No more money 'disappearing' without direction.",
    feature2Title: "Clear Priorities",
    feature2Desc: "You know what needs to be prioritized, without second-guessing.",
    feature3Title: "Never Late to Pay",
    feature3Desc: "Everything is reminded before it becomes a problem.",
    feature4Title: "See Real Change",
    feature4Desc: "You can see your progress from month to month.",

    // Premium Section
    premiumTitle: "Deeper Insight",
    premiumSubtitle: "Get specific analysis for your spending habits and financial future using advanced algorithms.",
    premiumUnlockTitle: "Unlock Premium Features",
    premiumCta: "See Premium Packages",
    premiumPrice: "Only Rp15,000 / Month. Cancel Anytime.",

    // Emotional Section
    emotionalTitle1: "It's not about money. But ",
    emotionalTitleHighlight: "habits.",
    emotionalDesc: "KunciGaji is not made to chain you from the pleasures of life. This app is built so you can sleep soundly at night, confident that next month's bills are already taken care of.",

    // Final CTA Section
    finalCtaTitle: "Start from your next payday",
    finalCtaSubtitle: "Change your condition starting today. Build an automated system that brings peace of mind.",

    // Privacy Policy Page
    privacyHeaderBack: "Back",
    privacyTitle: "Privacy Policy",
    privacyP1: "This application prioritizes user privacy.",
    privacyP2: "Financial data entered by the user is stored locally on the device using the application's internal storage, and is not sent to any server.",
    privacyP3: "For certain features, such as login and account synchronization, the application uses third-party services (Supabase Authentication with Google OAuth). This process may involve basic data such as email address and user identity managed securely by the service provider.",
    privacyP4: "For subscription features, the application uses Google Play Billing. The transaction process is managed directly by Google and may involve the user's Google account. The application does not have access to sensitive information such as passwords or payment details.",
    privacyP5: "The application does not perform tracking or sell user data to third parties.",
    privacyP6: "If the user deletes data through the Reset Data or deletes the account (if available), financial data will be deleted from the device and account data stored in the service will follow the policy of the relevant service provider.",
    privacyEffectiveDate: "Effective date: August 2026",

    // SEO / Head
    seoTitle: "KunciGaji - Salary In, Money Under Control",
    seoDescription: "KunciGaji helps you build a calm personal financial system. Manage your salary wisely, eliminate financial anxiety, and take full control of your money within the first 30 minutes after payday."
  }
};
