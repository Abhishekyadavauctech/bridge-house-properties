import React from "react";

const images = [
  "https://i.pinimg.com/1200x/40/ce/f2/40cef26967e2bf8263a2694331efb168.jpg",
  "https://i.pinimg.com/1200x/ec/97/34/ec9734d469899a77d5b000cb2be75498.jpg",
  "https://i.pinimg.com/736x/8c/6e/29/8c6e2941af01525a68b384e92c2bd2bc.jpg",
  "https://i.pinimg.com/736x/f8/e8/0f/f8e80ffde554c1ff3aade2eadb7f88b0.jpg",
  "https://i.pinimg.com/736x/2a/f6/a4/2af6a4fff643de299760095e2ed4f47f.jpg",
  "https://i.pinimg.com/1200x/ec/97/34/ec9734d469899a77d5b000cb2be75498.jpg",
  "https://i.pinimg.com/736x/cf/b0/b7/cfb0b750bb44819aba2f11b28e5ff08e.jpg",
  "https://i.pinimg.com/1200x/ad/ec/fb/adecfb73eb6f1e21933ec0f62d9ec807.jpg",
  "https://i.pinimg.com/736x/2a/f6/a4/2af6a4fff643de299760095e2ed4f47f.jpg",
];

const StoryCircle = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full sm:w-[90%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%]">
        <div
          className="flex gap-6 justify-between overflow-x-auto py-6 px-4 scrollbar-hide
          scroll-smooth"
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-24 h-24 rounded-full border-[3px] border-yellow-500 p-1
              transition-transform duration-300 hover:scale-110 hover:shadow-lg"
            >
              <img
                src={src}
                alt={`story-${i}`}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryCircle;
