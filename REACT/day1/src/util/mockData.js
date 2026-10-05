const restList = [
  {
    data: {
      id: "395072",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/1e3d7e0e-7d5a-4f0e-9b8c-5f3c6a1e2d4b_395071.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas", "Italian", "Beverages"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
      },
    },
  },

  {
    data: {
      id: "241682",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6f3a1b2c-4d5e-4f6a-8b9c-0d1e2f3a4b5c_241681.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
      },
    },
  },

  {
    data: {
      id: "229",
      name: "Meghana Foods",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/10/12345678-90ab-cdef-1234-567890abcdef_229.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Andhra", "South Indian"],
      avgRating: 4.6,
      parentId: "635",
      avgRatingString: "4.6",
      totalRatingsString: "20K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 3.2,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
      },
    },
  },

  {
    data: {
      id: "10575",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/abcdef12-3456-7890-abcd-ef1234567890_10575.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.2,
      parentId: "166",
      avgRatingString: "4.2",
      totalRatingsString: "15K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
      },
    },
  },

  {
    data: {
      id: "426777",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/19/abcdef12-3456-7890-abcd-ef1234567890_426776.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks"],
      avgRating: 4.1,
      parentId: "547",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3.0,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
      },
    },
  },

  {
    data: {
      id: "59381",
      name: "Domino's Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/15/abcdef12-3456-7890-abcd-ef1234567890_5938.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.3,
      parentId: "2456",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
      },
    },
  },

  {
    data: {
      id: "395073",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/1e3d7e0e-7d5a-4f0e-9b8c-5f3c6a1e2d4b_395071.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas", "Italian", "Beverages"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
      },
    },
  },

  {
    data: {
      id: "241684",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6f3a1b2c-4d5e-4f6a-8b9c-0d1e2f3a4b5c_241681.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
      },
    },
  },

  {
    data: {
      id: "2292",
      name: "Meghana Foods",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/10/12345678-90ab-cdef-1234-567890abcdef_229.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Andhra", "South Indian"],
      avgRating: 4.6,
      parentId: "635",
      avgRatingString: "4.6",
      totalRatingsString: "20K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 3.2,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
      },
    },
  },

  {
    data: {
      id: "10578",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/abcdef12-3456-7890-abcd-ef1234567890_10575.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.2,
      parentId: "166",
      avgRatingString: "4.2",
      totalRatingsString: "15K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
      },
    },
  },

  {
    data: {
      id: "426779",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/19/abcdef12-3456-7890-abcd-ef1234567890_426776.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks"],
      avgRating: 4.1,
      parentId: "547",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3.0,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
      },
    },
  },

  {
    data: {
      id: "5938",
      name: "Domino's Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/15/abcdef12-3456-7890-abcd-ef1234567890_5938.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.3,
      parentId: "2456",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
      },
    },
  },

  {
    data: {
      id: "154891",
      name: "Rasraj Restaurant",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/rasraj-restaurant_154891.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "South Indian", "Chinese"],
      avgRating: 4.0,
      parentId: "391465",
      avgRatingString: "4.0",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
      },
    },
  },

  {
    data: {
      id: "350363",
      name: "Haldiram's Sweets and Namkeen",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/11/haldirams_350363.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Chinese",
        "Pizzas",
        "Fast Food",
      ],
      avgRating: 4.6,
      parentId: "351",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
      },
    },
  },

  {
    data: {
      id: "745961",
      name: "Balaji Restaurant",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/13/balaji-restaurant_745961.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹149 for two",
      cuisines: ["South Indian", "North Indian"],
      avgRating: 4.0,
      parentId: "123456",
      avgRatingString: "4.0",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.0,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
      },
    },
  },

  {
    data: {
      id: "62811",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/14/subway_62811.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹350 for two",
      cuisines: ["Fast Food", "Salads", "Healthy Food", "Snacks"],
      avgRating: 4.2,
      parentId: "2",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
      },
    },
  },

  {
    data: {
      id: "44231",
      name: "Paradise Biryani",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/15/paradise_44231.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹450 for two",
      cuisines: ["Biryani", "Hyderabadi", "North Indian"],
      avgRating: 4.4,
      parentId: "248",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 3.1,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
      },
    },
  },

  {
    data: {
      id: "380192",
      name: "Behrouz Biryani",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/behrouz_380192.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "Mughlai", "North Indian"],
      avgRating: 4.3,
      parentId: "1803",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 3.4,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
      },
    },
  },

  {
    data: {
      id: "59218",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/belgian-waffle_59218.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹250 for two",
      cuisines: ["Waffle", "Desserts", "Beverages"],
      avgRating: 4.5,
      parentId: "2233",
      avgRatingString: "4.5",
      totalRatingsString: "2K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
      },
    },
  },

  {
    data: {
      id: "77321",
      name: "Wow! Momo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/wowmomo_77321.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹300 for two",
      cuisines: ["Tibetan", "Chinese", "Asian", "Snacks"],
      avgRating: 4.1,
      parentId: "1776",
      avgRatingString: "4.1",
      totalRatingsString: "2K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
      },
    },
  },

  {
    data: {
      id: "22917",
      name: "Baskin Robbins",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/baskin_22917.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹300 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.4,
      parentId: "586",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
      },
    },
  },

  {
    data: {
      id: "82143",
      name: "Chai Sutta Bar",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/13/chai-sutta_82143.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹200 for two",
      cuisines: ["Beverages", "Snacks", "Fast Food"],
      avgRating: 4.3,
      parentId: "1493",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
      },
    },
  },

  {
    data: {
      id: "67192",
      name: "Sagar Gaire Fast Food",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/14/sagar-gaire_67192.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Chinese", "Fast Food"],
      avgRating: 4.2,
      parentId: "421",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
      },
    },
  },

  {
    data: {
      id: "54127",
      name: "Shree Rathnam",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/15/shree-rathnam_54127.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "North Indian", "Chinese"],
      avgRating: 4.0,
      parentId: "507",
      avgRatingString: "4.0",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
      },
    },
  },

  {
    data: {
      id: "384921",
      name: "Udupi Upahar",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/udupi-upahar_384921.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹250 for two",
      cuisines: ["South Indian", "North Indian", "Chinese"],
      avgRating: 4.3,
      parentId: "451",
      avgRatingString: "4.3",
      totalRatingsString: "2K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
      },
    },
  },

  {
    data: {
      id: "719382",
      name: "Empire Restaurant",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/empire_719382.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹500 for two",
      cuisines: ["North Indian", "Biryani", "Chinese", "Arabian"],
      avgRating: 4.2,
      parentId: "475",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
      },
    },
  },
];

export default restList;
