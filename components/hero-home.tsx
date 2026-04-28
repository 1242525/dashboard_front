import Image from "next/image";

export default function HeroHome() {
  return (
    <section className="max-w-7xl mx-auto px-10 py-32 overflow-hidden">

      <div className="flex items-center justify-between gap-16">

        {/* LEFT */}
        <div className="relative flex-1">

          {/* 🔥 배지 */}
          <div className="mb-6 inline-flex items-center gap-3 px-5 py-2 rounded-full 
          bg-[linear-gradient(180deg,rgba(0,255,200,0.15),rgba(0,255,200,0.03))]
          border border-cyan-400/20
          backdrop-blur-md
          shadow-[0_0_20px_rgba(0,255,200,0.15)]
          text-cyan-300 text-sm tracking-wide">

            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#00fff0]" />
              SECURE
            </span>

            <span className="text-cyan-500">•</span>
            <span>RELIABLE</span>

            <span className="text-cyan-500">•</span>
            <span>AUTOMATED</span>
          </div>

          

          {/* 제목 */}
          <h1 className="text-7xl font-bold leading-tight tracking-tight
            text-transparent bg-clip-text
            animate-[gradient_6s_linear_infinite]
            bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))]
            bg-[length:200%_auto]">
            OTA <br/>UPDATES
          </h1>

          {/* 설명 */}
          <p className="mt-6 text-xl text-gray-400 max-w-2xl">
            Secure, Scalable Firmware Deployment<br/>
            Across Cameras, blackbox, and IoT Devices
          </p>

          {/* 버튼 */}
          <div className="mt-10 flex gap-4">
            <button className="px-6 py-3 bg-indigo-600 rounded-lg">
              Get Started
            </button>

            <button className="px-6 py-3 border border-gray-600 rounded-lg">
              Learn More
            </button>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex-1 flex justify-end perspective-[1200px]">

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[500px] h-[500px] bg-white/11 blur-3xl rounded-full" />

          <Image
            src="/images/argus.png"
            alt="ARGUS ota"
            width={1200}
            height={1200}
            className="relative z-10 object-contain auto-3d"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70" />
          <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-transparent to-black opacity-80" />

        </div>

      </div>
    </section>
  );
}