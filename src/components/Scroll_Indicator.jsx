// src/components/Scroll_Indicator.jsx
const Scroll_Indicator = () => {
  return (
    <div className="fixed bottom-10 right-10 z-40 mix-blend-difference flex flex-col items-center gap-2">
      <span
        className="text-[10px] uppercase tracking-widest text-gray-500"
        style={{ writingMode: 'vertical-rl' }}
      >
        Scroll to Morph
      </span>
      <div className="w-px h-12 bg-gray-700 overflow-hidden">
        <div className="w-full h-full bg-cyan-400 animate-pulse origin-top transform scale-y-50" />
      </div>
    </div>
  );
};

export default Scroll_Indicator;
