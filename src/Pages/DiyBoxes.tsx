import bannerImg from "@/assets/party-banner-bg.png";
import { useState } from "react";
import {
  Search,
  Clock,
  Users,

  ShoppingCart,
  ChevronDown,
} from "lucide-react";
import boxImg1 from "@/assets/box-img-1.jpg";
import boxImg2 from "@/assets/box-img-2.jpg";
import boxImg3 from "@/assets/box-img-3.jpg";
import boxImg4 from "@/assets/box-img-4.jpg";
import boxImg5 from "@/assets/box-img-1.jpg";
import boxImg6 from "@/assets/box-img-6.jpg";
import { Link } from "react-router-dom";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function DiyBoxes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [theme, setTheme] = useState("");

  const activities = [
    {
      id: 1,
      title: "Superhero Adventure Box",
      description:
        "Transform your party into an epic superhero adventure with capes, masks, and heroic activities!",
      image: boxImg1,
      tag: "Superhero",
      tagColor: "bg-blue-600",
      duration: "30 min",
      ageRange: "Up to 12 kids",
      rating: 4.9,
      reviews: 124,
      price: 49.99,
      originalPrice: 69.99,
      ageTag: "Ages 4-8 years",
      ageTagColor: "bg-green-500",
    },
    {
      id: 2,
      title: "Princess Magical Kingdom",
      description:
        "Create a magical kingdom with crowns, wands, and enchanting decorations for royalty!",
      image: boxImg2,
      tag: "Princess",
      tagColor: "bg-purple-600",
      duration: "25 min",
      ageRange: "Up to 12 kids",
      rating: 4.9,
      reviews: 96,
      price: 54.99,
      originalPrice: 74.99,
      ageTag: "Ages 3-7 years",
      ageTagColor: "bg-green-500",
    },
    {
      id: 3,
      title: "Dinosaur Discovery Adventure",
      description:
        "Embark on a prehistoric journey with fossil hunting, dino crafts, and Jurassic fun!",
      image: boxImg3,
      tag: "Dinosaur",
      tagColor: "bg-orange-600",
      duration: "35 min",
      ageRange: "Up to 15 kids",
      rating: 4.7,
      reviews: 124,
      price: 45.99,
      originalPrice: 59.99,
      ageTag: "Ages 4-9 years",
      ageTagColor: "bg-green-500",
    },
    {
      id: 4,
      title: "Space Explorer Mission",
      description:
        "Blast off into space with world building, planet exploration, and cosmic adventures!",
      image: boxImg4,
      tag: "Universe",
      tagColor: "bg-indigo-600",
      duration: "40 min",
      ageRange: "Up to 12 kids",
      rating: 4.9,
      reviews: 124,
      price: 52.99,
      originalPrice: 69.99,
      ageTag: "Ages 6-8 years",
      ageTagColor: "bg-green-500",
    },
    {
      id: 5,
      title: "Unicorn Rainbow Party",
      description:
        "Create a magical unicorn wonderland with rainbows, sparkles, and enchanted fun!",
      image: boxImg5,
      tag: "Unicorn",
      tagColor: "bg-pink-500",
      duration: "30 min",
      ageRange: "Up to 12 kids",
      rating: 4.9,
      reviews: 124,
      price: 49.99,
      originalPrice: 49.99,
      ageTag: "Ages 3-8 years",
      ageTagColor: "bg-green-500",
    },
    {
      id: 6,
      title: "Pirate Treasure Hunt",
      description:
        "Ahoy matey! Hunt for treasure with maps, costumes, and swashbuckling adventures!",
      image: boxImg6,
      tag: "Pirate",
      tagColor: "bg-red-600",
      duration: "30 min",
      ageRange: "Up to 12 kids",
      rating: 4.0,
      reviews: 124,
      price: 49.99,
      originalPrice: 49.99,
      ageTag: "Ages 4-9 years",
      ageTagColor: "bg-green-500",
    },
  ];

   const renderStars = (rating: number) => {
   const stars = [];
   const fullStars = Math.floor(rating);
   const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75;
   const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
 
   for (let i = 0; i < fullStars; i++) {
     stars.push(
       <FaStar key={`full-${i}`} className=" text-yellow-400" />
     );
   }
 
   if (hasHalfStar) {
     stars.push(
       <FaStarHalfAlt key="half" className=" text-yellow-400" />
     );
   }
 
   for (let i = 0; i < emptyStars; i++) {
     stars.push(
       <FaRegStar key={`empty-${i}`} className="  text-gray-300" />
     );
   }
 
   return stars;
 };
  return (
    <div className="">
      <div
        className="relative mt-10 h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            <h1 className="font-fredoka text-center text-4xl font-bold text-black md:text-6xl">
             DIY Party Boxes
            </h1>
            <p className="mt-4 text-center text-[#595959]  w-[80%] mx-auto  ">
              Everything you need for an amazing party, curated by experts and delivered to your door
            </p>
          </div>
        </div>
      </div>
      {/* this section for search and  cart  */}
      <div className="mx-4 max-w-7xl md:mx-auto ">
        {/* Search and Filter Bar */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-sm ">
          <div className="flex flex-col items-center gap-4 md:flex-row">
            {/* Search Input */}
            <div className="relative flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search themes, activities, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Age Range Dropdown */}
            <div className="relative">
              <select
                value={ageRange}
                onChange={(e) => setAgeRange(e.target.value)}
                className="cursor-pointer appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 pr-8 outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Age Range</option>
                <option value="0-3">0-3 years</option>
                <option value="4-8">4-8 years</option>
                <option value="9-12">9-12 years</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Theme Dropdown */}
            <div className="relative">
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="cursor-pointer appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 pr-8 outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Theme</option>
                <option value="superhero">Superhero</option>
                <option value="princess">Princess</option>
                <option value="dinosaur">Dinosaur</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Activity Cards Grid */}
        <div className="container mx-auto">
          <div className="mt-20 grid grid-cols-1 gap-6 pb-14 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="overflow-hidden rounded-lg bg-[#FFF7ED] shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Image and Tag */}
                <div className="relative h-64 w-auto">
                  <img
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    className="h-full w-full object-cover"
                  />
                  <div
                    className={`absolute top-3 right-3 rounded-full bg-[#223B7D] px-3 py-1 text-sm text-white`}
                  >
                    {activity.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-[#191919]">
                    {activity.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 text-sm text-[#5A5C5F]">
                    {activity.description}
                  </p>

                  {/* Duration and Age Range */}
                  <div className="mb-4 flex items-center justify-between gap-4 text-sm text-[#5A5C5F]">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {activity.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {activity.ageRange}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex items-center">
                      {renderStars(activity.rating)}
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {activity.rating}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({activity.reviews} reviews)
                    </span>
                  </div>

                  {/* Price and Age Tag */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-[#223B7D]">
                        ${activity.price}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        ${activity.originalPrice}
                      </span>
                    </div>
                    <div
                      className={`rounded-full bg-[#58C06478]/70 px-3 py-2 text-xs font-medium text-[#19AE19]`}
                    >
                      {activity.ageTag}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link to={`/home/diyboxe/details/${activity.id}`} className="flex-1">
                      <button className="w-full cursor-pointer rounded-lg bg-[#223B7D] px-4 py-3 font-medium text-white transition-colors hover:bg-blue-700">
                        View Details
                      </button>
                    </Link>
                    <button className="cursor-pointer rounded-lg border border-[#223B7D] p-3 transition-colors hover:bg-gray-50">
                      <ShoppingCart className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Love this theme?  section start here  */}
      <div>here </div>
    </div>
  );
}
