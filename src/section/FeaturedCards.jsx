import { abilities } from "../constant";

const FeatureCards = () => (
  <div className="w-full px-10 py-12">
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {abilities.map(({ imgPath, title, desc }) => (
        <div
          key={title}
          className="border border-gray-300 bg-white rounded-xl p-8 flex flex-col gap-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full">
            <img src={imgPath} alt={title} className="w-8 h-8" />
          </div>
          <h3 className="text-gray-800 text-2xl font-semibold mt-2">{title}</h3>
          <p className="text-gray-600 text-lg">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;
