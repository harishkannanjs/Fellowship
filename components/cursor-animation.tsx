'use client'

export default function CursorAnimation() {
  return (
    <div className="relative inline-block">
      <style>{`
        @keyframes pulse-ring {
          0% {
            box-shadow: 0 0 0 0 rgba(31, 41, 55, 0.7);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(31, 41, 55, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(31, 41, 55, 0);
          }
        }
        
        @keyframes dot-pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.2);
          }
        }
        
        .cursor-dot {
          animation: dot-pulse 1.5s ease-in-out infinite;
        }
        
        .cursor-ring {
          animation: pulse-ring 1.5s ease-in-out infinite;
        }
      `}</style>
      <div className="w-5 h-5 rounded-full border-2 border-gray-700 flex items-center justify-center cursor-ring">
        <div className="w-1.5 h-1.5 rounded-full bg-gray-700 cursor-dot"></div>
      </div>
    </div>
  )
}
