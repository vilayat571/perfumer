import { Check } from 'lucide-react'

const Progress = ({step}:{step:number}) => {
  return (
     <div className="flex items-center justify-center mb-8 sm:mb-12 mt-5 overflow-x-auto">
          {["Qab", "Qoxu", "Magnifier", "Dizayn"].map((label, idx) => (
            <div key={idx} className="flex items-center">
              <div
                className={`flex flex-col items-center ${idx < 3 ? "mr-2 sm:mr-0" : ""}`}
              >
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${
                    idx <= step
                      ? "bg-black text-white scale-110"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {idx < step ? <Check size={20} /> : idx + 1}
                </div>
                <span className="text-xs mt-1 font-medium hidden sm:block">
                  {label}
                </span>
              </div>
              {idx < 3 && (
                <div
                  className={`w-16 sm:w-24 h-1 mx-1 sm:mx-2 transition-all ${
                    idx < step ? "bg-black" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
  )
}

export default Progress
