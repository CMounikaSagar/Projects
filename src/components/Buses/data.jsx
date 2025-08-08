<div
      ref={ref}
      className="md:w-[700px] lg:w-full grid md:grid-cols-2 lg:grid-cols-5 gap-6 my-8 px-7 sm:place-items-center"
    >
      {cat.map((item, index) => {
        const bgColor = bgColors[index % bgColors.length];

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`w-[250px] h-[300px] relative flex justify-center md:mx-auto ${bgColor} rounded-[30px] lg:my-0 mx-10 pt-6 px-6 text-center cursor-pointer shadow-md overflow-hidden`}
          >
            <div>
              <img
                src={item.cat_image}
                alt={item.category_name}
                width="150"
                className="mx-auto p-3"
              />
              <h1 className="text-orange-600 font-semibold text-xl mt-4">
                {item.category_name}
              </h1>
              
              <p className="text-orange-500 text-lg font-semibold">
                ₹100
                <span className="text-black text-base font-normal">/kg</span>
              </p>
              <div className="flex justify-end text-orange-600 w-55">
                <Link to={`/categories/${item.id}`} className="text-warning">
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>