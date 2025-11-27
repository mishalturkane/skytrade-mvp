
import React from 'react'

function Footer() {
  return (
   <div className="w-full border-t border-[#171717] bg-[#0a0a0a] text-gray-400">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-6 md:px-12 md:py-8 gap-4 text-sm">
    {/* Left */}
    <div className="order-1 md:order-none">© 2025 All Rights Reserved</div>

    {/* Center */}
    <div className="order-2 md:order-none font-semibold text-white">
      Sky.Trade
    </div>

    {/* Right */}
    <div className="order-3 md:order-none flex gap-6 text-sm">
    <a
        href="https://www.mishalturkane.xyz"
        className="hover:text-[#14F195] font-normal transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Built by Mishal Turkane
      </a>
      <a
        href="https://x.com/mishaldotrwa"
        className="hover:text-[#9945FF] font-normal transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
      <a
        href="https://github.com/mishalturkane/solanahub"
        className="hover:text-[#14F195] font-normal transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    
    </div>
  </div>
</div>

  )
}

export default Footer