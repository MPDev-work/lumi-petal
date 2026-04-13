import { ReviewsData } from '../data/ReviewsData';
import { Fragment } from 'react';

function Reviews() {
  // const getRating = (rating) => {
  //   if (rating == 5) {
  //     return (
  //       <div className="flex flex-row justify-end items-center gap-1.5">
  //         <i className="bi bi-star-fill text-sm text-amber-500"></i>
  //         <i className="bi bi-star-fill text-sm text-amber-500"></i>
  //         <i className="bi bi-star-fill text-sm text-amber-500"></i>
  //         <i className="bi bi-star-fill text-sm text-amber-500"></i>
  //         <i className="bi bi-star-fill text-sm text-amber-500"></i>
  //       </div>
  //     );
  //   }
  // };
  const getRating = (rating) => {
    return (
      <div className="flex flex-row justify-end items-center gap-1.5">
        {[...Array(5)].map((_, index) => (
          <i
            key={index}
            className={`bi ${
              index < rating
                ? 'bi-star-fill text-amber-500'
                : 'bi bi-star-half text-amber-500'
            } text-sm`}
          ></i>
        ))}
      </div>
    );
  };
  return (
    <Fragment>
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-5 py-6">
        {ReviewsData.map((review) => {
          return (
            <div
              key={review.id}
              className="h-[140px] p-4 bg-[#f2f2f6] rounded-2xl flex flex-col gap-3"
            >
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-amber-50 flex justify-center items-center rounded-full">
                    <span className="uppercase text-amber-600 font-semibold">
                      {review.name.slice(0, 1)}
                    </span>
                  </div>
                  <p className="capitalize text-black text-base font-medium">
                    {review.name}
                  </p>
                </div>
                {getRating(review.ratting)}
              </div>

              <p className="text-sm text-gray-500 leading-relaxed overflow-hidden">
                {review.review}
              </p>
            </div>
          );
        })}
      </section>
    </Fragment>
  );
}

export default Reviews;
