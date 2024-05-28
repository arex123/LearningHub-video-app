import React, { useState, useEffect, useRef } from "react";
import styles from "./searchList.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Playlist from "../videoCard/Playlist";
import Video from "../videoCard/Video";
import { MoreOutlined,PlusOutlined } from "@ant-design/icons";
const searchResultList1 = [
  {
    kind: "youtube#searchResult",
    etag: "A_I-4R2T5K4poZe55P9BAW9gmO0",
    id: {
      kind: "youtube#playlist",
      playlistId: "PLsyeobzWxl7qtP8Lo9TReqUMkiOp446cV",
    },
    snippet: {
      publishedAt: "2018-10-03T16:53:24Z",
      channelId: "UC59K-uG2A5ogwIrHw4bmlEg",
      title: "JavaScript Tutorial for Beginners",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/uDwSnnhl1Ng/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/uDwSnnhl1Ng/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/uDwSnnhl1Ng/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Telusko",
      liveBroadcastContent: "none",
      publishTime: "2018-10-03T16:53:24Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "ngkf9J5yKRcNpS6Xh3md49_Mojg",
    id: {
      kind: "youtube#video",
      videoId: "zLYH100G9Po",
    },
    snippet: {
      publishedAt: "2024-03-07T00:15:12Z",
      channelId: "UCoQm-PeHC-cbJclKJYJ8LzA",
      title: "Conocí a mi amigo Larin Jr! @alfredolarin",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/zLYH100G9Po/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/zLYH100G9Po/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/zLYH100G9Po/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Fede Vigevani",
      liveBroadcastContent: "none",
      publishTime: "2024-03-07T00:15:12Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "6W4wWxJvTS6Gyz94-SVNfSn2eao",
    id: {
      kind: "youtube#video",
      videoId: "_JVoRhuBCfM",
    },
    snippet: {
      publishedAt: "2024-01-17T15:30:13Z",
      channelId: "UCvz84_Q0BbvZThy75mbd-Dg",
      title: "Can You Reattach a Severed Finger? 🤔",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/_JVoRhuBCfM/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/_JVoRhuBCfM/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/_JVoRhuBCfM/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Zack D. Films",
      liveBroadcastContent: "none",
      publishTime: "2024-01-17T15:30:13Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "wuMQkJslgyOch5ServCzu9B0wb4",
    id: {
      kind: "youtube#video",
      videoId: "DN2rF8FQIYk",
    },
    snippet: {
      publishedAt: "2023-06-16T02:45:40Z",
      channelId: "UC2Fkg1MWhlK3obYyTTAJCyg",
      title: "If you do not have the strength to relax, only taste",
      description:
        "Hello everyone welcome to channel : Animals Appaloosa Official Help me!! 100K Subscriber. Thank you.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/DN2rF8FQIYk/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/DN2rF8FQIYk/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/DN2rF8FQIYk/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Animals Appaloosa - Official",
      liveBroadcastContent: "none",
      publishTime: "2023-06-16T02:45:40Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "--1OphLMDsNC2QWLGUAHWpQJIIs",
    id: {
      kind: "youtube#video",
      videoId: "Xgp8EEh4hQI",
    },
    snippet: {
      publishedAt: "2024-03-11T11:20:00Z",
      channelId: "UCJQsW7LeVEIDCEJU47NmXBA",
      title: "FREDDY KRUEGER AND MICHAEL HAD A BROMANCE #shorts",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Xgp8EEh4hQI/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/Xgp8EEh4hQI/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/Xgp8EEh4hQI/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The McCartys",
      liveBroadcastContent: "none",
      publishTime: "2024-03-11T11:20:00Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "NxM6K7UOTltLevyjgupp3o1kqKQ",
    id: {
      kind: "youtube#video",
      videoId: "lL4bqJJEN3M",
    },
    snippet: {
      publishedAt: "2024-03-11T09:32:55Z",
      channelId: "UCVQsV9UdnvH443xXXFBHphQ",
      title:
        "One side love does hurt 💔🥺 [Yuki, Itsuomi, Oushi] A sign of Affection #animeedit #viral #fyp",
      description:
        'Copyright info: Under section 107 of the copyright Act 1976 of U.S law, allowance is made for "fair use" for purposes such as ...',
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/lL4bqJJEN3M/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/lL4bqJJEN3M/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/lL4bqJJEN3M/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Daarin Anime",
      liveBroadcastContent: "none",
      publishTime: "2024-03-11T09:32:55Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "KzqgFQKIUS8rqapWTKZVE4MTKOc",
    id: {
      kind: "youtube#video",
      videoId: "DooIgJ-UBQg",
    },
    snippet: {
      publishedAt: "2023-03-27T09:20:00Z",
      channelId: "UCOh01Sv2bdi_hjci9tOH7Mg",
      title: "wait for end👵😂Tom and Jerry👴🏻👵 Cute Story #shorts #ytshorts",
      description:
        "wait for end    Tom and Jerry       Cute Story #shorts #ytshorts.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/DooIgJ-UBQg/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/DooIgJ-UBQg/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/DooIgJ-UBQg/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Aja Kitchen",
      liveBroadcastContent: "none",
      publishTime: "2023-03-27T09:20:00Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "RBaXIMgLptqbcW8QXDQTjmNOiSU",
    id: {
      kind: "youtube#video",
      videoId: "B9m0z5zTv1w",
    },
    snippet: {
      publishedAt: "2024-03-01T01:00:06Z",
      channelId: "UCB-ti9vKkebYH-wuggaN6-A",
      title: "Cómo derrotar a estos personajes 💀",
      description:
        "Cómo derrotar a estos personajes #datoscuriosos #minecraft #curiosidades #personajes #derrotar #disney #marvel.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/B9m0z5zTv1w/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/B9m0z5zTv1w/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/B9m0z5zTv1w/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "YOSOYBORJAB",
      liveBroadcastContent: "none",
      publishTime: "2024-03-01T01:00:06Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "T2ZNEb2aqWNC2L3ivqxLyqrQ2BI",
    id: {
      kind: "youtube#video",
      videoId: "QtXby3twMmI",
    },
    snippet: {
      publishedAt: "2015-11-29T08:00:45Z",
      channelId: "UCDPM_n1atn2ijUwHd0NNRQw",
      title: "Coldplay - Adventure Of A Lifetime (Official Video)",
      description:
        "Coldplay - Adventure Of A Lifetime is taken from the album A Head Full of Dreams released in 2015 Subscribe for more content ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/QtXby3twMmI/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/QtXby3twMmI/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/QtXby3twMmI/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Coldplay",
      liveBroadcastContent: "none",
      publishTime: "2015-11-29T08:00:45Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "q783nz9Xej8HJ3-IgqknuAOmt7o",
    id: {
      kind: "youtube#video",
      videoId: "cXeW5fKff7M",
    },
    snippet: {
      publishedAt: "2024-03-11T21:08:00Z",
      channelId: "UCoWpURVabfgqPUeKljAaEOA",
      title: "Un gringo me va a entrevistar | • Liza Baez •",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/cXeW5fKff7M/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/cXeW5fKff7M/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/cXeW5fKff7M/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Liza Baez",
      liveBroadcastContent: "none",
      publishTime: "2024-03-11T21:08:00Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "y8qPtTxoq7gLxSLLFC-mWCxNync",
    id: {
      kind: "youtube#video",
      videoId: "oC2o2-Nteyw",
    },
    snippet: {
      publishedAt: "2024-03-10T15:59:45Z",
      channelId: "UCja7QUMRG9AD8X2F_vXFb9A",
      title: "i Survived the World&#39;s STRICTEST Babysitter",
      description:
        "i Survived the World's STRICTEST Babysitter! Today Ferran has to Survive 24 hours with the worlds strictest babysitter!",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/oC2o2-Nteyw/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/oC2o2-Nteyw/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/oC2o2-Nteyw/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Royalty Family",
      liveBroadcastContent: "none",
      publishTime: "2024-03-10T15:59:45Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "DpuZs9t6XfEyhH09Ni1iFRN2rwE",
    id: {
      kind: "youtube#video",
      videoId: "vW03ket7s4U",
    },
    snippet: {
      publishedAt: "2024-03-19T02:29:36Z",
      channelId: "UCt7k7y_xTkkc1Jeh7cdAjDQ",
      title:
        "#EnVivo ¬ #LosPeriodistas ¬ ¿Cuánto debe Salinas Pliego? ¬ Cárdenas arropa a Claudia Sheinbaum",
      description:
        "Visita www.sinembargo.mx Facebook: www.facebook.com/SinEmbargoMX Twitter: www.twitter.com/SinEmbargoMX Instagram: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/vW03ket7s4U/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/vW03ket7s4U/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/vW03ket7s4U/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "SinEmbargo Al Aire",
      liveBroadcastContent: "none",
      publishTime: "2024-03-19T02:29:36Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "zCrdEYGB4SKxRmxmnQ6d0o0ksWk",
    id: {
      kind: "youtube#video",
      videoId: "rJFXyoqbHX0",
    },
    snippet: {
      publishedAt: "2024-03-19T00:00:39Z",
      channelId: "UCLVeh_lkPTjaXVuZxEpPIHw",
      title: "DESCUBRIMOS QUE ENGAÑAN A NUESTRA HERMANA SUSY!!!",
      description:
        "COMPRA TUS BOLETOS PARA NUESTRA GIRA FLOW PICUS 2023   LINK    : https://solo.to/picus_pfmusic-gts INVITADOS: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/rJFXyoqbHX0/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/rJFXyoqbHX0/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/rJFXyoqbHX0/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Piculin & Galletita",
      liveBroadcastContent: "none",
      publishTime: "2024-03-19T00:00:39Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "4hitqDOaG4QnGFzFlJeOCQ41ADs",
    id: {
      kind: "youtube#video",
      videoId: "zAax3z5uQ2k",
    },
    snippet: {
      publishedAt: "2019-04-10T07:00:05Z",
      channelId: "UCBnZ16ahKA2DZ_T5W0FPUXg",
      title:
        "Phonics Song 2 with TWO Words in 3D - A For Airplane - ABC Alphabet Songs with Sounds for Children",
      description:
        "You can listen to this song on your preferred music streaming platforms.- https://orcd.co/velm61p ChuChu and Friends introduce ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/zAax3z5uQ2k/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/zAax3z5uQ2k/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/zAax3z5uQ2k/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "ChuChu TV Nursery Rhymes & Kids Songs",
      liveBroadcastContent: "none",
      publishTime: "2019-04-10T07:00:05Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "M8WVwysvQn4V7hMVm_yA1fkLtz4",
    id: {
      kind: "youtube#video",
      videoId: "h1f_tq0Lu_8",
    },
    snippet: {
      publishedAt: "2023-06-30T01:26:41Z",
      channelId: "UC2Fkg1MWhlK3obYyTTAJCyg",
      title: "Who you are, what you want to be as a youth!",
      description:
        "Hello everyone welcome to channel : Animals Appaloosa Official Help me!! 100K Subscriber. Thank you.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/h1f_tq0Lu_8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/h1f_tq0Lu_8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/h1f_tq0Lu_8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Animals Appaloosa - Official",
      liveBroadcastContent: "none",
      publishTime: "2023-06-30T01:26:41Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "-78-GlZMDnwiNtIJuXzfSSZbyrU",
    id: {
      kind: "youtube#video",
      videoId: "stsGKb_KMmM",
    },
    snippet: {
      publishedAt: "2024-03-18T16:00:05Z",
      channelId: "UCI3yTtc0kShZ-S_Qsd5VTSQ",
      title: "I Built a Go-Kart for Abandoned Railroads *Again*",
      description:
        "Start a business with Shopify today! https://shopify.com/prestongoes Music licensed from Lickd. The biggest mainstream and ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/stsGKb_KMmM/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/stsGKb_KMmM/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/stsGKb_KMmM/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "prestongoes",
      liveBroadcastContent: "none",
      publishTime: "2024-03-18T16:00:05Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "RvX-y5s7dKNFPesr0Z8b6VuZR4M",
    id: {
      kind: "youtube#video",
      videoId: "CohQFCIkxpE",
    },
    snippet: {
      publishedAt: "2023-05-12T09:30:05Z",
      channelId: "UCMB5UmY3rdIlm7NSRCwj6_w",
      title:
        "Phonics Song for Toddlers | A for Apple | Phonic Sounds of Alphabet A to Z | Kids Rhyme | Color more",
      description:
        "Embark on a delightful educational journey with our latest YouTube video designed especially for kids! This video is a colorful ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/CohQFCIkxpE/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/CohQFCIkxpE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/CohQFCIkxpE/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Adventure Storytellers | Kids Funtime Learning",
      liveBroadcastContent: "none",
      publishTime: "2023-05-12T09:30:05Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "s_aZpU4uBuilmDuIu1l_TJbtfhM",
    id: {
      kind: "youtube#video",
      videoId: "hdW-XeoDzzA",
    },
    snippet: {
      publishedAt: "2024-03-16T17:30:05Z",
      channelId: "UCvz84_Q0BbvZThy75mbd-Dg",
      title: "What Is A Skin Tag? 😨",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/hdW-XeoDzzA/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/hdW-XeoDzzA/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/hdW-XeoDzzA/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Zack D. Films",
      liveBroadcastContent: "none",
      publishTime: "2024-03-16T17:30:05Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "yzwWxnjrRo2u-VAyc2RfB0z7Ee8",
    id: {
      kind: "youtube#video",
      videoId: "yqJWqecO0_k",
    },
    snippet: {
      publishedAt: "2021-10-21T18:00:14Z",
      channelId: "UCJQsW7LeVEIDCEJU47NmXBA",
      title: "Choked on a popsicle today #shorts",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/yqJWqecO0_k/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/yqJWqecO0_k/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/yqJWqecO0_k/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The McCartys",
      liveBroadcastContent: "none",
      publishTime: "2021-10-21T18:00:14Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "bhQ8VUqa1VzedWzvhLPBsaMb33w",
    id: {
      kind: "youtube#video",
      videoId: "Wyd9cYmLZ10",
    },
    snippet: {
      publishedAt: "2023-04-06T06:00:08Z",
      channelId: "UCvlE5gTbOvjiolFlEm-c_Ow",
      title: "Vlad and Niki The best stories for kids | 1 Hour Video",
      description:
        "Vlad and Niki The best stories for kids | 1 Hour Video 00:00 Vlad and Niki kids story about sweet machine 4:34 Vlad and Niki play ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Wyd9cYmLZ10/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/Wyd9cYmLZ10/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/Wyd9cYmLZ10/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Vlad and Niki",
      liveBroadcastContent: "none",
      publishTime: "2023-04-06T06:00:08Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "01wsb6NbsKAUU0sSHxh7cXlZciQ",
    id: {
      kind: "youtube#video",
      videoId: "3lHYNm90Xmw",
    },
    snippet: {
      publishedAt: "2023-03-22T13:56:38Z",
      channelId: "UCwo89Eu7JAbCBM6dGaTZWYg",
      title:
        "#AA letter love couple name status|| AA love whatsapp status|| Love song status||#status #ytshorts",
      description:
        "AA letter love couple name status|| AA love whatsapp status|| Love song status||#status #ytshorts ᴛʜᴀɴᴋ ʏᴏᴜ ғᴏʀ ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/3lHYNm90Xmw/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/3lHYNm90Xmw/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/3lHYNm90Xmw/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Mahi creation 07",
      liveBroadcastContent: "none",
      publishTime: "2023-03-22T13:56:38Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "hBe4NcKChoO2TtC2d2P6QrNPqU4",
    id: {
      kind: "youtube#video",
      videoId: "e_04ZrNroTo",
    },
    snippet: {
      publishedAt: "2018-05-24T07:00:02Z",
      channelId: "UCbCmjCuTUZos6Inko4u57UQ",
      title: "Wheels on the Bus | @CoComelon Nursery Rhymes &amp; Kids Songs",
      description:
        "Bounce along in the bus all over town with this favorite nursery rhyme!",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/e_04ZrNroTo/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/e_04ZrNroTo/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/e_04ZrNroTo/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Cocomelon - Nursery Rhymes",
      liveBroadcastContent: "none",
      publishTime: "2018-05-24T07:00:02Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "TpOq7FgsXD-0k35MVVCMZtKCMMg",
    id: {
      kind: "youtube#video",
      videoId: "8foNNB5vzrA",
    },
    snippet: {
      publishedAt: "2024-03-18T22:51:32Z",
      channelId: "UCaHEdZtk6k7SVP-umnzifmQ",
      title:
        "CONTRATE UNA CHICA para SUBIR a HEROICO en FREE FIRE !! | TheDonato",
      description:
        "SIGUE LA REDES DE LOS CHAMOS FC !! Twitter: https://twitter.com/LosChamosFC Instagram: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/8foNNB5vzrA/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/8foNNB5vzrA/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/8foNNB5vzrA/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "TheDonato",
      liveBroadcastContent: "none",
      publishTime: "2024-03-18T22:51:32Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "3zn74HeVo3p_ckYjMtzkrCYoELw",
    id: {
      kind: "youtube#video",
      videoId: "uZFbRMRtJj0",
    },
    snippet: {
      publishedAt: "2021-04-22T17:42:58Z",
      channelId: "UC3zZX4ttC52HlqVis7eQ-Hg",
      title: "trying to recreate couples poses #shorts",
      description:
        "shorts WE LOVE YOU lots of fun photos coming your way on Instagram: @abbyelizabethoward @_matt_howard_ also... you ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/uZFbRMRtJj0/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/uZFbRMRtJj0/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/uZFbRMRtJj0/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Matt & Abby",
      liveBroadcastContent: "none",
      publishTime: "2021-04-22T17:42:58Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "62P11IdFC6kRprmf7gEa-mQAsWw",
    id: {
      kind: "youtube#video",
      videoId: "fWkmKKLepXw",
    },
    snippet: {
      publishedAt: "2024-03-10T13:30:29Z",
      channelId: "UCSPmUnxInxhPPKpCWX0bk7Q",
      title: "How much I spent on Food In a day 🇮🇳",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/fWkmKKLepXw/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/fWkmKKLepXw/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/fWkmKKLepXw/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Sahil Narang",
      liveBroadcastContent: "none",
      publishTime: "2024-03-10T13:30:29Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "kOq_C_pexLObUpkY75o8EP_IB1s",
    id: {
      kind: "youtube#video",
      videoId: "7E6AcXUKSVA",
    },
    snippet: {
      publishedAt: "2024-03-18T16:00:02Z",
      channelId: "UCIsbLox_y9dCIMLd8tdC6qg",
      title:
        "&#39;Dune: Part Two&#39; Director Denis Villeneuve Breaks Down a Scene | Vanity Fair",
      description:
        "'Dune: Part Two' director Denis Villeneuve breaks down the glorious scene where Paul Atreides (Timothée Chalamet) uses the ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/7E6AcXUKSVA/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/7E6AcXUKSVA/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/7E6AcXUKSVA/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Vanity Fair",
      liveBroadcastContent: "none",
      publishTime: "2024-03-18T16:00:02Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "OPLbe_XCH_mD95DK2r0F9gZWr38",
    id: {
      kind: "youtube#video",
      videoId: "OuskxtK0C6s",
    },
    snippet: {
      publishedAt: "2023-07-12T00:30:10Z",
      channelId: "UCrZ5za3HHU3Aj1BvoeCVOhw",
      title:
        "A for apple | अ से अनार | abcd | phonics song | a for apple b for ball c for cat | abcd song | abcde",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/OuskxtK0C6s/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/OuskxtK0C6s/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/OuskxtK0C6s/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Funnywe🙃",
      liveBroadcastContent: "none",
      publishTime: "2023-07-12T00:30:10Z",
    },
  },
];
const videoList = [
  {
    kind: "youtube#searchResult",
    etag: "61V67y3y4sYB17bdqhuCQokyAko",
    id: {
      kind: "youtube#playlist",
      playlistId: "PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
    },
    snippet: {
      publishedAt: "2022-07-14T12:51:40Z",
      channelId: "UCeVMnSShP_Iviwkknt83cww",
      title: "JavaScript Tutorials for Beginners in Hindi",
      description:
        "JavaScript Course in Hindi: This Javascript tutorial in Hindi course is designed for beginners with an aim to take JavaScript/ES6 ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/ER9SspLe4Hg/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/ER9SspLe4Hg/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/ER9SspLe4Hg/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "CodeWithHarry",
      liveBroadcastContent: "none",
      publishTime: "2022-07-14T12:51:40Z",
    },
  },

  {
    kind: "youtube#searchResult",
    etag: "4Xq6fhdPgb6a8fn_2sALeAG9hH4",
    id: {
      kind: "youtube#video",
      videoId: "htznIeWKgg8",
    },
    snippet: {
      publishedAt: "2023-06-18T18:00:27Z",
      channelId: "UCc7gpqMnnOSbU_F2-5MVVZw",
      title:
        "JavaScript Crash Course: Master the Basics in One Video! Ignite Your Front-End Mastery Series!",
      description:
        "SORRY FOR THE INCONVENIENCE (due to some error last part of the video is removed. here's is the link of remaining part): ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/htznIeWKgg8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/htznIeWKgg8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/htznIeWKgg8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Sheryians Coding School",
      liveBroadcastContent: "none",
      publishTime: "2023-06-18T18:00:27Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "WxrDFEr9BfL4NGoGujX3Y26QmcM",
    id: {
      kind: "youtube#video",
      videoId: "W6NZfCO5SIk",
    },
    snippet: {
      publishedAt: "2018-04-24T02:37:33Z",
      channelId: "UCWv7vMbMWH4-V0ZXdmDpPBA",
      title: "JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour",
      description:
        "Learn JavaScript basics in 1 hour! ⚡ This beginner-friendly tutorial covers everything you need to start coding. Ready to dive ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/W6NZfCO5SIk/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/W6NZfCO5SIk/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Programming with Mosh",
      liveBroadcastContent: "none",
      publishTime: "2018-04-24T02:37:33Z",
    },
  },

  {
    kind: "youtube#searchResult",
    etag: "unAxcQio1OpEShMzSvAUVOC7Ob8",
    id: {
      kind: "youtube#video",
      videoId: "PkZNo7MFNFg",
    },
    snippet: {
      publishedAt: "2018-12-10T14:13:40Z",
      channelId: "UC8butISFwT-Wl7EV0hUK0BQ",
      title: "Learn JavaScript - Full Course for Beginners",
      description:
        "This complete 134-part JavaScript tutorial for beginners will teach you everything you need to know to get started with the ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/PkZNo7MFNFg/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/PkZNo7MFNFg/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "freeCodeCamp.org",
      liveBroadcastContent: "none",
      publishTime: "2018-12-10T14:13:40Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "4sqGEjGu6aoIc3LRXyrlIP_xXQw",
    id: {
      kind: "youtube#video",
      videoId: "LO5eTH4Pe8E",
    },
    snippet: {
      publishedAt: "2020-11-23T15:30:03Z",
      channelId: "UCsvqVGtbbyHaMoevxPAq9Fg",
      title:
        "JavaScript In 10 Minutes | JavaScript Tutorial For Beginners | Learn JavaScript | Simplilearn",
      description: "Full Stack Developer (MERN Stack): ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/LO5eTH4Pe8E/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/LO5eTH4Pe8E/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/LO5eTH4Pe8E/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Simplilearn",
      liveBroadcastContent: "none",
      publishTime: "2020-11-23T15:30:03Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "oVEE2-nhuXr5r-oCCO5Z2z9ykhc",
    id: {
      kind: "youtube#channel",
      channelId: "UCmXmlB4-HJytD7wek0Uo97A",
    },
    snippet: {
      publishedAt: "2018-12-25T10:37:24Z",
      channelId: "UCmXmlB4-HJytD7wek0Uo97A",
      title: "JavaScript Mastery",
      description:
        "Master modern web development with a project-based approach.",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s88-c-k-c0xffffffff-no-rj-mo",
        },
        medium: {
          url: "https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s240-c-k-c0xffffffff-no-rj-mo",
        },
        high: {
          url: "https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s800-c-k-c0xffffffff-no-rj-mo",
        },
      },
      channelTitle: "JavaScript Mastery",
      liveBroadcastContent: "none",
      publishTime: "2018-12-25T10:37:24Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "WsZJRfOn_5htVtlygl_tMbEGOk8",
    id: {
      kind: "youtube#playlist",
      playlistId: "PL0b6OzIxLPbx-BZTaWu_AF7hsKo_Fvsnf",
    },
    snippet: {
      publishedAt: "2019-01-02T12:05:27Z",
      channelId: "UCuT0rj__qEq_ZO3kYwun4Qg",
      title: "🏆 JavaScript Tutorial for beginners in Hindi / Urdu",
      description:
        "JavaScript Tutorial for beginners in hindi and urdu in most easiest way.This javascript crash course in hindi explain you every ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Lgxgm-T9cgA/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/Lgxgm-T9cgA/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/Lgxgm-T9cgA/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Yahoo Baba",
      liveBroadcastContent: "none",
      publishTime: "2019-01-02T12:05:27Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "E8ve7lk1LhYgl-9PtELQE10oVn0",
    id: {
      kind: "youtube#video",
      videoId: "VlPiVmYuoqw",
    },
    snippet: {
      publishedAt: "2023-12-21T14:39:41Z",
      channelId: "UCBwmMxybNva6P_5VmxjzwqA",
      title:
        "JavaScript Tutorial (2024) for Beginners to Pro (with Notes, Projects &amp; Practice Questions)",
      description:
        "Notes available at : https://drive.google.com/drive/folders/1wfNTKinBAV6CCxaI5lfSnnRFAYpy0uEl?usp=share_link Code for ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/VlPiVmYuoqw/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/VlPiVmYuoqw/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/VlPiVmYuoqw/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Apna College",
      liveBroadcastContent: "none",
      publishTime: "2023-12-21T14:39:41Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "3i6Mcs2FP_riX-m7O00soLOVJ7s",
    id: {
      kind: "youtube#video",
      videoId: "B7wHpNUUT4Y",
    },
    snippet: {
      publishedAt: "2021-06-22T16:21:29Z",
      channelId: "UCBwmMxybNva6P_5VmxjzwqA",
      title: "Javascript Introduction | Lecture 1 | Web Development Course",
      description:
        "Complete C++ Placement Course (Data Structures+Algorithm) ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/B7wHpNUUT4Y/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/B7wHpNUUT4Y/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/B7wHpNUUT4Y/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Apna College",
      liveBroadcastContent: "none",
      publishTime: "2021-06-22T16:21:29Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "iPY6ue3NGjQodjgKsmOufCcudEY",
    id: {
      kind: "youtube#video",
      videoId: "hKB-YGF14SY",
    },
    snippet: {
      publishedAt: "2020-05-16T17:57:42Z",
      channelId: "UCeVMnSShP_Iviwkknt83cww",
      title: "JavaScript Tutorial In Hindi",
      description:
        "00:00 – Video Introduction 01:10 – JavaScript Introduction 02:43 – Basics of JavaScript 04:55 – Coding First Line of JavaScript ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/hKB-YGF14SY/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/hKB-YGF14SY/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/hKB-YGF14SY/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "CodeWithHarry",
      liveBroadcastContent: "none",
      publishTime: "2020-05-16T17:57:42Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "gUJrT84gEI6nUeOelckhH0Nmdy8",
    id: {
      kind: "youtube#video",
      videoId: "SBmSRK3feww",
    },
    snippet: {
      publishedAt: "2023-04-03T16:28:04Z",
      channelId: "UCB6dvaWu0N8uVq2yKsZ5s5g",
      title: "JavaScript Full Course - Beginner to Pro - Part 1",
      description:
        "In part 1 of this JavaScript tutorial and JavaScript full course, we learn how to build websites with JavaScript and use it with HTML ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/SBmSRK3feww/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/SBmSRK3feww/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/SBmSRK3feww/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "SuperSimpleDev",
      liveBroadcastContent: "none",
      publishTime: "2023-04-03T16:28:04Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "6gCC2NiagDaEhy9zXCzXOjwvv5g",
    id: {
      kind: "youtube#video",
      videoId: "lI1ae4REbFM",
    },
    snippet: {
      publishedAt: "2022-06-30T16:00:11Z",
      channelId: "UCqrILQNl5Ed9Dz6CGMyvMTQ",
      title:
        "JavaScript Tutorial for Beginners - Full Course in 12 Hours (2022)",
      description:
        "Join my FREE JavaScript Course: https://www.cleverprogrammer.com FORK THIS REPL ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/lI1ae4REbFM/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/lI1ae4REbFM/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/lI1ae4REbFM/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Clever Programmer",
      liveBroadcastContent: "none",
      publishTime: "2022-06-30T16:00:11Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "oiepDO1uZd74ckUflXFrwupbRpg",
    id: {
      kind: "youtube#video",
      videoId: "Kdz9J5vC4_o",
    },
    snippet: {
      publishedAt: "2021-12-10T13:30:05Z",
      channelId: "UC0T6MVd3wQDB5ICAe45OxaQ",
      title:
        "JavaScript Tutorial for Beginners | Full Course to Learn What is JavaScript in Hindi",
      description:
        "In this free JavaScript tutorial for beginners in Hindi from WsCube Tech, you will learn the programming language from basic to ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Kdz9J5vC4_o/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/Kdz9J5vC4_o/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/Kdz9J5vC4_o/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "WsCube Tech",
      liveBroadcastContent: "none",
      publishTime: "2021-12-10T13:30:05Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "lBr_8x2h5hASCLUcuoflsdsRQMs",
    id: {
      kind: "youtube#video",
      videoId: "cpoXLj24BDY",
    },
    snippet: {
      publishedAt: "2023-10-06T02:40:47Z",
      channelId: "UC7uzuZJIYzcxV9JJ1yAtHHg",
      title:
        "🚀 🔥 JavaScript Complete Course (2024) 4 Projects | Notes | GitHub | Free Certification",
      description:
        "GitHub Code Repo: https://github.com/KG-Coding-with-Prashant-Sir/JavaScript_Complete_YouTube - Completion Certificate: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/cpoXLj24BDY/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/cpoXLj24BDY/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/cpoXLj24BDY/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "KG Coding by Prashant Sir",
      liveBroadcastContent: "none",
      publishTime: "2023-10-06T02:40:47Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "DtBcsoihoyOL4sIgy6K_MA5eWRo",
    id: {
      kind: "youtube#playlist",
      playlistId: "PLzdWZT-ZJD08NwOPGEGzy9jg5wwe_Wylj",
    },
    snippet: {
      publishedAt: "2021-11-08T15:34:17Z",
      channelId: "UChcK6lTdP5xZCrK8a79ID8w",
      title: "Java script for beginners in Telugu",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/R4MMtTLUZp4/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/R4MMtTLUZp4/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/R4MMtTLUZp4/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "CS World Telugu",
      liveBroadcastContent: "none",
      publishTime: "2021-11-08T15:34:17Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "KHlpjSFBSbH_6n3K4Kv36UhIeFo",
    id: {
      kind: "youtube#playlist",
      playlistId: "PL0zysOflRCenNqX-t4B4nG527ya8WvSjt",
    },
    snippet: {
      publishedAt: "2021-01-03T18:37:56Z",
      channelId: "UC-Gn7EgShAINFthjuzxi9PQ",
      title: "Best JavaScript Tutorial in Hindi",
      description:
        "In this video series i will cover javascript programming language from basic to advance level step by step in hindi.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/T1tA56Jh3nI/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/T1tA56Jh3nI/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/T1tA56Jh3nI/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Learn Code With Durgesh",
      liveBroadcastContent: "none",
      publishTime: "2021-01-03T18:37:56Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "iJ31H5a2NlhB3ukE0deh8YmbFco",
    id: {
      kind: "youtube#playlist",
      playlistId: "PLYM2_EX_xVvWA3nMtsoLclwDtVS_rLk6O",
    },
    snippet: {
      publishedAt: "2023-01-08T00:59:20Z",
      channelId: "UCXhbCCZAG4GlaBLm80ZL-iA",
      title: "Javascript",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Rr2ykq7EbJU/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/Rr2ykq7EbJU/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/Rr2ykq7EbJU/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Logic First Tamil",
      liveBroadcastContent: "none",
      publishTime: "2023-01-08T00:59:20Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "2NxMU1M1OSLHXoh0vHgj1oEJiRQ",
    id: {
      kind: "youtube#video",
      videoId: "c-I5S_zTwAc",
    },
    snippet: {
      publishedAt: "2019-12-09T19:15:01Z",
      channelId: "UCRLEADhMcb8WUdnQ5_Alk7g",
      title: "Learn JAVASCRIPT in just 5 MINUTES (2020)",
      description:
        "Join the Freelance Code Bootcamp -- https://freemote.com Get the Free JavaScript Syntax Cheat Sheet ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/c-I5S_zTwAc/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/c-I5S_zTwAc/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/c-I5S_zTwAc/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Aaron Jack",
      liveBroadcastContent: "none",
      publishTime: "2019-12-09T19:15:01Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "QreE9ayOE-W20O6scvEgjj-tjxI",
    id: {
      kind: "youtube#video",
      videoId: "8dWL3wF_OMw",
    },
    snippet: {
      publishedAt: "2022-03-05T16:39:40Z",
      channelId: "UC4SVo0Ue36XCfOyb5Lh1viQ",
      title: "JavaScript Full Course for free 🌐",
      description:
        "JavaScript #tutorial #beginners JavaScript tutorial for beginners full course ⭐️Time Stamps⭐️ #1 (00:00:00) JavaScript tutorial ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/8dWL3wF_OMw/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/8dWL3wF_OMw/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/8dWL3wF_OMw/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Bro Code",
      liveBroadcastContent: "none",
      publishTime: "2022-03-05T16:39:40Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "qzTQwvIG-IvQ3w5_aclXECdOY50",
    id: {
      kind: "youtube#video",
      videoId: "JVTZb4YvKjM",
    },
    snippet: {
      publishedAt: "2023-01-07T10:30:08Z",
      channelId: "UC3Qe9c8dZqnjwcDD2vCZBKQ",
      title:
        "Java Script Full Course in Telugu | Java Script in Telugu | Java Script Tutorials in Telugu",
      description:
        "Click Here for Python Course in Telugu https://pythonlife.in/python-course-in-telugu.html GitHub link: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/JVTZb4YvKjM/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/JVTZb4YvKjM/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/JVTZb4YvKjM/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Python Life",
      liveBroadcastContent: "none",
      publishTime: "2023-01-07T10:30:08Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "LxxfzVRsmoYg09F5kUVlMvd2tao",
    id: {
      kind: "youtube#video",
      videoId: "KGkiIBTq0y0",
    },
    snippet: {
      publishedAt: "2021-01-12T04:30:03Z",
      channelId: "UCwfaAHy4zQUb2APNOGXUCCA",
      title: "JavaScript Complete Tutorial in Hindi 🚀 Free Notes + Codes",
      description:
        "Welcome, to Complete JavaScript Tutorial for Beginners in Hindi in 2024. We will cover Basic to Advanced JavaScript, Modern ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/KGkiIBTq0y0/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/KGkiIBTq0y0/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/KGkiIBTq0y0/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Thapa Technical",
      liveBroadcastContent: "none",
      publishTime: "2021-01-12T04:30:03Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "tsTZB0kaz-Rpl1Zl7KqTm43RCIw",
    id: {
      kind: "youtube#video",
      videoId: "g7T23Xzys-A",
    },
    snippet: {
      publishedAt: "2021-01-01T16:35:24Z",
      channelId: "UCmXmlB4-HJytD7wek0Uo97A",
      title: "JavaScript Crash Course 2021 - Master JavaScript in One Video!",
      description:
        "JavaScript is one of the most popular languages of 2021, it is easy to learn and it is extremely powerful. In this video, you will learn ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/g7T23Xzys-A/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/g7T23Xzys-A/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/g7T23Xzys-A/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "JavaScript Mastery",
      liveBroadcastContent: "none",
      publishTime: "2021-01-01T16:35:24Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "PmkTfuRsM1RaX2zWUET6m41V08s",
    id: {
      kind: "youtube#video",
      videoId: "gvicrj31JOM",
    },
    snippet: {
      publishedAt: "2018-05-15T22:47:58Z",
      channelId: "UCWv7vMbMWH4-V0ZXdmDpPBA",
      title: "JavaScript this Keyword",
      description:
        "JavaScript this Keyword Get my complete JavaScript course: http://bit.ly/2M1sp4B Subscribe for more videos: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/gvicrj31JOM/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/gvicrj31JOM/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/gvicrj31JOM/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Programming with Mosh",
      liveBroadcastContent: "none",
      publishTime: "2018-05-15T22:47:58Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "xMbWIma3mFwSpMmVP1-f7HnGszY",
    id: {
      kind: "youtube#video",
      videoId: "chx9Rs41W6g",
    },
    snippet: {
      publishedAt: "2021-10-09T03:30:03Z",
      channelId: "UCrkQMtWNtuq-1j0q8c2RVeQ",
      title: "JavaScript |  Beginning to Mastery Complete Tutorial (Part 1)",
      description:
        "Complete modern javascript/es6 tutorial in Hindi (2021) Source code ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/chx9Rs41W6g/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/chx9Rs41W6g/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/chx9Rs41W6g/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Harshit vashisth",
      liveBroadcastContent: "none",
      publishTime: "2021-10-09T03:30:03Z",
    },
  },
];

const SearchList = () => {
  const api_url = process.env.REACT_APP_YOUTUBE_VIDEO_SEARCH_LIST;
  const api_key = process.env.REACT_APP_API_KEY;
  const [searchResultList, setSearchVList] = useState([]);
  const [searchText, setSearchText] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setSearchText(location.search.substring(14));
    getSearchResults();
  }, [searchText]);

  useEffect(() => {
    setSearchText(location.search.substring(14));
  }, [location.search]);

  const getSearchResults = async () => {
    console.log("searchText ",searchText);
    const data = await fetch(api_url+location.search.substring(14)+"&key="+api_key)
    console.log("api_urlapi_key ",api_url+location.search.substring(14)+"&key="+api_key);
    const json = await data.json()
    console.log("json items: ",json.items);
    setSearchVList(json.items)
    // setSearchVList(videoList);
  };

  const channelLinkClick = (chId) => {
    navigate("/user?" + chId);
  };
  const videoLinkClick = async (id) => {
    console.log("id ", id);
    if (id.kind == "youtube#video") {
      navigate("/watch?v=" + id.videoId);
    } else {
      //get playlist info
      let playlistUrl =
        "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=" +
        id.playlistId +
        "&key=" +
        process.env.REACT_APP_API_KEY2;
      const data = await fetch(playlistUrl);
      const newData = await data.json();
      console.log("new Data ", newData);
    }
  };


  const [setornot,setSetorNot]= useState(true)
  const checkCourse =async (id)=>{
    console.log("process.env.server_url",process.env.REACT_APP_SERVER_URL)
    let response = await fetch(process.env.REACT_APP_SERVER_URL + "findCourse/"+id);
    let result = await response.json()
    console.log("result ",result)
    setSetorNot(result.found)


  }

  const handleAddCourse = async(video)=>{
    console.log(process.env.REACT_APP_SERVER_URL+"addCourse")
    let response = await fetch(process.env.REACT_APP_SERVER_URL+"addCourse",{
      method:"post",
      headers:{
        'Content-Type': 'application/json' 
      },
      body:JSON.stringify({course:video})
    })

    let result = await response.json()
    console.log("course set result ",result)
    if(result.saved){
       setSetorNot(true)
    }
  }

  const handleRemoveCourse = async(id)=>{
    let response = await fetch(process.env.REACT_APP_SERVER_URL+"removeCourse",{
      method:"post",
      headers:{
        'Content-Type': 'application/json' 
      },
      body:JSON.stringify({courseId:id})
    })

    let result = await response.json()
    console.log("course remove result ",result)
    if(result.removed){
      setSetorNot(false)
   }
  }


  return (
    <div className="pr-40 py-3">
      {searchResultList?.map((video) => (
        // <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
        <div
          key={video.id.videoId ?? video.id.playlistId}
          className="flex mb-2 group"
        >
          <div
            onClick={() => videoLinkClick(video.id)}
            className="cursor-pointer w-4/12 overflow-hidden rounded-lg h-52 bg-slate-700"
          >
            {/* <img className="object-cover h-[100%] w-[100%] transition-all hover:scale-105" src={video.snippet.thumbnails.high.url} /> */}
            {video.id.kind === "youtube#video" ? (
              <img
                className="object-cover h-[100%] w-[100%] transition-all hover:scale-105"
                src={video.snippet.thumbnails.high.url}
              />
            ) : (
              <img
                className="object-cover h-[100%] w-[100%] rounded-3xl hover:opacity-50"
                src={video.snippet.thumbnails.high.url}
              />
            )}
          </div>
          <div className="w-7/12 p-5">
            <p
              onClick={() => videoLinkClick(video.id)}
              className="cursor-pointer text-xl font-medium"
            >
              {video.snippet.title}
            </p>
            <p
              onClick={() => channelLinkClick("UCc7gpqMnnOSbU_F2-5MVVZw")}
              className="cursor-pointer font-light text-xs my-2 hover:font-normal"
            >
              {video.snippet.channelTitle}
            </p>
            <p
              onClick={() => videoLinkClick(video.id)}
              className="cursor-pointer text-sm"
            >
              {video.snippet.description}
            </p>
          </div>
          {/* {video.id.playlistId && (
            <div className="relative bg-red-100">
              <MoreOutlined                
                ref={boxRef}
                onClick={() => setOpenMore(true)}
                className="p-1 block duration-700 active:bg-slate-300 rounded-full text-[25px] font-bold cursor-pointer "
              />
              {openMore && (
                <div className="bg-slate-600 absolute p-2 right-0 rounded-md">
                  <p>Add to Courses</p>
                </div>
              )}
            </div>
          )} */}
          {video.id.playlistId && (
            <div onClick={()=>checkCourse(video.id.playlistId)} className="dropdown dropdown-bottom h-fit">
            <div tabIndex={0} role="button" className="btn rounded-xl p-1 bg-white border-none m-0"><MoreOutlined className="text-[25px]"/></div>
            <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-40 text-center p-1 shadow">
              <div className="card-body flex flex-row">
                {/* <h3 className="card-title">Card title!</h3> */}
                {console.log("set ",setornot)}
                {setornot?<p onClick={()=>handleRemoveCourse(video.id.playlistId)} className="cursor-pointer hover:text-blue-800">Remove from course</p>:
                <p onClick={()=>handleAddCourse(video)} className="cursor-pointer hover:text-blue-800">Add to course</p>}
                
                {/* <PlusOutlined className="cursor-pointer"/> */}
              </div>
            </div>
          </div>
          )}
        </div>

        // </Link>
      ))}
    </div>
  );
};

export default SearchList;
