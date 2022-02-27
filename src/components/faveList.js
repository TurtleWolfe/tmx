import { useState } from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  // ImageListItemText,
  // ImageListItemImage,
  // ImageListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import {
  Favorite,
  HeartBroken,
  StarBorder,
  StarRate,
} from "@mui/icons-material";

import PlacePhoto from "./utility/PlacePhoto";

function srcset(image, width, height, rows = 1, cols = 1) {
  console.log(image);
  return {
    src: `${image}&w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}&w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  const [starred, setStarred] = useState(false);
  return (
    <ImageList
      sx={{
        width: "75%",
        height: "60%",
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: "translateZ(0)",
        borderRadius: "0.5rem",
      }}
      rowHeight={200}
      gap={10}
      // variant="quilted"
      // variant="standard"
      varinant="masonry"
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem
            key={item.place_id}
            cols={cols}
            rows={rows}
            sx={{
              overflow: "hidden",
              borderRadius: "0.5rem",
              justifyContent: "center",
            }}
          >
            <img
              {...srcset(
                PlacePhoto(item.photos[0].photo_reference, 500),
                250,
                200,
                rows,
                cols
              )}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                width: "100%",
                borderRadius: "0.5rem",
                color: "primary",
              }}
              title={item.name}
              subtitle={item.formatted_address}
              color="primary"
              // position="top"
              actionIcon={
                <IconButton
                  // sx={{ color: 'primary.main' }}
                  color={starred ? "primary.main" : "error"}
                  aria-label={`star ${item.title}`}
                  onClick={() => {
                    setStarred(!starred);
                  }}
                >
                  {starred ? <StarBorder /> : <StarRate />}
                  {item.rating}
                  {starred ? <HeartBroken /> : <Favorite />}
                  {item.user_ratings_total}
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://picsum.photos/id/1077/367/267",
    title: "Honey",
    author: "@arwinneil",
    featured: true,
    business_status: "OPERATIONAL",
    formatted_address:
      "27963 Budds Creek Rd, Mechanicsville, MD 20659, United States",
    geometry: {
      location: {
        lat: 38.4049415,
        lng: -76.84184259999999,
      },
      viewport: {
        northeast: {
          lat: 38.40644132989271,
          lng: -76.84048212010728,
        },
        southwest: {
          lat: 38.40374167010727,
          lng: -76.84318177989272,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
    icon_background_color: "#7B9EB0",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
    name: "Budds Creek Motocross Park",
    photos: [
      {
        height: 4032,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/102410818626443076466">Fernanda Fierro</a>',
        ],
        photo_reference:
          "Aap_uEAjqgoEp9odLWxe6dhDxuHH0rHdE6jaatOrd8KU14QmAbj_UEw5Px0W3z3HlX6AI8EsZ7_YJZXauBdifRaSbDSbtEMh_OtHRjv5I9aVB4roGepLDMbxIJwuUob53LMXqjPN_UG6t_ZWirCxq5zXmYlmS8X51PGQgqPzphUuGxZzJhVk",
        width: 3024,
      },
    ],
    place_id: "ChIJO6xjNq8St4kRnbXh56uymuk",
    plus_code: {
      compound_code: "C535+X7 Mechanicsville, Maryland",
      global_code: "87C5C535+X7",
    },
    rating: 4.8,
    reference: "ChIJO6xjNq8St4kRnbXh56uymuk",
    types: ["point_of_interest", "establishment"],
    user_ratings_total: 465,
  },
  {
    img: "https://picsum.photos/id/1045/367/267",
    title: "Basketball",
    author: "@tjdragotta",
    business_status: "OPERATIONAL",
    formatted_address: "1532 Delray Rd, Augusta, WV 26704, United States",
    geometry: {
      location: {
        lat: 39.2517052,
        lng: -78.56100619999999,
      },
      viewport: {
        northeast: {
          lat: 39.25285322989272,
          lng: -78.55788935,
        },
        southwest: {
          lat: 39.25015357010728,
          lng: -78.56204514999999,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
    icon_background_color: "#7B9EB0",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
    name: "Mountaineer Motocross LLC",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 539,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/100720357061883349124">Patricia Riggleman</a>',
        ],
        photo_reference:
          "Aap_uEBuKyKLZzURA3z699yRPhDOPMn6CQoYw9M26919fGaIllPS0qAnJcwnjDlbmN3kjTkDHwRwruJtW6gSBLKDyP5cH7F1ZasxIRATHOggtQZ0Z6t69tMJE5zUq26b3RcovIz_HvtIwpTS8gVVEztqLHfAQwV4-t-5nzqvl3FlFKdZalJ2",
        width: 720,
      },
    ],
    place_id: "ChIJ04vlzaqEtYkRLic-0rbpNT4",
    plus_code: {
      compound_code: "7C2Q+MH Augusta, West Virginia",
      global_code: "87F37C2Q+MH",
    },
    rating: 1.1,
    reference: "ChIJ04vlzaqEtYkRLic-0rbpNT4",
    types: ["point_of_interest", "establishment"],
    user_ratings_total: 17,
  },
  {
    img: "https://picsum.photos/id/1047/367/267",
    title: "Fern",
    author: "@katie_wasserman",
    business_status: "OPERATIONAL",
    formatted_address:
      "863 Tomahawk Run Rd, Hedgesville, WV 25427, United States",
    geometry: {
      location: {
        lat: 39.5420601,
        lng: -78.06805369999999,
      },
      viewport: {
        northeast: {
          lat: 39.54283555000001,
          lng: -78.06681352010727,
        },
        southwest: {
          lat: 39.53973374999999,
          lng: -78.06951317989272,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
    icon_background_color: "#7B9EB0",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
    name: "Tomahawk MX",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 3264,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/117299131710573345074">Zeke Ziemann</a>',
        ],
        photo_reference:
          "Aap_uEAG33sadUwK2UP9Q0KDIvgjtyyNWUbVp86TU3K7CJzHbJ0joXh6eBvl3O79ZBJQ8Q9gewVcQFbN-Jbz4aW_i5jV2yON23zRCZ8ogVNVi6YMdm4mxk4qR7U-xHywvK2CntrBgOU2TpHdrYA6-VjsPHZqzEP4Pd04oDKijstp4OFViFjg",
        width: 2448,
      },
    ],
    place_id: "ChIJX_jvUtgayokRBNXYiPy6pww",
    plus_code: {
      compound_code: "GWRJ+RQ Hedgesville, West Virginia",
      global_code: "87F3GWRJ+RQ",
    },
    rating: 4.8,
    reference: "ChIJX_jvUtgayokRBNXYiPy6pww",
    types: ["point_of_interest", "establishment"],
    user_ratings_total: 195,
  },
  {
    img: "https://picsum.photos/id/1067/367/267",
    title: "Mushrooms",
    author: "@silverdalex",
    business_status: "OPERATIONAL",
    formatted_address: "4340 Hanover Rd, Hanover, PA 17331, United States",
    geometry: {
      location: {
        lat: 39.8040045,
        lng: -77.0893952,
      },
      viewport: {
        northeast: {
          lat: 39.80480727989271,
          lng: -77.08822907010727,
        },
        southwest: {
          lat: 39.80210762010727,
          lng: -77.09092872989271,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
    icon_background_color: "#7B9EB0",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
    name: "Happy Ramblers Motorcycle Club",
    photos: [
      {
        height: 2268,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/100191589027927634379">Art Puscas</a>',
        ],
        photo_reference:
          "Aap_uEChrtesltMjtOKewwZS6QUdOOBUnb50Rdi4jokXVAu9R3_V-zPcQ7U9FFSMNWWNjVUCusib3J1TQ_Jvn7HPTf5iMMC0UFS1YZW-3Z_IsLLYGlLerskV4sYfsvZ0wuMpkcEazZwx2QltHCHW1QK6Ils4J9E3jA1Zkq_6ASEPJdznRTZD",
        width: 4032,
      },
    ],
    place_id: "ChIJHfu_iG5RyIkREx4v9E9AEoQ",
    plus_code: {
      compound_code: "RW36+J6 Hanover, Pennsylvania",
      global_code: "87F4RW36+J6",
    },
    rating: 4.7,
    reference: "ChIJHfu_iG5RyIkREx4v9E9AEoQ",
    types: ["night_club", "point_of_interest", "establishment"],
    user_ratings_total: 115,
  },
  {
    img: "https://picsum.photos/id/1056/367/267",
    title: "Tomato basil",
    author: "@shelleypauls",
    business_status: "OPERATIONAL",
    formatted_address: "22378 Coverdale Rd, Seaford, DE 19973, United States",
    geometry: {
      location: {
        lat: 38.6746049,
        lng: -75.54837049999999,
      },
      viewport: {
        northeast: {
          lat: 38.67581537989272,
          lng: -75.54572405000002,
        },
        southwest: {
          lat: 38.67311572010728,
          lng: -75.54925264999999,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
    icon_background_color: "#7B9EB0",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
    name: "Middleford Motocross Park",
    photos: [
      {
        height: 3006,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/115064016912968980745">tgb 808</a>',
        ],
        photo_reference:
          "Aap_uEBDi8Rpi4EC0fe1M6uaoTmavdnSM8l0WACGbqN_3GoNEIy-C2QPTr9a4QD3W8rHWmOZK2ceN0cbiH2IBppXCY-SqbeNmSxfSNFRSJ_oglBy-PwmCB-t-fCnkZiCOZ-5DwTgoMVKk9Aczt8ZdM3-k_KTnf4OjVRScxZFyQlGKNLurb7W",
        width: 5344,
      },
    ],
    place_id: "ChIJrRCY_BjyuIkRcaOwzkZ607Q",
    plus_code: {
      compound_code: "MFF2+RM Seaford, Delaware",
      global_code: "87C6MFF2+RM",
    },
    rating: 4.5,
    reference: "ChIJrRCY_BjyuIkRcaOwzkZ607Q",
    types: ["point_of_interest", "establishment"],
    user_ratings_total: 18,
  },
  {
    img: "https://picsum.photos/id/1072/367/267",
    title: "Sea star",
    author: "@peterlaster",
    business_status: "OPERATIONAL",
    formatted_address: "100 Reasner Ln, Shippensburg, PA 17257, United States",
    geometry: {
      location: {
        lat: 40.1303065,
        lng: -77.55870609999999,
      },
      viewport: {
        northeast: {
          lat: 40.13157422989271,
          lng: -77.55742507010727,
        },
        southwest: {
          lat: 40.12887457010727,
          lng: -77.56012472989271,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
    icon_background_color: "#7B9EB0",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
    name: "Doublin Gap Motocross MX Park",
    photos: [
      {
        height: 960,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/114753506890263650864">A Google User</a>',
        ],
        photo_reference:
          "Aap_uECvhNgH_NUUdfxgV4cdg-BNE0n8LG2ahxBF_RQiXavYgK6HfMdRa2ahoi90ZaSX6Rz005d-PkoYCZ7zM3T_4z4GtliktWm_e5wEhmMwUjV0KRoE1QY4poeURNx6bNoDBJZ52ZiPGpTEFsdkqSJdUFi2FlpGB4Px6FgRqFDf42dVpweG",
        width: 720,
      },
    ],
    place_id: "ChIJOfRReKwSyYkR8j-RW1JgKKM",
    plus_code: {
      compound_code: "4CJR+4G Shippensburg, Pennsylvania",
      global_code: "87G44CJR+4G",
    },
    rating: 5,
    reference: "ChIJOfRReKwSyYkR8j-RW1JgKKM",
    types: ["point_of_interest", "establishment"],
    user_ratings_total: 6,
  },
  {
    img: "https://picsum.photos/id/110/367/267",
    title: "Bike",
    author: "@southside_customs",
    business_status: "OPERATIONAL",
    formatted_address:
      "7140 Barkers Landing Rd, Easton, MD 21601, United States",
    geometry: {
      location: {
        lat: 38.747812,
        lng: -76.023574,
      },
      viewport: {
        northeast: {
          lat: 38.74915392989271,
          lng: -76.02223087010728,
        },
        southwest: {
          lat: 38.74645427010727,
          lng: -76.02493052989271,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/park-71.png",
    icon_background_color: "#4DB546",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/tree_pinlet",
    name: "The Landing MX Park",
    photos: [
      {
        height: 2160,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/111402573331505043918">Ginger Marino</a>',
        ],
        photo_reference:
          "Aap_uECmqxoQ9eABF0R6n1Oo4sWLSTfUP5GA9yaChUJD7XiRKlNeOfJM-YsW2tMwUvicqIjssCauHAuYHHPveY3BW-Q5OD3xso4EedQxsXzbbYP-zZIUltajFjYHc7DHAStdxhH1bBatdPbXO7jHxTqd4_Hb80tvrD1Ri9B2Ac72FN5fyNG1",
        width: 2880,
      },
    ],
    place_id: "ChIJaR40HhZBuIkREh5z-XAFVFg",
    plus_code: {
      compound_code: "PXXG+4H Easton, Maryland",
      global_code: "87C5PXXG+4H",
    },
    rating: 4.7,
    reference: "ChIJaR40HhZBuIkREh5z-XAFVFg",
    types: ["park", "point_of_interest", "establishment"],
    user_ratings_total: 40,
  },
  {
    img: "https://picsum.photos/id/115/367/267",
    title: "Breakfast",
    author: "@bkristastucchio",
    featured: true,
    business_status: "OPERATIONAL",
    formatted_address: "441 Redlane Rd, Birdsboro, PA 19508, United States",
    geometry: {
      location: {
        lat: 40.28070839999999,
        lng: -75.8156741,
      },
      viewport: {
        northeast: {
          lat: 40.28209107989272,
          lng: -75.81451332010728,
        },
        southwest: {
          lat: 40.27939142010727,
          lng: -75.81721297989273,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
    icon_background_color: "#7B9EB0",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
    name: "Pagoda Motorcycle Club Motocross Track",
    photos: [
      {
        height: 3968,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/108918089563904197538">Justin Orsini</a>',
        ],
        photo_reference:
          "Aap_uECbYzLgWPsDwqir_O6PLDMo2_-N8SqmLYv1z7iH5JJGvrQDPhGg_DUlvCfJTzhoBLp9T20XowUJKL8NRVThHvzi2qATfvjJcTTORzptHg_3rdL-UWmr7hXFN673wj-ql4f6MeSvID_wEZgFLLcdJewxfT_jW3fpPpIMuPu1VMAqJ9nf",
        width: 2976,
      },
    ],
    place_id: "ChIJJVhFVXh7xokRqz-SN4kziuI",
    plus_code: {
      compound_code: "75JM+7P Birdsboro, Pennsylvania",
      global_code: "87G675JM+7P",
    },
    rating: 4.8,
    reference: "ChIJJVhFVXh7xokRqz-SN4kziuI",
    types: ["point_of_interest", "establishment"],
    user_ratings_total: 149,
  },
  {
    img: "https://picsum.photos/id/12/367/267",
    title: "Burger",
    author: "@rollelflex_graphy726",
    business_status: "OPERATIONAL",
    formatted_address: "3064 US-22, Fredericksburg, PA 17026, United States",
    geometry: {
      location: {
        lat: 40.4516421,
        lng: -76.39124799999999,
      },
      viewport: {
        northeast: {
          lat: 40.45307687989272,
          lng: -76.38994027010727,
        },
        southwest: {
          lat: 40.45037722010728,
          lng: -76.39263992989271,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
    icon_background_color: "#7B9EB0",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
    name: "Sleepy Hollow Motocross Park",
    photos: [
      {
        height: 1999,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/114102709729739581624">Jaime White</a>',
        ],
        photo_reference:
          "Aap_uEC6Z7bRBXjto6x0jrPZTZOpiRdFXAH2z7EifJQ7tEvH1YT9EMroqof58uNYdB3boeKeWkqNvac6xLHlORmC1txOmQcSrXPG3o9CS93VIx2XXKCQ8Fd48EpXZHAa45thN7C3g_qQMq3OyxP_QlW9Tno39hzG_TRCk2soTYY4bjt9G2GN",
        width: 1645,
      },
    ],
    place_id: "ChIJ-_25cusAxokRBgYIOZwoDiw",
    plus_code: {
      compound_code: "FJ25+MG Fredericksburg, Pennsylvania",
      global_code: "87G5FJ25+MG",
    },
    rating: 4.6,
    reference: "ChIJ-_25cusAxokRBgYIOZwoDiw",
    types: ["point_of_interest", "establishment"],
    user_ratings_total: 100,
  },
  {
    img: "https://picsum.photos/id/124/367/267",
    title: "Camera",
    author: "@helloimnik",
    business_status: "OPERATIONAL",
    formatted_address: "18045 Central Park Cir, Boyds, MD 20841, United States",
    geometry: {
      location: {
        lat: 39.1474485,
        lng: -77.31236969999999,
      },
      viewport: {
        northeast: {
          lat: 39.1523995,
          lng: -77.30948570000001,
        },
        southwest: {
          lat: 39.1433891,
          lng: -77.31378769999999,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
    icon_background_color: "#7B9EB0",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
    name: "South Germantown Bike Park",
    photos: [
      {
        height: 3024,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/115674690264789323169">Monica Faucette</a>',
        ],
        photo_reference:
          "Aap_uED-bC2UoUS3vqfvYX63igDhJL9OIPUjDwy2DMSCCzv87plgW5enXvhMTWRZISMrnMP9GejdvSnomvHskBTcUAuTlxSgo6dDJv_j0Dd0WV2g-Sk37gc-hjvnFKyPeOBBwrRHpMYQcoqtrMn_v-sGBmnDXjBtQG6MOv0BMn15753h0CVj",
        width: 4032,
      },
    ],
    place_id: "ChIJb8pQZkIutokRQCfoLJOIjK0",
    plus_code: {
      compound_code: "4MWQ+X3 Boyds, Maryland",
      global_code: "87F44MWQ+X3",
    },
    rating: 4.7,
    reference: "ChIJb8pQZkIutokRQCfoLJOIjK0",
    types: ["point_of_interest", "establishment"],
    user_ratings_total: 65,
  },
  {
    img: "https://picsum.photos/id/132/367/267",
    title: "Coffee",
    author: "@nolanissac",
    business_status: "OPERATIONAL",
    formatted_address:
      "4626 Robinsonville Rd, Clearville, PA 15535, United States",
    geometry: {
      location: {
        lat: 39.8819922,
        lng: -78.2976414,
      },
      viewport: {
        northeast: {
          lat: 39.88335507989272,
          lng: -78.29633387010728,
        },
        southwest: {
          lat: 39.88065542010728,
          lng: -78.29903352989272,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
    icon_background_color: "#7B9EB0",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
    name: "Breezewood Proving Grounds",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 2252,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/102944379155014940649">Michael Treffinger</a>',
        ],
        photo_reference:
          "Aap_uEDDa60FijKIODjp-bnZcy1NFVQPKSdu5DYQIvOs_rSeQ4uH03U_zDqlMDJnVfHr8jNz30_5fs_MyUtL684V0B0QDV0n8QV9dAdKAMBbwIYFkYiIq1CRVkkCFbxh3C727nSaSSIQYF7XAWvmBTP2nr1CDcd1BBCSoJLk1e1myIa-u9GH",
        width: 4000,
      },
    ],
    place_id: "ChIJeflUPQFIyokR3Mqs0g9wcP8",
    plus_code: {
      compound_code: "VPJ2+QW Clearville, Pennsylvania",
      global_code: "87F3VPJ2+QW",
    },
    rating: 4.7,
    reference: "ChIJeflUPQFIyokR3Mqs0g9wcP8",
    types: ["point_of_interest", "establishment"],
    user_ratings_total: 227,
  },
  {
    img: "https://picsum.photos/id/133/367/267",
    title: "Hats",
    author: "@hjrc33",
    business_status: "OPERATIONAL",
    formatted_address:
      "201 Motorsports Park Cir, Summit Point, WV 25446, United States",
    geometry: {
      location: {
        lat: 39.2418258,
        lng: -77.9733483,
      },
      viewport: {
        northeast: {
          lat: 39.24316877989271,
          lng: -77.97197517010727,
        },
        southwest: {
          lat: 39.24046912010727,
          lng: -77.97467482989271,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
    icon_background_color: "#7B9EB0",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
    name: "Summit Point Motorsports Park",
    opening_hours: {
      open_now: true,
    },
    photos: [
      {
        height: 2432,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/115332821779727441902">Roger Lyle</a>',
        ],
        photo_reference:
          "Aap_uEDl8mqjO9IvGJM5InUrJOySXx7BCQ2zWRcssE9vbycHHhXN1fiDyPgIj9LEvP-exsXweZp2XGKMI-s9O1vRMfEmJk2HtcyIRJ_vFfkmxRp7hpyPFIy2Euf-sHSpeSBVF8m--FOtGIn9N9NsNDk-7ACztkXrVx21_jPjzo9ZNKz04uZa",
        width: 4320,
      },
    ],
    place_id: "ChIJ5Y1s4VL8tYkRsnn5gNE1aVw",
    plus_code: {
      compound_code: "62RG+PM Summit Point, West Virginia",
      global_code: "87F462RG+PM",
    },
    rating: 4.8,
    reference: "ChIJ5Y1s4VL8tYkRsnn5gNE1aVw",
    types: ["point_of_interest", "establishment"],
    user_ratings_total: 640,
  },
  {
    img: "https://picsum.photos/id/136/367/267",
    title: "Honey",
    author: "@arwinneil",
    featured: true,
    business_status: "OPERATIONAL",
    formatted_address: "5858 Baxter Rd, Disputanta, VA 23842, United States",
    geometry: {
      location: {
        lat: 37.0413513,
        lng: -77.28505699999999,
      },
      viewport: {
        northeast: {
          lat: 37.04263022989273,
          lng: -77.28367977010727,
        },
        southwest: {
          lat: 37.03993057010729,
          lng: -77.2863794298927,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
    icon_background_color: "#7B9EB0",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
    name: "South Fork Motocross Park",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 1374,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/114402172598969703563">A Google User</a>',
        ],
        photo_reference:
          "Aap_uECp2EyGFo9Grupgv_dQu_4hpzBtZcxVVVMfFEYBsuxKZijIVeyl3kk_hyWqVdDUESHWzW4ocM69ITaABJ30iuJmBeFJjRX61twgMhDYQNncsP0zExM3Rdzax_IOkE12DgqeOBYM7zRkRER3wf7_Uwzj1Ky4MUqjvSQTmUiUkZauBdll",
        width: 1242,
      },
    ],
    place_id: "ChIJrwRKjlWxsYkRav1CdHJXUWA",
    plus_code: {
      compound_code: "2PR7+GX Disputanta, Virginia",
      global_code: "87942PR7+GX",
    },
    rating: 4.8,
    reference: "ChIJrwRKjlWxsYkRav1CdHJXUWA",
    types: ["point_of_interest", "establishment"],
    user_ratings_total: 71,
  },
  {
    img: "https://picsum.photos/id/137/367/267",
    title: "Basketball",
    author: "@tjdragotta",
    business_status: "OPERATIONAL",
    formatted_address: "13254 Batt Rd, Saluda, VA 23149, United States",
    geometry: {
      location: {
        lat: 37.5744108,
        lng: -76.6594966,
      },
      viewport: {
        northeast: {
          lat: 37.57574402989272,
          lng: -76.65816092010728,
        },
        southwest: {
          lat: 37.57304437010728,
          lng: -76.66086057989271,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
    icon_background_color: "#7B9EB0",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
    name: "Robert's Track and Trail",
    photos: [
      {
        height: 2268,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/102160322085177832868">CJ Greiner</a>',
        ],
        photo_reference:
          "Aap_uEApI6E0m5VvIughtGbkFDZ96suPgcWmaMIUhAGxR95UYDdtjUvlWby4QFRY4Cq8Cxq2mfhPCxbsp9rP9HtdSAVTznTjnQMV6svM7o8aDWk8JyfCpjrjoSsXFZ2E5GEV6kGDI6QkT6S-uHSGTtJiUNg7z__X-5EPIM_k9oTPnXCHaepR",
        width: 4032,
      },
    ],
    place_id: "ChIJQ5Hi8E69sIkRJb4yexojiwQ",
    plus_code: {
      compound_code: "H8FR+Q6 Saluda, Virginia",
      global_code: "8795H8FR+Q6",
    },
    rating: 4.7,
    reference: "ChIJQ5Hi8E69sIkRJb4yexojiwQ",
    types: ["point_of_interest", "establishment"],
    user_ratings_total: 57,
  },
  {
    img: "https://picsum.photos/id/141/367/267",
    title: "Fern",
    author: "@katie_wasserman",
    business_status: "OPERATIONAL",
    formatted_address: "218 Taylortown Rd, Mt Morris, PA 15349, United States",
    geometry: {
      location: {
        lat: 39.7332611,
        lng: -80.00818629999999,
      },
      viewport: {
        northeast: {
          lat: 39.73453342989273,
          lng: -80.00689422010728,
        },
        southwest: {
          lat: 39.73183377010729,
          lng: -80.00959387989272,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
    icon_background_color: "#7B9EB0",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
    name: "High Point Raceway",
    photos: [
      {
        height: 4000,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/118443386665529450554">Mike Pedrow</a>',
        ],
        photo_reference:
          "Aap_uECNDu58b4b5QUPO3UkmnfK6w8SOpPNH-VakS-4GwGAxGzTeMn2xmSJWfTBNqh9LWYa_9tu1zu6ZrPwoUTgXa6K3NJPqu_QBQZcomhXclRvu0ijUP0CErL1F0nj_NROdwdpIhwZDJ1jMF4EK8_Rcqtkrjw0E_92SUeitOnGU7lw77Y7o",
        width: 6000,
      },
    ],
    place_id: "ChIJlZbE9rRwNYgR2FMFaw47yEI",
    plus_code: {
      compound_code: "PXMR+8P Mt Morris, Pennsylvania",
      global_code: "86FXPXMR+8P",
    },
    rating: 4.9,
    reference: "ChIJlZbE9rRwNYgR2FMFaw47yEI",
    types: ["point_of_interest", "establishment"],
    user_ratings_total: 238,
  },
  {
    img: "https://picsum.photos/id/146/367/267",
    title: "Mushrooms",
    author: "@silverdalex",
    business_status: "OPERATIONAL",
    formatted_address:
      "2282 Friendsville Rd, Friendsville, MD 21531, United States",
    geometry: {
      location: {
        lat: 39.5991637,
        lng: -79.3758888,
      },
      viewport: {
        northeast: {
          lat: 39.60086312989272,
          lng: -79.37425309999999,
        },
        southwest: {
          lat: 39.59816347010728,
          lng: -79.38079590000002,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
    icon_background_color: "#7B9EB0",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
    name: "Shady Acres Motocross Park",
    photos: [
      {
        height: 960,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/100308605326483544406">Paula Thomas</a>',
        ],
        photo_reference:
          "Aap_uEDSxsRJFsFsDR4yR762e72JHUyHpVZI2H6VmEU_fZmBppLS8NnhqqNs1oEd_KWPJdQGGjC20kId0eK7rcXNMtLB-j5RacjVbqi-9njPPvGxffzGOgi7xgkWtHptbAK_gisFx0xI1aRDFrAvvl9Ihz0T-QkVoHS4gfVPz6miVRMPT_69",
        width: 720,
      },
    ],
    place_id: "ChIJL5ZGPkpTNYgRMtAkYO5EC5I",
    plus_code: {
      compound_code: "HJXF+MJ Friendsville, Maryland",
      global_code: "87F2HJXF+MJ",
    },
    rating: 4.8,
    reference: "ChIJL5ZGPkpTNYgRMtAkYO5EC5I",
    types: ["point_of_interest", "establishment"],
    user_ratings_total: 18,
  },
  {
    img: "https://picsum.photos/id/155/367/267",
    title: "Tomato basil",
    author: "@shelleypauls",

    business_status: "OPERATIONAL",
    formatted_address: "10395 Dow Gil Rd, Ashland, VA 23005, United States",
    geometry: {
      location: {
        lat: 37.7404158,
        lng: -77.4642899,
      },
      viewport: {
        northeast: {
          lat: 37.74188267989272,
          lng: -77.46317957010727,
        },
        southwest: {
          lat: 37.73918302010728,
          lng: -77.46587922989271,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
    icon_background_color: "#7B9EB0",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
    name: "EVOLVE GT Track Days",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 853,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/113152994628247905810">A Google User</a>',
        ],
        photo_reference:
          "Aap_uEB_vJzuWKc_ztYGQulnHRXheyN5thHjvGPi-_VDhKs2pZrNUmuQ8C4ChpUjjwKPgb3FsSRFbY8C2dFSijvtRSkZr2zZeClXhrWyfyWUkHlNW3TGLMl8O7Jbcbnz090RpNPuANArHA97EIGPILsvgKsfrPWQAzp5QMX6ZeXZGqCSPVR4",
        width: 1280,
      },
    ],
    place_id: "ChIJm3cGTfs7sYkRpZEwRXd51w8",
    plus_code: {
      compound_code: "PGRP+57 Ashland, Virginia",
      global_code: "8794PGRP+57",
    },
    rating: 4.7,
    reference: "ChIJm3cGTfs7sYkRpZEwRXd51w8",
    types: ["car_repair", "point_of_interest", "store", "establishment"],
    user_ratings_total: 14,
  },
  {
    img: "https://picsum.photos/id/164/367/267",
    title: "Sea star",
    author: "@peterlaster",

    business_status: "OPERATIONAL",
    formatted_address: "24 Compass Rd, Parkesburg, PA 19365, United States",
    geometry: {
      location: {
        lat: 39.9835179,
        lng: -75.922343,
      },
      viewport: {
        northeast: {
          lat: 39.98444097989272,
          lng: -75.92164842010727,
        },
        southwest: {
          lat: 39.98174132010727,
          lng: -75.92434807989272,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
    icon_background_color: "#7B9EB0",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
    name: "Piston Poppers Raceway",
    photos: [
      {
        height: 2268,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/113844653548225112393">Elliott Hersh</a>',
        ],
        photo_reference:
          "Aap_uEDIoMJjPD1LdXdwUfzY-dL_BDDdBj7QXhPiBZNlycWXnJ-yBVlEJwfipe8x-xTj6eifS2siXVj1-HUOH8o5YsWQcO7IGJL70RGcF6YXTX2kBLOOgxoMQF04qoPi5tygPJqqkk3d2u-94a2VJ58p2bARmi_FTtrDamkbsVAh2_UR7KDi",
        width: 4032,
      },
    ],
    place_id: "ChIJS7Zbb91ExokRJgvHJHb2MUg",
    plus_code: {
      compound_code: "X3MH+C3 Parkesburg, Pennsylvania",
      global_code: "87F6X3MH+C3",
    },
    rating: 4.7,
    reference: "ChIJS7Zbb91ExokRJgvHJHb2MUg",
    types: ["park", "point_of_interest", "establishment"],
    user_ratings_total: 37,
  },
  {
    img: "https://picsum.photos/id/177/367/267",
    title: "Bike",
    author: "@southside_customs",

    business_status: "OPERATIONAL",
    formatted_address:
      "11865 Roxbury Rd, Charles City, VA 23030, United States",
    geometry: {
      location: {
        lat: 37.3290596,
        lng: -77.23162069999999,
      },
      viewport: {
        northeast: {
          lat: 37.33055747989273,
          lng: -77.22536585,
        },
        southwest: {
          lat: 37.32785782010728,
          lng: -77.23370564999999,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
    icon_background_color: "#7B9EB0",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
    name: "Charles City Dirt Riders",
    photos: [
      {
        height: 6936,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/108339751324738243865">lisa gilley</a>',
        ],
        photo_reference:
          "Aap_uEB0iloUNAjlbzRhtXkcKuV6GxA8x-fnK7evEeePyRcDCFveyx7NeuuvdPOKOF19FtIDHAvXziY95cAj10wc1hefDU7cYb6GeWFyqs1cdkTtLDdjlzngkaNW5wt2I4bBq1EmPDT-NYN5fhseNdbTeIdrJ4EvY88MCt0KSChQ1dAXhSLo",
        width: 9248,
      },
    ],
    place_id: "ChIJe_FLc60BsYkRMcVj2drbJHQ",
    plus_code: {
      compound_code: "8QH9+J9 Charles City, Virginia",
      global_code: "87948QH9+J9",
    },
    rating: 4.8,
    reference: "ChIJe_FLc60BsYkRMcVj2drbJHQ",
    types: ["point_of_interest", "establishment"],
    user_ratings_total: 55,
  },
];
