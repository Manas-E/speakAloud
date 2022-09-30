/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Icons(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Icons: {} }, variantValues: { type: "Time" } },
    {
      overrides: {
        Icons: {
          width: "20px",
          height: "20px",
          viewBox: { minX: 0, minY: 0, width: 20, height: 20 },
        },
      },
      variantValues: { type: "Search" },
    },
    {
      overrides: {
        Icons: {
          width: "51px",
          height: "51px",
          viewBox: { minX: 0, minY: 0, width: 51, height: 51 },
          paths: [
            {
              d: "M51 25.5C51 39.5833 39.5833 51 25.5 51C11.4167 51 0 39.5833 0 25.5C0 11.4167 11.4167 0 25.5 0C39.5833 0 51 11.4167 51 25.5Z",
              fill: "rgba(255,51,75,1)",
              fillRule: "nonzero",
              style: { transform: "translate(0%, 0%)" },
            },
            {
              d: "M2.448 0.243136L4.02573 -2.30848L2.448 0.243136ZM15.248 8.15769L13.6703 10.7093L13.6703 10.7093L15.248 8.15769ZM15.248 10.8423L16.8257 13.3939L16.8257 13.3939L15.248 10.8423ZM2.448 18.7569L0.870268 16.2052L0.870268 16.2052L2.448 18.7569ZM3 17.4146L3 1.58544L-3 1.58544L-3 17.4146L3 17.4146ZM3 1.58544C3 2.74896 1.75457 3.34155 0.870268 2.79476L4.02573 -2.30848C1.01007 -4.17314 -3 -2.06462 -3 1.58544L3 1.58544ZM0.870268 2.79476L13.6703 10.7093L16.8257 5.60607L4.02573 -2.30848L0.870268 2.79476ZM13.6703 10.7093C12.7766 10.1567 12.7766 8.84328 13.6703 8.29069L16.8257 13.3939C19.7248 11.6014 19.7248 7.39861 16.8257 5.60607L13.6703 10.7093ZM13.6703 8.29069L0.870268 16.2052L4.02573 21.3085L16.8257 13.3939L13.6703 8.29069ZM0.870268 16.2052C1.75457 15.6585 3 16.251 3 17.4146L-3 17.4146C-3 21.0646 1.01007 23.1731 4.02573 21.3085L0.870268 16.2052Z",
              stroke: "rgba(255,255,255,1)",
              fillRule: "nonzero",
              strokeWidth: 3,
              style: { transform: "translate(39.22%, 31.37%)" },
            },
          ],
          boxShadow:
            "0px 5px 50px rgba(1, 0.19999998807907104, 0.2959998846054077, 0.699999988079071)",
        },
      },
      variantValues: { type: "Play" },
    },
    {
      overrides: {
        Icons: {
          width: "20px",
          height: "14px",
          viewBox: { minX: 0, minY: 0, width: 20, height: 14 },
        },
      },
      variantValues: { type: "Hamburger_menu" },
    },
    { overrides: { Icons: {} }, variantValues: { type: "avatar" } },
    {
      overrides: {
        Icons: {
          width: "12px",
          viewBox: { minX: 0, minY: 0, width: 12, height: 16 },
        },
      },
      variantValues: { type: "Podcasts" },
    },
    {
      overrides: {
        Icons: {
          width: "32px",
          height: "32px",
          viewBox: { minX: 0, minY: 0, width: 32, height: 32 },
          paths: [
            {
              d: "M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z",
              fill: "rgba(51,105,255,1)",
              fillRule: "nonzero",
              style: { transform: "translate(0%, 0%)" },
            },
            {
              d: "M1.88235 9.34173L7.35026 5.96078L1.88235 2.57984L1.88235 9.34173ZM0 0.994788L0 10.9268C0 11.7069 0.867339 12.1825 1.536 11.769L9.56737 6.80302C10.1965 6.41401 10.1965 5.50756 9.56737 5.11855L1.536 0.152556C0.867339 -0.260893 0 0.214693 0 0.994788Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "evenodd",
              style: { transform: "translate(39.22%, 31.37%)" },
            },
          ],
          boxShadow:
            "0px 5px 50px rgba(0.20000000298023224, 0.4117647111415863, 1, 0.699999988079071)",
        },
      },
      variantValues: { type: "Play Small" },
    },
    {
      overrides: {
        Icons: {
          width: "32px",
          height: "32px",
          viewBox: { minX: 0, minY: 0, width: 32, height: 32 },
          paths: [
            {
              d: "M30 16C30 23.732 23.732 30 16 30L16 34C25.9411 34 34 25.9411 34 16L30 16ZM16 30C8.26801 30 2 23.732 2 16L-2 16C-2 25.9411 6.05887 34 16 34L16 30ZM2 16C2 8.26801 8.26801 2 16 2L16 -2C6.05887 -2 -2 6.05887 -2 16L2 16ZM16 2C23.732 2 30 8.26801 30 16L34 16C34 6.05887 25.9411 -2 16 -2L16 2Z",
              stroke: "rgba(137,143,151,1)",
              fillRule: "nonzero",
              strokeWidth: 2,
              style: { transform: "translate(0%, 0%)" },
            },
            {
              d: "M7.05988 0.424169L6.60462 -0.466188L6.60462 -0.466188L7.05988 0.424169ZM9.07272 9.81205e-06L9.07704 -0.99999L9.07273 -0.99999L9.07272 9.81205e-06ZM10.0048 9.70728L10.6896 10.4361L10.0048 9.70728ZM6.92206 11.991L6.44627 11.1114L6.44627 11.1114L6.92206 11.991ZM6.41667 12.2644L5.94087 13.1439L6.41667 13.4013L6.89246 13.1439L6.41667 12.2644ZM5.91127 11.991L6.38707 11.1114L6.38707 11.1114L5.91127 11.991ZM2.82849 9.70728L2.14375 10.4361L2.82849 9.70728ZM5.78772 0.443707L6.24675 -0.444714L5.78772 0.443707ZM6.41082 0.850542L5.78163 1.62779L6.41664 2.14184L7.04699 1.62208L6.41082 0.850542ZM7.51514 1.31453C7.96149 1.0863 8.33936 1 9.0727 1.00001L9.07273 -0.99999C8.11712 -1 7.4063 -0.876108 6.60462 -0.466188L7.51514 1.31453ZM9.06839 1C10.5454 1.00639 11.8333 2.32016 11.8333 4.33868L13.8333 4.33868C13.8333 1.50652 11.9222 -0.987672 9.07704 -0.999981L9.06839 1ZM11.8333 4.33868C11.8333 5.80657 11.0538 7.34955 9.32011 8.97849L10.6896 10.4361C12.6367 8.60667 13.8333 6.57319 13.8333 4.33868L11.8333 4.33868ZM9.32011 8.97849C8.40654 9.83683 7.24215 10.6809 6.44627 11.1114L7.39786 12.8705C8.36864 12.3454 9.67108 11.393 10.6896 10.4361L9.32011 8.97849ZM6.44627 11.1114L5.94087 11.3848L6.89246 13.1439L7.39786 12.8705L6.44627 11.1114ZM6.89246 11.3848L6.38707 11.1114L5.43547 12.8705L5.94087 13.1439L6.89246 11.3848ZM6.38707 11.1114C5.59118 10.6809 4.42679 9.83683 3.51323 8.97849L2.14375 10.4361C3.16225 11.393 4.46469 12.3454 5.43547 12.8705L6.38707 11.1114ZM3.51323 8.97849C1.77949 7.34955 1 5.80657 1 4.33868L-1 4.33868C-1 6.57319 0.196648 8.60667 2.14375 10.4361L3.51323 8.97849ZM1 4.33868C1 2.29196 2.27383 1 3.76515 1L3.76515 -1C0.895342 -1 -1 1.48283 -1 4.33868L1 4.33868ZM3.76515 1C4.45773 1 4.86487 1.09248 5.32869 1.33213L6.24675 -0.444714C5.43834 -0.862407 4.70092 -1 3.76515 -1L3.76515 1ZM5.32869 1.33213C5.49028 1.41561 5.64129 1.51419 5.78163 1.62779L7.04001 0.0732898C6.79327 -0.126443 6.52811 -0.299339 6.24675 -0.444714L5.32869 1.33213ZM7.04699 1.62208C7.19248 1.50213 7.34856 1.3997 7.51514 1.31453L6.60462 -0.466188C6.30914 -0.315101 6.03174 -0.132992 5.77464 0.0789986L7.04699 1.62208Z",
              stroke: "rgba(137,143,151,1)",
              fillRule: "nonzero",
              strokeWidth: 2,
              style: { transform: "translate(29.95%, 32.52%)" },
            },
          ],
        },
      },
      variantValues: { type: "FavDisable" },
    },
    {
      overrides: {
        Icons: {
          width: "32px",
          height: "32px",
          viewBox: { minX: 0, minY: 0, width: 32, height: 32 },
          paths: [
            {
              d: "M30 16C30 23.732 23.732 30 16 30L16 34C25.9411 34 34 25.9411 34 16L30 16ZM16 30C8.26801 30 2 23.732 2 16L-2 16C-2 25.9411 6.05887 34 16 34L16 30ZM2 16C2 8.26801 8.26801 2 16 2L16 -2C6.05887 -2 -2 6.05887 -2 16L2 16ZM16 2C23.732 2 30 8.26801 30 16L34 16C34 6.05887 25.9411 -2 16 -2L16 2Z",
              stroke: "rgba(255,51,75,1)",
              fillRule: "nonzero",
              strokeWidth: 2,
              style: { transform: "translate(0%, 0%)" },
            },
            {
              d: "M7.05988 0.424169C7.68389 0.105095 8.22824 -9.37457e-07 9.07272 9.81205e-06C11.2338 0.00935898 12.8333 1.91334 12.8333 4.33868C12.8333 6.18988 11.8453 7.97811 10.0048 9.70728C9.03881 10.6149 7.80539 11.5131 6.92206 11.991L6.41667 12.2644L5.91127 11.991C5.02794 11.5131 3.79452 10.6149 2.82849 9.70728C0.988068 7.97811 0 6.18988 0 4.33868C0 1.8874 1.58459 2.70617e-16 3.76515 0C4.57933 0 5.1516 0.115035 5.78772 0.443707C6.0092 0.558138 6.21728 0.693872 6.41082 0.850542C6.61211 0.684567 6.82885 0.542301 7.05988 0.424169Z",
              fill: "rgba(255,51,75,1)",
              fillRule: "evenodd",
              style: { transform: "translate(29.95%, 32.52%)" },
            },
          ],
        },
      },
      variantValues: { type: "Fav" },
    },
    {
      overrides: {
        Icons: {
          width: "31px",
          height: "31px",
          viewBox: { minX: 0, minY: 0, width: 31, height: 31 },
          paths: [
            {
              d: "M31 15.5C31 24.0604 24.0604 31 15.5 31C6.93959 31 0 24.0604 0 15.5C0 6.93959 6.93959 0 15.5 0C24.0604 0 31 6.93959 31 15.5Z",
              fill: "rgba(137,143,151,0.15)",
              fillRule: "nonzero",
              style: { transform: "translate(100%, 100%)" },
            },
          ],
        },
      },
      variantValues: { type: "LikeDisable" },
    },
    {
      overrides: {
        Icons: {
          width: "31px",
          height: "31px",
          viewBox: { minX: 0, minY: 0, width: 31, height: 31 },
          paths: [
            {
              d: "M31 15.5C31 24.0604 24.0604 31 15.5 31C6.93959 31 0 24.0604 0 15.5C0 6.93959 6.93959 0 15.5 0C24.0604 0 31 6.93959 31 15.5Z",
              fill: "rgba(69,146,33,0.15)",
              fillRule: "nonzero",
              style: { transform: "translate(100%, 100%)" },
            },
          ],
        },
      },
      variantValues: { type: "Like" },
    },
    {
      overrides: {
        Icons: {
          width: "31px",
          height: "31px",
          viewBox: { minX: 0, minY: 0, width: 31, height: 31 },
          paths: [
            {
              d: "M31 15.5C31 24.0604 24.0604 31 15.5 31C6.93959 31 0 24.0604 0 15.5C0 6.93959 6.93959 0 15.5 0C24.0604 0 31 6.93959 31 15.5Z",
              fill: "rgba(137,143,151,0.15)",
              fillRule: "nonzero",
              style: { transform: "translate(100%, 100%)" },
            },
          ],
        },
      },
      variantValues: { type: "UnlikeDisable" },
    },
    {
      overrides: {
        Icons: {
          width: "31px",
          height: "31px",
          viewBox: { minX: 0, minY: 0, width: 31, height: 31 },
          paths: [
            {
              d: "M31 15.5C31 24.0604 24.0604 31 15.5 31C6.93959 31 0 24.0604 0 15.5C0 6.93959 6.93959 0 15.5 0C24.0604 0 31 6.93959 31 15.5Z",
              fill: "rgba(255,51,75,0.15)",
              fillRule: "nonzero",
              style: { transform: "translate(100%, 100%)" },
            },
          ],
        },
      },
      variantValues: { type: "Unlike" },
    },
    {
      overrides: {
        Icons: {
          paths: [
            {
              d: "M14.5609 0L15.9237 0.508148C15.3843 1.95497 11.8341 3.16317 7.96957 3.16317C3.80741 3.16317 0.4962 2.12334 0 0.462233L1.39369 0.0459149C1.47813 0.328567 2.10796 0.753363 3.17558 1.08863C4.43103 1.48288 6.10893 1.70862 7.96957 1.70862C11.2768 1.70862 14.3085 0.676887 14.5609 0Z",
              fill: "rgba(137,143,151,1)",
              fillRule: "evenodd",
              style: { transform: "translate(0.19%, 43.87%)" },
            },
          ],
        },
      },
      variantValues: { type: "Topics" },
    },
    {
      overrides: {
        Icons: {
          paths: [
            {
              d: "M5.95288 2.97136e-14L7.14264 0.836776C6.33099 1.9908 5.00954 2.69249 3.57132 2.69249C2.1331 2.69249 0.811647 1.9908 0 0.836776L1.18975 0C1.73183 0.770742 2.61168 1.23794 3.57132 1.23794C4.53095 1.23794 5.41081 0.770742 5.95288 2.97136e-14Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "evenodd",
              style: { transform: "translate(27.68%, 60.44%)" },
            },
            {
              d: "M0 1.45455L0 0L1.45455 0L1.45455 1.45455L0 1.45455Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "evenodd",
              style: { transform: "translate(31.82%, 36.36%)" },
            },
          ],
        },
      },
      variantValues: { type: "Authors" },
    },
    { overrides: { Icons: {} }, variantValues: { type: "Episodes" } },
    {
      overrides: {
        Icons: {
          width: "10px",
          height: "10px",
          viewBox: { minX: 0, minY: 0, width: 10, height: 10 },
        },
      },
      variantValues: { type: "StarFilled" },
    },
    {
      overrides: {
        Icons: {
          width: "10px",
          height: "10px",
          viewBox: { minX: 0, minY: 0, width: 10, height: 10 },
        },
      },
      variantValues: { type: "Star" },
    },
    {
      overrides: {
        Icons: {
          width: "40px",
          height: "40px",
          viewBox: { minX: 0, minY: 0, width: 40, height: 40 },
          paths: [
            {
              d: "M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z",
              fill: "rgba(9,18,28,1)",
              fillRule: "nonzero",
              style: { transform: "translate(0%, 0%)" },
            },
            {
              d: "M0 0L3.63636 0L3.63636 18.1818L0 18.1818L0 0Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "evenodd",
              style: { transform: "translate(36.36%, 27.27%)" },
            },
            {
              d: "M0 0L3.63636 0L3.63636 18.1818L0 18.1818L0 0Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "evenodd",
              style: { transform: "translate(54.55%, 27.27%)" },
            },
          ],
        },
      },
      variantValues: { type: "Pause" },
    },
    {
      overrides: {
        Icons: {
          width: "20px",
          height: "20px",
          viewBox: { minX: 0, minY: 0, width: 20, height: 20 },
          paths: [
            {
              d: "M4.19306 5L8 5L8 7L1 7L1 0L3 0L3 3.27035C4.72511 1.18251 7.19577 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10L2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C7.60638 2 5.55354 3.0787 4.19306 5Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "evenodd",
              style: { transform: "translate(0%, 0%)" },
            },
          ],
        },
      },
      variantValues: { type: "Back" },
    },
    {
      overrides: {
        Icons: {
          width: "20px",
          height: "20px",
          viewBox: { minX: 0, minY: 0, width: 20, height: 20 },
          paths: [
            {
              d: "M4.19306 5L8 5L8 7L1 7L1 0L3 0L3 3.27035C4.72511 1.18251 7.19577 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10L2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C7.60638 2 5.55354 3.0787 4.19306 5Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "evenodd",
              style: { transform: "translate(100%, 0%)" },
            },
          ],
        },
      },
      variantValues: { type: "Forward" },
    },
    {
      overrides: {
        Icons: {
          width: "20px",
          height: "20px",
          viewBox: { minX: 0, minY: 0, width: 20, height: 20 },
        },
      },
      variantValues: { type: "fb" },
    },
    {
      overrides: {
        Icons: {
          width: "20px",
          height: "20px",
          viewBox: { minX: 0, minY: 0, width: 20, height: 20 },
        },
      },
      variantValues: { type: "ig" },
    },
    {
      overrides: {
        Icons: {
          width: "20.53px",
          height: "19px",
          viewBox: { minX: 0, minY: 0, width: 20, height: 19 },
        },
      },
      variantValues: { type: "twitter" },
    },
    {
      overrides: {
        Icons: {
          width: "10.88px",
          height: "6.33px",
          viewBox: { minX: 0, minY: 0, width: 10, height: 6 },
          paths: [
            {
              d: "M5.44194 1.76777L0.883883 6.32582L0 5.44194L5.44194 0L10.8839 5.44194L10 6.32582L5.44194 1.76777Z",
              fill: "rgba(218,218,218,1)",
              fillRule: "evenodd",
              style: { transform: "translate(100%, 100%)" },
            },
          ],
        },
      },
      variantValues: { type: "Arrow Down" },
    },
    {
      overrides: {
        Icons: {
          width: "10.88px",
          height: "6.33px",
          viewBox: { minX: 0, minY: 0, width: 10, height: 6 },
          paths: [
            {
              d: "M5.44194 1.76777L0.883883 6.32582L0 5.44194L5.44194 0L10.8839 5.44194L10 6.32582L5.44194 1.76777Z",
              fill: "rgba(218,218,218,1)",
              fillRule: "evenodd",
              style: { transform: "translate(100%, 100%)" },
            },
          ],
        },
      },
      variantValues: { type: "Arrow Up" },
    },
    { overrides: { Icons: {} }, variantValues: { type: "Subscribed" } },
    {
      overrides: {
        Icons: {
          paths: [
            {
              d: "M8.06844 0.464048C8.78159 0.114976 9.4037 -1.02559e-06 10.3688 1.07345e-05C12.8386 0.0102389 14.6667 2.09323 14.6667 4.74658C14.6667 6.77183 13.5374 8.72819 11.4341 10.6199C10.3301 11.6129 8.92045 12.5955 7.91093 13.1183L7.33333 13.4174L6.75573 13.1183C5.74621 12.5955 4.3366 11.6129 3.23256 10.6199C1.12922 8.72819 0 6.77183 0 4.74658C0 2.06484 1.81096 2.96059e-16 4.30303 0C5.23352 0 5.88755 0.12585 6.61454 0.485423C6.86765 0.610612 7.10546 0.759108 7.32665 0.930507C7.55669 0.748928 7.8044 0.593287 8.06844 0.464048Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "evenodd",
              style: { transform: "translate(0%, 0%)" },
            },
          ],
        },
      },
      variantValues: { type: "Heart" },
    },
    { overrides: { Icons: {} }, variantValues: { type: "History" } },
    { overrides: { Icons: {} }, variantValues: { type: "Payments" } },
    { overrides: { Icons: {} }, variantValues: { type: "Settings" } },
    { overrides: { Icons: {} }, variantValues: { type: "Logout" } },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Icon
      width="16px"
      height="16px"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 16, height: 16 }}
      paths={[]}
      {...rest}
      {...getOverrideProps(overrides, "Icons")}
    ></Icon>
  );
}
