import React from 'react'
import  "./home.css"
import ChapterLogo from '../../assets/logo/chapterlogo.svg'
import welcome from '../../assets/logo/Welcome.svg'
import image from '../../assets/Nature.jpg'
import Carousel from '../SwipeCarousel/SwipeCarousel';
import Slider from './ImageSlider/slider';
import { Typewriter} from 'react-simple-typewriter';
function home() {
  const slides=[image,image,image];
  return (
    <div>
        <div className=' mt-[5vh] lg:mt-5 flex justify-center items-center h-[30vh] lg:h-[100vh] w-[100vw]'>
            <img className='lg:mb-[20%] h-[25vh] lg:h-[50vh] w-[80vw]' src={ChapterLogo}/>
        </div>
        <div class="text-[#d0f0ea] ml-[10%] mr-[10%] flex flex-col items-center justify-center gap-5 text-justify">
        {/* <div className='flex justify-center items-baseline'>
        <img className=' mt-4 h-[5vh] lg:h-[20vh] w-[85vw] lg:w-[55vw]' src={welcome}/>
        </div> */}
        <div className='flex justify-center items-baseline'>
        <svg id="welcometext" width="3275" height="567" viewBox="0 0 3275 567" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_2154_345)">
        <path d="M1826.08 53.2203C1808.92 22.7042 1801.06 81.1808 1799.4 91.9271C1780.89 211.293 1782.43 332.647 1769.35 452.556C1769.26 453.331 1743.75 597.441 1761.17 533.577" stroke="url(#paint0_linear_2154_345)" stroke-width="18" stroke-linecap="round"/>
        </g>
        <g filter="url(#filter1_d_2154_345)">
        <path d="M1640 96.4944C1745.71 89.4467 1859.4 53.9455 1960.24 23.4071C1976.21 18.5694 2020.52 0.967362 2009.28 13.3094C1992.66 31.5635 1973.4 48.7115 1955.91 66.2016" stroke="url(#paint1_linear_2154_345)" stroke-width="18" stroke-linecap="round"/>
        </g>
        <g filter="url(#filter2_d_2154_345)">
        <path d="M1661.64 299.888C1694.37 285.16 1733.37 280.898 1767.9 273.442C1826.13 260.871 1882.28 239.82 1938.6 260.941" stroke="url(#paint2_linear_2154_345)" stroke-width="18" stroke-linecap="round"/>
        </g>
        <g filter="url(#filter3_d_2154_345)">
        <path d="M1881 408.583C1896.37 377.84 1935.14 335.096 1970.68 370.116C1990.57 389.721 2001.11 477.889 1956.49 481.67C1944.9 482.653 1989.42 343.984 2038.48 334.294C2076.69 326.745 2095.94 359.519 2093.05 391.273" stroke="url(#paint3_linear_2154_345)" stroke-width="18" stroke-linecap="round" shape-rendering="crispEdges"/>
        </g>
        <g filter="url(#filter4_d_2154_345)">
        <path d="M2093 463.541C2130.1 461.479 2187.02 411.609 2173.3 372.662C2157.58 328.04 2115.4 398.551 2117.52 420.745C2127.72 527.02 2244.6 451.172 2278.6 405.84C2292.15 387.776 2345.28 272.035 2277.64 306.306C2222.58 334.204 2271.15 387.39 2292.31 420.986C2308.72 447.053 2314.16 474.46 2279.08 485.899C2235.25 500.194 2318.18 365.562 2326.69 351.024" stroke="url(#paint4_linear_2154_345)" stroke-width="18" stroke-linecap="round" shape-rendering="crispEdges"/>
        </g>
        <g filter="url(#filter5_d_2154_345)">
        <path d="M2402.27 140.861C2375.37 198.842 2375.79 270.136 2369.09 332.476C2364.39 376.23 2341.71 504.113 2360.22 464.194C2377.88 426.141 2394.49 359.94 2432.69 336.592C2469.28 314.229 2450.82 444.291 2449.4 457.275C2444.87 498.668 2484.32 499.602 2513.87 481.739C2527.66 473.406 2597.99 362.63 2560.26 362.474C2519 362.304 2528.39 462.503 2543.78 481.943C2584.36 533.212 2646.11 472.222 2662.28 432.217C2665.83 423.442 2682.83 314.275 2642.07 345.981C2634.91 351.55 2631.39 363.968 2640.96 369.776C2660.57 381.688 2689.81 364.516 2706.42 355.231C2755.51 327.792 2721.25 366.004 2711.15 400.533C2689.19 475.573 2720.71 494.526 2785.58 449.038C2806.13 434.626 2945.57 318.339 2919.06 283.333C2912.24 274.338 2891.84 291.808 2888.76 295.886C2869.7 321.121 2889.86 354.445 2900.88 378.036C2923.13 425.69 2944.77 470.832 2877.46 482.9C2838.78 489.835 2811.17 488.009 2818.61 446.618" stroke="url(#paint5_linear_2154_345)" stroke-width="18" stroke-linecap="round" shape-rendering="crispEdges"/>
        </g>
        <g filter="url(#filter6_d_2154_345)">
        <path d="M13 213.417C13.5983 202.048 16.9185 191.185 17.3265 179.759C19.4584 120.047 29.7775 298.877 42.8105 357.188C45.6136 369.729 87.3573 564.594 108.686 518.75C157.25 414.368 174.994 296.987 213.027 188.895C229.966 140.755 234.536 224.893 234.906 227.122C244.617 285.674 253.954 344.481 269.286 401.906C283.213 454.07 320.859 560.832 362.567 458.164C405.03 353.64 410.87 217.511 384.686 108.114C366.44 31.8802 380.84 264.857 380.84 343.244" stroke="url(#paint6_linear_2154_345)" stroke-width="18" stroke-linecap="round"/>
        </g>
        <g filter="url(#filter7_d_2154_345)">
        <path d="M430.37 402.071C442.226 390.216 457.275 378.58 465.231 363.605C473.87 347.343 488.011 258.192 452.969 305.904C423.676 345.789 412.848 407.403 441.67 450.155C517.871 563.187 593.694 381.865 610.204 326.58C627.692 268.02 636.546 218.928 642.901 159.008C645.818 131.51 656.798 53.0568 641.458 76.0639C613.318 118.268 625.238 226.612 623.667 274.65C622.199 319.532 614.662 483.314 698.677 471.312" stroke="url(#paint7_linear_2154_345)" stroke-width="18" stroke-linecap="round" shape-rendering="crispEdges"/>
        </g>
        <g filter="url(#filter8_d_2154_345)">
        <path d="M748.75 336.865C737.25 326.517 716.974 315.139 706.677 333.74C688.709 366.199 668.023 434.382 694.896 467.172C733.017 513.687 793.974 468.41 830.973 449.382" stroke="url(#paint8_linear_2154_345)" stroke-width="18" stroke-linecap="round"/>
        </g>
        <g filter="url(#filter9_d_2154_345)">
        <path d="M879.564 337.385C854.431 360.426 840.254 379.851 833.885 415.52C830.859 432.467 825.934 462.781 843.502 475.384C866.237 491.694 891.226 462.477 893.99 442.206C897.788 414.349 883.353 387.55 862.734 370.081C851.292 360.386 822.347 360.134 840.856 368.638C875.107 384.375 895.023 349.119 917.55 332.576C948.128 310.121 956.497 395.577 956.497 409.991C956.497 433.156 932.4 497.207 946.4 478.75C979.78 434.747 983.907 371.24 1017.08 326.084C1039.36 295.766 1032.33 405.954 1030.07 418.646C1005.43 556.596 1059.07 316.634 1079.59 315.266C1131.12 311.831 1038.46 519.637 1158.93 442.688C1194.99 419.659 1236.22 355.212 1222.4 309.976C1219.18 299.419 1174.89 377.304 1190.67 407.586C1226.89 477.107 1343.76 393.431 1375.07 363.83C1376.38 362.59 1421.91 322.972 1417.14 312.862C1412.48 302.993 1331.73 362.003 1329.63 363.349" stroke="url(#paint9_linear_2154_345)" stroke-width="18" stroke-linecap="round" shape-rendering="crispEdges"/>
        </g>
        <circle cx="3072.5" cy="468.5" r="18.5" fill="url(#paint10_linear_2154_345)"/>
        <circle cx="3164.5" cy="468.5" r="18.5" fill="url(#paint11_linear_2154_345)"/>
        <circle cx="3256.5" cy="468.5" r="18.5" fill="url(#paint12_linear_2154_345)"/>
        <defs>
        <filter id="filter0_d_2154_345" x="1742.09" y="35.4902" width="96.998" height="531.414" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2154_345"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2154_345" result="shape"/>
        </filter>
        <filter id="filter1_d_2154_345" x="1627" y="0" width="397.09" height="113.494" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2154_345"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2154_345" result="shape"/>
        </filter>
        <filter id="filter2_d_2154_345" x="1648.63" y="242.947" width="302.969" height="73.9434" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2154_345"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2154_345" result="shape"/>
        </filter>
        <filter id="filter3_d_2154_345" x="1868" y="324.199" width="238.334" height="174.477" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2154_345"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2154_345" result="shape"/>
        </filter>
        <filter id="filter4_d_2154_345" x="2080" y="291" width="259.689" height="212.945" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2154_345"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2154_345" result="shape"/>
        </filter>
        <filter id="filter5_d_2154_345" x="2340.06" y="131.859" width="595.697" height="386.686" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2154_345"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2154_345" result="shape"/>
        </filter>
        <filter id="filter6_d_2154_345" x="0" y="83.998" width="413.441" height="458.721" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2154_345"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2154_345" result="shape"/>
        </filter>
        <filter id="filter7_d_2154_345" x="411.742" y="62.8945" width="299.936" height="440.658" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2154_345"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2154_345" result="shape"/>
        </filter>
        <filter id="filter8_d_2154_345" x="669.002" y="314.816" width="174.973" height="189.68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2154_345"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2154_345" result="shape"/>
        </filter>
        <filter id="filter9_d_2154_345" x="817.865" y="300" width="612.627" height="199.045" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2154_345"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2154_345" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_2154_345" x1="1790.59" y1="44.4941" x2="1790.59" y2="549.898" gradientUnits="userSpaceOnUse">
        <stop stop-color="#B2D6D0"/>
        <stop offset="1" stop-color="#83B2B3"/>
        </linearGradient>
        <linearGradient id="paint1_linear_2154_345" x1="1825.54" y1="9" x2="1825.54" y2="96.4944" gradientUnits="userSpaceOnUse">
        <stop stop-color="#B2D6D0"/>
        <stop offset="1" stop-color="#83B2B3"/>
        </linearGradient>
        <linearGradient id="paint2_linear_2154_345" x1="1800.12" y1="251.947" x2="1800.12" y2="299.888" gradientUnits="userSpaceOnUse">
        <stop stop-color="#B2D6D0"/>
        <stop offset="1" stop-color="#83B2B3"/>
        </linearGradient>
        <linearGradient id="paint3_linear_2154_345" x1="1987.17" y1="333.197" x2="1987.17" y2="481.675" gradientUnits="userSpaceOnUse">
        <stop stop-color="#B2D6D0"/>
        <stop offset="1" stop-color="#83B2B3"/>
        </linearGradient>
        <linearGradient id="paint4_linear_2154_345" x1="2209.84" y1="300" x2="2209.84" y2="486.96" gradientUnits="userSpaceOnUse">
        <stop stop-color="#B2D6D0"/>
        <stop offset="1" stop-color="#83B2B3"/>
        </linearGradient>
        <linearGradient id="paint5_linear_2154_345" x1="2663.11" y1="163.682" x2="2633.12" y2="506.508" gradientUnits="userSpaceOnUse">
        <stop stop-color="#D7E8E5"/>
        <stop offset="1" stop-color="#83B2B3"/>
        </linearGradient>
        <linearGradient id="paint6_linear_2154_345" x1="206.721" y1="93" x2="206.721" y2="525.719" gradientUnits="userSpaceOnUse">
        <stop stop-color="#B2D6D0"/>
        <stop offset="1" stop-color="#83B2B3"/>
        </linearGradient>
        <linearGradient id="paint7_linear_2154_345" x1="561.715" y1="71.8945" x2="561.715" y2="486.548" gradientUnits="userSpaceOnUse">
        <stop stop-color="#B2D6D0"/>
        <stop offset="1" stop-color="#83B2B3"/>
        </linearGradient>
        <linearGradient id="paint8_linear_2154_345" x1="756.487" y1="323.816" x2="756.487" y2="487.496" gradientUnits="userSpaceOnUse">
        <stop stop-color="#B2D6D0"/>
        <stop offset="1" stop-color="#83B2B3"/>
        </linearGradient>
        <linearGradient id="paint9_linear_2154_345" x1="1124.18" y1="309" x2="1124.18" y2="482.046" gradientUnits="userSpaceOnUse">
        <stop stop-color="#B2D6D0"/>
        <stop offset="1" stop-color="#83B2B3"/>
        </linearGradient>
        <linearGradient id="paint10_linear_2154_345" x1="3072.5" y1="450" x2="3072.5" y2="487" gradientUnits="userSpaceOnUse">
        <stop stop-color="#D7E8E5"/>
        <stop offset="1" stop-color="#83B2B3"/>
        </linearGradient>
        <linearGradient id="paint11_linear_2154_345" x1="3164.5" y1="450" x2="3164.5" y2="487" gradientUnits="userSpaceOnUse">
        <stop stop-color="#D7E8E5"/>
        <stop offset="1" stop-color="#83B2B3"/>
        </linearGradient>
        <linearGradient id="paint12_linear_2154_345" x1="3256.5" y1="450" x2="3256.5" y2="487" gradientUnits="userSpaceOnUse">
        <stop stop-color="#D7E8E5"/>
        <stop offset="1" stop-color="#83B2B3"/>
        </linearGradient>
        </defs>
        </svg>
        </div>
          <h2 class="text-center text-3xl sofia stroke font-semibold lg:text-5xl">
          <Typewriter
          words={['A HEARTY WELCOME TO THE CSE CHAPTER \'28']}
          loop={1}
          typeSpeed={90}
          deleteSpeed={30}
          delaySpeed={5000}
          />
          </h2>
          <p class=" text-lg solway lg:text-3xl">
            This bootcamp is designed to spark your excitement and curiosity about knowing your seniors and about the college life which offers a vibrant, interactive glimpse into what awaits you. This highlights the exciting side of college life, featuring fun events, college fests, inspiring student stories, and opportunities.
            {/* Our team has poured their hearts into making this website to give you a genuine glimpse into college life and help you feel excited about your future here. We hope you enjoy exploring it as much as we enjoyed making it for you!!! */}
          </p>
        </div>
             
        <div className='mb-[8vh] flex justify-center'>
             <Slider/>
        </div>
    </div>
    
  )
}

export default home