import React from 'react'

export const TrustStrip: React.FC = () => {
  const credentials = [
    {
      label: 'Didirikan 2021',
      detail: 'Berpengalaman melayani ratusan pembelajar akademik & profesional',
    },
    {
      label: 'Cambridge CELTA',
      detail: 'Tersedia pengajar dengan kualifikasi pedagogi standar Cambridge',
    },
    {
      label: 'Native Speakers',
      detail: 'Peluang sesi khusus aksen autentik dan percakapan natural',
    },
    {
      label: 'Study Plan Personal',
      detail: 'Rencana belajar disusun berdasarkan hasil diagnostic test awal',
    },
  ]

  return (
    <section className="bg-[#FFFFFF] border-b border-[#E3E1DA] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {credentials.map((item, index) => (
            <div key={index} className="flex flex-col border-l border-[#E3E1DA] pl-4">
              <span className="text-xs font-bold text-[#121E2C]">
                {item.label}
              </span>
              <span className="text-xs text-[#4A525D] mt-1 leading-relaxed">
                {item.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
