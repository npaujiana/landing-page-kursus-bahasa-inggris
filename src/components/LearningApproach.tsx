import React from 'react'

export const LearningApproach: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'Personalized Learning',
      desc: 'Setiap proses belajar berawal dari diagnostic assessment awal untuk mengidentifikasi kekuatan dan area yang perlu ditingkatkan, lalu disusun rencana belajar spesifik.',
    },
    {
      num: '02',
      title: 'Real-World Practice',
      desc: 'Meninggalkan metode hafalan pasif. Kami memprioritaskan simulasi interaksi nyata: rapat kerja, presentasi bisnis, negosiasi klien, dan latihan soal IELTS terarah.',
    },
    {
      num: '03',
      title: 'Expert Guidance',
      desc: 'Bimbingan langsung dari pengajar berkualifikasi Cambridge CELTA serta kesempatan sesi percakapan bersama native speakers untuk melatih aksen dan kelancaran alami.',
    },
    {
      num: '04',
      title: 'Measurable Progress',
      desc: 'Perkembangan dipantau berkala melalui evaluasi tertulis, simulasi mock test, serta rubrik penilaian objektif untuk Writing dan Speaking.',
    },
  ]

  return (
    <section id="approach" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E3E1DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold text-[#9C7A3C] uppercase tracking-wider mb-2">
            Filosofi Pembelajaran
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#121E2C] tracking-tight leading-tight mb-4 font-normal">
            Bukan sekadar teori. Kuasai bahasa untuk kebutuhan nyata.
          </h2>
          <p className="text-sm sm:text-base text-[#4A525D] leading-relaxed">
            Kemampuan berbahasa Inggris berkembang melalui latihan percakapan aktif yang konsisten, umpan balik yang konstruktif, dan materi yang relevan dengan situasi sehari-hari.
          </p>
        </div>

        {/* Asymmetrical Layout: Numbered Index Column + Editorial Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Numbered List */}
          <div className="lg:col-span-7 space-y-6">
            {principles.map((item) => (
              <div
                key={item.num}
                className="border-b border-[#E3E1DA] pb-6 flex items-start gap-6"
              >
                <span className="font-serif text-2xl font-bold text-[#9C7A3C] tabular-nums shrink-0 pt-0.5">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#121E2C] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A525D] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Framed Editorial Photography */}
          <div className="lg:col-span-5">
            <div className="border border-[#E3E1DA] p-2 bg-[#FBFBFA] rounded-xs">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Suasana kolaboratif dan suportif di kelas Lingua Pro Academy"
                className="w-full h-[360px] md:h-[420px] object-cover"
                loading="lazy"
              />
              <div className="p-3 text-[11px] text-[#4A525D] border-t border-[#E3E1DA] mt-2">
                Suasana belajar interaktif yang mengutamakan partisipasi aktif seluruh peserta.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
