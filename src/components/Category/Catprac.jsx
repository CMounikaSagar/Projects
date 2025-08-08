
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Star, ThumbsUp, Edit3, Trash2 } from "lucide-react";

// export const ReviewsTab = () => {
//   const reviews = [
//     {
//       id: 1,
//       product: "Premium Alphonso Mangoes",
//       rating: 5,
//       date: "Dec 12, 2023",
//       review: "Absolutely incredible! These mangoes were perfectly ripe and incredibly sweet. The flavor was like nothing I've ever tasted before. Will definitely order again!",
//       image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       likes: 12,
//       verified: true
//     },
//     {
//       id: 2,
//       product: "Organic Honey Mangoes",
//       rating: 4,
//       date: "Nov 28, 2023",
//       review: "Great quality mangoes with excellent packaging. They arrived in perfect condition. Only giving 4 stars because they were slightly less sweet than expected, but still very good!",
//       image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       likes: 8,
//       verified: true
//     },
//     {
//       id: 3,
//       product: "Mango Smoothie Mix",
//       rating: 5,
//       date: "Nov 15, 2023",
//       review: "This smoothie mix is amazing! Perfect for my morning routine. The tropical flavor is authentic and it blends perfectly. Highly recommend for mango lovers!",
//       image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       likes: 15,
//       verified: true
//     }
//   ];

//   const renderStars = (rating) => {
//   return Array.from({ length: 5 }, (_, index) => (
//     <Star
//       key={index}
//       className={`w-4 h-4 ${
//         index < rating 
//           ? "text-yellow-400 fill-current" 
//           : "text-gray-300"
//       }`}
//     />
//   ));
// };

//   return (
//     <div className="space-y-4">
//       {reviews.map((review, index) => (
//         <Card 
//           key={review.id} 
//           className="border-0 shadow-md bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 animate-scale-in"
//           style={{ animationDelay: `${index * 0.1}s` }}
//         >
//           <CardHeader className="pb-4">
//             <div className="flex justify-between items-start">
//               <div className="flex gap-3">
//                 <img 
//                   src={review.image} 
//                   alt={review.product} 
//                   className="w-12 h-12 rounded-lg object-cover border-2 border-mango-100"
//                 />
//                 <div>
//                   <h3 className="font-semibold text-gray-900">{review.product}</h3>
//                   <div className="flex items-center gap-2 mt-1">
//                     <div className="flex">{renderStars(review.rating)}</div>
//                     {review.verified && (
//                       <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
//                         Verified Purchase
//                       </span>
//                     )}
//                   </div>
//                   <p className="text-sm text-gray-600">{review.date}</p>
//                 </div>
//               </div>
//               <div className="flex gap-1">
//                 <Button
//                   size="sm"
//                   variant="ghost"
//                   className="text-gray-500 hover:text-mango-600"
//                 >
//                   <Edit3 className="w-4 h-4" />
//                 </Button>
//                 <Button
//                   size="sm"
//                   variant="ghost"
//                   className="text-gray-500 hover:text-red-600"
//                 >
//                   <Trash2 className="w-4 h-4" />
//                 </Button>
//               </div>
//             </div>
//           </CardHeader>
//           <CardContent className="pt-0">
//             <p className="text-gray-700 leading-relaxed mb-4">{review.review}</p>
//             <div className="flex items-center justify-between">
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 className="text-gray-500 hover:text-mango-600 hover:bg-mango-50"
//               >
//                 <ThumbsUp className="w-4 h-4 mr-1" />
//                 {review.likes} helpful
//               </Button>
//               <span className="text-sm text-gray-500">
//                 Review #{review.id}
//               </span>
//             </div>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// };